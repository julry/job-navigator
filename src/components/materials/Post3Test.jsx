import { useState } from "react"
import styled from "styled-components";
import { OlStyled, SmallText, Text } from "./Elements";
import { ColoredSpan } from "../shared/Texts";
import { Button } from "../shared/Button";
import { media } from "../../styles/media";
import { post3Questions } from "../../configs/post3Questions";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & + & {
        margin-top: 20px;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const getButtonStylesChosen = (isChosen, isCorrect, accent, defaultColor, textActive) => {
    if (!isChosen) return '';
    if (isCorrect) return `background-color: ${accent}; ${textActive ? 'color:' + textActive + ';' : ''}`;

    return `background-color: var(--color-white); box-shadow: inset 0 0 1px 1px ${defaultColor}; color: ${defaultColor}`;
}

const ButtonStyled = styled(Button)`
    width: ${({ $maxWidth }) => $maxWidth}px;
    padding: 0;
    height: 35px;
    border-radius: 10px;
    color: var(--color-white);

    ${({ $styles }) => $styles};

    @media (hover: hover) {
        &:hover {
            background-color: ${({ $accentColor }) => $accentColor};
        }
    }
`;

const Hint = styled.div`
    border-radius: 10px;
    padding: 6px 9px 4px;

    background: ${({ $bg }) => $bg};
   
    width: 100%;

    text-align: center;

    & p {
        line-height: 105%;
        color: ${({ $textActive }) => $textActive ?? 'var(--color-white)'} !important;
        font-size: 10px;
    }
    
    ${media.desktop`
        display: none;
    `}
`;

const HintDesk = styled(Hint)`
    display: none;

    ${media.desktop`
        margin-left: 10px;
        max-width: 257px !important;
        display: block;
    `}
`;

const SmallTextStyled = styled(SmallText)`
    margin-top: 20px;
    max-width: 540px !important;
`;

export const Post3Test = ({ defaultColor, accentColor, textActive }) => {
    const [answered, setAnswered] = useState([]);

    const handleClick = (id, answer) => {
        if (answered[id] !== undefined) return;

        setAnswered((prev) => ({ ...prev, [id]: answer }));
    }

    return (
        <>
            {
                post3Questions.map(
                    (question) => (
                        <Wrapper key={question.id}>
                            <OlStyled $markerColor={defaultColor}>
                                {question.points.map((point) => (
                                    <li key={point.id}>{point.text}</li>
                                ))}
                            </OlStyled>
                            <Text><ColoredSpan $color={accentColor}>в какой строке ошибка?</ColoredSpan></Text>
                            <ButtonsWrapper>
                                {question.answers.map((answ) => (
                                    <ButtonStyled
                                        key={answ.id}
                                        $defaultColor={defaultColor}
                                        $maxWidth={answ.maxWidth ?? 40}
                                        $accentColor={accentColor}
                                        onClick={() => handleClick(question.id, answ.id)}
                                        $styles={getButtonStylesChosen(question.correct === answ.id ? answered[question.id] !== undefined : answered[question.id] === answ.id, question.correct === answ.id, accentColor, defaultColor, textActive)}
                                    >
                                        {answ.text}
                                    </ButtonStyled>
                                ))}
                                {answered[question.id] !== undefined && (
                                    <HintDesk $textActive={textActive} $bg={accentColor}>
                                        <p>
                                            {question.hint}
                                        </p>
                                    </HintDesk>
                                )}
                            </ButtonsWrapper>
                            {answered[question.id] !== undefined && (
                                <Hint $textActive={textActive} $bg={accentColor}>
                                    <p>
                                        {question.hint}
                                    </p>
                                </Hint>
                            )}
                        </Wrapper>
                    )
                )
            }
            {Object.values(answered).length === post3Questions.length && (
                <SmallTextStyled><ColoredSpan $color={accentColor}>Поздравляем!</ColoredSpan> Теперь ты знаешь, как не допускать ошибок в резюме. Правильное оформление, релевантные навыки и конкретная цель — ключ к тому, чтобы резюме сразу привлекло внимание рекрутера!</SmallTextStyled>
            )}
        </>
    )
}