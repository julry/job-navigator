import { InfoLine } from "../../components/shared/InfoLine";
import { NoTransformSpan, Subtitle, Text, Title, TextDesk, ColoredSpan } from "../../components/shared/Texts";
import { AbsoluteImage } from '../../components/shared/AbsoluteImage';
import house from '../../assets/images/alabuga/alabugaH.png';
import kran from '../../assets/images/alabuga/alabugaK.png';
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
        background-color:  ${({ $accentColor }) => $accentColor};
        border: 1px solid ${({ $defaultColor }) => $defaultColor};
        color:  ${({ $defaultColor }) => $defaultColor};

        &:hover {
            color: var(--color-white);
            background-color:  ${({ $defaultColor }) => $defaultColor};
        }
    `}
`;

const AbsolutImageStyled = styled(AbsoluteImage)`
    ${media.desktop`
        right: ${({ $leftD, $rightD }) => $leftD ? 'auto' : $rightD}px;
        left: ${({ $leftD }) => $leftD ? $leftD + 'px' : 'auto'};
    `};
`;

const Kran = styled(AbsolutImageStyled)`
    transform: rotate(-10deg) scale(-1,1);

    ${media.desktop`
        transform: none;
        right: auto;
        left: ${({ $leftD }) => $leftD}px;
    `};
`;

const HouseSm = styled(AbsoluteImage)`
    transform: rotate(30deg);
`;

export const About = ({ defaultColor, accentColor }) => (
    <>
        <TitleStyled $color={defaultColor}>работа в <ColoredSpan $color={accentColor}>«Алабуга Девелопмент»</ColoredSpan></TitleStyled>
        <TextWrapper $accentColor={accentColor}>
            <AbsolutImageStyled
                src={house}
                alt=""
                $right={-90}
                $top={750}
                $width={413 * 0.5}
                $height={532 * 0.5}
                $leftD={255}
                $topD={195}
                $widthD={413}
                $heightD={532}
            />
            <HouseSm
                src={house}
                alt=""
                $right={-20}
                $top={1000}
                $width={413 * 0.25}
                $height={532 * 0.25}
                $leftD={-4000}
                $topD={-4000}
                $widthD={0}
                $heightD={0}
            />
            <Kran
                src={kran}
                alt=""
                $right={-20}
                $top={10}
                $width={357 * 0.5}
                $height={483 * 0.5}
                $leftD={-30}
                $topD={153}
                $widthD={357}
                $heightD={483}
            />
            <Subtitle $color={defaultColor}>«Алабуга Девелопмент» — это сильная команда, ключевой застройщик и управляющая компания крупнейшей в России Особой экономической зоны «Алабуга»</Subtitle>
            <br />
            <Text $color={defaultColor}>
                здесь реализуется полный цикл, от идеи до сдачи объекта: мы работаем
                с мировыми заказчиками и воплощаем в жизнь большие строительные проекты
            </Text>
            <br />
            <Text $color={defaultColor}>
                за 16 лет мы реализовали 50+ проектов и построили инфраструктуру на 1,1 млрд долларов.
            </Text>
            <br />
            <Text $color={defaultColor}>
                у нас одна из сильнейших в стране команд: 800 инженеров, 60 сертифицированных руководителей проектов и центр компетенций по BIM-технологиям
            </Text>
            <br />
            <Text $color={defaultColor}>
                здесь можно начать с оплачиваемой практики и вырасти до руководителя проектов
            </Text>
            <br />
            <Text $color={defaultColor}>
                в <NoTransformSpan>«Алабуга Девелопмент»</NoTransformSpan> ты сможешь:
            </Text>
            <br />
            <InfoLine defaultColor={defaultColor}>работать над проектами мирового уровня</InfoLine>
            <InfoLine defaultColor={defaultColor}>получить опыт под руководством опытного наставника</InfoLine>
            <InfoLine defaultColor={defaultColor}>получать высокую зарплату: 120+ тысяч рублей на стартовых позициях</InfoLine>
            <InfoLine defaultColor={defaultColor}>освоить современные технологии, включая BIM, и расти профессионально</InfoLine>
            <br />
            <Text $color={defaultColor}>
                Здесь ждут мотивированных студентов, которые ценят точность, готовы
                к детальной работе и хотят строить будущее в буквальном смысле.
                Приходи за масштабными задачами!
            </Text>
            <ButtonStyled $defaultColor={defaultColor} $accentColor={accentColor}>хочу{' '}<TextDesk>попасть{' '}</TextDesk>в{' '}<NoTransformSpan>«Алабуга Девелопмент»</NoTransformSpan>!</ButtonStyled>
        </TextWrapper>
    </>
)