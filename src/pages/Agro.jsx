import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/agro.png';
import objL from '../assets/images/default/objects/agroObjectL.png';
import objR from '../assets/images/default/objects/agroObjectR.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 416px;
    right: -20px;
    width: 202px;
    height: 251px;
    
    ${media.desktop`
        width: 629px;
        height: 473px;
        top: 283px;
        right: 6.9%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 250px;
            right: 3%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    top: 0;
    left: 0;
    right: 15px;
    width: 100%;
    height: 100%;
    z-index: 4;


    ${media.desktop`
        top: 0;
        right: 0;
        left: auto;
        width: 374px;
        height: 466px;
    `}
`;

const ObjectLeft = styled(ImagePerson)`
    top: 0;
    left: 0;
    opacity: 0;

    ${media.desktop`
        opacity: 1;
        top: 216px;
        width: 195px;
        height: 238px;
    `}
`;

const ObjectRight = styled(ImagePerson)`
    top: 0;
    left: 0;
    opacity: 0;

    ${media.desktop`
        top: 299px;
        opacity: 1;
        left: 211px;
        width: 128px;
        height: 174px;
    `}
`;

export const AgroPage = () => {
    return (
        <DefaultPage 
            pageId="agro"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                    <ObjectLeft src={objL} alt=""/>
                    <ObjectRight src={objR} alt=""/>
                </PersonWrapper>
            }
        />
    )
}