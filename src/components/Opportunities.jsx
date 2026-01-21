import styled from "styled-components"
import { media } from "../styles/media";
import { ColoredSpan, Text, Title } from "./shared/Texts";
import defaultMan from '../assets/images/default_man.png';
import { Button } from "./shared/Button";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    gap: 30px;

    ${media.desktop`
        padding-bottom: 185px;
        flex-direction: row;
        justify-content: space-between;
    `}
`;

const TextBlock = styled.div`
    margin-top: 20px;
    max-width: 440px;
`;

const Info = styled.div`
    width: 100%;
    flex: 1;
`;

const OpportunitiesBlock = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;    
    align-items: center;


    ${media.desktop`
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        justify-items: center;
    `}
`;

const StudentPic = styled.img`
    object-fit: contain;
    width: 216px;
    height: 385px;
    object-position: center center;
    margin-top: 30px;
    grid-area: 5/1/6/3;
    z-index: 2;

    ${media.desktop`
        position: absolute;
        margin-top: 0;
        top: 64px;
        left: 330px;
        width: 273px;
        height: 385px;
        grid-area: unset;
    `}
`;

const Opportunity = styled(Button)`
    max-width: 480px;

    ${({$style}) => $style};

    ${media.desktop`
        max-width: 281px;
    `}
`;

const Ellipse = styled.svg`
    position: absolute;
    width: 540px;
    height: 510px;
    right: -90px;
    bottom: -100px;
    z-index: 1;
   
    ${media.tablet`
        right: -40px;
    `};

    ${media.desktop`
        width: 633px;
        height: 490px;
        bottom: -280px;
        right: -68px;
        /* right: -350px; */
    `}
`

const LinesWrapper = styled.div`
    position: absolute;
    top: ${({$top}) => $top}px;
    left: ${({$left}) => $left}px;
    width: ${({$width}) => $width}px;
    height: ${({$height}) => $height}px;
`;

const textVariants = {
    brand: 'перед тобой — карта роста в профессии. она показывает, с каких ролей можно начать и до чего дорасти\n\nсмотри разные ветки и выбирай, что тебе больше нравится!',
    default: 'перед тобой — карта роста в профессии. она показывает, с каких ролей можно начать и до чего дорасти\n\nсмотри разные ветки и выбирай, что тебе больше нравится!',
}

export const Opportunities = ({ hasButton, linesSvg, textColor, opportunities = [], person = defaultMan, textVariant = 'default', accentColor = 'var(--color-orange)' }) => {
    return (
        <Wrapper>
            <div>
                <Title $color={textColor}>дерево{'\n'}<ColoredSpan $color={accentColor}>возможностей</ColoredSpan> </Title>
                <TextBlock>
                    <Text $color={textColor}>{textVariants[textVariant]}</Text>
                </TextBlock>
            </div>
            <Info>
                <OpportunitiesBlock>
                        {opportunities.map(({text, style, link}) => (
                            <Opportunity $style={style}>{text}</Opportunity>
                        )
                    )}
                    <StudentPic src={person} alt="" />
                    <Ellipse viewBox="0 0 733 590" fill="none">
                        <g filter="url(#filter0_f_1877_3504)">
                        <path d="M1115 298.017C1115 394.284 929.848 492.739 607.5 489.942C285.152 487.145 100 387.582 100 298.017C100 200.532 304.961 100 607.5 100C910.04 100 1115 188.655 1115 298.017Z" fill={accentColor}/>
                        <path d="M607.5 105C758.353 105 884.548 127.112 972.836 162.637C1016.99 180.402 1051.42 201.425 1074.73 224.494C1098.01 247.53 1110 272.369 1110 298.018C1110 320.388 1099.25 343.4 1077.47 365.502C1055.68 387.612 1023.09 408.534 980.197 426.518C894.42 462.478 768.263 486.337 607.544 484.942C446.819 483.548 320.628 458.024 234.809 421.909C191.887 403.847 159.273 383.222 137.469 361.828C115.646 340.417 105 318.607 105 298.018C105 275.483 116.849 252.134 140.227 229.546C163.582 206.979 198.062 185.572 242.23 167.063C330.54 130.058 456.729 105 607.5 105Z" stroke={accentColor} stroke-width="10"/>
                        </g>
                        <g filter="url(#filter1_g_1877_3504)">
                        <ellipse cx="620.67" cy="297.872" rx="455.838" ry="177.711" fill={accentColor}/>
                        </g>
                        <defs>
                        <filter id="filter0_f_1877_3504" x="0" y="0" width="1215" height="590" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1877_3504"/>
                        </filter>
                        <filter id="filter1_g_1877_3504" x="64.832" y="20.1603" width="1111.68" height="555.422" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feTurbulence type="fractalNoise" baseFrequency="0.83333331346511841 0.83333331346511841" numOctaves="3" seed="4986" />
                        <feDisplacementMap in="shape" scale="200" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                        <feMerge result="effect1_texture_1877_3504">
                        <feMergeNode in="displacedImage"/>
                        </feMerge>
                        </filter>
                        </defs>
                    </Ellipse>
                    <LinesWrapper $top={linesSvg.top} $left={linesSvg.left} $width={linesSvg.width} $height={linesSvg.height}>
                        {linesSvg.image()}
                    </LinesWrapper>
                </OpportunitiesBlock>
            </Info>
        </Wrapper>
    )
}