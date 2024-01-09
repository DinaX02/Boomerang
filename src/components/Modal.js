import React from "react";
import styled from "styled-components";
import "./components.css";
import "./modal.css";

// import Col from 'react-bootstrap/Col';

//Componente reutilizavel - Modal
const Modal = (props) => {
    return (
        <div className="fundoModal"
            style={
                props.fecharModal   //a modal aparece e desaparece caso a variavel fecharModal seja false e true, respetivamente
                    ? { display: "none" }
                    : { display: "block" }
            }>
            <div className="modalContent">
                <p className="textoModal">{props.message}</p>
                <hr className="divisorModal"></hr>
                <button
                    className="btnOK"
                    onClick={() => {
                        props.setFecharModal(!props.fecharModal)
                    }}>OK</button>
            </div>
        </div>
    )
}

const ModalStyle = styled.div`
`

export default Modal