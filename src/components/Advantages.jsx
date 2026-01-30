import styled from "styled-components"
import { ColoredSpan, Title } from "./shared/Texts";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    & > ${Title} {
        text-transform: none;
        text-align: center;
        max-width: 965px;
    }
`;

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
            <Title $color={defaultColor}><ColoredSpan $color={accentColor}>преимущества</ColoredSpan> работы в {companyName}</Title>
            <BlocksWrapper>
                {children}
            </BlocksWrapper>
        </Wrapper>
    )
}