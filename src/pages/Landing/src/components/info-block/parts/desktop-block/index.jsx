import { cards } from '../../constants';
import { Card } from '../card';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    row-gap: 40px;
    column-gap: 50px;
`;

export const CardStyled = styled(Card)`
    min-height: 264px;

    & > div{
        min-height: 100%;
    }
`;

export const DesktopBlock = () => (
    <Wrapper>
        {cards.map((card) => (
            <CardStyled key={card.id} {...card} />
        ))}
    </Wrapper>
)