import React from "react";
import "./components.css";
import "./modal.css";

import Col from 'react-bootstrap/Col';

//Importar Bootstrap para usar as classes das colunas -> fazer o npm install que é necessario (npm install react-bootstrap bootstrap)

const Modal = (props) => {
    /*
    background: cantos arredondados (5px), altura ajustada ao conteudo
    texto (que é variável) - pensar numa solucao para reutilizar codigo
    divisor
    OK
    */
    return (
        <div className="fundoModal">
            <Col xs={10} lg={5} className="modalComponent">
                <p className="textoModal">{props.message}</p>
                <hr className="divisorModal"></hr>
                <p className="btnOK">OK</p>   {/*Aplicar um onClick para fechar a modal (de true para false)*/}
            </Col>
        </div>
    )
}

export default Modal