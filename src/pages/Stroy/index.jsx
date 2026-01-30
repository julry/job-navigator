import styled from "styled-components";
import { BrandPage } from "../../components/BrandPage"
import { media } from "../../styles/media";
import { ImagePerson } from "../../components/shared/ImagePerson";
import pers from '../../assets/images/default/people/stroy.png';
import addPicture from '../../assets/images/alabuga/alabugaAddBot.png';
import alabugaStudent from '../../assets/images/alabuga/alabugaStudent.png';
import { About } from "./About";
import { LogoComponent } from "./Logo";
import { Advantages } from "./Advantages";

const PersonWrapper = styled.div`
    position: absolute;
    top: 443px;
    right: -34px;
    width: 202px;
    height: 309px;
    transform: scale(-1, 1);
    z-index: 4;
    
    ${media.desktop`
        width: 281px;
        height: 485px;
        top: 202px;
        right: 12.8%;
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


export const StroyPage = () => {
    return (
        <BrandPage
            pageId="stroy"
            defaultColor={'var(--color-alabuga-blue)'}
            accentColor={'var(--color-alabuga-accent)'}
            addPicture={addPicture}
            opportunityPerson={alabugaStudent}
            companyName='«Алабуга Девелопмент»'
            personComponent={
                <PersonWrapper>
                    <Person src={pers} alt="" />
                </PersonWrapper>
            }
            aboutComponent={<About defaultColor={'var(--color-alabuga-blue)'} />}
            logoComponent={<LogoComponent />}
            advantageComponent={<Advantages defaultColor={'var(--color-alabuga-blue)'}  accentColor={'var(--color-alabuga-accent)'} />}
        />
    )
}