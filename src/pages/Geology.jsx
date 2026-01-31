import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/geology.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 383px;
    right: -30px;
    width: ${190 * 1.1}px;
    height: ${285 * 1.1}px;
    z-index: 6;
    
    ${media.desktop`
        width: 334px;
        height: 501px;
        top: 223px;
        right: 3.1%;

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

export const GeologyPage = () => {
    return (
        <DefaultPage 
            pageId="geology"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}