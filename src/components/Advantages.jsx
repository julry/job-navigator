import styled from "styled-components"
import { ColoredSpan, Title } from "./shared/Texts";
import { media } from "../styles/media";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    ${media.desktop`
         gap: 40px;
    `}
`;

const TitleStyled = styled(Title)`
    text-transform: none;
    font-size: 36px;
    width: 100%;

    @media screen and (max-width: 374px) {
        font-size: 30px;
    }

    @media screen and (max-width: 334px) {
        font-size: 26px;
    }

    ${media.desktop`
        max-width: 815px;
        font-size: 48px;
        text-align: center;
        white-space: pre-line;
    `}
`

const BlocksWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Advantages = ({defaultColor, accentColor, children, companyName}) => {
    return (
        <Wrapper>
            <TitleStyled $color={defaultColor}><ColoredSpan $color={accentColor}>преимущества</ColoredSpan> работы в {companyName.replace(' ', ' ')}</TitleStyled>
            <BlocksWrapper>
                {children}
            </BlocksWrapper>
        </Wrapper>
    )
}