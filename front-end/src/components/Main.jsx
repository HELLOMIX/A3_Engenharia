import React, { useEffect, useState } from "react";
import Login from "./Login";
import CadastroEmpresa from "./CadastroEmpresa";
import CadastroVaga from "./CadastroVaga";
import VagaList from "./VagaList";
import repositoryVagas from "../../api/api.js";

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
            {type === "login" && <Login />}
            {type === "cadastroEmpresa" && <CadastroEmpresa />}
            {type === "cadastroVaga" && <CadastroVaga />}
            {type === "vagas" && (
                <VagaList
                    title="Lista de Vagas"
                    items={vagaData.length}
                    itemsArray={vagaData}
                    idPath="/vaga"
                />
            )}
        </div>
    );
};

export default Main;