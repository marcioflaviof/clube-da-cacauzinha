import React from "react";
import undraw_woman from "../img/undraw_woman.png";
import { Link } from "react-router-dom";

//Styled
import styled from "styled-components";

const Home = () => {
    return (
        <div>
            <div className="image">
                <Img src={undraw_woman} alt="woman with a dog" />
            </div>
            <Mydiv className="description">
                <h1>Sua futura hospedagem aqui.</h1>
                <Link to="/about">
                    <button>Apresentação</button>
                </Link>
            </Mydiv>
        </div>
    );
};

export default Home;

const Img = styled.img`
    margin-top: 5rem;
    float: right;
    padding-right: 5rem;

    @media (max-width: 1375px) {
        float: center;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 0rem;
        margin-top: 1rem;
        height: 300px;
        width: 350px;
    }
`;

const Mydiv = styled.div`
    float: left;
    h1 {
        margin-top: 3rem;
        padding-top: 10rem;
        padding-left: 10rem;
    }

    button {
        margin-top: 5rem;
        margin-left: 15rem;
    }

    @media (max-width: 1375px) {
        float: center;
        h1 {
            padding-top: 1rem;
            padding-left: 2rem;
            padding-bottom: 2rem;
        }

        button {
            margin-top: 1rem;
            margin-left: 5rem;
        }
    }
`;
