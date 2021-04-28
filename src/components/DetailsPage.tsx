import React from 'react';
import styled from '@emotion/styled';

const Container = styled(`div`)`
    display: block;
    height: calc(100vh - 250px);
    overflow-x: hidden;
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    top: 4.375rem;
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
    height: 30vw;
    justify-content: flex-start;
    margin: 0px auto;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    -webkit-box-pack: start;

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
    align-items: center;
    background: rgb(249, 249, 249);
    border-radius: 4px;
    border: none;
    color: #040714;
    cursor: pointer;
    font-size: 1rem;
    height: 56px;
    justify-content: center;
    letter-spacing: 1.8px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    text-align: center;
    text-transform: uppercase;

    img {
        width: 2rem;
    }

    &:hover {
        background: rgb(198, 198, 198);
        transition: all 200ms ease 0s;
    }

    @media (max-width: 768px) {
        font-size: 0.75rem;
        height: 45px;
        margin: 0px 10px 0px 0px;
        padding: 0px 12px;

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

const AddToWatchlist = styled(`div`)`
    display: flex;
    align-items: center;
    background-color: rgba(4, 7, 20, 0.6);
    border-radius: 50%;
    border: 2px solid rgb(249, 249, 249);
    cursor: pointer;
    height: 56px;
    justify-content: center;
    margin-right: 16px;
    width: 56px;
    span {
        background-color: rgb(249, 249, 249);
        display: inline-block;
        &:first-child {
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2) {
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;
        }
    }
    &:hover {
        background: rgba(4, 7, 20, 0.8);
        transition: all 200ms ease 0s;
    }
`;

const WatchTogether = styled(`div`)`
    display: flex;
    align-items: center;
    background-color: rgba(4, 7, 20, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    height: 56px;
    justify-content: center;
    width: 56px;

    div {
        border-radius: 50%;
        height: 36px;
        width: 36px;

        img {
            width: 100%;
        }
    }
    &:hover {
        background: rgba(4, 7, 20, 0.8);
        transition: all 200ms ease 0s;
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
                    <AddToWatchlist>
                        <span />
                        <span />
                    </AddToWatchlist>
                    <WatchTogether>
                        <div>
                            <img
                                src="/images/icons/watch-together-icon.webp"
                                alt="Watch together"
                            />
                        </div>
                    </WatchTogether>
                </Controls>
            </ContentMeta>
        </Container>
    );
};

export default DetailsPage;
