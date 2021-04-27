import React from 'react';
import styled from '@emotion/styled';
import ImageSlider from './ImageSlider';
import Producers from './Producers';
import Recommendations from './Recommendations';
import NewArrivals from './NewArrivals';
import Originals from './Originals';
import Trending from './Trending';

const Container = styled(`main`)`
    display: block;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    top: 4.375rem;

    &:after {
        background: url('/images/browse-background.webp') center center / cover
            no-repeat fixed;
        content: '';
        inset: 0px;
        opacity: 1;
        position: absolute;
        z-index: -1;
    }
`;

const BrowsePage: React.FC = () => {
    return (
        <Container>
            <ImageSlider />
            <Producers />
            <Recommendations />
            <NewArrivals />
            <Originals />
            <Trending />
        </Container>
    );
};

export default BrowsePage;
