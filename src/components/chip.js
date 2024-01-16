import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

const Chip = (props) => {
    return (

        //TODO: alterar o link para o link do artigo//
        //TODO: alterar imagens e informações para o artigo//

        <ChipLinkStyle to={`/`} >
            {props.category}
        </ChipLinkStyle>
    )
}

const ChipLinkStyle = styled(Link)`
      text-decoration: none;
      color: black;
      padding: 5px 10px;
      background-color: white;
      border: 1px solid #CACACE;
      border-radius: 5px;
      font-size: 12px;
  font-weight: 500;
`


export default Chip;
