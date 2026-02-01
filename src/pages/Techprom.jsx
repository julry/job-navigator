import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import persD from '../assets/images/default/people/techprom.png';
import pers from '../assets/images/default/people/techpromCut.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 376px;
    right: -13px;
    width: 186px;
    height: 237px;
    
    ${media.desktop`
        width: 334px;
        height: 501px;
        top: 290px;
        right: 5.9%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 300px;
            right: 3%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
    
    ${media.desktop`
        display: none;
    `}
`;

const PersonDesktop = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;   
    display: none;

    ${media.desktop`
        display: block;
    `}
`;

export const TechpromPage = () => {
    return (
        <DefaultPage 
            pageId="techprom"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                    <PersonDesktop src={persD} alt=""/>
                </PersonWrapper>
            }
        />
    )
}