import React, { useEffect, useState } from "react";
import Login from "./Login";
import CadastroEmpresa from "./CadastroEmpresa";
import CadastroVaga from "./CadastroVaga";
import VagaList from "./VagaList";
import repositoryVagas from "../../api/api.js";
import Home from "./Home";

const Main = ({ type }) => {
    const [vagaData, setVagaData] = useState([]);

    useEffect(() => {
        if (type === "vagas") {
            repositoryVagas.getVagas()
                .then(data => setVagaData(data))
                .catch(error => console.error("Erro ao buscar vagas:", error));
        }
    }, [type]);

    return (
        <div className="main-container">
            <div className="main-container__login">
                {type === "login" && <Login />}
            </div>
            <div className="main-container__cadastro">
                {type === "cadastroEmpresa" && <CadastroEmpresa />}
            </div>
            <div className="main-container__cadastro-vaga">
                {type === "cadastroVaga" && <CadastroVaga />}
            </div>
            {/*<div className="main-container__vaga-list">
                {type === "vagas" && (
                <VagaList
                    title="Lista de Vagas"
                    items={vagaData.length}
                    itemsArray={vagaData}
                    idPath="/vaga"
                />
            )}
            </div>*/}
            <div className="main-container__home">
                {type === "home" && <Home />}
            </div>
        </div>
    );
};

export default Main;