import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/service.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 366px;
    right: -32px;
    width: ${189 * 1.1}px;
    height: ${237 * 1.1}px;
    
    ${media.desktop`
        width: 381px;
        height: 572px;
        top: 240px;
        right: 3.9%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 280px;
            right: 3%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;


export const ServicePage = () => {
    return (
        <DefaultPage 
            pageId="service"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}