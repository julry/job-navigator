import styled from "styled-components";
import {Card, Image, FullTextWrapper, Title, Text, SmallText, UlStyled, OlStyled} from './Elements';
import { media } from "../../styles/media";
import { ColoredSpan, NoTransformSpan } from "../shared/Texts";

const Circle = styled(Image)`
    top: -138px;
    right: -370px;

    width: 628px;
    height: 1209px;

    ${media.desktop`
        right: -370px;
    `}
`;

const Person = styled(Image)`
    top: 100px;
    right: -52px;
    width: 175px;
    height: 240px;

    ${media.desktop`
        top: 90px;
        right: -40px;
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


export const Post2Economy = ({bgCircle, bgCard, image, onClick}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={"var(--color-vtb-blue)"}>
                    <Title>
                       Как правильно выбрать <ColoredSpan $color="var(--color-vtb-accent)">формат для первой работы</ColoredSpan>? 
                    </Title>
                    <br/>
                    <Text>Если ты учишься в колледже или техникуме, важно выбрать не просто первую работу, а формат, который даст опыт и понимание профессии. Смотри пример <NoTransformSpan>ВТБ</NoTransformSpan>, где есть несколько таких возможностей под разные цели.</Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <OlStyled $markerColor={'var(--color-vtb-accent)'}>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Практика <NoTransformSpan>в ВТБ</NoTransformSpan></ColoredSpan> — когда хочешь попробовать, а не угадывать</SmallText>
                                    <br/>
                                    <SmallText>Практика подойдет, если ты:</SmallText>
                                    <br/>
                                    <UlStyled>
                                        <li>
                                            еще учишься в <NoTransformSpan>ССУЗе</NoTransformSpan> на 2 курсе и старше
                                        </li>
                                        <li>
                                            только знакомишься с банковской сферой
                                        </li>
                                        <li>
                                            хочешь понять, подходит ли тебе направление
                                        </li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText>За период от 2 недель до 2 месяцев ты познакомишься с банком и его продуктами, поработаешь с клиентами и поймешь, подходит ли для тебя направление работы</SmallText>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Стажировка <NoTransformSpan>ВТБ Юниор</NoTransformSpan></ColoredSpan> — когда хочешь получить первый рабочий опыт</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)"><NoTransformSpan>ВТБ Юниор</NoTransformSpan></ColoredSpan>— это оплачиваемая стажировка для студентов и выпускников, где с первого дня ты включаешься в задачи и работаешь с поддержкой наставника.</SmallText>
                                    <br/>
                                    <SmallText>Что внутри программы:</SmallText>
                                    <UlStyled>
                                        <li>
                                            официальное оформление и доход: сможешь накопить на пару позиций из вишлиста, а еще украсишь трудовую книжку
                                        </li>
                                        <li>
                                            обучение в процессе работы: хард и софт скиллы скажут спасибо
                                        </li>
                                        <li>
                                            плавный вход в профессию: постепенно погрузишься в задачи и особенности сферы, чтобы не выгореть в самом начале пути
                                        </li>
                                        <li>
                                            шанс перейти в штат <NoTransformSpan>ВТБ</NoTransformSpan>
                                        </li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Важно:</ColoredSpan> у программы два варианта участия, в зависимости от твоих целей</SmallText>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Стажировка в сети банка</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Где проходит:</ColoredSpan> <NoTransformSpan>80+ городов России</NoTransformSpan></SmallText>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Для кого:</ColoredSpan> <NoTransformSpan>студентов и выпускников ССУЗов</NoTransformSpan></SmallText>
                                    <br/>
                                    <UlStyled>
                                        <li>
                                            Выберешь из нескольких направлений: клиентский менеджер, кредитный аналитик, специалист розничного бизнеса
                                        </li>
                                        <li>
                                            Изучишь особенности работы с клиентами
                                        </li>
                                    </UlStyled>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Стажировка в головном офисе <NoTransformSpan>ВТБ</NoTransformSpan></ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Где проходит:</ColoredSpan> <NoTransformSpan> Москва, Санкт-Петербург, Воронеж, Самара</NoTransformSpan></SmallText>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Для кого:</ColoredSpan> <NoTransformSpan> студентов и выпускников вузов</NoTransformSpan></SmallText>
                                    <br/>
                                    <SmallText> Выберешь из 7 направлений <NoTransformSpan>стажировки — от HR до развития продукта</NoTransformSpan></SmallText>
                                    <SmallText> Дальше доступны разные траектории роста — у тебя будет шанс перейти в штат, пройти программу развития или сменить трек.</SmallText>
                                    <SmallText> <NoTransformSpan>ВТБ</NoTransformSpan> дает не один вход, а <ColoredSpan $color="var(--color-vtb-accent)">выбор формата</ColoredSpan>:</SmallText>
                                    <UlStyled>
                                        <li>
                                            попробовать
                                        </li>
                                        <li>
                                            поработать
                                        </li>
                                        <li>
                                            остаться и вырасти
                                        </li>
                                    </UlStyled>
                                </li>
                    </OlStyled>
                    <SmallText>Выбирай свой формат для старта карьеры в экономике</SmallText>
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
                title={<>Как правильно выбрать <ColoredSpan $color="var(--color-vtb-accent)">формат для первой работы</ColoredSpan>? </>}
                desc={<>Если ты учишься в колледже или техникуме, важно выбрать не просто первую работу, а формат, который даст опыт и понимание профессии.</>}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}