import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = (props) => {
    const [campoPreenchido, setCampoPreenchido] = useState(false);
    useEffect(() => {
        if (props.value.trim() !== '') {
            setCampoPreenchido(true);
        } else {
            setCampoPreenchido(false);
        }
    }, [props.value]);

    return (
        <InputStyle className='inputAsteriskContainer'>
            <input
                className='inputComponent'
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name='input'
                style={
                    props.erroObrigatorio && !campoPreenchido   //a modal aparece e desaparece caso a variavel fecharModal seja false e true, respetivamente
                        ? { outline: "0.5px solid #c80000" }
                        : { outline: "none" }
                }
            ></input>
            {props.obrigatorio && !campoPreenchido && <span className="colourGreenAsterisk">*</span>}
            <p
                className='textErroObrigatorio'
                style={
                    props.erroObrigatorio && !campoPreenchido   //a modal aparece e desaparece caso a variavel fecharModal seja false e true, respetivamente
                        ? { visibility: "visible" }
                        : { visibility: "hidden" }
                }
            >Campo obrigatório</p>
        </InputStyle>
    );
};

const InputStyle = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

 .colourGreenAsterisk {
  position: absolute;
  right: 40px;
  margin-top: 7px;
 }

.inputComponent {
    width: calc(100% - 48px);
    padding: 12px 20px;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
    border: none;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 5px;
    
}

::placeholder {
        font-weight: 300;
        color: black;
}

.textErroObrigatorio {
    color: #c80000;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: calc(24px - 18px);
    text-align: left;
    padding-left: 24px;
}
`;

export default Input;
