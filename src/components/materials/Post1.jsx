import styled from "styled-components";
import {Card, Image, FullTextWrapper, Title, Text, SmallText, UlStyled} from './Elements';
import { media } from "../../styles/media";
import { ColoredSpan, NoTransformSpan } from "../shared/Texts";

const Circle = styled(Image)`
    top: -138px;
    right: -320px;

    width: 628px;
    height: 1209px;

    ${media.desktop`
        right: -270px;
    `}
`;

const Person = styled(Image)`
    top: 80px;
    right: -60px;
    width: 160px;
    height: 320px;
    transform: rotate(-25deg);
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
    right: -80px;
    transform: rotate(-25deg); 
    top: 106px;
    height: 685px;
    width: 342px;
    z-index: 1;
`;

const DesktopCircle = styled(DesktopImage)`
    right: 0;
    top: 0;
    height: 883px;
    width: auto;
    z-index: 0;
`;

export const Post1 = ({bgCircle, bgCard, image, onClick, accentColor, textColor}) => {
    const ModalComponent = (
            <>
                <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={textColor}>
                    <Title>
                        <ColoredSpan $color={accentColor}>Составляем резюме:</ColoredSpan> как превратить практику в опыт
                    </Title>
                    <br/>
                    <Text>Есть простой лайфхак, который работает безотказно: сначала нужно правильно пройти практику, а потом правильно описать её в резюме.{'\n'}Разбираемся по шагам.</Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <Text> <ColoredSpan $color={accentColor}>Как правильно пройти практику</ColoredSpan></Text>
                    <SmallText><ColoredSpan $color={accentColor}>Шаг 1. Правильно выбрать место</ColoredSpan></SmallText>
                    <SmallText>
                        не обязательно проходить практику в какой-то крупной и известной компании. Гораздо важнее, какие задачи ты будешь выполнять и чему научишься. 
                        Уточни заранее, какие задачи дают практикантам — перекладывать бумажки или сразу работать с оборудованием или документами, составлять отчеты, проводить анализ. 
                        Помни: чтобы практика была полезна, ее нужно рассматривать не «для галочки», а для получения реального опыта в профессии 
                    </SmallText>
                    <br/>
                    <SmallText><ColoredSpan $color={accentColor}>Шаг 2. Фиксировать достижения </ColoredSpan></SmallText>
                    <SmallText>Выполненные задачи на практике — то, из чего сложится твой «опыт работы» в резюме. не полагайся на память и каждый день фиксируй:</SmallText>
                    <UlStyled>
                        <li>
                            какие задачи выполнял
                        </li>
                        <li>
                            с какими документами работал
                        </li>
                        <li>
                            в какой программе работал
                        </li>
                        <li>
                            с кем взаимодействовал
                        </li>
                    </UlStyled>
                    <br/>
                    <SmallText><ColoredSpan $color={accentColor}>Шаг 3. Смотреть шире</ColoredSpan></SmallText>
                    <SmallText>
                        Твоя задача на практике — не только попробовать себя в реальных задачах, но и понять, что такое — работа по твоей специальности. Поэтому:
                        Проси делать больше, а не просто смотри со стороны. Лучше один раз составить документацию, чем целый месяц смотреть, как это делают другие.
                        Задавай вопросы, чтобы разобраться в процессе. Попробуй понять:
                    </SmallText>
                    <UlStyled>
                        <li>
                            что происходит до твоего этапа
                        </li>
                        <li>
                            что происходит после
                        </li>
                        <li>
                            за что отвечает твой отдел
                        </li>
                    </UlStyled>
                    <SmallText>Это поможет тебе на собеседовании говорить уверенно, а не общими фразами.</SmallText>
                    <br/>
                    <SmallText><ColoredSpan $color={accentColor}>Шаг 4. Указать компанию и сроки</ColoredSpan></SmallText>
                    <SmallText>В разделе «опыт работы» пропиши название компании, позицию и сроки практики.{'\n'} Пример:</SmallText>
                    <UlStyled>
                        <li>
                            май-август 2026
                        </li>
                        <li>
                            <NoTransformSpan>ООО «Ромашка»</NoTransformSpan>
                        </li>
                        <li>
                            Специалист по документообороту, практика
                        </li>
                    </UlStyled>
                    <br/>
                    <SmallText><ColoredSpan $color={accentColor}>Шаг 5. Описать задачи</ColoredSpan></SmallText>
                    <SmallText>
                        Самая частая ошибка — просто написать: «Проходил практику». Работодатель не поймет, чему ты научился, поэтому важно описывать действия. 
                        Используй структуру «что делал → с чем работал → чему научился»
                    </SmallText>
                    <SmallText><ColoredSpan $color={accentColor}>❌ Плохо:</ColoredSpan></SmallText>
                    <UlStyled>
                        <li>
                           Проходил практику в компании
                        </li>
                        <li>
                            Работал в офисе
                        </li>
                        <li>
                            Помогал сотрудникам
                        </li>
                    </UlStyled>
                    <SmallText><ColoredSpan $color={accentColor}>✅ Лучше:</ColoredSpan></SmallText>
                    <UlStyled>
                        <li>
                           Оформлял договоры и работал с клиентскими обращениями
                        </li>
                        <li>
                            Освоил работу в CRM и навыки деловой коммуникации
                        </li>
                        
                    </UlStyled>
                    <br />
                     <SmallText><ColoredSpan $color={accentColor}>Главное, что стоит запомнить</ColoredSpan></SmallText>
                     <SmallText>
                        Практика становится опытом только тогда, когда ты можешь рассказать о ней конкретно: какие задачи выполнял, с чем работал и чему научился. Подготовься к этому заранее — и резюме будет работать на тебя даже без официального стажа.
                     </SmallText>
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
                title={<><ColoredSpan $color={accentColor}>Составляем резюме:</ColoredSpan> как превратить практику в опыт</>}
                desc={"Есть простой лайфхак,\nкоторый работает\nбезотказно: сначала\nнужно правильно пройти\nпрактику, а потом правильно\nописать её в резюме.\nРазбираемся по шагам."}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}