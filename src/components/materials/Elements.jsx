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
`;

export const Title = styled.h3`
    font-size: 24px;
    line-height: 110%;
`;

export const Text = styled(SubtitleSm)`
    ${media.tablet`
        font-size: 16px;
    `}
    ${media.desktop`
        font-size: 16px;
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
    max-width: 510px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & p, h3, li, ul {
        color: ${({$color = 'var(--color-dark-text)'}) => $color} !important;
    }
`;

export const UlStyled = styled.ul`
    padding-left: 14px;


    & li {
        font-size: 14px;
        line-height: 110%;
        color: var(--color-dark-text);
    }
`;

export const Card = ({title, desc, ...props}) => (
    <Wrapper {...props}>
        <Title>{title}</Title>
        {props.children}
        <Text $color="var(--color-white-text)">{desc}</Text>
    </Wrapper>
)