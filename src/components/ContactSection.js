import React from "react";
import undraw_woman from "../img/undraw_woman.png";
import instaIcon from "../img/iconmonstr-instagram-11.svg";
import whatsIcon from "../img/iconmonstr-whatsapp-1.svg";
import paw from "../img/paw-solid.svg";

//Styled
import styled from "styled-components";

const ContactSection = () => {
    return (
        <MyDiv>
            <Title>Entre em contato com a gente.</Title>

            <Insta>
                <p>Instagram</p>
                <a
                    href={"https://www.instagram.com/clube.da.cacauzinha/"}
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                    <img src={instaIcon} alt="Instagram" />
                </a>
            </Insta>

            <Whats>
                <p>Whatsapp</p>
                <a
                    href={"https://wa.me/556195884776"}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={whatsIcon} alt="Whatsapp" />
                </a>
            </Whats>

            <DogHero>
                <p>DogHero</p>
                <a
                    href={
                        "https://www.doghero.com.br/heroi/205792-Clube-da-Cacauzinha---Asa-Sul"
                    }
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={paw} alt="DogHero" />
                </a>
            </DogHero>

            <Img src={undraw_woman} alt="woman with a dog" />
        </MyDiv>
    );
};

export default ContactSection;

const MyDiv = styled.div`
    @media (max-width: 768px) {
        display: block;

        img {
            display: none;
        }
    }
`;

const Img = styled.img`
    margin-top: -30.2rem;
    position: relative;
    float: right;
    margin-right: 5rem;
`;

const Title = styled.h1`
    margin-left: 10rem;
    margin-top: 7rem;
    margin-bottom: 5rem;
    @media (max-width: 768px) {
        margin: 2rem 2rem;
    }
`;

const Insta = styled.div`
    position: relative;
    margin-left: 17rem;
    float: left;
    img {
        display: block;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        float: none;
        margin-left: 3rem;

        img {
            display: inline;
            margin: 0;
        }
    }
`;

const Whats = styled.div`
    overflow: hidden;
    position: relative;
    margin-left: 29rem;
    img {
        display: block;
        margin: 0 20px;
    }

    @media (max-width: 768px) {
        float: none;
        margin-top: -9.5rem;
        margin-left: 14rem;

        img {
            display: inline;
            margin: 0;
        }
    }
`;

const DogHero = styled.div`
    position: relative;
    margin-left: 23rem;
    img {
        display: block;
        margin: 0 16px;
    }

    @media (max-width: 768px) {
        float: none;
        margin-left: 8.5rem;

        img {
            margin: 0;
        }
    }
`;
