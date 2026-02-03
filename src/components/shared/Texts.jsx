import styled from "styled-components";
import { media } from "../../styles/media";

export const Title = styled.h3`
    font-size: 40px;
    line-height: 100%;
    white-space: pre-line;
    color: ${({$color}) => $color ?? 'var(--color-gray)'};

    @media screen and (max-width: 374px) {
        font-size: 34px;
    }

    @media screen and (max-width: 334px) {
        font-size: 30px;
    }

    @media screen and (min-width: 1200px){
        font-size: 42px;
    }
`;

export const Text = styled.p`
    font-size: 14px;
    line-height: 110%;
    white-space: pre-line;

    color: ${({$color}) => $color ?? 'var(--color-gray)'};

    @media screen and (min-width: 1200px){
        font-size: 16px;
    }

    @media screen and (max-width: 334px) {
        font-size: 12px;
    }
`;

export const SmallText = styled.p`
    font-size: 12px;

    line-height: 110%;
    white-space: pre-line;

    color: ${({$color}) => $color ?? 'var(--color-gray)'};

    @media screen and (max-width: 360px) {
        font-size: 10px;
    }
`;

export const ColoredSpan = styled.span`
    color: ${({$color = 'var(--color-orange)'}) => $color};
`;

export const Subtitle = styled(Title)`
    font-size: 20px;

    @media screen and (max-width: 374px) {
        font-size: 18px;
    }

    @media screen and (max-width: 334px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1200px){
        font-size: 24px;
    }
`;

export const SubtitleSm = styled(Title)`
    font-size: 16px;

    @media screen and (max-width: 374px) {
        font-size: 14px;
    }

    @media screen and (max-width: 334px) {
        font-size: 12px;
    }

    @media screen and (min-width: 1200px){
        font-size: 24px;
    }

    @media screen and (min-width: 1200px) and (max-width: 1300px) {
        font-size: 20px;
    }
`;

export const NoTransformSpan = styled.span`
    text-transform: none;
`;

export const NoDesktop = styled.span`
    ${media.desktop`
        display: none;
    `}
`;
export const TextDesk = styled.span`
    display: none;
    ${media.desktop`
        display: inline;
    `}
`;

export const ShortScreen = styled.span`
    @media screen and (min-width: 1320px){
        display: none;
    }
`;