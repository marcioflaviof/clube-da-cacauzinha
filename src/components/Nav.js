import { React } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import undraw_woman from "../img/undraw_woman.png";

const Nav = () => {
    return (
        <StyledNav>
            <div>
                <Link id="logo" to="/">
                    <img src={undraw_woman} alt="woman with a dog" />
                </Link>

                <h1>
                    <Link id="logo" to="/">
                        Clube da Cacauzinha
                    </Link>
                </h1>
            </div>
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
    padding: 0rem 7rem;
    background: whitesmoke;
    font-weight: bold;
    a {
        color: #302e2e;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
        font-size: 1.25rem;
    }

    #logo {
        font-family: "Lobster", sans-serif;
        font-size: 1.5rem;
        font-weight: lighter;
    }

    li {
        padding-left: 1rem;
    }
    div {
        flex: 1;
        display: flex;

        h1 {
            padding-left: 1rem;
        }
        img {
            height: 7vh;
            width: 7vh;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export default Nav;
