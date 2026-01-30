import { useEffect, useState } from "react";
import { media } from "../styles/media";
import { ColoredSpan, Text, Title } from "./shared/Texts";
import styled from "styled-components";
import { Button } from "./shared/Button";
import { motion } from "framer-motion";
import { openBot } from "../utils/openBot";

const Wrapper = styled.div`
    width: 100%;

    ${media.desktop`
        display: flex;
        justify-content: space-between;
        gap: 60px;
    `}
`;

const TextBlock = styled.div`
    max-width: 440px;
    
    & ${Text} {
        margin-top: 20px;
    }
`;

const TestWrapper = styled.div`
    position: relative;
    flex: 1;
`;

const TestContent = styled.div`
    position: relative;
    z-index: 4;

    border: 2px solid var(--color-gray);
    background-color: var(--color-white);
    border-radius: 30px;
    padding: 17px 10px 20px 20px;
    margin-top: 20px;

    ${media.desktop`
        margin-top: 0;
        border-radius: 40px;
        padding: 30px 40px 56px;
    `}
`;

const DesktopButton = styled(Button)`
    margin: 30px auto 0;
    width: auto;
    color: ${({$accentColor}) => $accentColor};

    ${media.desktop`
        position: absolute;
        right: 40px;
        margin: 0;
        bottom: 30px;
    `}
`;

const Subtitles = styled(Title)`
    font-size: 24px;
    margin-bottom: 25px;
`;

const TumblerWrapper = styled(motion.div)`
    position: relative;
    width: 40px;
    height: 20px;
    flex-shrink: 0;

    border: 2px solid var(--color-gray);
    border-radius: 100px;

    cursor: pointer;
`;

const TumblerCircle = styled(motion.div)`
    position: absolute;
    width: 18px;
    height: 18px;
    top: -1px;
    left: -1px;
    background: ${({$defaultColor}) => $defaultColor ?? 'var(--color-gray)'};
    border-radius: 50%;
`;

const AnswerWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    text-transform: lowercase;

    margin-bottom: 10px;

    &:last-child {
        margin-bottom: 30px;
    }

    p {
        font-size: 12px;
    }
`;

const ResultBlock = styled(motion.div)`
    position: absolute;
    left: 100%;
    height: 278px;
    z-index: 5;
    border-radius: 30px;
    width: 499px;
    background-color: ${({$background}) => $background ?? 'var(--color-gray)'};
    padding: 20px 25px;
    bottom: -268px;

    & p {
        color: var(--color-white-text);
        max-width: 244px;
    }

    ${media.desktop`
        left: 0;
        z-index: 2;
        background-color: ${({$background}) => $background ?? 'var(--color-orange)'};
        padding: 35px 30px;
        bottom: 117px;
        border-radius: 40px;

        & p {
            max-width: 328px;
        }
    `}
`;

const Image = styled(motion.img)`
    position: absolute;
    z-index: ${({$zIndex}) => $zIndex};
    bottom: ${({$bottom}) => $bottom}px;
    left: ${({$left}) => $left}%;
    width: ${({$width}) => $width}px;
    height: ${({$height}) => $height}px;

    @media screen and (min-width: 376px){
        left: calc(${({$left}) => $left}% + (100% - 335px)/2);
    }
    ${media.desktop`
        left: ${({$left}) => $left}px;
    `}
`;

const EndButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 240px;
    margin-top: 15px;
    gap: 10px;
    & ${Button} {
        width: auto;
        min-width: 150px;

        &:hover {
            border: 1px solid var(--color-white);
        }
    }

    ${media.desktop`
        margin-top: 40px;
        max-width: 329px;
        flex-direction: row;
    `}
`;

export const TestBlock = ({ isBrand, scrollToVacancy, testName, person, defaultColor, accentColor = 'var(--color-orange)', questions = [] }) => {
    const [answers, setAnswers] = useState([]);
    const [isEnd, setIsEnd] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [endText, setEndText] = useState('');

    useEffect(() => {
        const width = window.innerWidth;

        setIsMobile(width < 1200);
    }, [])

    const { hardSkills, softSkills } = questions.reduce((res, question) => {
        if (question.isSoft) {
            res.softSkills.push(question);
        } else {
            res.hardSkills.push(question);
        }
        return res;
    }, { hardSkills: [], softSkills: [] })


    const handleToggle = (id) => {
        setAnswers(prev => prev.includes(id) ? prev.filter((prevId) => prevId !== id) : [...prev, id]);
    }

    const handleClick = () => {
        setIsEnd(true);
        setEndText(getEndText());
    }

    const endAnimation = isMobile ? {
        animate: isEnd ? {x: -260} : {},
        transition: {duration: 0.6}
    } : {
        animate: isEnd ? {x: -379} : {},
        transition: {duration: 0.5}
    };

    const getEndText = () => {
        if (answers.length < 3) {
            return 'пока твоих навыков не хватает для сильного старта. выбери больше пунктов, или переходи в наш тг‑бот и качай скиллы\n\nа потом возвращайся\nи откликайся на вакансии!'
        }

        if (answers.length > 5) {
            return 'отлично!\nу тебя уже есть полезные навыки и качества, смотри вакансии и выбирай подходящую\n\nно ты можешь прокачать их еще больше — переходи в наш тг‑бот!' 

        }

        return 'ты почти у цели.\nчтобы скорее прокачать навыки переходи в наш тг‑бот\n\nа потом возвращайся\nи откликайся на вакансии!'
    }

    return (
        <Wrapper>
            <TextBlock>
                <Title $color={defaultColor}><ColoredSpan $color={accentColor}>проверь</ColoredSpan> себя</Title>
                <Text $color={defaultColor}>
                    готов ли ты к старту в {testName}?{'\n'}
                    заполни чек-лист — узнай, какие навыки
                    и качества успешного кандидата
                    уже у тебя есть
                </Text>
            </TextBlock>
            <TestWrapper>
                <TestContent>
                    <Subtitles $color={defaultColor}><ColoredSpan $color={accentColor}>профессиональные</ColoredSpan>{'\n'}навыки (харды)</Subtitles>
                <div>
                    {
                        hardSkills.map(({ id, text }) => (
                            <AnswerWrapper
                                key={id}
                                onClick={() => handleToggle(id)}
                            >
                                <TumblerWrapper
                                    $isEnd={isEnd}
                                    initial={{ borderColor: defaultColor, background: 'transparent'}}
                                    animate={answers.includes(id) ? {
                                        borderColor: accentColor, background: accentColor
                                    } : {}}
                                    transition={{
                                        background: { delay: 0.4 }
                                    }}
                                >
                                    <TumblerCircle $defaultColor={defaultColor} initial={{ x: 0 }} animate={answers.includes(id) ? { x: 20 } : { x: 0 }} />
                                </TumblerWrapper>
                                <Text $color={defaultColor}>{text}</Text>
                            </AnswerWrapper>
                        ))
                    }
                </div>
                
                <Subtitles $color={defaultColor}><ColoredSpan $color={accentColor}>личные качества</ColoredSpan>{'\n'}(софты)</Subtitles>
                {
                    softSkills.map(({ id, text }) => (
                        <AnswerWrapper
                            key={id}
                            onClick={() => handleToggle(id)}
                        >
                            <TumblerWrapper
                                initial={{ borderColor: defaultColor, background: 'transparent'}}
                                animate={answers.includes(id) ? {
                                    borderColor: accentColor, background: accentColor
                                } : {}}
                                transition={{
                                    background: { delay: 0.4 }
                                }}
                            >
                                <TumblerCircle $defaultColor={defaultColor} initial={{ x: 0 }} animate={answers.includes(id) ? { x: 20 } : { x: 0 }} />
                            </TumblerWrapper>
                            <Text $color={defaultColor}>{text}</Text>
                        </AnswerWrapper>
                    ))
                }
                <DesktopButton $defaultColor={accentColor} $accentColor={defaultColor} onClick={handleClick}>
                    посмотреть результат
                </DesktopButton>
                </TestContent>
                <ResultBlock $background={defaultColor} {...endAnimation}>
                    <Text>{endText}</Text>
                    <EndButtonWrapper>
                        <Button $isBrand={isBrand} onClick={openBot} $type="secondary">прокачать навыки</Button>
                        <Button $isBrand={isBrand} onClick={scrollToVacancy} $type="secondary">вакансии</Button>
                    </EndButtonWrapper>
                </ResultBlock>
                <Image 
                    src={person.top.src} 
                    alt="" 
                    $width={isMobile ? person.top.width : person.top.widthDesc} 
                    $height={isMobile ? person.top.height : person.top.heightDesc}
                    $bottom={isMobile ? person.top.bottom : person.top.bottomDesc}
                    $left={isMobile ? person.top.left : person.top.leftDesc}
                    $zIndex={5}
                    {...endAnimation}
                />
                <Image 
                    src={person.bot.src} 
                    alt="" 
                    $width={isMobile ? person.bot.width : person.bot.widthDesc} 
                    $height={isMobile ? person.bot.height : person.bot.heightDesc}
                    $bottom={isMobile ? person.bot.bottom : person.bot.bottomDesc}
                    $left={isMobile ? person.bot.left : person.bot.leftDesc}
                    $zIndex={1}
                    {...endAnimation}
                />
                <Image />
            </TestWrapper>
        </Wrapper>
    );
}