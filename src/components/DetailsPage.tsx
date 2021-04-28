import React from 'react';
import styled from '@emotion/styled';

const Container = styled(`div`)`
    position: relative;
    height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 4.375rem;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled(`div`)`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const DetailsPage: React.FC = () => {
    return (
        <Container>
            <Background>
                <img
                    src="https://i.ibb.co/d6gfYYd/moana-background.webp"
                    alt="Background"
                />
            </Background>
        </Container>
    );
};

export default DetailsPage;
