import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'

const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`


function Home() {
    return (
        <HomeContainer>
            <Pesquisa />
            <UltimosLancamentos />
        </HomeContainer>
    );
}

export default Home
