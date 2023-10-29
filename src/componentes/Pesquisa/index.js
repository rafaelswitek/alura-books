import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import livroImg from '../../imagens/livro.png'
import { getLivros } from '../../servico/livros'
import { postFavorito } from '../../servico/favoritos'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    const fetchLivros = async() => {
        const livros = await getLivros()
        setLivros(livros)
    }
    
    useEffect(() => {
        fetchLivros()
    }, [])

    function handleClickResultado(id) {
        postFavorito(id)
        alert(`livro de id:${id} adicionado aos favoritos`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.length ? livros.filter( livro => livro.nome.includes(textoDigitado)) : []
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado onClick={() => handleClickResultado(livro.id)}>
                    <img src={livroImg}/>
                    <p>{livro.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa