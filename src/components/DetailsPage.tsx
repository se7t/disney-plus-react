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
    top: 4.375rem;
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

const ContentMeta = styled(`div`)`
    max-width: 874px;
`;

const Controls = styled(`div`)`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const PlayButton = styled(`button`)`
    display: flex;
    font-size: 1rem;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: #040714;

    img {
        width: 2rem;
    }

    &:hover {
        background: rgb(198, 198, 198);
        transition: all 200ms ease 0s;
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 0.75rem;
        margin: 0px 10px 0px 0px;

        img {
            width: 25px;
        }
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(4, 7, 20, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);

    &:hover {
        background: rgba(4, 7, 20, 0.8);
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
            <ContentMeta>
                <Controls>
                    <PlayButton>
                        <img
                            src="/images/icons/play-icon-black.webp"
                            alt="Play icon"
                        />
                        <span>Play</span>
                    </PlayButton>
                    <TrailerButton>
                        <img
                            src="/images/icons/play-icon-white.webp"
                            alt="Play icon"
                        />
                        <span>Trailer</span>
                    </TrailerButton>
                </Controls>
            </ContentMeta>
        </Container>
    );
};

export default DetailsPage;
