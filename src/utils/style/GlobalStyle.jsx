import { useContext } from "react";
import { ThemeContext } from "../context"
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
*{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
}
body{
    background-color:${({isDarkMode})=> (isDarkMode? 'black' : 'white')};
    color: ${({isDarkMode})=>(isDarkMode? 'white' : 'black')};
}
`
function GlobalStyle(){
    const {theme} = useContext(ThemeContext)
    return (
        <StyledGlobalStyle isDarkMode={theme==='dark'}/>
    )
}
export default GlobalStyle