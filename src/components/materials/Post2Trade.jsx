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
    top: 120px;
    right: -52px;
    width: 175px;
    height: 240px;
    transform: scale(-1, 1);

    ${media.desktop`
        top: 100px;
        right: -25px;
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


export const Post2Trade = ({bgCircle, bgCard, image, onClick}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={"var(--color-lemana-dark)"}>
                    <Title>
                       Какое направление выбрать для первой работы в <ColoredSpan $color="var(--color-lemana-accent)">логистике и торговом деле</ColoredSpan>? 
                    </Title>
                    <br/>
                    <Text>В логистике и торговом деле есть множество направлений — с разными задачами и темпом работы. Вместе <NoTransformSpan>с Лемана ПРО</NoTransformSpan> разбираемся, чем они отличаются и что подойдёт именно тебе: торговый зал, склад или <NoTransformSpan>ПРО</NoTransformSpan>?</Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <UlStyled $markerColor="var(--color-lemana-accent)">
                        <li>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Торговый зал — для тех, кто любит общение и результат «здесь и сейчас»</ColoredSpan></SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Чем будешь заниматься?</ColoredSpan></SmallText>
                            <SmallText>Работать с клиентами в торговом зале: помогать с выбором и поиском товара, сопровождать от идеи до покупки.</SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Типичный день:</ColoredSpan></SmallText>
                            <SmallText>Постоянное общение с клиентами — диалоги, вопросы, подбор решений, поток людей и быстрые задачи.</SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Тебе подойдет, если:</ColoredSpan></SmallText>
                            <SmallText>Ты легко общаешься, любишь динамику и хочешь видеть осязаемый результат своей работы: в реакции клиента и найденном решении для проекта.</SmallText>
                        </li>
                        <br/>
                        <li>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Склад и логистика — для тех, кто ценит четкие процессы и порядок</ColoredSpan></SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Чем будешь заниматься?</ColoredSpan></SmallText>
                            <SmallText>Принимать и распределять товары, комплектовать заказы, оформлять документы и следить, чтобы грузы доезжали до клиентов без задержек.</SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Типичный день:</ColoredSpan></SmallText>
                            <SmallText>Принимаешь товар, собираешь заказы, проверяешь документы и готовишь грузы к отправке. Внимание к деталям, взаимодействие с техникой и товарами, следование инструкциям и планам.</SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Тебе подойдет, если:</ColoredSpan></SmallText>
                            <SmallText>Ты любишь структурированную работу, стабильный ритм и понимаешь ценность «невидимого» вклада в общий результат.</SmallText>
                        </li>
                        <br/>
                        <li>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)"><NoTransformSpan>ПРО</NoTransformSpan> — для тех, кто мыслит масштабными проектами</ColoredSpan></SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Чем будешь заниматься?</ColoredSpan></SmallText>
                            <SmallText>Работать с профессиональными клиентами: компаниями в сфере строительства и ремонта.</SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Типичный день:</ColoredSpan></SmallText>
                            <SmallText>Обсуждение задач клиентов, подбор решений, расчеты, сопровождение проектов, выезды на объекты и стройплощадки.</SmallText>
                            <br/>
                            <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Тебе подойдет, если:</ColoredSpan></SmallText>
                            <SmallText>Ты интересуешься сложными задачами и хочешь работать над масштабными и дорогими проектами, чтобы обрасти интересными знакомствами в сфере строительства.</SmallText>
                        </li>
                    </UlStyled>
                    <br/>
                    <SmallText><ColoredSpan $color="var(--color-lemana-accent)">Пробуй разное, если не знаешь, что подойдет</ColoredSpan></SmallText>
                    <SmallText>В <NoTransformSpan>Лемана ПРО</NoTransformSpan> ты можешь начать в одном направлении, а со временем попробовать другое.{'\n'}В любой профессии множество путей. Главное — не угадать «идеальную» позицию сразу, а начать работать и на деле понять, что тебе больше подходит.{'\n\n'}👉 Выбирай, что нравится, и откликайся на позиции в <NoTransformSpan>Лемана ПРО</NoTransformSpan> в разделе «Вакансии» здесь, на сайте.</SmallText>
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
                title={<>Какое направление выбрать для первой работы в <ColoredSpan $color="var(--color-lemana-accent)">логистике и торговом деле</ColoredSpan>? </>}
                desc={<>В логистике и торговом деле есть множество направлений — с разными задачами и темпом работы. </>}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}