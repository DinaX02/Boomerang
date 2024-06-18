import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '../assets/icons/favoriteIcon.svg'
import { ReactComponent as FavoriteIcon } from '../assets/icons/favoriteIcon.svg';
import { useAddFavoriteMutation, useRemoveFavoriteMutation, useFetchFavoriteQuery } from '../redux/favoriteAPI';
import { useSeeUserQuery } from "../redux/usersAPI";

const Article = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [strokeFavorite, setStrokeFavorite] = useState('black');
  const [fillFavorite, setFillFavorite] = useState('none');
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();
  const { data: favorites } = useFetchFavoriteQuery();
  const { data: userData } = useSeeUserQuery();



  useEffect(() => {
    if (favorites && props.id) {
      const isFav = favorites.some(fav => fav.id === props.id);
      setIsFavorite(isFav);
      setStrokeFavorite(isFav ? 'none' : 'black');
      setFillFavorite(isFav ? '#C80000' : 'none');
    }
  }, [favorites, props.id]);

  const favoriteHandler = async () => {
    if (!isFavorite) {
      try {
        await addFavorite({ productId: props.id }).unwrap();
        console.log(`Artigo ${props.id} adicionado aos favoritos`);
        setIsFavorite(true);
        setStrokeFavorite('none');
        setFillFavorite('#C80000');
        // props.refetchFavorites && props.refetchFavorites();
      } catch (error) {
        console.error('Failed to add favorite:', error);
      }
    } else {
      try {
        await removeFavorite({ productId: props.id }).unwrap();
        console.log(`Artigo ${props.id} removido dos favoritos`);
        setIsFavorite(false);
        setStrokeFavorite('black');
        setFillFavorite('none');
        // props.refetchFavorites && props.refetchFavorites();
      } catch (error) {
        console.error('Failed to remove favorite:', error);
      }
    }
  }
  if (props.more) {
    return (

      <MoreLink to={props.favorite ?`/favorites-page` :`/ver-tudo`} aria-label={"Link para página Ver Todos os teus favoritos"}>
        Ver Tudo
      </MoreLink>
    )
  }

  const height = `${(208 / 120) * parseInt(props.width)}px`;
  const imgHeight = `${(144 / 120) * parseInt(props.width)}px`;

  return (
    //TODO: alterar o link para o link do artigo//
    //TODO: alterar imagens e informações para o artigo//

    <ArticleStyled style={{ zoom: `${props.scale}`, width: `${props.width}`, height: { height } }}>
      <Link to={`/article/${props.id}`}>
        {props.image && <img
          className='imgArticle'
          src={props.image}
          style={{ height: `${imgHeight}` }}
          alt={`${props.title}`}
        />}
      </Link>
      {props.description && <div style={{ display: props.description ? "block" : "none" }} className={'description'}>
        <div className={'priceRow'}>
          <div>{props.price}€ / dia</div>
          {/* <div><FavoriteBorderIcon style={{color: "lightgray", scale: '0.7'}}/></div> */}
          {userData && <FavoriteIcon fill={fillFavorite} stroke={strokeFavorite} alt='favorite icon' onClick={favoriteHandler} style={{ zoom: '1.1' }} />}
        </div>
        <p>{props.brand ? props.brand : "Sem marca"}</p>
        <p>Tamanho {props.size}</p>
      </div>}
    </ArticleStyled>
  )
}

const MoreLink = styled(Link)`
  width: 120px;
  height: 208px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #008052;
  justify-content: center;
`

const ArticleStyled = styled.div`
  
  font-weight: 600;
  width: 120px;
  height: fit-content;
  display: block;
  background-color: white;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  font-size: 12px;
  
  p{
    margin: 0;
    font-weight: 400;
    color: #545454;
  }
  
  .description{
    padding: 5px;
    text-align: left;
  }
  
  .priceRow{
    display: flex;
    justify-content: space-between;
  }

  .imgArticle {
    width: 100%;
    height: 144px;
    object-fit: cover;
    border-radius: 5px;
  }
    
`

export default Article;
