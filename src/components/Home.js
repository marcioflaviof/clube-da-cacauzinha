import React from "react";
import undraw_woman from "../img/undraw_woman.png";
import { Link } from "react-router-dom";

//Styled
import styled from "styled-components";

const Home = () => {
    return (
        <div>
            <Mydiv className="description">
                <h1>Sua futura hospedagem aqui.</h1>
                <Link to="/contact">
                    <button>Contato</button>
                </Link>
            </Mydiv>
            <div className="image">
                <Img src={undraw_woman} alt="woman with a dog" />
            </div>
        </div>
    );
};

export default Home;

const Img = styled.img`
    margin-top: 5rem;
    position: relative;
    float: right;
    padding-right: 5rem;
`;

const Mydiv = styled.div`
    float: left;
    h1 {
        margin-top: 3rem;
        padding: 10rem;
    }

    button {
        margin-left: 20rem;
    }
`;
