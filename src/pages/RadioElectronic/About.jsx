import { InfoLine } from "../../components/shared/InfoLine";
import { NoTransformSpan, Subtitle, Text, Title, ColoredSpan } from "../../components/shared/Texts";
import { AbsoluteImage } from '../../components/shared/AbsoluteImage';
import house from '../../assets/images/beeline/beelineAbout1.png';
import box from '../../assets/images/beeline/beelineAbout3.png';
import radio from '../../assets/images/beeline/beelinePhone2.png';
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
    background-color: var(--color-white);
    color:  ${({ $defaultColor }) => $defaultColor};

    ${media.desktop`
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


export const About = ({ defaultColor, accentColor }) => (
    <>
        <TitleStyled $color={defaultColor}>работа в <ColoredSpan $color={accentColor}>Билайне</ColoredSpan></TitleStyled>
        {/* <AbsolutImageStyled
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
        /> */}
        <TextWrapper $accentColor={accentColor}>
            
            <Subtitle $color={defaultColor}>
               <NoTransformSpan>Билайн</NoTransformSpan> — один из лидеров телекоммуникационного рынка России, который создаёт цифровую инфраструктуру для миллионов людей
            </Subtitle>
            <br />
            <Text $color={defaultColor}>
                сети и сервисы <NoTransformSpan>Билайна</NoTransformSpan> работают в сотнях городов, более 3000 отделений разбросаны по всей стране. В <NoTransformSpan>Билайне</NoTransformSpan> очень ждут инженеров связи — здесь тебя обеспечат обучением, поддержкой наставника, конкурентной зарплатой и крутой корпоративной культурой
            </Text>
            <br />
            <Text $color={defaultColor}>
                в <NoTransformSpan>Билайне</NoTransformSpan>:
            </Text>



            <br />
            <InfoLine defaultColor={defaultColor}>развивают мобильную и фиксированную связь </InfoLine>
            <InfoLine defaultColor={defaultColor}>внедряют передовые <NoTransformSpan>технологии 5G и IoT</NoTransformSpan> </InfoLine>
            <InfoLine defaultColor={defaultColor}>обеспечивают надёжное соединение для бизнеса и частных клиентов</InfoLine>
            <br />
            <Text $color={defaultColor}>
                Можно начать карьеру с позиции стажёра, инженера или монтажника — и вырасти до руководителя команды
            </Text>
            <ButtonStyled $defaultColor={defaultColor} $accentColor={accentColor}><NoTransformSpan>хочу попасть в{' '}Билайн!</NoTransformSpan></ButtonStyled>
        </TextWrapper>
    </>
)