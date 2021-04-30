import React, { useEffect } from 'react';

import styled from '@emotion/styled/macro';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import {
    selectUserName,
    selectUserPhoto,
    setSignOutState,
    setUserLoginDetails,
} from '../features/user/userSlice';

import { AppDispatch } from '../app/store';

const Nav = styled(`nav`)`
    align-items: center;
    background-color: hsla(228.75, 66.66%, 4.7%, 1);
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
            margin-right: 8px;
            min-width: 1.25rem;
            width: 1.25rem;
            z-index: auto;
        }

        span {
            color: hsla(0, 0%, 98%, 1);
            font-size: 0.875rem;
            letter-spacing: 1.25px;
            line-height: 1.08;
            padding: 2px 0;
            position: relative;
            text-transform: uppercase;
            white-space: nowrap;
            &:before {
                background-color: hsla(0, 0%, 98%, 1);
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
    background-color: hsla(0, 0%, 0%, 0.6);
    border-radius: 4px;
    border: 1px solid hsla(0, 0%, 98%, 1);
    letter-spacing: 1.5px;
    padding: 8px 16px;
    text-transform: uppercase;
    transition: all 200ms ease 0s;

    &:hover {
        background-color: hsla(0, 0%, 98%, 1);
        color: hsla(228.75, 66%, 4.7%, 1);
    }
`;

const UserImage = styled(`img`)`
    height: 100%;
`;

const DropDown = styled(`div`)`
    background: #040714;
    border-radius: 4px;
    border: 1px solid hsla(0, 0%, 59.21%, 0.34);
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 18px 0px;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 1.25px;
    opacity: 0;
    padding: 10px;
    position: absolute;
    right: 0px;
    top: 48px;
    width: 110px;
`;

const UserControl = styled(`div`)`
    align-items: center;
    cursor: pointer;
    height: 3rem;
    justify-content: center;
    position: relative;
    width: 3rem;

    ${UserImage} {
        border-radius: 50%;
        height: 100%;
        width: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

const SignOutButton = styled(`a`)``;

const NavBar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const setUser = (): void => {
        dispatch(
            setUserLoginDetails({
                name: 'Demo User',
                email: 'demo@example.com',
                photo: '/images/demo_avatar.svg',
            })
        );
    };

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser();
                history.push('/browse');
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userName]);

    const handleAuth: React.MouseEventHandler = () => {
        if (!userName) {
            auth.signInAnonymously()
                .then(() => {
                    setUser();
                })
                .catch((error: Error) => {
                    // eslint-disable-next-line no-alert
                    alert(error.message);
                });
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    history.push('/');
                })
                // eslint-disable-next-line no-alert
                .catch((error: Error) => alert(error.message));
        }
    };

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
                            <img src="/images/icons/home.svg" alt="Home icon" />
                            <span>Home</span>
                        </a>
                        <a href="/search">
                            <img
                                src="/images/icons/search.svg"
                                alt="Search icon"
                            />
                            <span>Search</span>
                        </a>
                        <a href="/watchlist">
                            <img
                                src="/images/icons/watchlist.svg"
                                alt="Watchlist icon"
                            />
                            <span>Watchlist</span>
                        </a>
                        <a href="/original">
                            <img
                                src="/images/icons/originals.svg"
                                alt="Originals icon"
                            />
                            <span>Originals</span>
                        </a>
                        <a href="/movies">
                            <img
                                src="/images/icons/movies.svg"
                                alt="Movies icon"
                            />
                            <span>Movies</span>
                        </a>
                        <a href="/series">
                            <img
                                src="/images/icons/series.svg"
                                alt="Series icon"
                            />
                            <span>Series</span>
                        </a>
                    </Menu>
                    <UserControl>
                        <UserImage src={userPhoto} alt={`${userName} photo`} />
                        <DropDown>
                            <SignOutButton onClick={handleAuth}>
                                Sign out
                            </SignOutButton>
                        </DropDown>
                    </UserControl>
                </>
            )}
        </Nav>
    );
};

export default NavBar;
