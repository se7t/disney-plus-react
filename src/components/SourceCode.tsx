import React from 'react';
import styled from '@emotion/styled';

const SourceIcon = styled(`div`)`
    position: fixed;
    bottom: 2vh;
    right: 2vw;
    z-index: 3;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.8;

    img {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 8px;
        /* Change svg color to #fafafa */
        filter: invert(100%) sepia(0%) saturate(597%) hue-rotate(163deg)
            brightness(106%) contrast(96%);
    }

    &:hover {
        opacity: 1;
        transform: scale(1.2);
        transition: all 200ms ease-in-out 0s;
    }
`;

const SourceCode: React.FC = () => {
    return (
        <SourceIcon>
            <img src="/images/icons/github-icon.svg" alt="Github Icon" />{' '}
            <a href="https://github.com/se7t/disney-plus-react/">Source Code</a>
        </SourceIcon>
    );
};

export default SourceCode;
