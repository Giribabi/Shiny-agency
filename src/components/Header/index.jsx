import { Link } from 'react-router-dom'
import styled from 'styled-components'
// put this colors array in utils/style/colors.js
const colors = {
    primary: '#5843E4',
    secondary: '#8186A0',
    backgroundLight: '#F9F9FC',
}

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    margin: 1%;
    ${(props) =>
        props.isLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
function Header() {
    //RouteMatch gives you the current page address( or path),i.e. https:local....
    return (
        <nav>
            <StyledHeader>
                <StyledLink to={`http://localhost:3000/`} isLink>
                    Home
                </StyledLink>
                <StyledLink to={`http://localhost:3000/survey/1`} isLink>
                    Survey
                </StyledLink>
                <StyledLink to={'http://localhost:3000/freelancers'} isLink>
                    Freelancers
                </StyledLink>
            </StyledHeader>
        </nav>
    )
}

export default Header
