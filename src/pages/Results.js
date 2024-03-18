import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuMobile from "../components/MenuMobile";
import SearchIcon from "@mui/icons-material/Search";
import FilterButtons from "../components/FilterButtons";
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from "@mui/material";
import artigosJSON from "../data/artigos.json";
import Article from "../components/Article"; // Import the component
import noResultsIcon from "../assets/icons/noResultsIcon.svg";
import mosaicoIcon from "../assets/icons/mosaico.svg";
import ordenarIcon from "../assets/icons/ordenar.svg";
import galeriaIcon from "../assets/icons/galeria.svg";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Results = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const initialQuery = queryParams.get('query');
    const [searchInput, setSearchInput] = useState(initialQuery || '');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [sortingCriteria, setSortingCriteria] = useState('mostRecent');
    const [viewOption, setViewOption] = useState('mosaico'); // Estado para armazenar a opção selecionada
    const [singleColumnGrid, setSingleColumnGrid] = useState(false); // Estado para controlar se a grelha é de uma só coluna
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [activeFilters, setActiveFilters] = useState({});
    const shouldRenderStack = Object.values(activeFilters).some(value => value !== null);

    useEffect(() => {
        setSearchInput(initialQuery || '');
        filterArticles(initialQuery);
    }, [initialQuery]);

    const filterArticles = (query) => {
        if (query) {
            const filtered = artigosJSON.filter(artigo =>
                artigo.title.toLowerCase().includes(query.toLowerCase()) ||
                artigo.description.toLowerCase().includes(query.toLowerCase()) ||
                artigo.brand.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredArticles(filtered);
        } else {
            setFilteredArticles(artigosJSON);
        }
    };

    const applyFilters = (selectedFilters) => {
        // Filter articles based on the selected filters
        let filteredArticles = artigosJSON.filter((artigo) => {
            // Check if each article matches all selected filters
            return (
                (selectedFilters.size === null || artigo.size === selectedFilters.size) &&
                (selectedFilters.color === null || artigo.color === selectedFilters.color) &&
                (selectedFilters.category === null || artigo.category.toLowerCase() === selectedFilters.category) &&
                (selectedFilters.brand === null || artigo.brand === selectedFilters.brand)
            );
        });
        setFilteredArticles(filteredArticles);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchUrl = `/results?query=${encodeURIComponent(searchInput)}`;
        navigate(searchUrl);
        filterArticles(searchInput);
    };

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (key) => {
        activeFilters[key] = null;
        applyFilters(activeFilters);
        console.log('delete')
    };

    const handleActiveFilters = (activeFilters) => {
        setActiveFilters(activeFilters);
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
        if(viewOption==='mosaico'){
            setSingleColumnGrid(true);
            setViewOption('galeria');
        }
        else{
            setSingleColumnGrid(false);
            setViewOption('mosaico');
        }
    };

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

    const sortArtigos = () => {
        if (sortingCriteria === 'lowToHigh') {
            return filteredArticles.slice(0, 10).sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice);
        } else if (sortingCriteria === 'highToLow') {
            return filteredArticles.slice(0, 10).sort((a, b) => b.dailyRentalPrice - a.dailyRentalPrice);
        } else if (sortingCriteria === 'mostRecent') {
            return filteredArticles.slice(0, 10).sort((a, b) => a.id - b.id);
        } else if (sortingCriteria === 'oldest') {
            return filteredArticles.slice(0, 10).sort((a, b) => b.id - a.id);
        } else {
            return artigosJSON;
        }
    };

    return (
        <ResultsStyle>
            <div className={'resultsHeader'}>
                <div className={'search'}>
                    <form className={'searchInput'} onSubmit={handleSearch}>
                        <SearchIcon />
                        <input
                            placeholder="Procura artigos"
                            maxLength='64'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </form>
                    <FilterButtons applyFilters={applyFilters} handleActiveFilters={handleActiveFilters}/>
                </div>
                <div className={'sectionTitle'}>
                    <div className='resultadosTitle'>Resultados</div>
                    {/* <div>
                        <div
                            id="article-menu-button"
                            aria-controls={anchorEl ? 'article-menu' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            style={{ cursor: 'pointer', height: '25px', display: 'flex', alignItems: 'center', fontWeight: '600' }}
                        >
                            Ordenar
                        </div>
                        <Popper
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
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
                                                <MenuItem className={sortingCriteria === 'oldest' ? 'selected' : ''} onClick={() => handleSort('oldest')}>Mais antigo</MenuItem>
                                                <MenuItem className={sortingCriteria === 'lowToHigh' ? 'selected' : ''} onClick={() => handleSort('lowToHigh')}>Preço: baixo para alto</MenuItem>
                                                <MenuItem className={sortingCriteria === 'highToLow' ? 'selected' : ''} onClick={() => handleSort('highToLow')}>Preço: alto para baixo</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div> */}
                    <div>
                        <img
                            src={ordenarIcon}
                            alt="ordenar icon"
                            id="article-menu-button"
                            aria-controls={anchorEl ? 'article-menu' : undefined}
                            // aria-haspopup="true"
                            onClick={handleClick}
                            style={{ cursor: 'pointer', height: '18px', display: 'flex', marginRight: '20px' }}
                        ></img>

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
                                                <MenuItem className={sortingCriteria === 'oldest' ? 'selected' : ''} onClick={() => handleSort('oldest')}>Mais antigo</MenuItem>
                                                <MenuItem className={sortingCriteria === 'lowToHigh' ? 'selected' : ''} onClick={() => handleSort('lowToHigh')}>Preço: baixo para alto</MenuItem>
                                                <MenuItem className={sortingCriteria === 'highToLow' ? 'selected' : ''} onClick={() => handleSort('highToLow')}>Preço: alto para baixo</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                    <div>
                        <img
                            src={getViewIcon()}
                            alt="view icon"
                            id="view-menu-button"
                            // aria-controls={anchorElView ? 'view-menu' : undefined}
                            // aria-haspopup="true"
                            onClick={handleViewOption}
                            style={{ cursor: 'pointer', width: '18px', display: 'flex' }}
                        />
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
                {shouldRenderStack && (
                    <Stack style={{paddingTop: '10px'}} direction="row" spacing={1}>
                        {Object.keys(activeFilters).map(key => {
                            if (activeFilters[key] !== null) {
                                return (
                                    <Chip
                                        key={key}
                                        label={activeFilters[key]}
                                        onDelete={() => handleDelete(key)}
                                    />
                                );
                            } else {
                                return null;
                            }
                        })}
                    </Stack>
                )}
            </div>
            <div className={'resultsContent'}>

                {sortArtigos().length !== 0 ? (
                    <div className={'resultsArticles'}  style={{ flexDirection: singleColumnGrid ? 'column' : 'row' }}>
                        {sortArtigos().slice(0, 10).map((artigo) => {
                            return <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.images[0]} price={artigo.dailyRentalPrice} brand={artigo.brand} size={artigo.size} scale={1.25}  width={singleColumnGrid ? '100%' : '120px'}/>;
                        })}
                    </div>

                ) : (
                    <div className='zeroResults'>
                        <img src={noResultsIcon} alt="search icon for no results" />
                        <p>Nenhum resultado encontrado</p>
                    </div>
                )}
            </div>
            <MenuMobile />
        </ResultsStyle>
    );
};

const ResultsStyle = styled.div`


  .resultsContent{
    padding: 0 25px 115px 25px;
    text-align: center;
    .resultsArticles {
      /* gap: 20px 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
      justify-items: center; */
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 25px 25px;
      flex-direction: row;
    }
  }

  .description {
    text-align: left;
  }

  .resultsHeader{
    z-index: 10;
    padding: 25px 25px 15px 25px;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #f8f8f8;

    .search{
      width: 100%;
      display: flex;
      gap: 10px;
    }

    .sectionTitle {
      margin-top: 25px;
      display: flex;
      justify-content: right;
      font-size: 14px;
      font-weight: 800;
      .resultadosTitle {
        flex-grow: 10;
        text-align: left;
      }
      .ordenar{
        font-weight: 600;
      }
      .selected{
        font-weight: 800;
      }
      li:not(.selected){
        opacity: 0.7;
      }
    }

    .searchInput{
      max-width: calc(100% - 60px);
      height: 50px;
      border: 1px solid rgb(0,0,0,0.1);
      padding: 8px;
      background-color: white;
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 8px;

      input{
        max-width: calc(100% - 40px);
        font-size: 14px;
        font-weight: 500;
        flex: 1;
        padding: 8px;
        border: none;
        &:focus{
          outline: none;
        }
        &:placeholder-shown{
          text-overflow: ellipsis;
        }
      }
      svg{
        margin: 5px;
        color: #00C17C;
        font-size: 30px;
      }

    }

  }

  .zeroResults{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    P{
      width: max-content;
      margin-top: 1em;
      font-weight: 500;
    }
  }

`;

export default Results;