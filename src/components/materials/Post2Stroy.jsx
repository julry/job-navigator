import styled from "styled-components";
import {Card, Image, FullTextWrapper, Title, Text, SmallText, UlStyled, OlStyled} from './Elements';
import { media } from "../../styles/media";
import { ColoredSpan } from "../shared/Texts";

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
    transform: scale(-1, 1);

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
    height: 518px;
    width: 291px;
    z-index: 1;
    transform: translateY(-50%) scale(-1, 1);
`;

const DesktopCircle = styled(DesktopImage)`
    right: 0;
    top: -5%;
    height: 110%;
    width: auto;
    z-index: 0;
`;


export const Post2Stroy = ({bgCircle, bgCard, image, onClick}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={"var(--color-alabuga-blue)"}>
                    <Title>
                       Что должен уметь <ColoredSpan $color="var(--color-alabuga-accent)">начинающий техник-строитель</ColoredSpan>? 
                    </Title>
                    <br/>
                    <Text>На первой работе от тебя не ждут идеальных знаний, куда важнее базовые навыки, которые помогают быстро адаптироваться и не теряться в рабочих процессах. Проверь себя по списку ниже — чем больше навыков у тебя есть, тем выше шанс получить работу! </Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <OlStyled $markerColor={'var(--color-alabuga-accent)'}>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-alabuga-accent)">Чтение чертежей и проектной документации </ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText>Это один из самых важных навыков, который вы осваиваете в колледже, и который ежедневно применяется на стройке. на практике вам придётся:</SmallText>
                                    <UlStyled>
                                        <li>
                                            определять объёмы работ и рассчитывать нужное количество материалов по чертежам
                                        </li>
                                        <li>
                                           выявлять ошибки и несоответствия в проекте до начала строительства (это экономит время и деньги компании)
                                        </li>
                                        <li>
                                            согласовывать изменения с заказчиком и проектировщиком
                                        </li>
                                        <li>
                                            контролировать качество работ на каждом этапе (сверять фактические размеры с проектными)
                                        </li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-alabuga-accent)">Пример из практики:</ColoredSpan> молодой инженер заметил несоответствие в расположении несущих стен на разных листах чертежа. Благодаря этому проекту удалось избежать серьёзной ошибки при заливке фундамента — и сэкономить несколько недель на переделках.</SmallText>
                                </li>
                                <br/>
                               <li>
                                    <SmallText><ColoredSpan $color="var(--color-alabuga-accent)">Знание строительных материалов и технологий</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText>
                                        в колледже вы изучаете свойства разных материалов, способы их применения и сочетания. на работе это поможет:
                                    </SmallText>
                                    <UlStyled>
                                        <li>
                                            подбирать оптимальные материалы для конкретных условий (например, выбрать марку бетона для фундамента в зависимости от грунта)
                                        </li>
                                        <li>
                                            прогнозировать поведение конструкций (как будет вести себя утеплитель при перепадах температур)
                                        </li>
                                        <li>
                                            предлагать экономически выгодные альтернативы без потери качества (например, заменить дорогой утеплитель на аналог с похожими характеристиками)
                                        </li>
                                        <li>
                                            правильно организовать хранение материалов на стройплощадке (например, знать, что цемент нельзя хранить на открытом воздухе)
                                        </li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-alabuga-accent)">Пример из практики:</ColoredSpan>  студент вспомнил, что определённый вид материала не подходит для установки в условиях высокой влажности. Он предложил заменить материал — и предотвратил возможное разрушение конструкции через несколько лет.</SmallText>
                                </li>
                                <br/>
                               <li>
                                    <SmallText><ColoredSpan $color="var(--color-alabuga-accent)">Основы геодезии и разметки</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText>
                                        Навыки работы с геодезическими инструментами (нивелир, теодолит, рулетка) и умение правильно разметить участок — залог точного соответствия объекта проекту. на стройке вам это пригодится для:
                                    </SmallText>
                                    <UlStyled>
                                        <li>
                                            разметки осей здания на местности (чтобы стены и колонны стояли ровно)
                                        </li>
                                        <li>
                                            контроля высоты и уклонов (например, при устройстве полов или водоотводящих лотков)
                                        </li>
                                        <li>
                                            проверки геометрии конструкций (углы, диагонали, уровни)
                                        </li>
                                        <li>
                                           переноса проектных решений с бумаги на площадку
                                        </li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-alabuga-accent)">Пример из практики:</ColoredSpan> 
                                    при строительстве выяснилось, что одна из балок смещена на 5 см от проектного положения. Благодаря знаниям геодезии студент быстро выявил причину (ошибка при разметке) и скорректировал работы — это спасло проект от серьёзных переделок и штрафов.
                                    </SmallText>
                                </li>
                    </OlStyled>
                    <br/>
                    <SmallText><ColoredSpan $color="var(--color-alabuga-accent)">ℹ️ Вывод</ColoredSpan></SmallText>
                    <SmallText>Эти три навыка — фундамент вашей профессиональной компетенции. То, что казалось «сухой теорией» в колледже, на практике становится вашим главным инструментом. Чем лучше вы освоите их на учёбе, тем увереннее будете чувствовать себя на стройке.</SmallText>
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
                title={<>Что должен уметь <ColoredSpan $color="var(--color-alabuga-accent)">начинающий техник-строитель</ColoredSpan>?</>}
                desc={<>На первой работе от тебя не ждут идеальных знаний, куда важнее базовые навыки, которые помогают быстро адаптироваться и не теряться в рабочих процессах.</>}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}