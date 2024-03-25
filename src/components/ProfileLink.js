import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

const ProfileLink = (props) => {
    return (


        <ProfileLinkStyle to={`/profile-page`} style={{zoom: props.zoom}}>
            <img src={props.image} className={'profileLink'} alt='profile'/>
            {props.name && <div className={'description'}>
                {props.name}
            </div>}
            {props.rating && <div>
                {props.rating} <StarIcon/>
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
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: solid 1px #2e2e2e;
  }
  .description{
    margin-top: 5px;
    text-align: center;
  }
  svg{
    height: 15px;
  }
`


export default ProfileLink;
