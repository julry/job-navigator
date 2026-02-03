import styled from "styled-components";
import { BrandPage } from "../../components/BrandPage"
import { media } from "../../styles/media";
import { ImagePerson } from "../../components/shared/ImagePerson";
import pers from '../../assets/images/default/people/radioelectronicShown.png';
import addPicture from '../../assets/images/beeline/beelineAddBot.png';
import beelineStudent from '../../assets/images/beeline/beelineStudent.png';
import beelineMenu from '../../assets/images/beeline/beelineMenu.png';
import beelineMenuHead from '../../assets/images/beeline/beelineHead.png';
import { About } from "./About";
import { LogoComponent } from "./Logo";
import { Advantages } from "./Advantages";
import { HorizontalContent } from "./Horizontal";
import { SmallText } from "../../components/shared/Texts";

const PersonWrapper = styled.div`
    position: absolute;
    top: 541px;
    right: 20px;
    width: 117px;
    height: 245px;
    z-index: 4;
    transform: scale(-1, 1);

    
    ${media.desktop`
        width: 233px;
        transform: none;
        height: 488px;
        top: 242px;
        right: 8.8%;

        @media screen and (max-width: 1400px) {
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

const VacanciesInfo = styled.div`
    position: absolute;
    top: 45px;
    right: -10px;
    width: 135px;
    height: 50px;
    border-radius: 40px;
    transform: rotate(10deg);
    background-color: var(--color-beeline-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    ${media.desktop`
        top: 20px;
        right: 30px;
        width: 380px;
        transform: none;

        & p {
            white-space: unset;
        }
    `}
`;

export const RadioElectronicPage = () => {
    const modalStyles = { 
        textColor: 'var(--color-dark)', 
        titleColor: 'var(--color-beeline-dark)', 
        accentColor: 'var(--color-beeline-accent)', 
        activeTabStyles: {
            backgroundColor: 'var(--color-beeline-accent)',
            border: '1px solid var(--color-beeline-accent)',
            color: 'var(--color-dark)',
        }, 
        tabStyles: {
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-beeline-dark)',
            color: 'var(--color-beeline-dark)',
        }, 
        cardTitleColor: 'var(--color-dark)',
        activeLineColor: 'var(--color-beeline-accent)', 
        lineColor: 'var(--color-beeline-dark)', 
        backgroundColor: 'var(--color-beeline-accent)',
        skillStyles: {
            border: '1px solid var(--color-beeline-dark)',
            color: 'var(--color-dark)',
        },
        commonSkillStyles: {
            color: 'var(--color-white)',
            backgroundColor: 'var(--color-beeline-dark)',
            titleColor: 'var(--color-beeline-accent)',
        }
    };
    
    const botButtonStyles = `
        background-color: var(--color-white);
        color: var(--color-beeline-dark);

        &:hover {
            background-color: var(--color-beeline-dark);
            color: var(--color-beeline-accent);
        }
    `;

    const botBlockStyles = {
        defaultColor: 'var(--color-white)',
        backgroundColor: 'var(--color-beeline-dark)'
    }

    return (
        <BrandPage
            pageId="radioelectronic"
            hasHorizontal
            defaultColor={'var(--color-beeline-dark)'}
            accentColor={'var(--color-beeline-accent)'}
            botButtonStyles={botButtonStyles}
            addPicture={addPicture}
            opportunityPerson={beelineStudent}
            menuPerson={beelineMenu}
            menuPersonHead={beelineMenuHead}
            horizontalComponent={<HorizontalContent />}
            companyName='Билайн'
            botBlockStyles={botBlockStyles}
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt="" />
                </PersonWrapper>
            }
            getAboutComponent={({scrollToVacancy}) => <About scrollToVacancy={scrollToVacancy} defaultColor={'var(--color-beeline-dark)'} accentColor={'var(--color-beeline-accent)'}/>}
            logoComponent={<LogoComponent />}
            advantageComponent={<Advantages defaultColor={'var(--color-beeline-dark)'}  accentColor={'var(--color-beeline-accent)'} />}
            modalStyles={modalStyles}
            spotColor={'var(--color-beeline-accent)'}
            spotTop="60%"
            spotTopD={180}
            spotLeft={'340px'}
            vacanciesComponent={
                <VacanciesInfo>
                    <SmallText $color="var(--color-white)">
                        период{'\n'}стажировки —{'\n'} до 6 месяцев
                    </SmallText>
                </VacanciesInfo>
            }
        />
    )
}