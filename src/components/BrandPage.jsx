import styled from "styled-components"
import { media } from "../styles/media";
import { Opportunities } from "./Opportunities";
import { TestBlock } from "./TestBlock";
import { BotBlock } from "./BotBlock";
import { AboutJob } from "./AboutJob";
import { AboutVacancies } from "./AboutVacancies";
import { useProgress } from "../context/AppContext";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { JobModal } from "./JobModal";
import { useNavigate } from "react-router-dom";
import { CompasButton } from "./shared/CompasButton";
import { ColoredSpan, SmallText, TextDesk } from "./shared/Texts";
import { BrandVacancies } from "./BrandVacancies";
import { brandPages } from "../configs/brandPages";
import { LogoBlock } from "./LogoBlock";
import { AboutCompany } from "./AboutCompany";
import { Advantages } from "./Advantages";
import { openBot } from "../utils/openBot";
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    padding-top: 88px;
    margin: 0 auto;

    ${media.tablet`
        max-width: 550px;
    `}

    ${media.desktop`
        padding-top: 92px;
        max-width: 1440px;
    `}
`;


const Header = styled.div`
    position: absolute;
    top: -88px;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 15px;
    padding-left: 74px;


    ${media.desktop`
        top: -92px;
        padding: 25px 60px;
        padding-left: 150px;
    `}
`;

const CompasButtonStyled = styled(CompasButton)`
    display: block;
    top: -5px;
    left: -5px;
    right: auto;

    width: 80px;
    height: 80px;

    ${media.desktop`
        top: -10px;
        left: 5px;
        width: 140px;
        height: 140px;
    `}
`;

const HeaderTitle = styled.h3`
    font-size: 16px;
    line-height: 85%;
    white-space: pre-line;
    color: var(--color-white-text);

    ${media.desktop`
        font-size: 26px;
    `}
`;

const ButtonStyled = styled(Button)`
    width: 110px;
    background-color: var(--color-orange);
    height: 40px;

    ${media.desktop`
        width: 240px;
        height: 45px;
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

const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    ${media.desktop`
        justify-content: space-between;
    `}
`;

const FooterText = styled(SmallText)`
    text-align: center;
    text-transform: none;
`;

const BotFooterText = styled.div`
   display: none;
   align-items: center;
   gap: 10px;

   & button {
        background-color: transparent;
   }

   ${media.desktop`
        display: flex;
   `}
`;

const AboutVacanciesStyled = styled(AboutVacancies)`
    border-top-left-radius: 0;
    padding-top: 80px;

    ${media.desktop`
        padding-top: 40px;
        border-top-left-radius: 72px;
    `}
`;

export const BrandPage = ({
    pageId, personComponent, accentColor, defaultColor, addPicture,
    opportunityPerson, companyName, logoComponent, aboutComponent,
    advantageComponent, menuPerson, menuPersonHead, modalStyles,
    botButtonStyles, modalContent, vacanciesComponent, botBlockStyles,
    horizontalComponent, hasHorizontal, spotColor, spotTop, spotTopD, additionalInfoComponent,
    spotLeft, getAboutComponent,
}) => {
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
        vacancies,
        companyLink,
        testAdditionalMarginDesk,
        testBlockMargin,
    } = brandPages.find((page) => page.id === pageId) ?? {};

    const navigate = useNavigate();

    const {wrapperRef} = useProgress();
    const vacancyRef = useRef();

    const handleOpenModal = (id) => {
        setModalState({shown: true, id});
    }

    const handleCloseModal = () => {
        setModalState({shown: false});
    }

    const scrollToVacancy = () => {
        if (!vacancyRef?.current) return;
        vacancyRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Wrapper $defaultColor={defaultColor}>
            <AboutBlock>
                <Header>
                        <CompasButtonStyled onClick={() => navigate('/')} />
                        <HeaderTitle onClick={() => navigate('/')}><ColoredSpan>навигатор</ColoredSpan>{'\n'}профессий</HeaderTitle>
                        <ButtonStyled $style={modalStyles?.buttonStyle} onClick={openBot}><TextDesk>переходи{' '}</TextDesk> в бот<TextDesk>а!</TextDesk></ButtonStyled>
                    </Header>
                <AboutJob isBrand spotTopD={spotTopD} spotLeft={spotLeft} spotTop={spotTop} spotColor={spotColor ?? defaultColor} jobTitleSize={jobTitleSize} jobTitle={jobTitle} jobDescription={jobDescription} jobDescriptionMob={jobDescriptionSm} />
                <PictureWrapper>
                    {personComponent}
                </PictureWrapper>
                <AboutVacanciesStyled  isBrand addPicture={addPicture} accentColor={accentColor} defaultColor={defaultColor} vacanciesDescr={vacanciesDescr}/>
                <LogoBlock>
                    {logoComponent}
                </LogoBlock>
            </AboutBlock>
            <SpacingContent>
                <AboutCompany 
                    defaultColor={defaultColor} 
                    accentColor={accentColor} 
                    companyName={companyName} 
                >
                    {aboutComponent}
                    {getAboutComponent?.({scrollToVacancy})}
                </AboutCompany>
                <Opportunities 
                    textVariant={'brand'}
                    hasHorizontal={hasHorizontal}
                    companyLink={companyLink} 
                    companyName={companyName} 
                    hasButton 
                    defaultColor={defaultColor} 
                    accentColor={accentColor} 
                    opportunities={opportunities} 
                    person={opportunityPerson}
                    onClickOpp={handleOpenModal}
                />
                <TestBlock testBlockMargin={testBlockMargin} isBrand scrollToVacancy={scrollToVacancy} defaultColor={defaultColor} accentColor={accentColor} person={testPerson} testName={testName} questions={testQuestions}/>
                <BrandVacancies 
                    testAdditionMarginDesk={testAdditionalMarginDesk}
                    ref={vacancyRef} 
                    companyName={companyName} 
                    {...vacancies} 
                    defaultColor={defaultColor} 
                    accentColor={accentColor} 
                    additionalInfoComponent={additionalInfoComponent}
                >
                    {vacanciesComponent}
                </BrandVacancies>
                <Advantages companyName={companyName} defaultColor={defaultColor} accentColor={accentColor}>
                    {advantageComponent}
                </Advantages>
                <BotBlock isBrand styles={botButtonStyles} {...botBlockStyles}/>
                <UpButton onClick={() => wrapperRef?.current?.scrollTo({top: 0, behavior: "smooth"})}>
                    <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 31C20 31.5523 20.4477 32 21 32C21.5523 32 22 31.5523 22 31L21 31L20 31ZM21.7071 9.29289C21.3166 8.90237 20.6834 8.90237 20.2929 9.29289L13.9289 15.6569C13.5384 16.0474 13.5384 16.6805 13.9289 17.0711C14.3195 17.4616 14.9526 17.4616 15.3431 17.0711L21 11.4142L26.6569 17.0711C27.0474 17.4616 27.6805 17.4616 28.0711 17.0711C28.4616 16.6805 28.4616 16.0474 28.0711 15.6569L21.7071 9.29289ZM21 31L22 31L22 10L21 10L20 10L20 31L21 31Z" fill={defaultColor}/>
                    <rect x="1" y="41" width="40" height="40" rx="20" transform="rotate(-90 1 41)" stroke={defaultColor} stroke-width="2"/>
                    </svg>
                </UpButton>
                <Footer>
                    <FooterText $color={defaultColor}>
                        © 2005-2026 FutureToday.{'\n'}Все права защищены.
                    </FooterText>
                    <BotFooterText>
                        <SmallText $color={defaultColor}>{'перейти в бот'}</SmallText>
                        <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.36395C0.447715 6.36395 9.65645e-08 6.81167 0 7.36395C-9.65645e-08 7.91624 0.447715 8.36395 1 8.36395L1 7.36395L1 6.36395ZM26.7071 8.07106C27.0976 7.68054 27.0976 7.04737 26.7071 6.65685L20.3431 0.292888C19.9526 -0.0976362 19.3195 -0.0976364 18.9289 0.292888C18.5384 0.683412 18.5384 1.31658 18.9289 1.7071L24.5858 7.36396L18.9289 13.0208C18.5384 13.4113 18.5384 14.0445 18.9289 14.435C19.3195 14.8255 19.9526 14.8255 20.3431 14.435L26.7071 8.07106ZM1 7.36395L1 8.36395L26 8.36396L26 7.36396L26 6.36396L1 6.36395L1 7.36395Z" fill={defaultColor}/>
                        </svg>
    
                        <button onClick={openBot}>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3441_155136)">
                                <path d="M0 19.2C0 10.149 0 5.62355 2.81177 2.81177C5.62355 0 10.149 0 19.2 0H20.8C29.851 0 34.3764 0 37.1882 2.81177C40 5.62355 40 10.149 40 19.2V20.8C40 29.851 40 34.3764 37.1882 37.1882C34.3764 40 29.851 40 20.8 40H19.2C10.149 40 5.62355 40 2.81177 37.1882C0 34.3764 0 29.851 0 20.8V19.2Z" fill="#FFF2EC"/>
                                <path d="M21.2833 28.8167C12.1666 28.8167 6.96667 22.5667 6.75 12.1667H11.3167C11.4667 19.8001 14.8333 23.0334 17.4999 23.7001V12.1667H21.8001V18.7501C24.4334 18.4667 27.1997 15.4667 28.1331 12.1667H32.4332C31.7165 16.2334 28.7165 19.2334 26.5832 20.4667C28.7165 21.4667 32.1333 24.0834 33.4333 28.8167H28.6998C27.6832 25.6501 25.1501 23.2001 21.8001 22.8667V28.8167H21.2833Z" fill={defaultColor}/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3441_155136">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </BotFooterText>
                </Footer>
                
            </SpacingContent>

            <AnimatePresence>
                {modalState.shown && (
                    <JobModal 
                        isBrand
                        menuPerson={menuPerson}
                        menuPersonHead={menuPersonHead}
                        picture={[opportunitiesPerson, opportunitiesPersonDesk]}  
                        opportunities={opportunities} 
                        id={modalState.id} 
                        onClose={handleCloseModal} 
                        styles={modalStyles}
                        horizontalComponent={horizontalComponent}
                    >
                        {modalContent}
                    </JobModal>
                )}
            </AnimatePresence>
        </Wrapper>
    )
}