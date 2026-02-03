import styled from "styled-components";
import { DefaultPage } from "../components/DefaultPage"
import { media } from "../styles/media";
import { ImagePerson } from "../components/shared/ImagePerson";
import pers from '../assets/images/default/people/techcontrol.png';

const PersonWrapper = styled.div`
    position: absolute;
    top: 476px;
    right: -2px;
    width: 156px;
    height: 237px;
    
    ${media.desktop`
        width: 358px;
        height: 536px;
        top: 237px;
        right: 5.9%;

        @media screen and (max-width: 1400px) {
            transform: scale(0.8);
            top: 280px;
            right: -4%;
        }
    `}
`;

const Person = styled(ImagePerson)`
    inset: 0;
    width: 100%;
    height: 100%;
`;

export const TechcontrolPage = () => {
    return (
        <DefaultPage 
            pageId="techcontrol"
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt=""/>
                </PersonWrapper>
            }
        />
    )
}