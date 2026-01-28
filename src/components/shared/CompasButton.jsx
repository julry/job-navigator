import styled from "styled-components";
import compasBg from '../../assets/images/compas/compasMain.png';
import compasArrow from '../../assets/images/compas/compasArrow.png';
import compasText from '../../assets/images/compas/compasText.png';
import { media } from "../../styles/media";

const Wrapper = styled.button`
    position: absolute;
    z-index: 10;
    top: -50px;
    right: -10px;
    background: url(${compasBg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    display: none;

    width: 152px;
    height: 152px;

    ${media.desktop`
        display: block;
    `}
`;

const Element = styled.img`
    position: absolute;
    inset: 0;
    object-fit: contain;
    object-position: center center;
    height: 100%;
    width: 100%;
`;

const Arrow = styled(Element)`
    z-index: 2;
    transform-origin: 50% 50%;
    transition: transform 0.3s;

    &:hover {
        transform: rotate(-25deg);
    }
`;



export const CompasButton = ({onClick, className}) => {
    return (
        <Wrapper className={className} onClick={onClick}>
            <Element src={compasText} alt=""/>
            <Arrow src={compasArrow} alt=""/>
        </Wrapper>
    );
}