import styled from "styled-components";
import house from '../../assets/images/vtb/vtbHouse.png';
import money from '../../assets/images/vtb/vtbMoney.png';
import { InfoLine } from "../../components/shared/InfoLine";
import { NoTransformSpan, Subtitle, Text, ColoredSpan, Title } from "../../components/shared/Texts";
import { AbsoluteImage } from '../../components/shared/AbsoluteImage';
import { media } from "../../styles/media";
import { Button } from "../../components/shared/Button";

const TitleStyled = styled(Title)`
    font-size: 36px;

    ${media.desktop`
        width: 29vw;
        font-size: 52px;
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
    position: relative;
    flex: 1;
    background-color: ${({ $accentColor }) => $accentColor};
    padding: 20px;
    border-radius: 30px;
    z-index: 3;

    ${media.desktop`
        border-radius: 40px;
        padding: 30px 40px;
    `}
`;

const ButtonStyled = styled(Button)`
    margin-top: 40px;
    border: 1px solid ${({ $defaultColor }) => $defaultColor};
    background-color: var(--color-white);
    color:  ${({ $defaultColor }) => $defaultColor};
    
    ${media.desktop`
        background-color:  ${({ $accentColor }) => $accentColor};
        border: 1px solid ${({ $defaultColor }) => $defaultColor};
        color:  var(--color-white);

        &:hover {
            background-color: var(--color-white);
            color:  ${({ $defaultColor }) => $defaultColor};
        }
    `}
`;

const AbsolutImageStyled = styled(AbsoluteImage)`
    z-index: ${({$zIndex = 2}) => $zIndex};

    transform: rotate(${({$rotate = 0}) => $rotate}deg);

    ${media.desktop`
        right: ${({ $leftD, $rightD }) => $leftD ? 'auto' : $rightD}px;
        left: ${({ $leftD }) => $leftD ? $leftD + 'px' : 'auto'};
    `};
`;

const Money = styled(AbsolutImageStyled)`
    display: none;

    ${media.desktop`
        display: block;
        right: auto;
        left: ${({ $leftD }) => $leftD}px;
    `};
`;


export const About = ({ scrollToVacancy, defaultColor, accentColor }) => (
    <>  
        <TitleStyled $color={defaultColor}>работа{'\n'}в <ColoredSpan $color={accentColor}>ВТБ</ColoredSpan></TitleStyled>
        <AbsolutImageStyled
                src={house}
                alt=""
                $right={-50}
                $top={30}
                $width={412 * 0.5}
                $height={564 * 0.5}
                $leftD={250}
                $topD={155}
                $widthD={412}
                $heightD={564}
        />
        <AbsolutImageStyled
                src={money}
                alt=""
                $right={30}
                $top={200}
                $width={151 * 0.45}
                $height={81 * 0.45}
                $leftD={40}
                $topD={498}
                $widthD={151 * 1.3}
                $heightD={81 * 1.3}
                $zIndex={10}
        />
        <AbsolutImageStyled
                src={money}
                alt=""
                $right={90}
                $top={185}
                $width={151 * 0.6}
                $height={81 * 0.6}
                $leftD={253}
                $topD={406}
                $widthD={151}
                $heightD={81}
                $rotate={40}
                $zIndex={10}
        />
        <Money
            src={money}
            alt=""
            $right={-90}
            $top={750}
            $width={413 * 0.5}
            $height={532 * 0.5}
            $leftD={-5}
            $topD={278}
            $widthD={151 / 1.1}
            $heightD={81 / 1.1}
            $rotate={50}
        />
        <TextWrapper $accentColor={defaultColor}>
            
            <Subtitle $color={'var(--color-white-text)'}>
                ВТБ — один из крупнейших банков России, который задаёт тренды в финансовой сфере
            </Subtitle>
            <br />
            <Text $color={'var(--color-white-text)'}>
                более тысячи отделений банка
                <NoTransformSpan>
                {' '}в 1000+ городах от Калининграда до Владивостока
                </NoTransformSpan>
                . приходи
                на стажировку и погружайся
                в реальные задачи — с обучением, поддержкой и высокой зарплатой
            </Text>
            <br />
            <Text $color={accentColor}>
                в <NoTransformSpan>ВТБ</NoTransformSpan> ты сможешь:
            </Text>
            <br />
            <InfoLine svgColor={accentColor} defaultColor={'var(--color-white)'}>разобраться в банковских продуктах</InfoLine>
            <InfoLine svgColor={accentColor} defaultColor={'var(--color-white)'}>научиться подбирать самые подходящие решения для клиента</InfoLine>
            <InfoLine svgColor={accentColor} defaultColor={'var(--color-white)'}>работать с современными онлайн-сервисами, которые упрощают рутину</InfoLine>
            <InfoLine svgColor={accentColor} defaultColor={'var(--color-white)'}>
                получить стабильную работу с хорошей зарплатой, <NoTransformSpan>ДМС</NoTransformSpan>{' '}
и возможностью роста в крупном банке
</InfoLine>
            <br />
            <ButtonStyled onClick={scrollToVacancy} $defaultColor={defaultColor} $accentColor={accentColor}>приходи за новыми возможностями!</ButtonStyled>
        </TextWrapper>
    </>
)