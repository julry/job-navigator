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
    top: 120px;
    right: -52px;
    width: 175px;
    height: 240px;

    ${media.desktop`
        top: 120px;
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


export const Post2Pravo = ({bgCircle, bgCard, image, onClick}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={"var(--color-vtb-blue)"}>
                    <Title>
                       <ColoredSpan $color="var(--color-vtb-accent)">5 навыков</ColoredSpan>, которые выделят твое резюме
                    </Title>
                    <br/>
                    <Text>Классический вопрос при составлении резюме без опыта работы: «А что вообще писать, чтобы выглядело достойно?»</Text>
                    <Text>Хорошая новость: компании, которые ищут молодых специалистов, не ждут от тебя длинного списка мест работы. Они смотрят на навыки и знания. Именно на них стоит делать акцент в резюме.</Text>
                    <Text>Вместе с <NoTransformSpan>ВТБ</NoTransformSpan> разобрали 5 ключевых навыков для начинающих юристов — как о них писать и как прокачать уже сейчас:</Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <UlStyled $markerColor={'var(--color-vtb-accent)'}>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Навык №1. Работа со специализированными программами</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как показать в резюме:</ColoredSpan></SmallText>
                                    <SmallText>В разделе «Навыки» укажи софт, который уже знаешь, в формате: «Название программы: что конкретно умеешь делать».</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Пример:</ColoredSpan></SmallText>
                                    <UlStyled>
                                        <li><NoTransformSpan>MS Excel: уверенный пользователь (сводные таблицы, ВПР, базовые формулы)</NoTransformSpan></li>
                                        <li><NoTransformSpan>Гарант / КонсультантПлюс: подбор актуальной редакции законодательства, поиск судебной практики</NoTransformSpan></li>
                                        <li><NoTransformSpan>MS Word: оформление юридических документов по стандартам</NoTransformSpan></li>
                                    </UlStyled>
                                    <SmallText>Добавь формулировку: «Быстро осваиваю новый специализированный софт». Это покажет готовность учиться.</SmallText>
                                    <br/>
                                     <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Почему это выделит тебя:</ColoredSpan></SmallText>
                                    <SmallText>Рекрутер увидит, что ты можешь быстро влиться в работу с внутренними системами и не будешь месяц учиться искать законы или оформлять документы.</SmallText>
                                    <br/>
                                     <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как прокачать:</ColoredSpan></SmallText>
                                    <SmallText>Найди в описании подходящей вакансии требования к программам и изучи туториалы в интернете. Для правовых баз есть бесплатные демо-версии и обучающие ролики.</SmallText>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Навык №2. Внимание к деталям</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как показать в резюме:</ColoredSpan></SmallText>
                                    <SmallText>При описании практики или учебного проекта в разделе «Опыт» приведи пример, доказывающий внимательность.</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Пример:</ColoredSpan></SmallText>
                                    <UlStyled>
                                        <li>Занимался проверкой и вычиткой договоров на предмет ошибок и несоответствий</li>
                                        <li>Выявлял противоречия в документации при прохождении практики</li>
                                        <li>Корректировал тексты исковых заявлений в соответствии с требованиями</li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Почему это выделит тебя:</ColoredSpan></SmallText>
                                    <SmallText>Ты не просто называешь себя «внимательным» (это пишут все), а показываешь, что реально понимаешь цену ошибки. в юриспруденции пропущенная запятая может стоить миллионы.</SmallText>
                                    <br/>
                                     <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как прокачать:</ColoredSpan></SmallText>
                                    <SmallText>Начни с простого — перечитывай сообщения перед отправкой. в учебе бери за правило перепроверять тексты договоров и заявлений перед сдачей.</SmallText>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Навык №3. Понимание нужной области права</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как показать в резюме:</ColoredSpan></SmallText>
                                    <SmallText>В разделе «О себе». Если откликаешься на работу в банке, напиши о своей специализации.</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Пример:</ColoredSpan></SmallText>
                                    <UlStyled>
                                        <li>Студент юридического направления с базовым пониманием банковского и финансового права</li>
                                        <li>Изучаю гражданское и договорное право, интересуюсь судебной практикой по кредитным спорам</li>
                                        <li>Знаком с основами правового регулирования банковской деятельности</li>
                                    </UlStyled>
                                    <br/>
                                     <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Почему это выделит тебя:</ColoredSpan></SmallText>
                                    <SmallText>Это показывает твою мотивацию. Ты не просто ищешь любую работу, а интересуешься именно банковской сферой и уже успел в ней немного разобраться.</SmallText>
                                    <br/>
                                     <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как прокачать:</ColoredSpan></SmallText>
                                    <SmallText>Повтори основы законодательства в выбранной отрасли. Для банковской сферы — это <NoTransformSpan> ГК РФ (особенно проценты, кредит, заем), ФЗ</NoTransformSpan> «О банках и банковской деятельности», основы потребительского кредитования.</SmallText>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Навык №4. Умение работать по регламенту</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как показать в резюме:</ColoredSpan></SmallText>
                                    <SmallText>При описании практики или учебного проекта в разделе «Опыт» через конкретный пример.</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Пример:</ColoredSpan></SmallText>
                                    <UlStyled>
                                        <li><NoTransformSpan>составление юридических документов в соответствии с внутренними правилами компании</NoTransformSpan></li>
                                        <li><NoTransformSpan>Подготовка процессуальных документов по образцам и шаблонам</NoTransformSpan></li>
                                        <li><NoTransformSpan>Ведение документации согласно установленным регламентам</NoTransformSpan></li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Почему это выделит тебя:</ColoredSpan></SmallText>
                                    <SmallText>Работа с документами — это система строгих правил. Ты покажешь, что готов следовать инструкции там, где это необходимо, а не импровизировать. в юриспруденции это критически важно.</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как прокачать:</ColoredSpan></SmallText>
                                    <SmallText>Перед выполнением учебных заданий изучай методические указания, а после выполнения перепроверяй работу по ним же. Приучи себя работать «по шаблону» там, где это уместно.</SmallText>
                                </li>
                                <br/>
                                <li>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Навык №5. Тайм-менеджмент</ColoredSpan></SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как показать в резюме:</ColoredSpan></SmallText>
                                    <SmallText>При описании практики или учебного проекта в разделе «Опыт» через конкретный пример.</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Пример:</ColoredSpan></SmallText>
                                    <UlStyled>
                                        <li><NoTransformSpan>Совмещение очного обучения и частичной занятости без академических задолженностей</NoTransformSpan></li>
                                        <li><NoTransformSpan>Успешное выполнение учебных проектов в жесткие сроки</NoTransformSpan></li>
                                        <li><NoTransformSpan>Своевременная подготовка процессуальных документов во время практики</NoTransformSpan></li>
                                    </UlStyled>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Почему это выделит тебя:</ColoredSpan></SmallText>
                                    <SmallText>Работодатель увидит, что ты умеешь эффективно распределять время и справляться с несколькими задачами одновременно. в юридической работе это качество ценится высоко — дедлайны здесь жесткие, а просрочка может стоить проигранного дела.</SmallText>
                                    <br/>
                                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">Как прокачать:</ColoredSpan></SmallText>
                                    <SmallText>Старайся выполнять учебные задания за 1–2 дня до дедлайна. Заводи список задач и отмечай сделанное. Чем раньше научишься управлять своим временем, тем легче будет на работе.</SmallText>
                                </li>
                                
                    </UlStyled>
                    <br/>
                    <SmallText><ColoredSpan $color="var(--color-vtb-accent)">💡 Главное, что стоит запомнить</ColoredSpan></SmallText>
                    <SmallText>Резюме без опыта — это не пустой лист. Это твоя возможность показать работодателю:</SmallText>
                    <UlStyled>
                        <li>какие программы ты уже освоил</li>
                        <li>насколько ты внимателен к деталям (с примерами)</li>
                        <li>разбираешься ли в нужной области права</li>
                        <li>умеешь ли работать по правилам и регламентам</li>
                        <li>можешь ли организовать свое время</li>
                    </UlStyled>
                    <br/>
                    <SmallText>Добавь эти навыки в резюме с конкретными примерами — и твои шансы получить первую работу станут заметно выше.</SmallText>
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
                title={<><ColoredSpan $color="var(--color-vtb-accent)">5 навыков</ColoredSpan>, которые выделят твоё резюме</>}
                desc={<>Классический вопрос при составлении резюме без опыта работы: «А что вообще писать, чтобы выглядело достойно?»</>}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}