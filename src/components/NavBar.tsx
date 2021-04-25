import React from 'react';

import styled from '@emotion/styled';

const Nav = styled(`nav`)`
    align-items: center;
    display: flex;
    height: 70px;
    justify-content: space-between;
    left: 0;
    letter-spacing: 16px;
    padding: 0 36px;
    position: fixed;
    top: 0;
    z-index: 3;
`;

const Logo = styled(`a`)`
    display: inline-block;
    margin: 4px;
    max-height: 70px;
    padding: 0;
    width: 80px;
    img {
        display: block;
        width: 100%;
    }
`;

const NavBar: React.FC = () => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+ Logo" />
            </Logo>
        </Nav>
    );
};

export default NavBar;
