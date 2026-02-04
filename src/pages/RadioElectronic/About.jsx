import { InfoLine } from "../../components/shared/InfoLine";
import { NoTransformSpan, Subtitle, Text, Title, ColoredSpan } from "../../components/shared/Texts";
import { AbsoluteImage } from '../../components/shared/AbsoluteImage';
import phone from '../../assets/images/beeline/beelineAbout1.png';
import plate from '../../assets/images/beeline/beelineAbout3.png';
import radio from '../../assets/images/beeline/beelinePhone2.png';
import { media } from "../../styles/media";
import styled from "styled-components";
import { Button } from "../../components/shared/Button";

const TitleStyled = styled(Title)`
    font-size: 36px;

    ${media.desktop`
        width: 440px;
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

export const About = ({ scrollToVacancy, defaultColor, accentColor }) => (
    <>
        <TitleStyled $color={defaultColor}>работа{'\n'}в <ColoredSpan $color={accentColor}>Билайне</ColoredSpan></TitleStyled>
        <AbsolutImageStyled
                src={phone}
                alt=""
                $right={-15}
                $top={100}
                $width={109 * 0.6}
                $height={176 * 0.6}
                $leftD={157}
                $topD={233}
                $widthD={109 * 1.2}
                $heightD={176 * 1.2}
        />
        <AbsolutImageStyled
                src={plate}
                alt=""
                $right={0}
                $top={40}
                $width={224 * 0.8}
                $height={141 * 0.8}
                $leftD={370}
                $topD={305}
                $widthD={224 * 1.5}
                $heightD={141 * 1.5}
                $zIndex={0}
        />

         <AbsolutImageStyled
                src={radio}
                alt=""
                $right={20}
                $top={100}
                $width={123 * 0.8}
                $height={292 * 0.8}
                $leftD={45}
                $topD={205}
                $widthD={123 * 2}
                $heightD={292 * 2}
        />
      
        <TextWrapper $accentColor={accentColor}>
            <Subtitle $color={defaultColor}>
               <NoTransformSpan>Билайн</NoTransformSpan> — один из лидеров телеком-рынка  <NoTransformSpan>России</NoTransformSpan>, создающий цифровую среду, в которой люди могут быть собой, творить и оставаться на связи с теми, кто им важен
            </Subtitle>
            <br />
            <Text $color={defaultColor}>
                сети и сервисы <NoTransformSpan>Билайна</NoTransformSpan> работают в сотнях городов, более 3000 отделений разбросаны по всей стране, а команда — это люди, которые не боятся предлагать новое и менять правила игры, потому что верят в идею
            </Text>
            <br />
            <Text $color={defaultColor}>
                здесь ищут не просто инженеров связи, а союзников, готовых менять ландшафт связи. ты получишь не просто обучение, а вызов, не просто наставника, а партнёра, который иногда верит в тебя больше, чем ты сам
            </Text>
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
            <br />
            <Text $color={defaultColor}>
                Слово за тобой, ресурсы, поддержка и доверие — за нами!
            </Text>
            <ButtonStyled onClick={scrollToVacancy} $defaultColor={defaultColor} $accentColor={accentColor}><NoTransformSpan>хочу попасть в{' '}Билайн!</NoTransformSpan></ButtonStyled>
        </TextWrapper>
    </>
)