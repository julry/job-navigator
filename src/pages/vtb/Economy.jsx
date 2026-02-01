import styled from "styled-components";
import { BrandPage } from "../../components/BrandPage"
import { media } from "../../styles/media";
import { ImagePerson } from "../../components/shared/ImagePerson";
import pers from '../../assets/images/default/people/economy.png';
import addPicture from '../../assets/images/vtb/vtbAddBot.png';
import vtbStudent from '../../assets/images/vtb/vtbStudent.png';
import vtbMenu from '../../assets/images/vtb/vtbMenu.png';
import vtbMenuHead from '../../assets/images/vtb/vtbMenuHead.png';
import { About } from "./About";
import { LogoComponent } from "./Logo";
import { Advantages } from "./Advantages";

const PersonWrapper = styled.div`
    position: absolute;
    top: 493px;
    right: -24px;
    width: 177px;
    height: 307px;
    z-index: 4;
    
    ${media.desktop`
        width: 261px;
        height: 477px;
        top: 222px;
        right: 14.8%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 280px;
            right: 4%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;


export const EconomyPage = () => {
    const modalStyles = { 
        textColor: 'var(--color-vtb-blue)', 
        activeTabStyles: {
            backgroundColor: 'var(--color-vtb-blue)',
            border: '1px solid var(--color-vtb-blue)',
            color: 'var(--color-white)',
        }, 
        tabStyles: {
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-vtb-blue)',
            color: 'var(--color-vtb-blue)',
        }, 
        cardTitleColor: 'var(--color-vtb-blue)',
        activeLineColor: 'var(--color-vtb-blue)', 
        lineColor: 'var(--color-vtb-blue)', 
        backgroundColor: 'var(--color-vtb-accent)',
        skillStyles: {
            border: '1px solid var(--color-white)',
            color: 'var(--color-vtb-blue)',
        },
        commonSkillStyles: {
            color: 'var(--color-vtb-blue)',
            backgroundColor: 'var(--color-vtb-accent)',
            titleColor: 'var(--color-vtb-blue)',
        }
    };
    
    const botButtonStyles = `
        border: 1px solid var(--color-vtb-blue);
        background-color: transparent;
        color: var(--color-vtb-blue);

        &:hover {
            background-color: var(--color-vtb-blue);
            color: var(--color-vtb-accent);
        }
    `;

    return (
        <BrandPage
            pageId="economy"
            defaultColor={'var(--color-vtb-blue)'}
            accentColor={'var(--color-vtb-accent)'}
            botButtonStyles={botButtonStyles}
            addPicture={addPicture}
            opportunityPerson={vtbStudent}
            menuPerson={vtbMenu}
            menuPersonHead={vtbMenuHead}
            companyName='ВТБ'
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt="" />
                </PersonWrapper>
            }
            aboutComponent={<About defaultColor={'var(--color-vtb-blue)'} />}
            logoComponent={<LogoComponent />}
            advantageComponent={<Advantages defaultColor={'var(--color-vtb-blue)'}  accentColor={'var(--color-vtb-accent)'} />}
            modalStyles={modalStyles}
        />
    )
}