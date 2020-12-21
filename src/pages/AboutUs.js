import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ShowUs from "../components/ShowUs";

import styled from "styled-components";

const AboutUs = () => {
    return (
        <Div>
            <AboutSection />
            <ShowUs />
        </Div>
    );
};

export default AboutUs;

const Div = styled.div``;
