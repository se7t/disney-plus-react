import React, { useEffect } from 'react';

import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../firebase';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
} from '../features/user/userSlice';

import { AppDispatch } from '../app/store';

const Nav = styled(`nav`)`
    align-items: center;
    background-color: #040714;
    display: flex;
    height: 4.375rem;
    justify-content: space-between;
    left: 0;
    letter-spacing: 16px;
    padding: 0 36px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
`;

const Logo = styled(`a`)`
    display: inline-block;
    margin-top: 4px;
    max-height: 70px;
    min-width: 80px;
    padding: 0;
    width: 80px;
    img {
        display: block;
        width: 100%;
    }
`;

const Menu = styled(`div`)`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    margin-left: 25px;
    margin-right: auto;
    padding: 0px;
    position: relative;

    a {
        align-items: center;
        display: flex;
        padding: 0 12px;

        img {
            height: 1.25rem;
            min-width: 1.25rem;
            width: 1.25rem;
            z-index: auto;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 0.8125rem;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0;
            position: relative;
            text-transform: uppercase;
            white-space: nowrap;
            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                opacity: 1 !important;
                transform: scaleX(1);
                visibility: visible;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const LoginButton = styled(`a`)`
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    letter-spacing: 1.5px;
    padding: 8px 16px;
    text-transform: uppercase;
    transition: all 200ms ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #040714;
    }
`;

const UserImage = styled(`img`)`
    height: 100%;
`;

const NavBar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const setUser = (user: Record<string, string>): void => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName as string,
                email: user.email as string,
                photo: user.photoURL as string,
            })
        );
    };

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser((user as unknown) as Record<string, string>);
                history.push('/home');
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userName]);

    const handleAuth: React.MouseEventHandler = () =>
        auth
            .signInWithPopup(provider)
            .then((result: Record<string, unknown>) => {
                setUser(result.user as Record<string, string>);
            })
            .catch((error: Error) => {
                // eslint-disable-next-line no-alert
                alert(error.message);
            });
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+ Logo" />
            </Logo>

            {!userName ? (
                <LoginButton onClick={handleAuth}>Login</LoginButton>
            ) : (
                <>
                    <Menu>
                        <a href="/home">
                            <img src="/images/home-icon.svg" alt="Home icon" />
                            <span>Home</span>
                        </a>
                        <a href="/search">
                            <img
                                src="/images/search-icon.svg"
                                alt="Search icon"
                            />
                            <span>Search</span>
                        </a>
                        <a href="/watchlist">
                            <img
                                src="/images/watchlist-icon.svg"
                                alt="Watchlist icon"
                            />
                            <span>Watchlist</span>
                        </a>
                        <a href="/original">
                            <img
                                src="/images/originals-icon.svg"
                                alt="Originals icon"
                            />
                            <span>Originals</span>
                        </a>
                        <a href="/movies">
                            <img
                                src="/images/movies-icon.svg"
                                alt="Movies icon"
                            />
                            <span>Movies</span>
                        </a>
                        <a href="/series">
                            <img
                                src="/images/series-icon.svg"
                                alt="Series icon"
                            />
                            <span>Series</span>
                        </a>
                    </Menu>
                    <UserImage src={userPhoto} alt={`${userName} photo`} />
                </>
            )}
        </Nav>
    );
};

export default NavBar;
