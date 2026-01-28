import styled from "styled-components";

export const Title = styled.h3`
    font-size: 40px;
    line-height: 100%;
    white-space: pre-line;
    color: ${({$color}) => $color ?? 'var(--color-gray)'};

    @media screen and (max-width: 374px) {
        font-size: 34px;
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