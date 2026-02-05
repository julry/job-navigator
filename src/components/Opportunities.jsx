import styled from "styled-components"
import { media } from "../styles/media";
import { ColoredSpan, NoTransformSpan, Text, Title } from "./shared/Texts";
import defaultMan from '../assets/images/default_man.png';
import { Button } from "./shared/Button";
import opp3Mobile from '../assets/images/lines/opp3mobile.png'
import opp4Mobile from '../assets/images/lines/opp4Mobile.png'
import opp5Mobile from '../assets/images/lines/opp5mobile.png'
import opp3 from '../assets/images/lines/opp3.png'
import opp4 from '../assets/images/lines/opp4.png'
import opp5 from '../assets/images/lines/opp5.png'

const Wrapper = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: inherit;
    padding-bottom: ${({$hasButton}) => $hasButton ? 135 : 0}px;

    gap: 30px;

    ${media.desktop`
        border-top-left-radius: 72px;
        border-top-right-radius: 72px;
        padding-bottom: ${({$hasButton, $length}) => $hasButton ? (385 - $length * 20) : 185}px;
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

    ${media.desktop`
        padding-top: 50px;
    `}
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
        grid-template-columns: 280px auto;
        grid-column-gap: 0;
        grid-row-gap: ${({ $gap }) => $gap ?? 10}px;
        justify-items: end;
    `}
`;

const StudentPic = styled.img`
    object-fit: contain;
    width: 216px;
    height: 385px;
    object-position: center center;
    margin-top: 30px;
    grid-area: 5/1/6/3;
    z-index: 4;

    ${media.desktop`
        position: absolute;
        margin-top: 0;
        top: 64px;
        left: 305px;
        width: 273px;
        height: 385px;
        grid-area: unset;
    `}
`;

const Opportunity = styled(Button)`
    max-width: 480px;
    ${({$blockTextSize}) => $blockTextSize ? 'font-size:' + $blockTextSize + 'px' : ''};
    ${({ $style }) => $style};

    ${media.desktop`
        max-width: 280px;
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
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left ?? 50}%;
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    z-index: 3;
    transform: translateX(-50%);

    & img {
        width: 100%; 
        height: 100%;
    }


    ${media.desktop`
        display: none;
    `}
`;

const LinesWrapperDesktop = styled(LinesWrapper)`
    display: none;
    transform: none;

    left: ${({ $left }) => $left}px;

    ${media.desktop`
        display: block;
    `}
`;

const ButtonStyled = styled(Button)`
    position: absolute;
    right: 0;
    bottom: 80px;

    ${media.desktop`
        bottom: 40px;
        max-width: min(838px, 58vw);
    `}
`;

const OpportunityHorizontal = styled(Opportunity)`
    border: 2px solid ${({$defaultColor}) => $defaultColor};
    background: var(--color-white);
    color: ${({$defaultColor}) => $defaultColor};
    grid-area: 2/2/3/3;
    z-index: 5;

    &:hover {
        background: ${({$defaultColor}) => $defaultColor};
        color: var(--color-white);
    }
`

const textVariants = {
    brand: 'перед тобой — карта роста в профессии. она показывает, с каких ролей можно начать и до чего дорасти\n\nсмотри разные ветки и выбирай, что тебе больше нравится!',
    default: 'тут ты можешь посмотреть варианты своей будущей профессии и узнать о карьерном росте на каждой позиции',
}

const OPPS_TO_LINES_DESK = {
    3: opp3,
    4: opp4,
    5: opp5,
};

const OPPS_TO_LINES_MOBILE = {
    3: opp3Mobile,
    4: opp4Mobile,
    5: opp5Mobile,
};

const OPPS_TO_STYLE_LINES_MOBILE = {
    3: {
        $top: 14,
        $width: 255,
        $height: 323,
    },
    4: {
        $top: 14,
        $width: 255,
        $height: 323,
    },
    5: {
        $top: 0,
        $width: 305,
        $height: 397,
    },
};

const OPPS_TO_STYLE_LINES_DESKTOP = {
    3: {
        $top: 32,
        $left: 261,
        $width: 192,
        $height: 145,
    },
    4: {
        $top: 32,
        $left: 261,
        $width: 199,
        $height: 190,
    },
    5: {
        $top: 25,
        $left: 247,
        $width: 224 * 0.9,
        $height: 299 * 0.9,
    }
};

const OPPS_TO_GAP_LINES_DESKTOP = {
    4: 20,
    3: 10,
    5: 10,
};

export const Opportunities = ({
    onClickOpp, companyName, defaultColor, hasButton, scrollToVacancy, opportunityLines, hasHorizontal,
    opportunities = [], person = defaultMan, textVariant = 'default', accentColor = 'var(--color-orange)'
}) => {
    return (
        <Wrapper $hasButton={hasButton} $length={opportunities.length}>
            <div>
                <Title $color={defaultColor}>дерево{'\n'}<ColoredSpan $color={accentColor}>возможностей</ColoredSpan> </Title>
                <TextBlock>
                    <Text $color={defaultColor}>{textVariants[textVariant]}</Text>
                </TextBlock>
            </div>
            <Info>
                <OpportunitiesBlock $gap={OPPS_TO_GAP_LINES_DESKTOP[opportunities.length]}>
                    {opportunities.map(({ text, style, id, blockTextSize }) => (
                        <Opportunity $blockTextSize={blockTextSize} $defaultColor={defaultColor} $accentColor={accentColor} key={id} onClick={() => onClickOpp(id)} $style={style}>{text}</Opportunity>
                    )
                    )}
                    {hasHorizontal && (
                        <OpportunityHorizontal onClick={() => onClickOpp('horizontal')} $defaultColor={defaultColor}>
                            переход между направлениями
                        </OpportunityHorizontal>
                    )}
                    <StudentPic src={person} alt="" />
                    {
                        !hasButton  && (
                            <Ellipse viewBox="0 0 733 590" fill="none">
                                <g filter="url(#filter0_f_1877_3504)">
                                    <path d="M1115 298.017C1115 394.284 929.848 492.739 607.5 489.942C285.152 487.145 100 387.582 100 298.017C100 200.532 304.961 100 607.5 100C910.04 100 1115 188.655 1115 298.017Z" fill={accentColor} />
                                    <path d="M607.5 105C758.353 105 884.548 127.112 972.836 162.637C1016.99 180.402 1051.42 201.425 1074.73 224.494C1098.01 247.53 1110 272.369 1110 298.018C1110 320.388 1099.25 343.4 1077.47 365.502C1055.68 387.612 1023.09 408.534 980.197 426.518C894.42 462.478 768.263 486.337 607.544 484.942C446.819 483.548 320.628 458.024 234.809 421.909C191.887 403.847 159.273 383.222 137.469 361.828C115.646 340.417 105 318.607 105 298.018C105 275.483 116.849 252.134 140.227 229.546C163.582 206.979 198.062 185.572 242.23 167.063C330.54 130.058 456.729 105 607.5 105Z" stroke={accentColor} strokeWidth="10" />
                                </g>
                                <g filter="url(#filter1_g_1877_3504)">
                                    <ellipse cx="620.67" cy="297.872" rx="455.838" ry="177.711" fill={accentColor} />
                                </g>
                                <defs>
                                    <filter id="filter0_f_1877_3504" x="0" y="0" width="1215" height="590" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1877_3504" />
                                    </filter>
                                    <filter id="filter1_g_1877_3504" x="64.832" y="20.1603" width="1111.68" height="555.422" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feTurbulence type="fractalNoise" baseFrequency="0.83333331346511841 0.83333331346511841" numOctaves="3" seed="4986" />
                                        <feDisplacementMap in="shape" scale="200" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
                                        <feMerge result="effect1_texture_1877_3504">
                                            <feMergeNode in="displacedImage" />
                                        </feMerge>
                                    </filter>
                                </defs>
                            </Ellipse>
                        )
                    }
                    <LinesWrapper {...(OPPS_TO_STYLE_LINES_MOBILE[opportunities.length] ?? {})}>
                         <img src={opportunityLines?.mob ?? OPPS_TO_LINES_MOBILE[opportunities.length]} alt="" />
                    </LinesWrapper>
                    <LinesWrapperDesktop {...(OPPS_TO_STYLE_LINES_DESKTOP[opportunities.length] ?? {})}>
                        <img src={opportunityLines?.desk ?? OPPS_TO_LINES_DESK[opportunities.length]} alt="" />
                    </LinesWrapperDesktop>
                    {hasHorizontal && opportunityLines?.additionaLine && (
                        <LinesWrapperDesktop $left={438} $top={59} $width={135} $height={76}>
                            <img src={opportunityLines?.additionaLine} alt=""/>
                        </LinesWrapperDesktop>
                    )}
                </OpportunitiesBlock>
                {hasButton && (
                    <ButtonStyled onClick={scrollToVacancy} $defaultColor={defaultColor} $accentColor={accentColor}>
                        откликайся{' '}<NoTransformSpan>{' '}в {companyName}!</NoTransformSpan>
                    </ButtonStyled>
                )}
            </Info>
        </Wrapper>
    )
}