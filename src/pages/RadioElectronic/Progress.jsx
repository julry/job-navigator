import { useState } from "react";
import styled from "styled-components";
import { media } from "../../styles/media";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/shared/Button";
import progrPic from '../../assets/images/beeline/beelineProgress.png';
import { ColoredSpan, NoTransformSpan, Subtitle, SubtitleSm, Title } from "../../components/shared/Texts";
import { InfoLine } from "../../components/shared/InfoLine";

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 80px;
    ${media.desktop`
        margin-top: 40px;
    `}
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    height: stretch;
    align-items: flex-start;

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
    background-color: ${({ $accentColor }) => $accentColor};
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
    height: 60px;
    background-color: ${({ $accentColor, $type }) => $type === 'main' ? $accentColor : "var(--color-white)"};
    color: ${({ $defaultColor }) => $defaultColor};
    border: 1px solid ${({ $defaultColor, $accentColor, $type }) =>  $type === 'main' ? $accentColor :  $defaultColor};
    font-size: 11px;

    ${media.desktop`
        font-size: 12px;
        width: 100%;
        height: 45px;
        max-width: calc((100% - 2vw * 3)/ 3);
    `}

    &:hover {
        color: ${({ $defaultColor }) => $defaultColor};
        background-color:${({ $accentColor }) => $accentColor};
        border: 1px solid ${({ $accentColor }) =>  $accentColor};
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
        title: 'адаптация и первые шаги',
        aim: 'влиться в команду и понять, как работает сеть изнутри',
        tasks: ['знакомиться с командой и процессами', 'учиться у наставника', 'участвовать в реальных проектах']
    },
    2: {
        title: 'первые самостоятельные задачи',
        aim: 'взять зону ответственности',
        tasks: ['вести небольшие проекты под контролем наставника', 'применять полученные знания', 'участвовать в проверках объектов или проектировании сети']
    },
    3: {
        title: 'рост и расширение ответственности',
        aim: 'закрепиться и выбрать направление развития',
        tasks: ['брать более сложные и  ответственные задачи', 'можешь перейти на новую позицию (например, младшего инженера)', 'получаешь рекомендации и дальнейший план развития в профессии']
    },
}

export const ProgressComponent = ({ defaultColor, accentColor }) => {
    const [part, setPart] = useState(1);

    return (
        <Wrapper>
            <TitleWrapper>
                <Title $color={defaultColor}><ColoredSpan $color={accentColor}>твой путь*</ColoredSpan> <NoTransformSpan>в Билайне</NoTransformSpan></Title>
                <Subtitle  $color={defaultColor}>шкала роста начинающего специалиста</Subtitle>
            </TitleWrapper>
            <ProgressBar amount={3} background={defaultColor} color={accentColor} picture={progrPic} part={part} />
            <InfoWrapper>
                <ButtonsWrapper>
                    <ButtonStyled $accentColor={accentColor} $defaultColor={defaultColor} $type={part === 1 ? 'main' : 'secondary'} onClick={() => setPart(1)}>
                        0-3 месяца: адаптация и первые шаги
                    </ButtonStyled>
                    <ButtonStyled $accentColor={accentColor} $defaultColor={defaultColor} $type={part === 2 ? 'main' : 'secondary'} onClick={() => setPart(2)}>
                        4-6 месяцев: первые самостоятельные задачи
                    </ButtonStyled>
                    <ButtonStyled $accentColor={accentColor} $defaultColor={defaultColor} $type={part === 3 ? 'main' : 'secondary'} onClick={() => setPart(3)}>
                        7-12 месяцев: рост и расширение ответственности
                    </ButtonStyled>
                </ButtonsWrapper>
                <InfoContent $accentColor={accentColor}>
                    <SubtitleSm $color={defaultColor}>{PART_TO_DESCRIPTION[part].title}</SubtitleSm>
                    <TextWrapper>
                        <div>
                            <Text $color={defaultColor}>цель:</Text>
                            <InfoLineStyled defaultColor={defaultColor}>
                                {PART_TO_DESCRIPTION[part].aim}
                            </InfoLineStyled>
                        </div>
                        <div>
                            <Text $color={defaultColor}>что будешь делать:</Text>
                            {PART_TO_DESCRIPTION[part].tasks.map((task, index) => (
                                <InfoLineStyled key={index} defaultColor={defaultColor}>
                                    {task}
                                </InfoLineStyled>
                            ))}
                        </div>
                    </TextWrapper>
                </InfoContent>
            </InfoWrapper>

            <Text $color={defaultColor}>*это шкала роста — пример того, как можно расти <NoTransformSpan>в Билайн</NoTransformSpan></Text>
        </Wrapper>
    )
}