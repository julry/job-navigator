import styled from "styled-components";
import {Card, Image, FullTextWrapper, Title, Text} from './Elements';
import { media } from "../../styles/media";
import { ColoredSpan } from "../shared/Texts";
import {Post3Test} from './Post3Test';

const Circle = styled(Image)`
    top: -738px;
    right: -280px;

    width: 628px;
    height: 1209px;

    ${media.desktop`
        right: -270px;
    `}
`;

const Person = styled(Image)`
    top: 70px;
    right: -103px;
    width: 330px;
    height: 205px;
`;

const MobileImage = styled.div`
    width: 267px;
    height: 239px;
    display: flex;
    justify-content: center;
    background-image: url(${({$bg}) => $bg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    margin: auto;

    ${media.desktop`
        display: none;
    `}
`;

const DesktopBr = styled.br`
    display: none;

    ${media.desktop`
        display: block;
    `}
`;

const MobilePerson = styled.img`
    height: 100%;
    width: ${342 * 0.7}px;
    object-fit: contain;
`;

const DesktopImage = styled(Image)`
    display: none;
    
    ${media.desktop`
        display: block;
    `}
`;

const DesktopPerson = styled(DesktopImage)`
    right: -80px;
    top: 50%;
    transform: translateY(-46%);
    height: ${530 * 1.8}px;
    width: ${342 * 1.8}px;
    z-index: 1;
`;

const DesktopCircle = styled(DesktopImage)`
    right: 0;
    top: -10%;
    height: 120%;
    width: auto;
    z-index: 0;
`;

const FullTextStyled = styled(FullTextWrapper)`
    max-width: unset;

    ${media.desktop`
        & > * {
            max-width: unset;
        }
    `}
`;

const TextWrapperMaxWidth = styled.div`
    max-width: 560px;
`;

export const Post3 = ({bgCircle, bgCard, image, onClick, accentColor, textColor, textActive}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
            <DesktopCircle src={bgCircle} alt=""/>
            <FullTextStyled $color={textColor}>
                <Title>
                    <ColoredSpan $color={accentColor}>Интерактив:</ColoredSpan> Найди 5 ошибок в резюме студента</Title>
                <br/>
                <TextWrapperMaxWidth>
                    <Text>В каждом тексте мы спрятали ошибку. Сможешь найти их все?</Text>
                </TextWrapperMaxWidth>
                <DesktopBr />
                <MobileImage $bg={bgCard}>
                    <MobilePerson src={image}/>
                </MobileImage>
                <Post3Test defaultColor={textColor} accentColor={accentColor} textActive={textActive}/>
            </FullTextStyled>
        </>
    )
    const handleClick = () => {
        onClick?.({ModalComponent, isSmallModal: true});
    };

    return (
        <>
            <Card
                onClick={handleClick}
                title={<><ColoredSpan $color={accentColor}>Интерактив:</ColoredSpan>{'\n'}Найди 5 ошибок в резюме студента</>}
                desc={'В каждом тексте мы спрятали ошибку. Сможешь найти их все?'}>
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}