import styled from 'styled-components';
import { media } from '../../styles/media';
import { SubtitleSm, Text as SharedText } from '../shared/Texts';

const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    color: var(--color-white-text);
    cursor: pointer;

    & h3 {
        position: relative;
        z-index: 3;
    }

    ${media.desktop`
        padding: 25px 30px;
    `}
`;


export const Image = styled.img`
    position: absolute;
    object-fit: contain;
    z-index: 1;
`;

export const Title = styled.h3`
    font-size: 24px;
    line-height: 110%;
    white-space: pre-line;

    @media screen and (max-width: 360px) {
        font-size: 18px;
    }
`;

export const Text = styled(SubtitleSm)`
    font-size: 15px;

    ${media.tablet`
        font-size: 16px;
    `}
    ${media.desktop`
        font-size: 16px;
    `}

    @media screen and (max-width: 360px) {
        font-size: 13px;
    }
`;

const CardText = styled(Text)`
    max-width: 255px;

    ${media.desktop`
        max-width: 277px;
    `}
`;

export const SmallText = styled(SharedText)`
    ${media.tablet`
        font-size: 14px;
    `}

    ${media.desktop`
        font-size: 14px;
    `}
`;

export const FullTextWrapper = styled.div`
    position: relative;
    z-index: 3;
    max-width: 560px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;

    & p, h3, li, ul, a {
        color: ${({$color = 'var(--color-dark-text)'}) => $color} !important;
    }

    & a:active {
        color: ${({$color = 'var(--color-dark-text)'}) => $color} !important;
    }

    ${media.desktop`
        padding-right: 50px;
        max-width: unset;
        overflow-y: auto;
        overflow-x: hidden;

        & * {
            max-width: 560px;
        }
    `}
`;

export const UlStyled = styled.ul`
    padding-left: 14px;

    & li {
        font-size: 14px;
        line-height: 110%;

        &::marker {
            color: ${({$markerColor}) => $markerColor};
        }
    }
`;

export const OlStyled = styled.ol`
    padding-left: 20px;

    & li {
        font-size: 14px;
        line-height: 110%;

        &::marker {
            color: ${({$markerColor}) => $markerColor};
        }
    }
`;

export const Card = ({title, desc, ...props}) => (
    <Wrapper {...props}>
        <Title>{title}</Title>
        {props.children}
        <CardText $color="var(--color-white-text)">{desc}</CardText>
    </Wrapper>
)