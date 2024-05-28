import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import mockupprofile from '../assets/icons/user_unknown.svg';
import Article from '../components/Article';
import { useSeeUserQuery } from '../redux/usersAPI';
import starIcon from '../assets/icons/start.svg';

const ProfileOthersViewPage = () => {
    const { id } = useParams();
    // console.log('Requisição à API:', { id: parseInt(id) });
const { data: user, isLoading } = useSeeUserQuery({ id: parseInt(id) });
// console.log('Resposta da API:', user); 
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (!isLoading && user) {
            setArticles(user.articles);
        }
    }, [isLoading, user]);

    return (
        <ProfileOthersViewStyle>
            <Header name={user ? `Perfil de ${user.name.split(' ')[0]}` : 'Perfil'} share={true} />
            <div className="headerProfile"></div>
            <img
                src={user?.avatar || mockupprofile}
                alt={`Imagem de perfil de ${user?.name}`}
                className="profileLink"
            />
            <div className="infoPerfil">
                <div>
                    <h6 style={{ fontSize: '14px', fontWeight: 700, display: 'inline-block', color: 'black' }}>
                        {user?.name || 'Utilizador da Boomerang'}
                    </h6>
                    <div style={{ display: 'inline-block', position: 'absolute', right: 0, marginRight: '24px' }}>
                        {[...Array(5)].map((_, index) => (
                            <img key={index} src={starIcon} alt="Star Icon" />
                        ))}
                    </div>
                </div>
                <p className="info">{user?.username || '-'}</p>
                <hr className="divisor" />
                <p className="titulo">Biografia</p>
                <p className="info">{user?.bio || '-'}</p>
                <hr className="divisor" />
                <p className="titulo">Membro da Boomerang desde</p>
                <p className="info" style={{ marginBottom: 0 }}>
                    {user ? new Date(user.createdAt).toLocaleDateString() : '-'}
                </p>
            </div>
            <div className="armarioSection">
                <h5 className="armarioTitle">Armário de {user?.name.split(' ')[0]}</h5>
                {articles && articles.map((artigo) => (
    <Article
        key={artigo.id}
        id={artigo.id}
        description={artigo.description}
        image={artigo.images[0]}
        price={artigo.dailyRentalPrice}
        brand={artigo.brand}
        size={artigo.size}
        title={artigo.title}
        width={'160px'}
    />
))}
            </div>
        </ProfileOthersViewStyle>
    );
};

const ProfileOthersViewStyle = styled.div`
    margin-bottom: 24px;
    .headerProfile {
        background-color: #343541;
        height: 12vh;
    }
    .profileLink {
        position: absolute;
        transform: translateY(-50%);
        margin-left: 24px;
        height: 78px;
        width: 78px;
        border-radius: 100%;
        border: 1px #343541 solid;
        /* background-image: url(${mockupprofile});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom center; */
        z-index: 10;
    }
    .infoPerfil {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
        border-radius: 5px;
        background-color: white;
        padding: 24px;
        margin: 48px 24px 24px 24px;
    }
    .divisor {
        color: #cacaca; 
        margin: 0 0 12px 0;
    }
    .info {
        font-size: 13px;
        margin: 0 0 12px 0;
        color: black;
    }
    .titulo{
        font-size: 13px;
        font-weight: 600;
    }
    .armarioTitle {
        font-size: 14px;
        font-weight: 800;
        margin-bottom: 24px;
        color: black;
    }
    .armarioSection {
        padding: 0 24px;
    }
    .articles{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 25px 25px;
        flex-direction: row;
  }
`

export default ProfileOthersViewPage
