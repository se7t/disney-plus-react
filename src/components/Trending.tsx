import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTrending } from '../features/movie/movieSlice';

const Container = styled(`div`)`
    padding: 0 0 26px;

    h4 {
        letter-spacing: 0.5px;
        font-weight: 400;
    }
`;

const TrendingList = styled(`div`)`
    display: grid;
    gap: 25px;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const TrendingItem = styled(`div`)`
    border-radius: 10px;
    border: 3px solid hsla(0, 0%, 98%, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        display: block;
        height: 100%;
        inset: 0px;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        top: 0;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
    }

    &:hover {
        border-color: hsla(0, 0%, 98%, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
    }
`;

const Trending: React.FC = () => {
    const movies = useSelector(selectTrending);

    return (
        <Container>
            {movies && (
                <>
                    <h4>Trending</h4>
                    <TrendingList>
                        {movies.map((movie) => {
                            return (
                                <TrendingItem key={movie.id}>
                                    {movie.id}
                                    <Link to={`/details/${movie.id}`}>
                                        <img
                                            src={movie['card-image']}
                                            alt={movie.title}
                                        />
                                    </Link>
                                </TrendingItem>
                            );
                        })}
                    </TrendingList>
                </>
            )}
        </Container>
    );
};

export default Trending;
