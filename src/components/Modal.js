import React from "react";
import "./components.css";
import "./modal.css";

import Col from 'react-bootstrap/Col';

//Componente reutilizavel - Modal
const Modal = (props) => {
    return (
        <div className="fundoModal"
            style={
                props.fecharModal   //a modal aparece e desaparece caso a variavel fecharModal seja false e true, respetivamente
                    ? { display: "none" }
                    : { display: "block" }
            }>
            <Col xs={10} lg={5} className="modalContent">
                <p className="textoModal">{props.message}</p>
                <hr className="divisorModal"></hr>
                <button
                    className="btnOK"
                    onClick={() => {
                        props.setFecharModal(!props.fecharModal)
                    }}>OK</button>
            </Col>
        </div>
    )
}

export default Modal