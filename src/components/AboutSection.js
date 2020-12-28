import React from "react";
import cacau_na_cama from "../img/cacau_na_cama.jpg";
//Styled
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <div className="description">
                <h1>O que é o clube da cacauzinha?</h1>
                <Paragraph>
                    Um local quentinho e confortável para sua doguinha enquanto
                    você viaja
                </Paragraph>
            </div>
            <Img className="image">
                <img src={cacau_na_cama} alt="dog in bed" />
            </Img>
        </About>
    );
};

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space;
    padding: 5rem 5rem;
    color: #ff988c;

    @media (max-width: 1375px) {
        display: block;
        padding: 3rem;
        margin-left: -1.5rem;
        p {
            text-align: left;
            padding: 0rem;
            padding-top: 1rem;
        }

        img {
            padding: 1rem;
            height: 45vh;
            width: 45vh;
        }
    }
`;

const Img = styled.div`
    flex: 1;
    object-fit: cover;
`;

const Paragraph = styled.p`
    padding: 2rem 5rem;
`;

export default AboutSection;
