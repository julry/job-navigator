import styled from "styled-components"
import { media } from "../../styles/media";
import { Horizontal } from "../../components/shared/svg/Horizontal";
import { HorizontalDesk } from "../../components/shared/svg/HorizontalDesk";
import { ColoredSpan, SmallText } from "../../components/shared/Texts";

const Line = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    ${media.desktop`
        flex-direction: row;
    `}
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 710px;
    margin-bottom: 40px;

    ${media.desktop`
         gap: 30px;
         margin-bottom: 0;
    `}
`;

const JobsBlock = styled(Wrapper)`
    gap: 10px;
    width: calc(100% - 18px);
    margin-bottom: 0;

    ${media.desktop`
        max-width: 290px;
    `}
`;

const JobWrapper = styled(Line)`
    width: 100%;
    height: 45px;
    border-radius: 14px;
    background-color: var(--color-lemana-dark);
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
`;

const InfoBlock = styled.div`
    border-radius: 18px;
    padding: 20px;
    border: 1px solid var(--color-lemana-dark);
    margin-top: 51px;
    ${media.desktop`
        margin-top: 0;
        max-width: 330px;
    `}
`;

const LineSvg = styled(Horizontal)`
    position: absolute;
    top: 22px;
    right: -10px;
    width: 65px; 
    height: 130px;

    ${media.desktop`
        display: none;
    `}
`;

const LineSvgDesk = styled(HorizontalDesk)`
    display: none;

    ${media.desktop`
        flex-shrink: 0;
        margin-top: 22px;
        margin-left: -1px;
        display: block;
        width: 96px;
        height: 64px;
    `}
`;

const SmallTextStyled = styled(SmallText)`
    font-size: 700;

    & + & {
        margin-top: 5px;
    }
`;

export const HorizontalContent = () => (
    <Wrapper>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">торговый зал</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">склад</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-lemana-dark)" />
            <LineSvgDesk color="var(--color-lemana-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-lemana-accent)">Что общее:</ColoredSpan> хорошее знание ассортимента
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-lemana-accent)">Что доучить:</ColoredSpan> изучить складскую логистику
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">склад</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">офис</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-lemana-dark)" />
            <LineSvgDesk color="var(--color-lemana-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-lemana-accent)">Что общее:</ColoredSpan> глубокое понимание товарных потоков, знание ассортимента
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-lemana-accent)">Что доучить:</ColoredSpan> переговоры, аналитика спроса, работа с документами
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">торговый зал</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">в офис / работа с бизнесом в ПРО</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-lemana-dark)" />
            <LineSvgDesk color="var(--color-lemana-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-lemana-accent)">Что общее:</ColoredSpan> глубокое понимание товарных потоков, знание ассортимента
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-lemana-accent)">Что доучить:</ColoredSpan> переговоры, аналитика спроса, работа с документами
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        
    </Wrapper>
)