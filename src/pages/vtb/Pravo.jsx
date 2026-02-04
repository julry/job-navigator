import styled from "styled-components";
import { BrandPage } from "../../components/BrandPage"
import { media } from "../../styles/media";
import { ImagePerson } from "../../components/shared/ImagePerson";
import pers from '../../assets/images/vtb/pravoLand.png';
import addPicture from '../../assets/images/vtb/vtbAddBot.png';
import vtbStudent from '../../assets/images/vtb/vtbStudent.png';
import vtbMenu from '../../assets/images/vtb/vtbMenu.png';
import vtbMenuHead from '../../assets/images/vtb/vtbMenuHead.png';
import { About } from "./About";
import { LogoComponent } from "./Logo";
import { Advantages } from "./Advantages";
import { SmallText } from "../../components/shared/Texts";
import { HorizontalContent } from "./Horizontal";
import { ProgressComponent } from "./Progress";

const PersonWrapper = styled.div`
    position: absolute;
    top: 423px;
    right: -50px;
    width: ${251 * 1.2}px;
    height: ${314 * 1.2}px;
    z-index: 4;
    
    ${media.desktop`
        width: 337px;
        height: 506px;
        top: 262px;
        right: 8.8%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 300px;
            right: 4%;
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
    background-color: var(--color-vtb-accent);
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

export const PravoPage = () => {
    const modalStyles = { 
        textColor: 'var(--color-white)', 
        titleColor: 'var(--color-vtb-blue)', 
        accentColor: 'var(--color-vtb-accent)', 
        activeTabStyles: {
            backgroundColor: 'var(--color-vtb-blue)',
            border: '1px solid var(--color-vtb-blue)',
            color: 'var(--color-white)',
        }, 
        tabStyles: `
            background-color: var(--color-white);
            border: 1px solid var(--color-vtb-blue);
            color: var(--color-vtb-blue);

            &:hover {
                background-color: var(--color-vtb-blue);
                border: 1px solid var(--color-vtb-blue) !important;
                color: var(--color-white);
            }
        `,
        cardTitleColor: 'var(--color-white)',
        activeLineColor: 'var(--color-vtb-blue)', 
        lineColor: 'var(--color-vtb-blue)', 
        backgroundColor: 'var(--color-vtb-blue)',
        skillStyles: {
            border: '1px solid var(--color-vtb-accent)',
            color: 'var(--color-white)',
        },
        commonSkillStyles: {
            color: 'var(--color-white)',
            backgroundColor: 'var(--color-vtb-accent)',
            titleColor: 'var(--color-vtb-blue)',
        },
        upBtnColor: 'var(--color-vtb-blue)'
    };
    
    const botButtonStyles = `
        background-color: var(--color-white);
        color: var(--color-vtb-blue);

        &:hover {
            color: var(--color-vtb-blue);
            background-color: var(--color-vtb-accent);
        }
    `;

    const botBlockStyles = {
        defaultColor: 'var(--color-white)',
        backgroundColor: 'var(--color-vtb-blue)'
    }

    return (
        <BrandPage
            pageId="pravo"
            hasHorizontal
            defaultColor={'var(--color-vtb-blue)'}
            accentColor={'var(--color-vtb-accent)'}
            botButtonStyles={botButtonStyles}
            addPicture={addPicture}
            preloadImages={[ vtbMenu, vtbMenuHead ]}
            opportunityPerson={vtbStudent}
            menuPerson={vtbMenu}
            menuPersonHead={vtbMenuHead}
            horizontalComponent={<HorizontalContent />}
            companyName='ВТБ'
            botBlockStyles={botBlockStyles}
            vacanciesComponent={
                <VacanciesInfo>
                    <SmallText $color="var(--color-white)">
                        период{'\n'}стажировки —{'\n'}6 месяцев
                    </SmallText>
                </VacanciesInfo>
            }
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt="" />
                </PersonWrapper>
            }
            getAboutComponent={({scrollToVacancy}) => <About scrollToVacancy={scrollToVacancy} defaultColor={'var(--color-vtb-blue)'} accentColor={'var(--color-vtb-accent)'}/>}
            logoComponent={<LogoComponent />}
            advantageComponent={<Advantages defaultColor={'var(--color-vtb-blue)'}  accentColor={'var(--color-vtb-accent)'} />}
            modalStyles={modalStyles}
            getModalContent={({oppId}) => <ProgressComponent key={oppId} oppId={oppId} defaultColor={'var(--color-vtb-blue)'}  accentColor={'var(--color-vtb-accent)'} picture={vtbMenu} />}
        />
    )
}