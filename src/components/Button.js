import React, { useState } from 'react'
import "./button.css";
import styled from "styled-components";

//Componente reutilizavel - Botao
const Button = (props) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        if (!props.disable) {
            setIsPressed(true);
        }
    }
    const handleMouseUp = () => {
        setIsPressed(false);
    }
    const handleTouchStart = () => {
        if (!props.disable) {
            setIsPressed(true);
        }
    }
    const handleTouchEnd = () => {
        setIsPressed(false);
    }
    return (
        <button
            className='btnComponent'
            style={{
                backgroundColor: isPressed ? "#00C17C" : (props.disable ? "#cacaca" : "#343541")
            }}
            disabled={props.disable}
            onClick={() => {
                if (!props.disable && props.onClick) {
                    props.onClick();
                }
            }
            }
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {props.text}
        </button>
    )
}

const ButtonStyle = styled.button`
`

export default Button
