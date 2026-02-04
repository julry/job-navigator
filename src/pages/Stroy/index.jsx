import styled from "styled-components";
import { BrandPage } from "../../components/BrandPage"
import { media } from "../../styles/media";
import { ImagePerson } from "../../components/shared/ImagePerson";
import pers from '../../assets/images/default/people/stroy.png';
import addPicture from '../../assets/images/alabuga/alabugaAddBot.png';
import alabugaStudent from '../../assets/images/alabuga/alabugaStudent.png';
import alabugaMenu from '../../assets/images/alabuga/alabugaMenu.png';
import alabugaMenuHead from '../../assets/images/alabuga/alabugaMenuHead.png';
import { About } from "./About";
import { LogoComponent } from "./Logo";
import { Advantages } from "./Advantages";
import { Button } from "../../components/shared/Button";
import { openLink } from "../../utils/openLink";

const PersonWrapper = styled.div`
    position: absolute;
    top: 493px;
    right: -24px;
    width: 202px;
    height: 309px;
    transform: scale(-1, 1);
    z-index: 4;
    
    ${media.desktop`
        width: 281px;
        height: 485px;
        top: 202px;
        right: 12.8%;
        transform: none;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 220px;
            right: 0;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;


const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${media.desktop`
        ${Button} {
            max-width: 400px;
        }
    `}

    ${Button} {
        font-size: 16px;
        height: 120px;

        &:hover {
            color: var(--color-alabuga-blue)
        }
    }
`;

export const StroyPage = () => {
    const modalStyles = { 
        textColor: 'var(--color-alabuga-blue)', 
        activeTabStyles: {
            backgroundColor: 'var(--color-alabuga-blue)',
            border: '1px solid var(--color-alabuga-blue)',
            color: 'var(--color-white)',
        }, 
        tabStyles: `
            background-color: var(--color-white);
            border: 1px solid var(--color-alabuga-blue);
            color: var(--color-alabuga-blue);

            &:hover {
                background-color: var(--color-alabuga-blue);
                border: 1px solid var(--color-alabuga-blue) !important;
                color: var(--color-white);
            }
        `,
        cardTitleColor: 'var(--color-alabuga-blue)',
        activeLineColor: 'var(--color-alabuga-blue)', 
        lineColor: 'var(--color-alabuga-blue)', 
        backgroundColor: 'var(--color-alabuga-accent)',
        skillStyles: {
            border: '1px solid var(--color-white)',
            color: 'var(--color-alabuga-blue)',
        },
        commonSkillStyles: {
            color: 'var(--color-alabuga-blue)',
            backgroundColor: 'var(--color-alabuga-accent)',
            titleColor: 'var(--color-alabuga-blue)',
        }
    };
    
    const botButtonStyles = `
        border: 1px solid var(--color-alabuga-blue);
        background-color: transparent;
        color: var(--color-alabuga-blue);

        &:hover {
            background-color: var(--color-alabuga-blue);
            color: var(--color-alabuga-accent);
        }
    `;

    const botBlockStyles = {
        defaultColor: 'var(--color-alabuga-blue)',
        backgroundColor: 'var(--color-alabuga-accent)'
    }

    return (
        <BrandPage
            pageId="stroy"
            preloadImages={[ alabugaMenu, alabugaMenuHead ]}
            defaultColor={'var(--color-alabuga-blue)'}
            accentColor={'var(--color-alabuga-accent)'}
            botButtonStyles={botButtonStyles}
            addPicture={addPicture}
            opportunityPerson={alabugaStudent}
            menuPerson={alabugaMenu}
            menuPersonHead={alabugaMenuHead}
            companyName='«Алабуга Девелопмент»'
            botBlockStyles={botBlockStyles}
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt="" />
                </PersonWrapper>
            }
            getAboutComponent={({scrollToVacancy}) => <About scrollToVacancy={scrollToVacancy} defaultColor={'var(--color-alabuga-blue)'} accentColor={'var(--color-alabuga-accent)'}/>}
            logoComponent={<LogoComponent />}
            advantageComponent={<Advantages defaultColor={'var(--color-alabuga-blue)'}  accentColor={'var(--color-alabuga-accent)'} />}
            modalStyles={modalStyles}
            additionalInfoComponent={(
                <ButtonWrapper>
                    <Button $defaultColor={'var(--color-alabuga-blue)'} $accentColor={'var(--color-alabuga-accent)'} onClick={() => openLink('https://fut.ru/s/alabuga_form')}>Подать заявку на практику</Button>
                </ButtonWrapper>
            )}
        />
    )
}