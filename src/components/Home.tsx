import React from 'react';
import styled from '@emotion/styled';
import ImageSlider from './ImageSlider';
import Producers from './Producers';

const Container = styled(`main`)`
    display: block;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    top: 4.375rem;

    &:after {
        background: url('/images/home-background.webp') center center / cover
            no-repeat fixed;
        content: '';
        inset: 0px;
        opacity: 1;
        position: absolute;
        z-index: -1;
    }
`;

const Home: React.FC = () => {
    return (
        <Container>
            <ImageSlider />
            <Producers />
        </Container>
    );
};

export default Home;
