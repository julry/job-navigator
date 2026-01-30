import { media } from "../styles/media";
import styled from 'styled-components';
import { ColoredSpan, Title } from './shared/Texts';
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    padding: 80px 0;
    width: 100%;
`;

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 40px;

    ${media.desktop`
        margin-top: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    `}
`;

const Link = styled(Button)`
    height: 80px;
    font-size: 16px;
    padding: 10px 5px;
    text-transform: lowercase;

     ${media.desktop`
        width: calc((100% - 27px * 3) / 4);
    `}
`;

export const Vacancies = ({textColor, vacancies = [],  accentColor = 'var(--color-orange)'}) => {
    return (
        <Wrapper>
            <Title $color={textColor}><ColoredSpan $color={accentColor}>вакансии</ColoredSpan> для начинающих специалистов</Title>
            <LinksWrapper>
                {vacancies.map(({name, link}) => (
                    <Link key={name}>
                        {name}
                    </Link>
                ))}
            </LinksWrapper>
        </Wrapper>
    )
}