import React from "react";
import Login from "./Login"
import CadastroEmpresa from "./CadastroEmpresa";
import CadastroVaga from "./CadastroVaga";
import VagaList from "./VagaList";


const Main = ({ type }) => {
    return (
        <div className="main-container">
            {type === "login" ? (
                <Login />
            ) : (
            <></>
            )}

            {type === "cadastroEmpresa" ? (
                <CadastroEmpresa />
            ) : (<></>
            )}

            {type === "cadastroVaga" ? (
                <CadastroVaga />
            ) : (<></>
            )}
            
        </div>
    );
};

export default Main;