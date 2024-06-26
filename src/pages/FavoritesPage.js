import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
import MenuMobile from "../components/MenuMobile";
// import Paper from '@mui/material/Paper';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import { MenuList } from "@mui/material";
// import artigosJSON from "../data/artigos.json";
import Article from "../components/Article"; // Import the component
import Header from '../components/Header/Header';
import mosaicoIcon from "../assets/icons/mosaico.svg";
// import ordenarIcon from "../assets/icons/ordenar.svg";
import galeriaIcon from "../assets/icons/galeria.svg";
import noFavoriteIcon from "../assets/icons/favoritos.svg";
// import listaIcon from "../assets/icons/lista.svg";
import { CircularProgress } from "@mui/material";
import { useFetchProductSearchQuery } from '../redux/productAPI';
import imageDefaultProduct from "../assets/icons/image_default_product.svg";
import { useFetchFavoriteQuery } from '../redux/favoriteAPI';

const VerTudo = () => {
    // const { search } = useLocation();
    // const queryParams = new URLSearchParams(search);
    // const initialQuery = queryParams.get('query');
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [anchorElView, setAnchorElView] = React.useState(null);
    const [viewOption, setViewOption] = useState('mosaico'); // Estado para armazenar a opção selecionada
    const [sortingCriteria, setSortingCriteria] = useState('mostRecent');
    const [singleColumnGrid, setSingleColumnGrid] = useState(false); // Estado para controlar se a grelha é de uma só coluna
    const { data: productsData, isLoading } = useFetchProductSearchQuery({
        orderBy: sortingCriteria === 'mostRecent' ? 'createdAt' : sortingCriteria === 'oldest' ? 'createdAt' : sortingCriteria === 'lowToHigh' ? 'price_day' : 'price_day',
        orderDirection: sortingCriteria === 'mostRecent' ? 'DESC' : sortingCriteria === 'oldest' ? 'ASC' : sortingCriteria === 'lowToHigh' ? 'ASC' : 'DESC'
    });
    const { data: dataFavorite, isLoading: isLoadingFavorite, refetch } = useFetchFavoriteQuery();
    // console.log(productsData);

    useEffect(() => {
        // dar reset ao scroll quando se entrar aqui :)
        refetch();
        window.scrollTo(0, 0);
    }, [refetch]);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    // const handleClickView = (event) => {
    //     setAnchorElView(anchorElView ? null : event.currentTarget);
    // };

    const handleClose = () => {
        setAnchorEl(null);
        // setAnchorElView(null);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            handleClose();
        } else if (event.key === 'Escape') {
            handleClose();
        }
    };

    const handleSort = (criteria) => {
        setSortingCriteria(criteria);
        handleClose();
    };

    const handleViewOption = () => {
        // setViewOption(option);
        // handleClose();
        if (viewOption === 'mosaico') {
            setSingleColumnGrid(true);
            setViewOption('galeria');
        }
        else {
            setSingleColumnGrid(false);
            setViewOption('mosaico');
        }
    };

    // const sortArtigos = () => {
    //     if (sortingCriteria === 'lowToHigh') {
    //         return artigosJSON.slice(0, 10).sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice);
    //     } else if (sortingCriteria === 'highToLow') {
    //         return artigosJSON.slice(0, 10).sort((a, b) => b.dailyRentalPrice - a.dailyRentalPrice);
    //     } else if (sortingCriteria === 'mostRecent') {
    //         return artigosJSON.slice(0, 10).sort((a, b) => a.id - b.id);
    //     } else if (sortingCriteria === 'oldest') {
    //         return artigosJSON.slice(0, 10).sort((a, b) => b.id - a.id);
    //     } else {
    //         return artigosJSON;
    //     }
    // };

    const getViewIcon = () => {
        switch (viewOption) {
            // case 'lista':
            //     return listaIcon;
            case 'galeria':
                return galeriaIcon;
            case 'mosaico':
                return mosaicoIcon;
            default:
                return mosaicoIcon;
        }
    };

    return (
        <ResultsStyle>
            <Header name="Favoritos" />
            <div className={'resultsContent'}>
                <div className={'sectionTitle'}>
                    {/* <div>
                        <button className='buttonForKeyboard' onClick={handleClick}>
                            <img
                                src={ordenarIcon}
                                alt="ordenar icon"
                                id="article-menu-button"
                                aria-controls={anchorEl ? 'article-menu' : undefined}
                                // aria-haspopup="true"

                                style={{ cursor: 'pointer', height: '18px', display: 'flex', marginRight: '20px' }}
                            ></img></button>

                        <Popper
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                            style={{ width: '180px' }}
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={Boolean(anchorEl)}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem className={sortingCriteria === 'mostRecent' ? 'selected' : ''} onClick={() => handleSort('mostRecent')}>Mais recente</MenuItem>
                                                <hr style={{ margin: "5px 0", color: "#CACACA" }} />
                                                <MenuItem className={sortingCriteria === 'oldest' ? 'selected' : ''} onClick={() => handleSort('oldest')}>Mais antigo</MenuItem>
                                                <hr style={{ margin: "5px 0", color: "#CACACA" }} />
                                                <MenuItem className={sortingCriteria === 'lowToHigh' ? 'selected' : ''} onClick={() => handleSort('lowToHigh')}>Preço: baixo para alto</MenuItem>
                                                <hr style={{ margin: "5px 0", color: "#CACACA" }} />
                                                <MenuItem className={sortingCriteria === 'highToLow' ? 'selected' : ''} onClick={() => handleSort('highToLow')}>Preço: alto para baixo</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div> */}
                    <div>
                        <button className='buttonForKeyboard'>
                            <img
                                src={getViewIcon()}
                                alt="view icon"
                                id="view-menu-button"
                                // aria-controls={anchorElView ? 'view-menu' : undefined}
                                // aria-haspopup="true"
                                onClick={handleViewOption}
                                style={{ cursor: 'pointer', width: '18px', display: 'flex' }}
                            /></button>
                        {/* <Popper
                            open={Boolean(anchorElView)}
                            anchorEl={anchorElView}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                            style={{ width: '120px' }}
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={Boolean(anchorElView)}
                                                id="view-menu"
                                                aria-labelledby="view-button"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem className={viewOption === 'lista' ? 'selected' : ''} onClick={() => handleViewOption('lista')}>Lista</MenuItem>
                                                <MenuItem className={viewOption === 'galeria' ? 'selected' : ''} onClick={() => handleViewOption('galeria')}>Galeria</MenuItem>
                                                <MenuItem className={viewOption === 'mosaico' ? 'selected' : ''} onClick={() => handleViewOption('mosaico')}>Mosaico</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper> */}
                    </div>
                </div>

                {isLoading && <CircularProgress className={'loader'} color="success" />}


                {!isLoading && (
                    <div className={`resultsArticles`} style={{ flexDirection: singleColumnGrid ? 'column' : 'row' }}>
                        {dataFavorite?.length > 0 ? (
                            dataFavorite?.map((artigo) => {
                                return <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.productImage?.length > 0 ? artigo.productImage : imageDefaultProduct} price={artigo.price_day} brand={artigo.brand} size={artigo.Size?.name} scale={1.25} width={singleColumnGrid ? '100%' : '120px'} />;
                            })
                        ) : (
                            <NoProductsMessage>
                                <img src={noFavoriteIcon} alt="No favorites icon" />
                                <p>Ainda não tem nenhum favorito</p>
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
  
  .resultsContent{
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

  .buttonForKeyboard{
    border:none;
    background-color: transparent;

  }

  .sectionTitle {
    display: flex;
    justify-content: right;
    .selected{
      font-weight: 800;
    }
    li:not(.selected){
      opacity: 0.7;
      background-color: none;
    }
  }

  .headerBoomerang {
    position: fixed;
    width: 100vw;
  }
  
  .loader{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
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
    width: 50px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default VerTudo;
