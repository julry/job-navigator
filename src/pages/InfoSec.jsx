import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/infosec.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 355px;
    right: -10px;
    width: 152px;
    height: 270px;
    transform: scale(-1, 1);
    z-index: 6;
    
    ${media.desktop`
        width: 298px;
        height: 530px;
        top: 225px;
        right: 9.1%;
        transform: none;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 260px;
            right: 0;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
`;

export const InfoSecPage = () => {
    return (
        <DefaultPage 
            pageId="infosec"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}