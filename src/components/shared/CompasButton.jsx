import styled from "styled-components";
import compasBg from '../../assets/images/compas/compasMain.webp';
import compasArrow from '../../assets/images/compas/compasArrow.webp';
import compasText from '../../assets/images/compas/compasText.png';

const Wrapper = styled.button`
    position: absolute;
    z-index: 10;
    top: -50px;
    right: -10px;
    background: url(${({$bg}) => $bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    width: 152px;
    height: 152px;
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


export const CompasButton = ({onClick, compasCustomBg, compasCustomArrow, compasCustomElement, className}) => {
    return (
        <Wrapper $bg={compasCustomBg ?? compasBg} className={className} onClick={onClick}>
            <Element src={compasCustomElement ?? compasText} alt=""/>
            <Arrow src={compasCustomArrow ?? compasArrow} alt=""/>
        </Wrapper>
    );
}