import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";

const ProfileLink = (props) => {
    return (


        <ProfileLinkStyle to={`/profile-page`} style={{zoom: props.zoom}}>
            <img src={props.image} className={'profileLink'}/>
            {props.name && <div className={'description'}>
                {props.name}
            </div>}

        </ProfileLinkStyle>
    )
}

const ProfileLinkStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80px;
  font-size: 12px;
  text-decoration: none;
  color: black;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 2px #2e2e2e;
  }
  .description{
    margin-top: 5px;
    text-align: center;
  }
`


export default ProfileLink;
