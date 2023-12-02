import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`
export const Loader = styled.div`
    padding: 10px;
    border: 6px solid #5843e4;
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
    margin: auto;
    margin-top: 10%;
    margin-bottom: 10%;
`

export const StyledLink = styled(Link)`
    padding: 15px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    margin: 12%;
    border-radius: 15%;
    background-color: red};
    &:hover {
        box-shadow: 3px 2px #5843e4;
    }
`