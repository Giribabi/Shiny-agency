import { useState } from 'react'
import styled from 'styled-components'
//import { useContext } from 'react'
//import {BgContext} from '../utils/context'

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Balloon = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: orange;
    transform: scale(${({ size }) => size});
`

/*function Home() {
    const [size, setSize] = useState(1)
    const {saveBg, bg}= useContext(BgContext)
    
    function saveNewBg(newBg){
        saveBg(newBg==='black'?'white':'black')
    }
    return (
        <HomeContainer>
            <h1 onClick={() => setSize(size + 0.1)}>Home page🏠</h1>
            <Balloon size={size} onClick={()=>saveNewBg(bg==='black'?'white':'black')}>
                {bg}
            </Balloon>
        </HomeContainer>
    )
}
*/
function Home() {
    const [size, setSize] = useState(1)
    
    return (
        <HomeContainer>
            <h1 onClick={() => setSize(size + 0.1)}>Home page🏠</h1>
            <Balloon size={size}/>
        </HomeContainer>
    )
}
export default Home
