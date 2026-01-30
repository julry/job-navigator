import styled from "styled-components"
import { media } from "../styles/media";
import { ColoredSpan, Title } from "./shared/Texts";
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 40px;

    ${media.desktop`
        flex-direction: row;
        gap: 63px;
    `}

    & ${ColoredSpan} {
        text-transform: none;
    }

    & ${Title} {
        text-transform: none;
    }
   
`;

const TitleStyled = styled(Title)`
    ${media.desktop`
        max-width: 440px;
    `}
`

const TextWrapper = styled.div`
    flex: 1;
    background-color: ${({$accentColor}) => $accentColor};
    padding: 20px;
    border-radius: 30px;

    ${media.desktop`
        border-radius: 40px;
        padding: 30px 40px;
    `}
`;


const ButtonStyled = styled(Button)`
    margin-top: 40px;

    ${media.desktop`
        background-color:  ${({$accentColor}) => $accentColor};
        border: 1px solid ${({$defaultColor}) => $defaultColor};
        color:  ${({$defaultColor}) => $defaultColor};

        &:hover {
            color: var(--color-white);
            background-color:  ${({$defaultColor}) => $defaultColor};
        }
    `}
`;

export const AboutCompany = ({defaultColor, accentColor, children, companyName}) => (
    <Wrapper>
        <TitleStyled $color={defaultColor}>работа в <ColoredSpan $color={accentColor}>{companyName.replace(' ', ' ')}</ColoredSpan></TitleStyled>
        <TextWrapper $accentColor={accentColor}>
            {children}
            <ButtonStyled $defaultColor={defaultColor} $accentColor={accentColor}>хочу попасть в {companyName}</ButtonStyled>
        </TextWrapper>
    </Wrapper>
)