import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/it.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 315px;
    right: -20px;
    width: 183px;
    height: 317px;
    
    ${media.desktop`
        width: 340px;
        height: 510px;
        top: 225px;
        right: 7.1%;

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

export const ITPage = () => {
    return (
        <DefaultPage 
            pageId="it"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}