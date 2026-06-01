import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../../../styles/media';
import { ColoredSpan } from '../../../../../components/shared/Texts';
import { Button } from '../shared/button';
import { DesktopBlock } from './parts/desktop-block';
import { MobileBlock } from './parts/mobile-block';
import {openBot} from '../../utils/openBot';

const ButtonStyled = styled(Button)`
    width: 100%;
    max-width: 721px;

    ${media.desktop`
        margin-top: 46px;
    `}

    & button {
        width: 100%;
    }
`;

const Wrapper = styled.div`
  margin-top: 65px;

  ${media.tablet`
    margin-top: 80px;
  `}

  ${media.desktop`
    scroll-margin-block: 110px;
    margin-top: 100px;
  `}
`;

const Content = styled.div`
  min-height: 340px;

  ${media.desktop`
    padding-top: 70px;
    min-height: 640px;
  `}
`;

const Title = styled.h3`
  white-space: pre-line;
  font-size: 30px;

  ${media.desktop`
    font-size: 48px;
  `}

  @media screen and (max-width: 360px) {
    font-size: 28px;
  }
`;

export const InfoBlock = ({wrapperRef}) => {
    const [isDesktop, setIsDesktop] = useState();

    useEffect(() => {
        const resize = () => {
            setIsDesktop(window?.innerWidth > 1100);
        }

        resize();
        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <Title>
               <ColoredSpan>регистрируйся — </ColoredSpan>{'\n'}получи от бота максимум
            </Title>
            <Content>
               {isDesktop ? <DesktopBlock /> : <MobileBlock />}
            </Content>
            <ButtonStyled onClick={openBot}>
                быстрее в бот
            </ButtonStyled>
        </Wrapper>
    )
}