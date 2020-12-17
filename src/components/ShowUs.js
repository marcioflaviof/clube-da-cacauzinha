import React from "react";
import cachorrinhas from "../img/cachorrinhas.jpg";
import amora_brinquedo from "../img/amora_brinquedo.jpg";
import reuniao_dogs from "../img/reuniao_dogs.jpg";
import styled from "styled-components";

const ShowUs = () => {
    return (
        <>
            <Show>
                <div>
                    <Title>
                        <h1>
                            Diversas doguinhas ja vieram passar um tempo nesse
                            clube.
                        </h1>

                        <Convite>Venha nos conhecer!</Convite>
                    </Title>
                </div>
                <Img>
                    <Img1>
                        <img src={reuniao_dogs} alt="dog's meeting" />
                    </Img1>
                    <Img2>
                        <img src={cachorrinhas} alt="6 dogs" />
                        <img src={amora_brinquedo} alt="dog with toy" />
                    </Img2>
                </Img>
            </Show>
        </>
    );
};

const Show = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space;
    padding: 5rem 5rem;
`;

const Img = styled.div`
    padding: 0rem 0rem 10rem 0rem;
`;

const Img1 = styled.div`
    flex: 1;
    img {
        height: 36vh;
        width: 55.5vh;
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
`;

const Convite = styled.h2`
    padding: 10rem 0rem 10rem 0rem;
`;

const Title = styled.div`
    padding: 5rem 0rem 15rem 5rem;
`;
export default ShowUs;
