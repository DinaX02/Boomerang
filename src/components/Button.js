import React, { useState } from 'react'
import styled from "styled-components";
import colors from './../assets/colors';

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
        <ButtonStyle
            className='btnComponent'
            width={props.width || '144px'}
            type={props.type || 'button'}
            style={{
                backgroundColor: isPressed ? `${colors.verde}` : (props.disable ? "#cacaca" : `${colors.cinzaEscuro}`)
            }}
            disabled={props.disable}
            onClick={(event) => {
                event.preventDefault();
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
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    background-color: ${colors.cinzaEscuro};
    color: white;
    font-weight: bold;
    font-size: 15px;
    width: ${props => props.width || '144px'};
    height: 36px;
    border-radius: 5px;
    // outline: none;
    border: 1px transparent;
    font-family: Montserrat;
`

export default Button
