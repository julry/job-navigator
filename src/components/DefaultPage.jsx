import styled from "styled-components"
import { media } from "../styles/media";
import { Opportunities } from "./Opportunities";
import { Vacancies } from "./Vacancies";
import { TestBlock } from "./TestBlock";
import { defaultPages } from "../configs/defaultPages";
import { BotBlock } from "./BotBlock";
import { Addictions } from "./Addictions";

const Wrapper = styled.div`
    padding-top: 34px;

    ${media.tablet`
        padding-top: 40px;
    `}
`;

const MainContent = styled.div`
    background-color: #FFF2EC;
    padding: 20px;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    ${media.tablet`
        padding: 38px;
        border-top-left-radius: 72px;
        border-top-right-radius: 72px;
    `}

     ${media.desktop`
        padding: 68px;
    `}
`;


export const DefaultPage = ({pageId}) => {
    const {
        testQuestions, 
        testName,
        opportunitiesSvg,
        opportunities,
        testPerson
    } = defaultPages.find((page) => page.id === pageId) ?? {};

    const vacancies = [
        {name: 'клиентский менеджер\nв отделении банка', link: ''},
        {name: 'Представитель банка', link: ''},
        {name: 'Менеджер по работе\nс партнёрами', link: ''},
        {name: 'Специалист контактного\nцентра (чат)', link: ''},
        {name: 'Специалист контактного\nцентра розничного бизнеса', link: ''},
        {name: 'Менеджер прямых продаж', link: ''},
        {name: 'Мобильный клиентский\nменеджер', link: ''},
        {name: 'Кассир\n(без продаж, в офисе)', link: ''},
    ];

    return (
        <Wrapper>
            <MainContent>
                <Opportunities linesSvg={opportunitiesSvg} opportunities={opportunities}/>
                <Vacancies vacancies={vacancies} />
                <TestBlock person={testPerson} testName={testName} questions={testQuestions}/>
                <BotBlock />
                <Addictions />
            </MainContent>
        </Wrapper>
    )
}