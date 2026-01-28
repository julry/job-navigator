import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/himtech.png';
import obj from '../assets/images/default/objects/himTechObj.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 293px;
    right: -23px;
    width: 178px;
    height: 321px;
    
    ${media.desktop`
        width: 321px;
        height: 670px;
        top: 214px;
        right: 7.9%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 250px;
            right: 5%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    top: 24px;
    left: 0;
    width: 134px;
    height: 296px;
    z-index: 4;

    ${media.desktop`
        top: 44px;
        width: 239px;
        height: 531px;
    `}
`;

const Object = styled(ImagePerson)`
    top: 0;
    right: 0;
    width: 69px;
    height: 100%;

    ${media.desktop`
        width: 125px;
    `}
`;

export const HimTech = () => {
    return (
        <DefaultPage 
            pageId="chemical"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                    <Object src={obj} alt=""/>
                </PersonWrapper>
            }
        />
    )
}