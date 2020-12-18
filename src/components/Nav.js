import { React } from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <a id="logo" href="#">
                    Clube da Cacauzinha
                </a>
            </h1>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Apresentação</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
                <li>
                    <a href="#">Galeria</a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 7rem;
    background: #ff988c;
    font-weight: bold;
    a {
        color: black;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-family: "Lobster", sans-serif;
        font-size: 1.5rem;
        font-weight: lighter;
    }

    li {
        padding-left: 1rem;
    }
`;

export default Nav;
