import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuMobile from "../components/MenuMobile";
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header/Header';
import Article from "../components/Article";
import mosaicoIcon from "../assets/icons/mosaico.svg";
// import ordenarIcon from "../assets/icons/ordenar.svg";
import galeriaIcon from "../assets/icons/galeria.svg";
import imageDefaultProduct from "../assets/icons/image_default_product.svg";
import CheckroomOutlinedIcon from '../assets/icons/profile/closet.svg';
import { useSeeUserQuery } from '../redux/usersAPI';

const ArmarioUtilizador = () => {
    const [viewOption, setViewOption] = useState('mosaico'); // Estado para armazenar a opção selecionada
    const [singleColumnGrid, setSingleColumnGrid] = useState(false); // Estado para controlar se a grelha é de uma só coluna
    const { data: userData, isLoading: isLoadingUser } = useSeeUserQuery();

    // console.log(userData);

    useEffect(() => {
        // dar reset ao scroll quando se entrar aqui :)
        window.scrollTo(0, 0);
    }, []);

    const handleViewOption = () => {
        if (viewOption === 'mosaico') {
            setSingleColumnGrid(true);
            setViewOption('galeria');
        } else {
            setSingleColumnGrid(false);
            setViewOption('mosaico');
        }
    };

    const getViewIcon = () => {
        switch (viewOption) {
            case 'galeria':
                return galeriaIcon;
            case 'mosaico':
                return mosaicoIcon;
            default:
                return mosaicoIcon;
        }
    };

    const userProducts = userData?.products || [];

    return (
        <ResultsStyle>
            <Header name="Armário" />
            <div className={'resultsContent'}>
                <div className={'sectionTitle'}>
                    <div>
                        <button className='buttonForKeyboard'>
                            <img
                                src={getViewIcon()}
                                alt="view icon"
                                onClick={handleViewOption}
                                style={{ cursor: 'pointer', width: '18px', display: 'flex' }}
                            />
                        </button>
                    </div>
                </div>

                {isLoadingUser && <CircularProgress className={'loader'} color="success" />}

                {!isLoadingUser && (
                    <div className={`resultsArticles`} style={{ flexDirection: singleColumnGrid ? 'column' : 'row' }}>
                        {userProducts.length > 0 ? (
                            userProducts.map((product) => (
                                <Article
                                    key={product.id}
                                    id={product.id}
                                    description={product.description}
                                    image={product.productImage[0]?.url || imageDefaultProduct}
                                    price={product.price_day}
                                    brand={product.brand}
                                    size={product.SizeId}
                                    scale={1.25}
                                    width={singleColumnGrid ? '100%' : '120px'}
                                />
                            ))
                        ) : (
                            <NoProductsMessage>
                                <img src={CheckroomOutlinedIcon} alt="No products" />
                                <p>Ainda não publicou nenhuma peça!</p>
                            </NoProductsMessage>
                        )}
                    </div>
                )}
            </div>
            <MenuMobile />
        </ResultsStyle>
    );
};

const ResultsStyle = styled.div`
  .resultsContent {
    padding: 100px 25px 115px 25px;
    text-align: center;
    .resultsArticles {
      padding-top: 25px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 25px 25px;
      flex-direction: row;
    }
  }

  .buttonForKeyboard {
    border: none;
    background-color: transparent;
  }

  .sectionTitle {
    display: flex;
    justify-content: right;
    .selected {
      font-weight: 800;
    }
    li:not(.selected) {
      opacity: 0.7;
      background-color: none;
    }
  }

  .headerBoomerang {
    position: fixed;
    width: 100vw;
  }

  .loader {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 40px;
    height: 40px;
  }
`;

const NoProductsMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  img {
    width: 100px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default ArmarioUtilizador;