import { Block } from '../shared/block';
import logo from '../../assets/images/logo.svg';
import {Button} from '../shared/button/index';
import {openBot} from '../../utils/openBot';
import styled from 'styled-components';
import { media } from '../../../../../styles/media';

const ButtonDesk = styled(Button)`
    font-size: 16px;
    display: none;

    ${media.desktop`
        display: flex;
    `}
`;


const ButtonMain = styled(Button)`
    z-index: 2;

    & button {
        font-size: 16px;
    }
`;

const BlockStyled = styled(Block)`
    & > div:first-child {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 80px;
        padding-right: 17px;
        padding-top: 100px;
        margin-top: -100px;

        ${media.desktop`
            padding-right: 30px;
            min-height: 102px;
        `}
    }
`;

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    margin: 0 auto;
    z-index: 32;
    width: 100%;
    overflow: hidden;
    padding-bottom: 10px;
`;


const HeaderLogo = styled.img`
  width: 158px;
  height: 73px;
  object-fit: contain;

  @media screen and (max-width: 350px) {
    width: 126px;
    height: 58px;
  }

  ${media.desktop`
    width: 213px;
    height: 99px;
    margin-left: 12px;
  `}
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const HeaderDesktopText = styled.span`
  display: none;

  ${media.desktop`
    display: inline;
  `}
`;

export const Header = ({ onScrollToInfo, onScrollToHow }) => (
    <Wrapper>
         <BlockStyled>
            <HeaderLogo src={logo} alt="Работа по профессии by FutureToday" />
            <HeaderButtons>
                <ButtonDesk isSecondary onClick={onScrollToInfo}>
                    что внутри
                </ButtonDesk>
                <ButtonDesk isSecondary onClick={onScrollToHow}>
                    как работает
                </ButtonDesk>
                <ButtonMain onClick={openBot}>
                    <HeaderDesktopText>Переходи{' '}</HeaderDesktopText>в бот<HeaderDesktopText>а!</HeaderDesktopText>
                </ButtonMain>
            </HeaderButtons>
        </BlockStyled>
    </Wrapper>
)