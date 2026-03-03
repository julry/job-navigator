import styled from "styled-components";
import { CompasButton } from "./CompasButton";
import { useNavigate } from "react-router-dom";
import { media } from "../../styles/media";
import { Button } from "./Button";
import { ColoredSpan, NoTransformSpan, TextDesk } from "./Texts";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
    position: absolute;
    top: -88px;
    left: 0;
    z-index: 501;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 15px;
    padding-left: 74px;

    ${media.tablet`
        max-width: 550px;
    `}

    ${media.desktop`
        top: -92px;
        padding: 25px 60px;
        padding-left: 150px;
        max-width: 1440px;
    `}
`;


const WrapperSticky = styled(Wrapper)`
    top: 0;
    background-color: ${({$bg = 'var(--color-dark-text)'}) => $bg};
    border-radius: 0 0 35px 35px;
    border: 3px solid ${({$isMenuOpen}) => $isMenuOpen ? 'var(--color-dark-text)' : 'var(--color-white)'};
    border-top: none;
    transition: border-color 0.3s;

    ${media.desktop`
        top: 0;
        border-radius: 0 0 40px 40px;
    `}
`;

const CompasButtonStyled = styled(CompasButton)`
    display: block;
    top: -5px;
    left: -5px;
    right: auto;

    width: 80px;
    height: 80px;

    ${media.desktop`
        top: -10px;
        left: 5px;
        width: 140px;
        height: 140px;
    `}
    z-index: 20;
`;

const HeaderTitle = styled.h3`
    position: relative;
    font-size: 16px;
    line-height: 85%;
    white-space: preLine;
    width: min-content;
    color: var(--color-white-text);
    cursor: pointer;
    z-index: 20;

    ${media.desktop`
        font-size: 26px;
    `}
`;

const ButtonStyled = styled(Button)`
    width: 110px;
    background-color: ${({$buttonColor = 'var(--color-orange)'}) => $buttonColor};
    height: 40px;
    ${({$buttonStyle}) => $buttonStyle};

    ${media.desktop`
        width: 210px;
        height: 45px;

        &:hover {
            background: transparent;
            border: 1px solid var(--color-orange);
            ${({$hoverStyles}) => $hoverStyles};
        }
    `}
`;

const SecondButtonStyledDesktop = styled(Button)`
    background: transparent;
    display: none;
    border: 1px solid transparent;

    &:hover {
        background: var(--color-orange);
        ${({$hoverStyles}) => $hoverStyles};
    }

    ${media.desktop`
        display: flex;
        width: max-content;
    `}
`;

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 1200px) and (max-width: 1280px){
        gap: 8px;
    }
    @media screen and (min-width: 1200px) and (max-width: 1220px){
        gap: 2px;
    }
`;

const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 40px;
    background-color: transparent;
    outline: none;
    border: none;

    ${media.desktop`
        display: none;
    `}
`;

export const Header = ({
    hasBg, isMenuOpen, onClickMenu, onClickVacancy, onClickOpps,
    onClickAdvices, onClickBot, isHiddenLinks, brandProps = {}, ...props
}) => {
    const navigate = useNavigate();
    const {wrapperBg, companyButton, buttonStyles = {}, compasProps = {}} = brandProps;

    const Component = hasBg ? WrapperSticky : Wrapper;
    const hoverStylesHeader = hasBg ? buttonStyles.hoverStylesColored ?? buttonStyles.hoverStyles : buttonStyles.hoverStyles;

    return (
        <Component {...props} $isMenuOpen={isMenuOpen} $bg={wrapperBg}>
            <CompasButtonStyled {...compasProps} onClick={() => navigate('/')} />
            <HeaderTitle onClick={() => navigate('/')}><ColoredSpan $color={buttonStyles.buttonColor}>навигатор</ColoredSpan>{'\n'}профессий</HeaderTitle>
            <ButtonsWrapper>
                {!isHiddenLinks && (
                    <>
                        {companyButton && (
                            <SecondButtonStyledDesktop  $hoverStyles={hoverStylesHeader?.second} onClick={companyButton.onClick}>
                                <NoTransformSpan>{companyButton.text}</NoTransformSpan>
                            </SecondButtonStyledDesktop>
                        )}
                        <SecondButtonStyledDesktop $hoverStyles={hoverStylesHeader?.second} onClick={onClickOpps}>
                            кем работать
                        </SecondButtonStyledDesktop>
                        <SecondButtonStyledDesktop $hoverStyles={hoverStylesHeader?.second} onClick={() => onClickVacancy()}>
                            вакансии
                        </SecondButtonStyledDesktop>
                        <SecondButtonStyledDesktop $hoverStyles={hoverStylesHeader?.second} onClick={onClickAdvices}>
                            советы про работу
                        </SecondButtonStyledDesktop>
                    </>
                )}
                {!isMenuOpen && (
                    <ButtonStyled 
                        $buttonStyle={buttonStyles.buttonStyle} $hoverStyles={hoverStylesHeader?.main} 
                        onClick={onClickBot}
                    >
                        <TextDesk>переходи{' '}</TextDesk> в бот<TextDesk>а!</TextDesk>
                    </ButtonStyled>
                )}
                {!isHiddenLinks && (
                    <MenuButton onClick={onClickMenu}>
                        {isMenuOpen ? (
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.7051 1.25L13.9772 13.9779L1.24923 26.7058" stroke={buttonStyles.buttonColor ??  "#FF7F00"} strokeWidth="2.5" strokeLinecap="round"/>
                                <path d="M26.7051 26.7061L13.9772 13.9781L1.24923 1.25021" stroke={buttonStyles.buttonColor ??  "#FF7F00"} strokeWidth="2.5" strokeLinecap="round"/>
                            </svg>
                        ) : (
                            <svg width="38" height="15" viewBox="0 0 38 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.25 13.25H18.75H36.25" stroke={buttonStyles.buttonColor ??  "#FF7F00"} strokeWidth="2.5" strokeLinecap="round"/>
                                <path d="M1.25 7.25H18.75H36.25" stroke={buttonStyles.buttonColor ??  "#FF7F00"} strokeWidth="2.5" strokeLinecap="round"/>
                                <path d="M1.25 1.25H18.75H36.25" stroke={buttonStyles.buttonColor ??  "#FF7F00"} strokeWidth="2.5" strokeLinecap="round"/>
                            </svg>
                        )}
                    </MenuButton>
                )}
            </ButtonsWrapper>
        </Component>
    )
}