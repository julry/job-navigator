import styled from "styled-components";
import { media } from "../styles/media";
import { Title, SmallText } from "./shared/Texts";
import { OrangeSpot } from "./shared/svg/OrangeSport";

const Wrapper = styled.div`
    position: relative;
    z-index: 0;
    height: ${({$isBrand, $wrapperHeight}) => $wrapperHeight ?? ($isBrand ? 725 : 575)}px;
    width: 100%;
    max-width: 851px;
    --afterHeight: 38px;
    padding: 0 !important;


    ${media.desktop`
        width: 60%;
        --afterHeight: 93px;
        height: 775px;
    `}
`;

const OrangeSpotStyled = styled(OrangeSpot)`
    position: absolute;
    top: ${({$spotTop}) => $spotTop ?? '30%'};
    left: 13%;
    width: 580px;
    height: 622px;

    ${media.desktop`
        width: 706px;
        height: 778px;
        top: 140px;
        left: 155px;
    `}
`;

const Content = styled.div`
    position: absolute;
    inset: 0;
    left: 1px;
    right: 1px;
    height: calc(100% + var(--afterHeight));
    background-color: var(--color-gray);
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 0 0 0 1px var(--color-white);
    overflow: hidden;
    
    padding: 30px 20px;

    ${media.desktop`
        padding: 40px 60px;
        border-top-left-radius: 72px;
        border-top-right-radius: 72px;
    `}

    & p, h3 {
        color: var(--color-white-text) !important;
    }
`;

const TextWrapper = styled.div`
    position: relative;
    z-index: 3;

    ${media.desktop`
       width: 430px;
    `}
`;

const TitleStyled = styled(Title)`
    position: relative;
    z-index: 3;
    font-size: ${({$size}) => $size}px;

    ${media.desktop`
       font-size: 50px;
    `}

    @media screen and (max-width: 334px) {
        font-size: ${({$size}) => $size * 0.8}px;
    }
`;

const SubTitle = styled(Title)`
    font-size: 20px;
    margin: 30px 0 20px;
    position: relative;
    z-index: 3;

    ${media.desktop`
        margin: 69px 0 30px;
       font-size: 24px;
    `}

    @media screen and (max-width: 334px) {
        font-size: 18px;
    }
`;

const TextMobile = styled(SmallText)`
    @media screen and (max-width: 1199px){
        font-size: 14px;
    }

    ${media.desktop`
        display: none;
    `}

    @media screen and (max-width: 334px) {
        font-size: 12px;
    }
`;
const TextDesktop = styled(SmallText)`
    @media screen and (max-width: 1199px){
        display: none;
    }
`;

export const AboutJob = ({ wrapperHeight, spotTop, isBrand, spotColor, jobTitleSize, jobTitle, jobDescription, jobDescriptionMob, textColor}) => (
    <Wrapper $isBrand={isBrand} $wrapperHeight={wrapperHeight}>
        <Content>
            <TitleStyled $size={jobTitleSize} $color={textColor}>{jobTitle}</TitleStyled>
            <SubTitle>чем занимаются специалисты</SubTitle>
            <TextWrapper>
                <TextDesktop>{jobDescription}</TextDesktop>
                <TextMobile>{jobDescriptionMob}</TextMobile>
            </TextWrapper>
            <OrangeSpotStyled $spotTop={spotTop} accentColor={spotColor}/>
        </Content>
    </Wrapper>
)