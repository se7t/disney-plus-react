/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled(`div`)`
    padding: 0 0 26px;
`;

const NewArrivalsList = styled(`div`)`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const NewArrivalsItem = styled(`div`)`
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

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;

const NewArrivals: React.FC = () => {
    return (
        <Container>
            <h4>New to Disney+</h4>
            <NewArrivalsList>
                <NewArrivalsItem>
                    <Link to="#">
                        <img
                            src="/images/new-arrivals/my-music-story.webp"
                            alt="My Music Story"
                        />
                    </Link>
                </NewArrivalsItem>
                <NewArrivalsItem>
                    <Link to="#">
                        <img
                            // eslint-disable-next-line max-len
                            src="/images/new-arrivals/raya-and-the-last-dragon.webp"
                            alt="Raya and the Last Dragon"
                        />
                    </Link>
                </NewArrivalsItem>
                <NewArrivalsItem>
                    <Link to="#">
                        <img
                            // eslint-disable-next-line max-len
                            src="/images/new-arrivals/the-falcon-and-the-winter-soldier.webp"
                            alt="The Falcon and the Winter Soldier"
                        />
                    </Link>
                </NewArrivalsItem>
                <NewArrivalsItem>
                    <Link to="#">
                        <img
                            // eslint-disable-next-line max-len
                            src="/images/new-arrivals/garfield-a-tail-of-two-kitties.webp"
                            alt="Garfield A Tail of Two Kitties"
                        />
                    </Link>
                </NewArrivalsItem>
            </NewArrivalsList>
        </Container>
    );
};

export default NewArrivals;
