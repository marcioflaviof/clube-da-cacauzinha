import { React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Clube da Cacauzinha
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Apresentação</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
                <li>
                    <Link to="/gallery">Galeria</Link>
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
