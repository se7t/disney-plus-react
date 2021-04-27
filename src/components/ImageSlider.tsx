/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        height: 100%;
        opacity: 0;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            color: rgb(150, 158, 171);
            font-size: 0.625rem;
        }
    }

    li.slick-active button:before {
        color: #f9f9f9;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`;

const CarouselItem = styled(`div`)`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        padding: 4px;
        position: relative;

        img {
            height: 100%;
            width: 100%;
        }

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
            padding: 0;
            transition-duration: 300ms;
        }
    }
`;

const ImageSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Carousel {...settings}>
            <CarouselItem>
                <a>
                    <img
                        src="/images/slider-onward-poster.webp"
                        alt="Onward poster"
                    />
                </a>
            </CarouselItem>
            <CarouselItem>
                <a>
                    <img
                        src="/images/slider-wandavision-poster.webp"
                        alt="WandaVision poster"
                    />
                </a>
            </CarouselItem>
            <CarouselItem>
                <a>
                    <img
                        src="/images/slider-onward-screenshot.webp"
                        alt="Onward screenshot"
                    />
                </a>
            </CarouselItem>
            <CarouselItem>
                <a>
                    <img
                        src="/images/slider-wandavision-screenshot.webp"
                        alt="WandaVision poster"
                    />
                </a>
            </CarouselItem>
        </Carousel>
    );
};

export default ImageSlider;
