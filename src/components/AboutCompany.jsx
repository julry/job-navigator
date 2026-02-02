import styled from "styled-components"
import { media } from "../styles/media";
import { ColoredSpan, NoTransformSpan, Title, TextDesk } from "./shared/Texts";
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 40px;
    margin: 80px 0;

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

export const AboutCompany = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
)