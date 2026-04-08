import styled from "styled-components";
import {Card, Image, FullTextWrapper, Title, Text, SmallText, UlStyled} from './Elements';
import { media } from "../../styles/media";
import { ColoredSpan } from "../shared/Texts";

const Circle = styled(Image)`
    top: -138px;
    right: -300px;

    width: 628px;
    height: 1209px;

    ${media.desktop`
        right: -270px;
    `}
`;

const Person = styled(Image)`
    top: 93px;
    right: -12px;
    width: 160px;
    height: 320px;

    ${media.desktop`
        right: 2px;
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


export const Post2Default = ({bgCircle, bgCard, config = {}, image, onClick, textColor}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={textColor}>
                    <Title>
                        Как понять, что я <ColoredSpan>подхожу под вакансию</ColoredSpan>?
                    </Title>
                    <br/>
                    <Text>
                        Поговорим честно: сколько раз ты открывал вакансии, читал описание и думал: «Кажется, я не подхожу»? Это ощущение возникает из-за отсутствия опыта, непонятных формулировок и множества требований.
                        {'\n\n'}Хорошая новость: чаще всего ты подходишь лучше, чем кажется. Просто нужно знать, на что реально обращать внимание.
                        {'\n\n'}Разбираемся, как правильно оценить свои силы при отклике на вакансии.
                    </Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <UlStyled $markerColor={'var(--color-orange)'}>
                        <li>
                            <SmallText><ColoredSpan>Шаг 1. Посчитай, сколько навыков у тебя уже есть</ColoredSpan></SmallText>
                            <br/>
                            <SmallText>В каждой вакансии есть список ключевых знаний и навыков. Пройди по нему и отметь галочками то, что у тебя реально есть.</SmallText>
                            <br/>
                            <SmallText><ColoredSpan>Пример:</ColoredSpan></SmallText>
                            <UlStyled $markerColor={'var(--color-orange)'}>
                                <li>работа с клиентами ✅</li>
                                <li>внимательность ✅</li>
                                <li>знание базовых программ ✅</li>
                                <li>опыт продаж ❌</li>
                            </UlStyled>
                            <br/>
                            <SmallText>Важно: если совпадает 60–70% требований — этого достаточно для отклика. Идеальных кандидатов не существует, компании ищут тех, кого можно научить остальному.</SmallText>
                        </li>
                        <br/>
                        <li>
                            <SmallText><ColoredSpan>Шаг 2. Пойми, что действительно важно этому работодателю</ColoredSpan></SmallText>
                            <br/>
                            <SmallText>Посмотри другие вакансии этой же компании (не обязательно по твоей специальности) и найди повторяющиеся требования.{'\n'}Если в каждой вакансии пишут:</SmallText>
                            <UlStyled $markerColor={'var(--color-orange)'}>
                                <li>ответственность</li>
                                <li>пунктуальность</li>
                                <li>готовность учиться</li>
                            </UlStyled>
                            <SmallText>…и это про тебя — смело откликайся. Значит, компания в первую очередь ищет адекватных людей, а остальному готова учить.</SmallText>
                        </li>
                        <br/>
                        <li>
                            <SmallText><ColoredSpan>Шаг 3. Разберись с фразой «опыт желателен»</ColoredSpan></SmallText>
                            <br/>
                            <SmallText>Это пугает многих, но на самом деле значит вот что: наличие опыта — это преимущество, но не обязательное требование.{'\n'}Если в остальном ты подходишь — пробуй. Особенно если в описании есть фраза «готовы обучать». Это прямой сигнал: компания открыта к новичкам.</SmallText>
                        </li>
                    </UlStyled>
                    <SmallText><ColoredSpan>💡 Главное, что стоит запомнить</ColoredSpan></SmallText>
                    <UlStyled $markerColor={'var(--color-orange)'}>
                        <li>60–70% совпадений по навыкам — уже повод откликаться</li>
                        <li>Повторяющиеся требования в вакансиях компании показывают, что для них действительно важно</li>
                        <li>«Опыт желателен» не равно «опыт обязателен»</li>
                        <li>Если компания пишет «готовы обучать» — новичков там точно берут</li>
                    </UlStyled>
                    <br/>
                    <SmallText>Не отсеивай себя сам, дай работодателю возможность рассмотреть твою кандидатуру. Часто бывает, что опыта вполне достаточно — нужно только пробовать.</SmallText>
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
                title={<>Как понять, что я <ColoredSpan>подхожу под вакансию</ColoredSpan>?</>}
                desc={"Разбираемся, как правильно оценить свои силы при отклике на вакансии"}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}