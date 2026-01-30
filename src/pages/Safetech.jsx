import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/safetech.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 349px;
    right: -45px;
    width: 186px;
    height: 279px;
    z-index: 4;
    transform: scale(-1, 1);
    
    ${media.desktop`
        width: 355px;
        height: 533px;
        transform: none;
        top: 235px;
        right: 2.8%;

        @media screen and (max-width: 1400px) {
            top: 250px;
            width: 344px;
            height: 515px;
            right: -4.6%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;

export const SafetechPage = () => {
    return (
        <DefaultPage 
            pageId="safetech"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}