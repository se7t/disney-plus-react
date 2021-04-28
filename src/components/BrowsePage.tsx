import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import ImageSlider from './ImageSlider';
import Producers from './Producers';
import Recommendations from './Recommendations';
import NewArrivals from './NewArrivals';
import Originals from './Originals';
import Trending from './Trending';
import database from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { AppDispatch } from '../app/store';

const Container = styled(`main`)`
    display: block;
    min-height: 100vh;
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
    const dispatch = useDispatch<AppDispatch>();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        let recommendations: Record<string, string>[] = [];
        let newArrivals: Record<string, string>[] = [];
        let originals: Record<string, string>[] = [];
        let trendings: Record<string, string>[] = [];

        database.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommended':
                        recommendations = [
                            ...recommendations,
                            { id: doc.id, ...doc.data() },
                        ];
                        break;

                    case 'newArrival':
                        newArrivals = [
                            ...newArrivals,
                            { id: doc.id, ...doc.data() },
                        ];
                        break;

                    case 'original':
                        originals = [
                            ...originals,
                            { id: doc.id, ...doc.data() },
                        ];
                        break;

                    case 'trending':
                        trendings = [
                            ...trendings,
                            { id: doc.id, ...doc.data() },
                        ];
                        break;
                    default:
                        return false;
                }

                dispatch(
                    setMovies({
                        recommended: recommendations,
                        newArrival: newArrivals,
                        original: originals,
                        trending: trendings,
                    })
                );

                return true;
            });
        });
    }, [dispatch, userName]);

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
