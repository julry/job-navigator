import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/education.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 369px;
    right: 15px;
    width: 162px;
    height: 231px;
    z-index: 4;
    
    ${media.desktop`
        width: 326px;
        height: 465px;
        top: 255px;
        right: 4.8%;

        @media screen and (max-width: 1400px) {
            top: 370px;
            transform: scale(0.7);
            right: -1.6%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;

export const EducationPage = () => {
    return (
        <DefaultPage 
            pageId="education"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}