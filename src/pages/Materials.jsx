import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/materials.png';
import objL from '../assets/images/default/objects/materialsObjectL.png';
import objR from '../assets/images/default/objects/materialsObjectR.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 320px;
    right: 3px;
    width: 202px;
    height: 305px;
    
    ${media.desktop`
        width: 370px;
        height: 528px;
        top: 237px;
        right: 4.9%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 250px;
            right: 3%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    top: 2px;
    right: 15px;
    width: 113px;
    height: 303px;
    z-index: 4;
    transform: scale(-1, 1);

    ${media.desktop`
        top: 20px;
        right: auto;
        left: 119px;
        width: 192px;
        height: 514px;
        transform: none;
    `}
`;

const ObjectLeft = styled(ImagePerson)`
    top: 87px;
    left: 10px;
    width: 71px;
    height: 142px;
    transform: rotate(-15deg);

    ${media.desktop`
        top: 33px;
        width: 126px;
        height: 253px;
        transform: none;
    `}
`;

const ObjectRight = styled(ImagePerson)`
    top: 0;
    right: 0;
    width: 42px;
    height: 95px;

    ${media.desktop`
        top: 0;
        right: 0;
        width: 79px;
        height: 177px;
    `}
`;

export const MaterialsPage = () => {
    return (
        <DefaultPage 
            pageId="materials"
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