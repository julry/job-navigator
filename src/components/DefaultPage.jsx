import styled from "styled-components"
import { media } from "../styles/media";
import { Opportunities } from "./Opportunities";
import { Vacancies } from "./Vacancies";
import { TestBlock } from "./TestBlock";
import { defaultPages } from "../configs/defaultPages";
import { BotBlock } from "./BotBlock";
import { Addictions } from "./Addictions";
import { AboutJob } from "./AboutJob";
import { AboutVacancies } from "./AboutVacancies";
import { useProgress } from "../context/AppContext";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { JobModal } from "./JobModal";
import { useNavigate } from "react-router-dom";
import { CompasButton } from "./shared/CompasButton";
import { SmallText } from "./shared/Texts";

const Wrapper = styled.div`
    padding-top: 34px;
    margin: 0 auto;

    ${media.tablet`
        max-width: 550px;
        padding-top: 40px;
    `}

    ${media.desktop`
        max-width: 1440px;
    `}
`;

const PictureWrapper = styled.div`
    position: absolute;
    inset: 0;
    max-width: 851px;
    overflow: hidden;

    ${media.desktop`
        width: 60%;
    `}
`;

const SpacingContent = styled.div`
    position: relative;
    z-index: 2;
    background-color: #FFF2EC;
    padding: 20px;

    ${media.tablet`
        padding: 38px;
    `}

    ${media.desktop`
        padding: 68px;

        border-top-left-radius: 72px;
        border-top-right-radius: 72px;
    `}
`;

const AboutBlock = styled.div`
    position: relative;
    ${media.desktop`
        display: flex;
        align-items: flex-start;
    `}
`;


const UpButton = styled.button`
    margin: 40px 0 10px;
    margin-left: auto;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;

const ClosedButton = styled.button`
    position: absolute;
    top: -20px;
    right: 25px;

    width: 47px;
    height: 40px;

    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: var(--color-gray);
    border: 1px solid var(--color-white);
    z-index: 10;

    ${media.desktop`
        display: none;
    `}
`;

const FooterText = styled(SmallText)`
    text-align: center;
    text-transform: none;

    ${media.desktop`
        display: none;
    `}
`;

export const DefaultPage = ({pageId, personComponent}) => {
    const [modalState, setModalState] = useState({shown: false});
    const {
        jobTitle,
        jobDescription,
        jobDescriptionSm,
        jobTitleSize = 36,
        testQuestions, 
        testName,
        opportunitiesPerson,
        opportunitiesPersonDesk,
        opportunities,
        testPerson,
        vacanciesDescr,
        testAdditionMargin,
    } = defaultPages.find((page) => page.id === pageId) ?? {};

    const navigate = useNavigate();

    const {wrapperRef} = useProgress();
    const vacancyRef = useRef();

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

    const handleOpenModal = (id) => {
        wrapperRef.current.style = 'overflow: hidden';
        setModalState({shown: true, id});
    }

    const handleCloseModal = () => {
        wrapperRef.current.style = '';
        setModalState({shown: false});
    }

    const scrollToVacancy = () => {
        if (!vacancyRef?.current) return;
        vacancyRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Wrapper ref={wrapperRef}>
            <AboutBlock>
                {!modalState.shown && (<CompasButton onClick={() => navigate('/')} />)}
                {!modalState.shown && (
                    <ClosedButton onClick={() => navigate('/')}>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 19L9.38597 8.89595L9.34211 9.40848L0.482459 0H2.19298L10.2632 8.63969H9.64914L17.6754 0H19.3421L10.4386 9.55491L10.4825 8.85935L20 19H18.2018L9.69299 9.77457L10.1755 9.81118L1.71052 19H0Z" fill="#FFF2EC"/>
                        </svg>
                    </ClosedButton>
                )}
                <AboutJob jobTitleSize={jobTitleSize} jobTitle={jobTitle} jobDescription={jobDescription} jobDescriptionMob={jobDescriptionSm} />
                <PictureWrapper>
                    {personComponent}
                </PictureWrapper>
                <AboutVacancies vacanciesDescr={vacanciesDescr}/>
            </AboutBlock>
            
            <SpacingContent>
                <Opportunities opportunities={opportunities} onClickOpp={handleOpenModal}/>
                <Vacancies ref={vacancyRef} vacancies={vacancies} />
                <TestBlock scrollToVacancy={scrollToVacancy} person={testPerson} testName={testName} questions={testQuestions}/>
                <BotBlock testAdditionMargin={testAdditionMargin}/>
                <UpButton onClick={() => wrapperRef?.current?.scrollTo({top: 0, behavior: "smooth"})}>
                    <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 31C20 31.5523 20.4477 32 21 32C21.5523 32 22 31.5523 22 31L21 31L20 31ZM21.7071 9.29289C21.3166 8.90237 20.6834 8.90237 20.2929 9.29289L13.9289 15.6569C13.5384 16.0474 13.5384 16.6805 13.9289 17.0711C14.3195 17.4616 14.9526 17.4616 15.3431 17.0711L21 11.4142L26.6569 17.0711C27.0474 17.4616 27.6805 17.4616 28.0711 17.0711C28.4616 16.6805 28.4616 16.0474 28.0711 15.6569L21.7071 9.29289ZM21 31L22 31L22 10L21 10L20 10L20 31L21 31Z" fill="#FF7F00"/>
                    <rect x="1" y="41" width="40" height="40" rx="20" transform="rotate(-90 1 41)" stroke="#FF7F00" stroke-width="2"/>
                    </svg>
                </UpButton>
                <FooterText>
                    © 2005-2026 FutureToday.{'\n'}Все права защищены.
                </FooterText>
            </SpacingContent>

            <AnimatePresence>
                {modalState.shown && (
                    <JobModal picture={[opportunitiesPerson, opportunitiesPersonDesk]}  opportunities={opportunities} id={modalState.id} onClose={handleCloseModal} />
                )}
            </AnimatePresence>
        </Wrapper>
    )
}