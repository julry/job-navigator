import { InfoLine } from "../../components/shared/InfoLine";
import { NoTransformSpan, Subtitle, Text, Title, ColoredSpan } from "../../components/shared/Texts";
import { AbsoluteImage } from '../../components/shared/AbsoluteImage';
import house from '../../assets/images/lemana/lemanaBuilding.png';
import box from '../../assets/images/lemana/lemanaBox.png';
import { media } from "../../styles/media";
import styled from "styled-components";
import { Button } from "../../components/shared/Button";

const TitleStyled = styled(Title)`
    font-size: 36px;

    ${media.desktop`
        max-width: 440px;
    `}

    @media screen and (max-width: 374px) {
        font-size: 30px;
    }

    @media screen and (max-width: 334px) {
        font-size: 26px;
    }
`

const TextWrapper = styled.div`
    flex: 1;
    position: relative;
    z-index: 2;
    background-color: ${({ $accentColor }) => $accentColor};
    padding: 20px;
    border-radius: 30px;

    ${media.desktop`
        border-radius: 40px;
        padding: 30px 40px;
    `}
`;


const ButtonStyled = styled(Button)`
    margin-top: 40px;

    ${media.desktop`
        background-color: var(--color-white);
        border: 1px solid ${({ $defaultColor }) => $defaultColor};
        color:  ${({ $defaultColor }) => $defaultColor};

        &:hover {
            color: var(--color-white);
            background-color: ${({ $defaultColor }) => $defaultColor};
        }
    `}
`;

const AbsolutImageStyled = styled(AbsoluteImage)`
    z-index: ${({$zIndex = 10}) => $zIndex};
    transform: rotate(${({$rotate}) => $rotate}deg);
    ${media.desktop`
        transform: rotate(${({$rotateD}) => $rotateD}deg);
        right: ${({ $leftD, $rightD }) => $leftD ? 'auto' : $rightD}px;
        left: ${({ $leftD }) => $leftD ? $leftD + 'px' : 'auto'};
    `};
`;

const MobileAbsolutImageStyled = styled(AbsolutImageStyled)`
    ${media.desktop`
        display: none;
    `};
`;


export const About = ({ defaultColor, accentColor, scrollToVacancy }) => (
    <>
        <TitleStyled $color={defaultColor}>работа в <ColoredSpan $color={accentColor}>Лемана ПРО</ColoredSpan></TitleStyled>
        <AbsolutImageStyled
                src={house}
                alt=""
                $right={-90}
                $top={-10}
                $width={500 * 0.5}
                $height={350 * 0.5}
                $leftD={195}
                $topD={195}
                $widthD={500}
                $heightD={350}
                $zIndex={0}
        />
        <AbsolutImageStyled
                src={box}
                alt=""
                $right={90}
                $top={50}
                $width={63}
                $height={58}
                $rotate={-35}
                $rotateD={-35}
                $leftD={-40}
                $topD={355}
                $widthD={63 * 3}
                $heightD={58 * 3}
        />

         <AbsolutImageStyled
                src={box}
                alt=""
                $right={-20}
                $top={80}
                $rotate={-25}
                $rotateD={15}
                $width={63}
                $height={58}
                $leftD={275}
                $topD={405}
                $widthD={63 * 3}
                $heightD={58 * 3}
        />
         <AbsolutImageStyled
                src={box}
                alt=""
                $right={5}
                $top={190}
                $rotate={10}
                $rotateD={10}
                $width={63 * 1.2}
                $height={58 * 1.2}
                $leftD={145}
                $topD={555}
                $widthD={63 * 3}
                $heightD={58 * 3}
        />
        <MobileAbsolutImageStyled
                src={box}
                alt=""
                $right={0}
                $top={630}
                $width={63}
                $height={58}
                $rotate={-35}
                $leftD={195}
                $topD={195}
                $widthD={500}
                $heightD={350}
        />
        <TextWrapper $accentColor={accentColor}>
            
            <Subtitle $color={defaultColor}>
                <NoTransformSpan>Лемана ПРО</NoTransformSpan> — компания-платформа, предлагающая широкий ассортимент товаров для строительства, отделки и обустройства дома и дачи. В центре нашего внимания человек — клиент, сотрудник, партнёр
            </Subtitle>
            <br />
            <Text $color={defaultColor}>
                наша торговая и логистическая экосистема — это 100+ гипермаркетов{' '}
в 60+ городах России, более 40 тысяч сотрудников, 11 дарксторов,{' '}
6 распределительных центров и интернет-магазинов. здесь можно начать карьеру с оплачиваемой практики или прийти работать на полный день
            </Text>
            <br />
            <Text $color={"var(--color-white)"}>
                в <NoTransformSpan>Лемана ПРО</NoTransformSpan> ты сможешь:
            </Text>
            <br />
            <InfoLine defaultColor={defaultColor} svgColor={"var(--color-white)"}>отвечать за ассортимент, закупки или логистику </InfoLine>
            <InfoLine defaultColor={defaultColor} svgColor={"var(--color-white)"}>помогать людям обустраивать свой дом и пространство вокруг него </InfoLine>
            <InfoLine defaultColor={defaultColor} svgColor={"var(--color-white)"}>строить карьеру в разных городах и направлениях (магазины, склады, офисы) внутри одной компании</InfoLine>
            <InfoLine defaultColor={defaultColor} svgColor={"var(--color-white)"}>сразу видеть результат своей работы на полках магазинов и складов</InfoLine>
            <InfoLine defaultColor={defaultColor} svgColor={"var(--color-white)"}>расти в профессии и в должности</InfoLine>
            <br />
            <Text $color={defaultColor}>
                проектируй будущее в команде <NoTransformSpan>Лемана ПРО</NoTransformSpan> 
            </Text>
            <ButtonStyled onClick={scrollToVacancy} $defaultColor={defaultColor} $accentColor={accentColor}><NoTransformSpan>хочу попасть в{' '}Лемана ПРО!</NoTransformSpan></ButtonStyled>
        </TextWrapper>
    </>
)