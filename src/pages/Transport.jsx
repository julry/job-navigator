import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/transport.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 360px;
    right: -100px;
    width: ${233 * 1.5}px;
    height: ${179 * 1.5}px;
    z-index: 4;
    transform: scale(-1, 1);
    
    ${media.desktop`
        width: 327px;
        height: 491px;
        top: 260px;
        right: 6.8%;
        transform: none;

        @media screen and (max-width: 1400px) {
            top: 280px;
            right: 0;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;

export const TransportPage = () => {
    return (
        <DefaultPage 
            pageId="transport"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}