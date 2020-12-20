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
            <h2>Entre em contato com a gente</h2>
            <Icons>
                <img width="70" height="70" src={instaIcon} alt="Instagram" />
                <img id="whats" src={whatsIcon} alt="Whatsapp" />
                <img src={paw} alt="DogHero" />
            </Icons>

            <img src={undraw_woman} alt="woman with a dog" />
        </>
    );
};

export default ContactSection;

const Icons = styled.div`
    img {
        width: 6.9vh;
        height: 6.9vh;
        .whats {
            fill: green;
        }
    }
`;
