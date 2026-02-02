import { useState } from "react";
import styled from "styled-components";
import { media } from "../../styles/media";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/shared/Button";
import progrPic from '../../assets/images/vtb/vtbProgress.png';
import { ColoredSpan, NoTransformSpan, Subtitle, SubtitleSm, Title } from "../../components/shared/Texts";
import { InfoLine } from "../../components/shared/InfoLine";

const Wrapper = styled.div`
    width: 100%;
    margin-top: 300px;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    ${media.desktop`
        flex-direction: row;
        justify-content: space-between;
    `}
`;

const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;

    ${media.desktop`
        flex-direction: column;
        gap: 40px;
    `}
`;

const InfoContent = styled.div`
    flex: 1;
    width: 100%;
    padding: 14px 15px;
    background-color: ${({ $defaultColor }) => $defaultColor};
    border-radius: 20px;
    height: stretch;

    ${media.desktop`
        border-radius: 40px;
       padding: 25px;
    `}
`;

const Text = styled.p`
    font-size: 12px;
    line-height: 100%;
    color: ${({ $color }) => $color};

    ${media.desktop`
        font-size: 16px;
    `}

    margin-bottom: 10px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 20px;

    ${media.desktop`
        flex-direction: row;
        gap: 120px;

        & > div:first-child {
            width: 425px;
        }
    `}
`;

const ButtonStyled = styled(Button)`
    width: 140px;
    background-color: ${({ $defaultColor, $type }) => $type === 'main' ? $defaultColor : "var(--color-white)"};
    color: ${({ $defaultColor, $type }) => $type === 'main' ? "var(--color-white)" : $defaultColor};
    border: ${({ $defaultColor }) => '1px solid ' + $defaultColor};

    ${media.desktop`
        width: 168px;
        max-width: calc((100% - 2vw * 7)/ 7);
    `}

    &:hover {
        background-color: ${({ $defaultColor }) => $defaultColor};
        color: var(--color-white);
    }
`;

const InfoLineStyled = styled(InfoLine)`
    & p {
        font-size: 12px;
        ${media.desktop`
            font-size: 16px;
        `}
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 0 100px;
    ${media.desktop`
       text-align: center;
    `}
`;

const PART_TO_DESCRIPTION = {
    1: {
        title: 'стажировка «ВТБ Юниор»',
        aim: 'освоить базовые процессы,\nпознакомиться с продуктами банка',
        tasks: ['изучать линейку банковских продуктов (кредиты, вклады, карты)', 'осваивать работу с CRM–системой и документами', 'участвовать в реальных проектах']
    },
    2: {
        title: 'клиентский менеджер',
        aim: 'закрепить навыки обслуживания,\nначать выполнять план продаж',
        tasks: ['консультировать клиента по продуктам банка', 'оформлять заявки на кредиты, вклады, карты', 'решать типовые вопросы и возражения']
    },
    3: {
        title: 'ведущий менеджер',
        aim: 'курировать сложных клиентов,\nобучать новичков,\nповышать качество сервиса',
        tasks: ['вести премиальных клиентов', 'помогать решать сложные кейсы и возражения', 'помогать стажерам и новым сотрудникам']
    },
    4: {
        title: 'главный менеджер',
        aim: 'развивать клиентскую базу\nи следить за качеством обслуживания',
        tasks: ['анализировать показатели', 'внедрять стандарты сервиса']
    },
    5: {
        title: 'руководитель группы',
        aim: 'отвечать за результаты команды,\nвыстраивать процессы обслуживания',
        tasks: ['управлять командой', 'распределять задачи и следить за показателями']
    },
    6: {
        title: 'заместитель начальника',
        aim: 'выстраивать стратегию развития',
        tasks: ['развивать новые продукты', 'продумывать работу команды']
    },
    7: {
        title: 'начальник отдела',
        aim: 'управлять бюджетом и ресурсами',
        tasks: ['развивать новые продукты', 'представлять интересы отдела на уровне руководства']
    },
}
export const ProgressComponent = ({ defaultColor, accentColor }) => {
    const [part, setPart] = useState(1);

    return (
        <Wrapper>
            <TitleWrapper>
                <Title $color={defaultColor}><ColoredSpan $color={accentColor}>твой путь*</ColoredSpan> <NoTransformSpan>в ВТБ</NoTransformSpan></Title>
                <Subtitle  $color={defaultColor}>шкала роста начинающего специалиста</Subtitle>
            </TitleWrapper>
            <ProgressBar amount={7} background={defaultColor} color={accentColor} picture={progrPic} part={part} />
            <InfoWrapper>
                <ButtonsWrapper>
                    <ButtonStyled $defaultColor={defaultColor} $type={part === 1 ? 'main' : 'secondary'} onClick={() => setPart(1)}>Стажировка{'\n'}«ВТБ Юниор» </ButtonStyled>
                    <ButtonStyled $defaultColor={defaultColor} $type={part === 2 ? 'main' : 'secondary'} onClick={() => setPart(2)}>Клиентский менеджер</ButtonStyled>
                    <ButtonStyled $defaultColor={defaultColor} $type={part === 3 ? 'main' : 'secondary'} onClick={() => setPart(3)}>Ведущий
                        менеджер</ButtonStyled>
                    <ButtonStyled $defaultColor={defaultColor} $type={part === 4 ? 'main' : 'secondary'} onClick={() => setPart(4)}>главный
                        менеджер</ButtonStyled>
                    <ButtonStyled $defaultColor={defaultColor} $type={part === 5 ? 'main' : 'secondary'} onClick={() => setPart(5)}>руководитель
                        группы</ButtonStyled>
                    <ButtonStyled $defaultColor={defaultColor} $type={part === 6 ? 'main' : 'secondary'} onClick={() => setPart(6)}>заместитель
                        начальника</ButtonStyled>
                    <ButtonStyled $defaultColor={defaultColor} $type={part === 7 ? 'main' : 'secondary'} onClick={() => setPart(7)}>начальник
                        отдела</ButtonStyled>
                </ButtonsWrapper>
                <InfoContent $defaultColor={defaultColor}>
                    <SubtitleSm $color="var(--color-white)">{PART_TO_DESCRIPTION[part].title}</SubtitleSm>
                    <TextWrapper>
                        <div>
                            <Text $color={accentColor}>цель:</Text>
                            <InfoLineStyled defaultColor={'var(--color-white)'}>
                                {PART_TO_DESCRIPTION[part].aim}
                            </InfoLineStyled>
                        </div>
                        <div>
                            <Text $color={accentColor}>что будешь делать:</Text>
                            {PART_TO_DESCRIPTION[part].tasks.map((task, index) => (
                                <InfoLineStyled key={index} defaultColor={'var(--color-white)'}>
                                    {task}
                                </InfoLineStyled>
                            ))}
                        </div>
                    </TextWrapper>
                </InfoContent>
            </InfoWrapper>

            <Text $color={accentColor}>*это шкала роста — пример того, как можно расти <NoTransformSpan>в ВТБ</NoTransformSpan></Text>
        </Wrapper>
    )
}