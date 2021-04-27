import React from 'react';
import styled from '@emotion/styled';

const Container = styled(`main`)`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 4.375rem;
    padding: 0 calc(3.5vw + 5px);

    &:after {
        background: url('/images/home-background.webp') center center / cover
            no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

const Home: React.FC = () => {
    return <Container>Hi</Container>;
};

export default Home;
