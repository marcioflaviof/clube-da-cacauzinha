import React from "react";
import undraw_woman from "../img/undraw_woman.png";
import instaIcon from "../img/iconmonstr-instagram-11.svg";
import whatsIcon from "../img/iconmonstr-whatsapp-1.svg";
import paw from "../img/paw-solid.svg";

//Styled
import styled from "styled-components";

const ContactSection = () => {
    return (
        <>
            <Title>Entre em contato com a gente</Title>

            <Insta>
                <p>Instagram</p>
                <img src={instaIcon} alt="Instagram" />
            </Insta>

            <Whats>
                <p>Whatsapp</p>
                <img src={whatsIcon} alt="Whatsapp" />
            </Whats>

            <DogHero>
                <p>DogHero</p>
                <img src={paw} alt="DogHero" />
            </DogHero>

            <Img src={undraw_woman} alt="woman with a dog" />
        </>
    );
};

export default ContactSection;

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
`;

const Insta = styled.div`
    position: relative;
    margin-left: 17rem;
    float: left;
    img {
        display: block;
        margin: 0 auto;
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
`;

const DogHero = styled.div`
    overflow: hidden;
    position: relative;
    margin-left: 24rem;
    img {
        display: block;
        margin: 0 16px;
    }
`;
