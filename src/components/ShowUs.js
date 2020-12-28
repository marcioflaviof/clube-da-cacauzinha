import React from "react";
import cachorrinhas from "../img/cachorrinhas.jpg";
import amora_brinquedo from "../img/amora_brinquedo.jpg";
import celia_dogs from "../img/celia_dogs.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShowUs = () => {
    return (
        <>
            <Show>
                <Img>
                    <Img1>
                        <img src={celia_dogs} alt="dog's meeting" />
                    </Img1>
                    <Img2>
                        <img src={cachorrinhas} alt="6 dogs" />
                        <img src={amora_brinquedo} alt="dog with toy" />
                    </Img2>
                </Img>
                <Title>
                    <h1>
                        Diversas doguinhas ja vieram passar um tempo nesse
                        clube.
                    </h1>
                    <Link to="/contact">
                        <Convite>Venha nos conhecer!</Convite>
                    </Link>
                </Title>
            </Show>
        </>
    );
};

const Show = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space;
    padding: 3rem 3rem;

    @media (max-width: 1375px) {
        display: table;
        padding: 0rem;
        margin-left: -1.25rem;
        p {
            text-align: left;
            padding: 0rem;
            padding-top: 1rem;
        }

        h1 {
            text-align: left;
            padding-left: 3rem;
            padding-top: 1rem;
        }

        h2 {
            margin-left: 3rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        img {
            padding-left: 2rem;
        }
    }
`;

const Img = styled.div`
    padding: 0rem 0rem 5rem 0rem;
    @media (max-width: 1375px) {
        display: table-footer-group;
    }
`;

const Img1 = styled.div`
    object-fit: cover;
    padding: 0rem 0rem 2rem 0rem;
    flex: 1;
    img {
        height: 36vh;
        width: 55.5vh;
    }
    @media (max-width: 1375px) {
        padding: 0;
    }
`;

const Img2 = styled.div`
    flex: 1;
    display: inline;
    img {
        padding: 0rem 0.2rem;
        height: 30vh;
        width: 27.75vh;
    }
    @media (max-width: 1375px) {
        padding: 0;
        padding-left: 2rem;
        img {
            width: 25.5vh;
            height: 30vh;
        }
    }
`;

const Convite = styled.h2`
    text-decoration: underline;
    margin-top: 10rem;
    margin-left: 10rem;
`;

const Title = styled.div`
    padding-left: 10rem;
    padding-bottom: 5rem;
    @media (max-width: 1375px) {
        display: table-header-group;
    }
`;
export default ShowUs;
