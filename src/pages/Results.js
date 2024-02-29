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


const Results = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const initialQuery = queryParams.get('query');
    const [searchInput, setSearchInput] = useState(initialQuery || '');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [sortingCriteria, setSortingCriteria] = useState('mostRecent');

    useEffect(() => {
        setSearchInput(initialQuery || '');
    }, [initialQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchUrl = `/results?query=${encodeURIComponent(searchInput)}`;
        navigate(searchUrl);
    };

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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

    const sortArtigos = () => {
        if (sortingCriteria === 'lowToHigh') {
            return artigosJSON.slice(0, 10).sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice);
        } else if (sortingCriteria === 'highToLow') {
            return artigosJSON.slice(0, 10).sort((a, b) => b.dailyRentalPrice - a.dailyRentalPrice);
        } else if (sortingCriteria === 'mostRecent') {
            return artigosJSON.slice(0, 10).sort((a, b) => a.id - b.id);
        } else if (sortingCriteria === 'oldest') {
            return artigosJSON.slice(0, 10).sort((a, b) => b.id - a.id);
        } else {
            return artigosJSON;
        }
    };

    return (
        <ResultsStyle>
            <div className={'resultsHeader'}>
                <form className={'searchInput'} onSubmit={handleSearch}>
                    <SearchIcon />
                    <input
                        placeholder="Procura artigos"
                        maxLength='64'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </form>
                <FilterButtons />
            </div>
            <div className={'resultsContent'}>
                <div className={'sectionTitle'}>
                    <div>Resultados</div>
                    <div>
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
                    </div>
                </div>

                {sortArtigos().length !== 0 ? (
                    <div className={'resultsArticles'}>
                    {sortArtigos().slice(0, 10).map((artigo) => {
                        return <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.images[0]} price={artigo.dailyRentalPrice} brand={artigo.brand} size={artigo.size} />;
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
    padding: 100px 25px 115px 25px;
    .resultsArticles {
      padding-top: 25px;
      gap: 20px 10px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
      justify-items: center;
    }
  }

  .sectionTitle {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 800;
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
  
  .resultsHeader{
    z-index: 10;
    padding: 25px 25px 0 25px;
    width: 100%;
    display: flex;
    gap: 10px;
    position: fixed;
    background-color: #f8f8f8;
    
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
