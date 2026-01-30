import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/biotech.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 341px;
    right: -22px;
    width: 191px;
    height: 286px;
    z-index: 4;
    
    ${media.desktop`
        width: 384px;
        height: 575px;
        top: 207px;
        right: 4.8%;

        @media screen and (max-width: 1400px) {
            top: 230px;
            width: 344px;
            height: 515px;
            right: 0;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;

export const BioTechPage = () => {
    return (
        <DefaultPage 
            pageId="biotech"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}