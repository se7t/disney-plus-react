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

const ImageTitle = styled(`div`)`
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        width: clamp(200px, 35vw, 600px);
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
            <ImageTitle>
                <img
                    src="https://i.ibb.co/PcyHKVQ/moana-title.webp"
                    alt="Title"
                />
            </ImageTitle>
        </Container>
    );
};

export default DetailsPage;
