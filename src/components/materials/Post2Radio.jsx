import styled from "styled-components";
import {Card, Image, FullTextWrapper, Title, Text, SmallText, UlStyled, OlStyled} from './Elements';
import { media } from "../../styles/media";
import { ColoredSpan, NoTransformSpan } from "../shared/Texts";

const Circle = styled(Image)`
    top: -138px;
    right: -330px;

    width: 628px;
    height: 1209px;

    ${media.desktop`
        right: -370px;
    `}
`;

const Person = styled(Image)`
    top: 100px;
    right: -62px;
    width: 175px;
    height: 240px;
    transform: scale(-1, 1);

    ${media.desktop`
        top: 80px;
        right: -5px;
    `}
`;

const MobileImage = styled.div`
    width: 267px;
    height: 239px;
    display: flex;
    justify-content: center;
    background-image: url(${({$bg}) => $bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    margin: auto;

    ${media.desktop`
        display: none;
    `}
`;

const DesktopBr = styled.br`
    display: none;

    ${media.desktop`
        display: block;
    `}
`;

const MobilePerson = styled.img`
    height: 100%;
    width: 119px;
    object-fit: contain;
`;

const DesktopImage = styled(Image)`
    display: none;
    
    ${media.desktop`
        display: block;
    `}
`;

const DesktopPerson = styled(DesktopImage)`
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
    height: 518px;
    width: 291px;
    z-index: 1;
`;

const DesktopCircle = styled(DesktopImage)`
    right: 0;
    top: -5%;
    height: 110%;
    width: auto;
    z-index: 0;
`;


export const Post2Radio = ({bgCircle, bgCard, image, onClick}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={"var(--color-beeline-dark)"}>
                    <Title>
                       Как правильно выбрать <ColoredSpan $color="var(--color-beeline-accent)">формат для первой работы</ColoredSpan>? 
                    </Title>
                    <br/>
                    <Text>Когда хочешь начать работать, но еще учишься, не всегда понятно, какой формат больше подойдет.</Text>
                    <Text>Можно пойти на практику, чтобы лучше понять свою профессию. Можно на стажировку, чтобы прокачаться и остаться в компании. а можно сразу целиться в вакансию, если уверен в своих силах.</Text>
                    <Text>Рассказываем про разные варианты на примере <NoTransformSpan>Билайна</NoTransformSpan> — выбирай, что тебе нравится больше:</Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <UlStyled $markerColor={'var(--color-beeline-accent)'}>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-beeline-accent)">🔥 Попробуй себя в профессии </ColoredSpan>  — краткосрочная программа (1–3 месяца) для тестирования специальности. Подойдет для студентов младших курсов и для закрытия практики, <a href="https://fut.ru/s/bln1" target="_blank">подавай заявку!</a></SmallText>
                                    <br/>
                                    <SmallText>Тебя ждёт:</SmallText>
                                    <UlStyled>
                                        <li>
                                            гибкий график до 30 ч. в неделю
                                        </li>
                                        <li>
                                            работа в офисе или гибрид
                                        </li>
                                        <li>
                                            компенсация сотовой связи
                                        </li>
                                        <li>
                                            личный ментор и программа развития от компании
                                        </li>
                                    </UlStyled>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-beeline-accent)">🔥 Улётная стажировка </ColoredSpan>  — программа длится 3–6 месяцев с возможностью попасть в штат. Подойдет тебе, если ты студент старших курсов или недавний выпускник, <a href="https://fut.ru/s/beeline-tech" target="_blank">переходи по ссылке </a></SmallText>
                                    <br/>
                                    <SmallText>Тебя ждёт:</SmallText>
                                    <UlStyled>
                                        <li>
                                            гибкий график до 20 ч. в неделю
                                        </li>
                                        <li>
                                            гибрид или удаленка
                                        </li>
                                        <li>
                                            личный план обучения
                                        </li>
                                        <li>
                                            компенсация сотовой связи
                                        </li>
                                    </UlStyled>
                                </li>
                                <br />
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-beeline-accent)">🔥 Вакансии Сервисного инженера  </ColoredSpan></SmallText>
                                    <SmallText>Тут ждут студентов старших курсов и выпускников, <a href="https://fut.ru/s/bln2" target="_blank">выбирай вакансию по ссылке</a></SmallText>
                                    <br/>
                                    <SmallText>Тебя ждёт:</SmallText>
                                    <UlStyled>
                                        <li>
                                            оформление по <NoTransformSpan>ТК РФ</NoTransformSpan>
                                        </li>
                                        <li>
                                            гибкий график
                                        </li>
                                        <li>
                                            возможность получать премию каждый месяц
                                        </li>
                                        <li>
                                            ДМС
                                        </li>
                                        <li>
                                            корпоративные скидки
                                        </li>
                                        <li>
                                            дружный коллектив
                                        </li>
                                    </UlStyled>
                                </li>
                    </UlStyled>
                    <br/>
                    <SmallText>Если чувствуешь, что это твоё — не тяни. Откликайся.{'\n'}А дальше разберёмся и прокачаем тебя к первому интервью.</SmallText>
                </FullTextWrapper>
        </>
    )
    const handleClick = () => {
        onClick?.({ModalComponent, isSmallModal: true});
    };

    return (
        <>
            <Card
                onClick={handleClick}
                title={<>Как правильно выбрать <ColoredSpan $color="var(--color-beeline-accent)">формат для первой работы</ColoredSpan>? </>}
                desc={<>Когда хочешь начать работать, но еще учишься, не всегда понятно, какой формат больше подойдет.</>}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}