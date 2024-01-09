import React from 'react'
import "./button.css";
import styled from "styled-components";

//Componente reutilizavel - Botao
const Button = (props) => {
    return (
        <button
            className='btnComponent'
            style={
                props.disable   //o botao fica cinzento se estiver disable
                    ? { backgroundColor: "#cacaca" }
                    : { backgroundColor: "#343541" }
            }>
            <span></span>
            {props.text}
        </button>
    )
}


export default Button
