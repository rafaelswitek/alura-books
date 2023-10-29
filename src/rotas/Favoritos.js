import styled from 'styled-components'
import { useEffect, useState } from 'react'
import livroImg from '../imagens/livro.png'
import { deleteFavorito, getFavoritos } from '../servico/favoritos'

const FavoritosContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;

    p {
        width: 200px;
        color: #FFF;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

function Favoritos() {
    const [ favoritos, setFavoritos ] = useState([])

    const fetchFavoritos = async() => {
        const livrosFavoritos = await getFavoritos()
        setFavoritos(livrosFavoritos)
    }
    
    useEffect(() => {
        fetchFavoritos()
    }, [])

    function handleClickResultado(id) {
        deleteFavorito(id)
        fetchFavoritos()
        alert(`livro de id:${id} removido dos favoritos`)
    }
    
    return (
        <FavoritosContainer>
            <Titulo>Aqui estão seus livros favoritos:</Titulo>
            <ResultadoContainer>
                { favoritos.length ?
                    favoritos.map( favorito => (
                        <Resultado onClick={() => handleClickResultado(favorito.id)}>
                            <img src={livroImg}/>
                            <p>{favorito.nome}</p>
                        </Resultado> )) : null
                }
            </ResultadoContainer>
        </FavoritosContainer>
    );
}

export default Favoritos
