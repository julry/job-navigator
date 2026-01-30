import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/energetics.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 220px;
    right: 2px;
    width: 241px;
    height: 432px;
    transform: scale(-1, 1);
    z-index: 4;
    
    ${media.desktop`
        width: 360px;
        height: 540px;
        top: 181px;
        right: 4.8%;
        transform: none;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 220px;
            right: 0;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;

export const EnergeticsPage = () => {
    return (
        <DefaultPage 
            pageId="energetics"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}