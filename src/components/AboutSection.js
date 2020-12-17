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
`;

const Img = styled.div`
    flex: 1;
`;

const Paragraph = styled.p`
    padding: 2rem 4rem 2rem 1rem;
`;

export default AboutSection;
