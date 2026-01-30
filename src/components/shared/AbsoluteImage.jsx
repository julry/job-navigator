import styled from "styled-components";
import { media } from "../../styles/media";

export const AbsoluteImage = styled.img`
    position: absolute;
    z-index: 10;
    object-fit: contain;
    top: ${({$top}) => $top}px;
    right: ${({$right}) => $right}px;
    width: ${({$width}) => $width}px;
    height: ${({$height}) => $height}px;

    ${media.desktop`
        top: ${({$topD}) => $topD}px;
        right: ${({$rightD}) => $rightD}px;
        width: ${({$widthD}) => $widthD}px;
        height: ${({$heightD}) => $heightD}px;
    `}
`;