import styled from "styled-components";
import { BrandPage } from "../../components/BrandPage"
import { media } from "../../styles/media";
import { ImagePerson } from "../../components/shared/ImagePerson";
import pers from '../../assets/images/lemana/lemanaShown.png';
import addPicture from '../../assets/images/lemana/lemanaAddBot.png';
import lemanaStudent from '../../assets/images/lemana/lemanaStudent.png';
import lemanaMenu from '../../assets/images/lemana/lemanaMenu.png';
import lemanaMenuHead from '../../assets/images/lemana/lemanaMenuHead.png';
import { About } from "./About";
import { LogoComponent } from "./Logo";
import { Advantages } from "./Advantages";
import { HorizontalContent } from "./Horizontal";
import { VacanciesComponent } from "./Vacancies";

const PersonWrapper = styled.div`
    position: absolute;
    top: 433px;
    right: -60px;
    width: 243px;
    height: 364px;
    z-index: 4;
    
    ${media.desktop`
        width: 396px;
        height: 593px;
        top: 242px;
        right: 2.8%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 280px;
            right: -6%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;

export const TradePage = () => {
    const modalStyles = { 
        textColor: 'var(--color-dark)', 
        titleColor: 'var(--color-lemana-dark)', 
        accentColor: 'var(--color-lemana-accent)', 
        activeTabStyles: {
            backgroundColor: 'var(--color-lemana-accent)',
            border: '1px solid var(--color-lemana-accent)',
            color: 'var(--color-dark)',
        }, 
        tabStyles: `
            background-color: var(--color-white);
            border: 1px solid var(--color-lemana-dark);
            color: var(--color-lemana-dark);

            &:hover {
                background-color: var(--color-lemana-accent);
                border: 1px solid var(--color-lemana-accent) !important;
                color: var(--color-dark);
            }
        `,
        cardTitleColor: 'var(--color-dark)',
        activeLineColor: 'var(--color-lemana-accent)', 
        lineColor: 'var(--color-lemana-dark)', 
        backgroundColor: 'var(--color-lemana-accent)',
        skillStyles: {
            border: '1px solid var(--color-lemana-dark)',
            color: 'var(--color-dark)',
        },
        commonSkillStyles: {
            color: 'var(--color-white)',
            backgroundColor: 'var(--color-lemana-dark)',
            titleColor: 'var(--color-lemana-accent)',
        }
    };
    
    const botButtonStyles = `
        background-color: var(--color-lemana-dark);
        color: var(--color-lemana-accent);

        &:hover {
            background-color: var(--color-white);
            color: var(--color-lemana-dark);
        }
    `;

    const botBlockStyles = {
        defaultColor: 'var(--color-lemana-dark)',
        backgroundColor: 'var(--color-lemana-accent)'
    }

    return (
        <BrandPage
            pageId="trade"
            hasHorizontal
            defaultColor={'var(--color-lemana-dark)'}
            accentColor={'var(--color-lemana-accent)'}
            botButtonStyles={botButtonStyles}
            preloadImages={[ lemanaMenu, lemanaMenuHead ]}
            addPicture={addPicture}
            opportunityPerson={lemanaStudent}
            menuPerson={lemanaMenu}
            menuPersonHead={lemanaMenuHead}
            horizontalComponent={<HorizontalContent />}
            companyName='Лемана ПРО'
            botBlockStyles={botBlockStyles}
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt="" />
                </PersonWrapper>
            }
            getAboutComponent={({scrollToVacancy}) => <About scrollToVacancy={scrollToVacancy} defaultColor={'var(--color-lemana-dark)'} accentColor={'var(--color-lemana-accent)'}/>}
            logoComponent={<LogoComponent />}
            advantageComponent={<Advantages defaultColor={'var(--color-lemana-dark)'}  accentColor={'var(--color-lemana-accent)'} />}
            modalStyles={modalStyles}
            spotColor={'var(--color-lemana-accent)'}
            spotTop="50%" spotLeft={'340px'}
            additionalInfoComponent={<VacanciesComponent defaultColor={'var(--color-lemana-dark)'}/>}
        />
    )
}