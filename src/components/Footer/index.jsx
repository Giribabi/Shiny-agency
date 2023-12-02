import styled from 'styled-components'
import { useContext } from "react";
import { ThemeContext } from '../../utils/context'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 60px;
`
const NightModeButton = styled.button`
background-color: transparent;
border: 3px solid ${colors.primary};
border-radius: 2em;
color: ${colors.secondary}; 
`
function Footer(){
    const {toggleTheme, theme} = useContext(ThemeContext)
    return(
    <FooterContainer>
        <NightModeButton onClick={()=> toggleTheme()}>
            Switch mode : {theme==='light' ? '☀️':'🌙'}
        </NightModeButton>
    </FooterContainer>
    )
}

export default Footer