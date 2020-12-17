import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        background: #FFFF
    }

    button {
        font-weight: bold;
        align-items: center;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #FF988C;
        background: #FF988C;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: #FF988C;
            color: white;
        }
    }

    h1{
        font-weight: bold;
        font-size: 2.25rem;
        color: #FF988C
    }


    h2{
        font-weight: lighter;
        font-size: 1.5rem;
        color: #FF988C
    }

    p {
        padding: 3rem 0rem;
        color: #FF988C;
        font-size: 1.5rem;
    }
    
`;

export default GlobalStyle;
