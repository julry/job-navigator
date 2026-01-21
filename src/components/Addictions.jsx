//Полезные материалы

import styled from "styled-components";
import { ColoredSpan, Title } from "./shared/Texts";

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 80px;
`;

const MaterialsBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 39px;
`;

export const Addictions = ({textColor, accentColor = 'var(--color-orange)'}) => (
    <Wrapper>
        <Title $color={textColor}><ColoredSpan $color={accentColor}>полезные</ColoredSpan> материалы</Title>
        <MaterialsBlock>

        </MaterialsBlock>
    </Wrapper>
)
