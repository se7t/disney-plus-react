import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import database from '../firebase';

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
    height: 44px;
    justify-content: center;
    margin-right: 16px;
    width: 44px;
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
    height: 44px;
    justify-content: center;
    width: 44px;

    div {
        border-radius: 50%;
        height: 40px;
        width: 40px;

        img {
            width: 100%;
        }
    }
    &:hover {
        background: rgba(4, 7, 20, 0.8);
        transition: all 200ms ease 0s;
    }
`;

const Tags = styled(`div`)`
    color: rgb(249, 249, 249);
    font-size: 0.875rem;
    min-height: 20px;

    @media (max-weight: 768px) {
        font-size: 0.75rem;
    }
`;
const Description = styled(`div`)`
    line-height: 1.4;
    font-size: 1rem;
    letter-spacing: 0.5px;
    padding: 16px 0px;
    color: rgb(249, 249, 249);

    @media (max-weight: 768px) {
        font-size: 0.875rem;
    }
`;

const DetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    type Data = {
        'background-image': string;
        'card-image': string;
        description: string;
        tags: string;
        title: string;
        'title-image': string;
        type: string;
    };

    const [detailsData, setDetailsData] = useState<
        Data | Record<string, string>
    >({});

    useEffect(() => {
        database
            .collection('movies')
            .doc(id)
            .get()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((document: any) => {
                if (document.exists) {
                    setDetailsData(document.data());
                } else {
                    console.log('Data not found.');
                }
            })
            .catch((error: Error) => {
                console.log('Error fetching data:', error);
            });
    }, [id]);

    return (
        <Container>
            <Background>
                <img
                    src={detailsData['background-image']}
                    alt={`${detailsData.title} Background`}
                />
            </Background>
            <ImageTitle>
                <img src={detailsData['title-image']} alt={detailsData.title} />
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
                <Tags>{detailsData.tags}</Tags>
                <Description>{detailsData.description}</Description>
            </ContentMeta>
        </Container>
    );
};

export default DetailsPage;
