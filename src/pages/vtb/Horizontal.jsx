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
    background-color: var(--color-vtb-accent);
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
`;

const InfoBlock = styled.div`
    border-radius: 18px;
    padding: 20px;
    border: 1px solid var(--color-vtb-blue);
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
`;

export const HorizontalContent = () => (
    <Wrapper>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Клиентский менеджер</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Контакт-центр</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-vtb-blue)" />
            <LineSvgDesk color="var(--color-vtb-blue)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что общее:</ColoredSpan> знание банковских продуктов (кредиты, вклады, карты, страховка), работа с клиентами и возражениями
                </SmallTextStyled>
                <br />
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что доучить:</ColoredSpan> специфика дистанционной коммуникации, скрипты и стандарты ответов для разных каналов связи
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">контакт-центр</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">работа с бизнесом</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-vtb-blue)" />
            <LineSvgDesk color="var(--color-vtb-blue)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что общее:</ColoredSpan> умение слушать и выявлять потребности клиента, навык работы с возражением, знание банковских продуктов
                </SmallTextStyled>
                <br />
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что доучить:</ColoredSpan> особенности работы с юридическими лицами и ИП, основы документооборота для бизнеса
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Клиентский менеджер</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">менеджер по работе с партнерами</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-vtb-blue)" />
            <LineSvgDesk color="var(--color-vtb-blue)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что общее:</ColoredSpan> умение работать с клиентами и возражениями, знание банковских продуктов
                </SmallTextStyled>
                <br />
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что доучить:</ColoredSpan> специфика работы с партнёрами и юридическими лицами
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">менеджер прямых продаж</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">Клиентский менеджер</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-vtb-blue)" />
            <LineSvgDesk color="var(--color-vtb-blue)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что общее:</ColoredSpan> навыки коммуникации, знание продуктов банка
                </SmallTextStyled>
                <br />
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что доучить:</ColoredSpan>  стандарты обслуживания в отделении, порядок оформления документов, работа <NoTransformSpan>с CRM</NoTransformSpan>
                </SmallTextStyled>
            </InfoBlock>
        </Line>
        <Line>
            <JobsBlock>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">мобильный клиентский менеджер</SmallTextStyled></JobWrapper>
                <JobWrapper><SmallTextStyled $color="var(--color-white)">клиентский менеджер в отделении</SmallTextStyled></JobWrapper>
            </JobsBlock>
            <LineSvg color="var(--color-vtb-blue)" />
            <LineSvgDesk color="var(--color-vtb-blue)" />
            <InfoBlock>
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">Что общее:</ColoredSpan> работа с клиентами, знание банковских продуктов и сервиса
                </SmallTextStyled>
                <br />
                <SmallTextStyled>
                    <ColoredSpan $color="var(--color-vtb-accent)">в чем разница:</ColoredSpan> у мобильного менеджера разъездной характер работы, менеджер в отделении не выезжает к клиентам
                </SmallTextStyled>
            </InfoBlock>
        </Line>
    </Wrapper>
)