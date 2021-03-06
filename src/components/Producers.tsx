/* eslint-disable jsx-a11y/media-has-caption */
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

    video {
        height: 100%;
        opacity: 0;
        position: absolute;
        top: 0px;
        width: 100%;
        z-index: 0;
    }

    &:hover {
        border-color: hsla(0, 0%, 98%, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        video {
            opacity: 1;
            transition: opacity 200ms ease-in 0s;
        }
    }
`;

const Producers: React.FC = () => {
    return (
        <ProducersList>
            <ProducersItem>
                <img src="images/producers/disney.webp" alt="Disney" />
                <video autoPlay loop playsInline>
                    <source src="videos/disney.mp4" type="video/mp4" />
                </video>
            </ProducersItem>
            <ProducersItem>
                <img src="images/producers/marvel.webp" alt="Marvel" />
                <video autoPlay loop playsInline>
                    <source src="videos/marvel.mp4" type="video/mp4" />
                </video>
            </ProducersItem>
            <ProducersItem>
                <img
                    src="images/producers/national-geographic.webp"
                    alt="National Geographic"
                />
                <video autoPlay loop playsInline>
                    <source
                        src="videos/national-geographic.mp4"
                        type="video/mp4"
                    />
                </video>
            </ProducersItem>
            <ProducersItem>
                <img src="images/producers/pixar.webp" alt="Pixar" />
                <video autoPlay loop playsInline>
                    <source src="videos/pixar.mp4" type="video/mp4" />
                </video>
            </ProducersItem>
            <ProducersItem>
                <img src="images/producers/starwars.webp" alt="Star Wars" />
                <video autoPlay loop playsInline>
                    <source src="videos/star-wars.mp4" type="video/mp4" />
                </video>
            </ProducersItem>
        </ProducersList>
    );
};

export default Producers;
