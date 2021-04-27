import React from 'react';
import styled from '@emotion/styled';

const ProducersList = styled(`div`)`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

const ProducersItem = styled(`div`)`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }
`;

const Producers: React.FC = () => {
    return (
        <ProducersList>
            <ProducersItem>
                <img src="images/producers/disney.webp" alt="Disney" />
            </ProducersItem>
            <ProducersItem>
                <img src="images/producers/marvel.webp" alt="Marvel" />
            </ProducersItem>
            <ProducersItem>
                <img
                    src="images/producers/national-geographic.webp"
                    alt="National Geographic"
                />
            </ProducersItem>
            <ProducersItem>
                <img src="images/producers/pixar.webp" alt="Pixar" />
            </ProducersItem>
            <ProducersItem>
                <img src="images/producers/starwars.webp" alt="Star Wars" />
            </ProducersItem>
        </ProducersList>
    );
};

export default Producers;
