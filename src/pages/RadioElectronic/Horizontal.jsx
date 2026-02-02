import styled from "styled-components"
import { media } from "../../styles/media";
import { Horizontal } from "../../components/shared/svg/Horizontal";
import { HorizontalDesk } from "../../components/shared/svg/HorizontalDesk";
import { ColoredSpan, NoTransformSpan, SmallText } from "../../components/shared/Texts";

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
    background-color: var(--color-beeline-dark);
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
`;

const InfoBlock = styled.div`
    border-radius: 18px;
    padding: 20px;
    border: 1px solid var(--color-beeline-dark);
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
        margin-top: 10px;
    }
`;

export const HorizontalContent = () => (
    <Wrapper>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Эксплуатация сети</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Строительство</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-beeline-dark)" />
            <LineSvgDesk color="var(--color-beeline-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что общее:</ColoredSpan> знание архитектуры сетей, навыки диагностики, чтение схем
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что доучить:</ColoredSpan> проектирование сетей, порядок приемки объектов, работа с подрядчиками
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Эксплуатация сети</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">энергетика</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-beeline-dark)" />
            <LineSvgDesk color="var(--color-beeline-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что общее:</ColoredSpan> понимание инфраструктуры, работа с документацией, базовые знания электробезопасности
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что доучить:</ColoredSpan> <NoTransformSpan>нормы энергетики (ПУЭ, ГОСТы)</NoTransformSpan>, электротехнические схемы
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Строительство</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Эксплуатация сети</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-beeline-dark)" />
            <LineSvgDesk color="var(--color-beeline-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что общее:</ColoredSpan> контроль качества, взаимодействие с техподразделениями
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что доучить:</ColoredSpan> удаленная настройка оборудования, мониторинг сети, алгоритмы устранения неполадок
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Строительство</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">энергетика</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-beeline-dark)" />
            <LineSvgDesk color="var(--color-beeline-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что общее:</ColoredSpan>знание требований к электропитанию объектов, работа с документацией
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что доучить:</ColoredSpan>стандарты энергетики, энергоаудит, специализированное <NoTransformSpan>ПО</NoTransformSpan>
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">энергетика</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Эксплуатация сети</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-beeline-dark)" />
            <LineSvgDesk color="var(--color-beeline-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что общее:</ColoredSpan> работа с базами данных, взаимодействие с техслужбами
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что доучить:</ColoredSpan> протоколы связи, инструменты мониторинга сети
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">энергетика</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Строительство</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-beeline-dark)" />
            <LineSvgDesk color="var(--color-beeline-dark)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что общее:</ColoredSpan> работа с электрическими схемами, проверка соответствия нормативам
                </SmallTextStyled>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-beeline-accent)">Что доучить:</ColoredSpan> оформление строительных актов, порядок приемки объектов, работа с подрядчиками
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        
    </Wrapper>
)