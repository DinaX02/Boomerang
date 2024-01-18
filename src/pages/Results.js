import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuMobile from "../components/MenuMobile";
import SearchIcon from "@mui/icons-material/Search";
import FilterButtons from "../components/FilterButtons";

const Results = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const initialQuery = queryParams.get('query');
    const [searchInput, setSearchInput] = useState(initialQuery || '');

    useEffect(() => {
        setSearchInput(initialQuery || '');
    }, [initialQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchUrl = `/results?query=${encodeURIComponent(searchInput)}`;
        navigate(searchUrl);
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
                    <FilterButtons/>
                </div>
                <div className={'resultsContent'}>
                    <div className={'sectionTitle'}>
                        <div>Resultados</div>
                        <div className={'ordenar'}>Ordenar</div>
                    </div>
                </div>
                <MenuMobile/>
            </ResultsStyle>


    );
};

const ResultsStyle = styled.div`
  
  .resultsContent{
    padding: 100px 25px 115px 25px;
  }

  .sectionTitle {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 800;
    .ordenar{
      font-weight: 600;
    }
  }
  
  .resultsHeader{
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
  
  
`;

export default Results;
