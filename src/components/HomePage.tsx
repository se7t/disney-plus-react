import React from 'react';

import styled from '@emotion/styled';

const Container = styled(`section`)`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    text-align: center;
`;

const Content = styled(`div`)`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-bottom: 10vw;
    min-height: 100vh;
    padding: 80px 40px;
    position: relative;
    width: 100%;
`;

const CallToAction = styled(`div`)`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto 2vw;
    max-width: 650px;
    text-align: center;
    transition: opacity 0.2s;
    transition-timing-function: ease-out;
    width: 100%;
`;

const LogosTop = styled(`img`)`
    display: block;
    margin-bottom: 12px;
    width: clamp(1px, 600px, 100%);
`;

const Button = styled(`a`)`
    background-color: hsla(214.06, 100%, 44.9%, 1);
    border-radius: 4px;
    color: hsl(0, 0%, 97.64%);
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 1.25px;
    margin-bottom: 12px;
    padding: 17.5px 1px;
    width: 100%;
    &:hover {
        background-color: hsl(207.43, 96.69%, 47.45%);
    }
`;

const Description = styled(`p`)`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 0.75rem;
    letter-spacing: 0.4px;
    line-height: 1.5;
    margin: 0 0 24px;
`;

const LogosBottom = styled(`img`)`
    display: inline-block;
    margin-bottom: 20px;
    vertical-align: bottom;
    width: clamp(1px, 600px, 100%);
`;

const BackgroundImage = styled(`div`)`
    background-image: url('/images/home-background.webp');
    background-position: top;
    background-size: cover;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
`;

const HomePage: React.FC = () => {
    return (
        <Container>
            <Content>
                <CallToAction>
                    <LogosTop
                        src="/images/home/logos-top.webp"
                        alt="Top logos"
                    />
                    <Button>SIGN UP TODAY</Button>
                    <Description>
                        Get Premier Access to The Falcon and the Winter Soldier
                        for an additional fee with a Disney+ subscription. As of
                        04/20/21, the price of Disney+ will increase by $1.
                    </Description>
                    <LogosBottom
                        src="/images/home/logos-bottom.webp"
                        alt="Bottom logos"
                    />
                </CallToAction>
                <BackgroundImage />
            </Content>
        </Container>
    );
};

export default HomePage;
