import styled from "styled-components";
import {Card, Image, FullTextWrapper, Title, Text, SmallText, OlStyled} from './Elements';
import { media } from "../../styles/media";
import { ColoredSpan } from "../shared/Texts";

const Circle = styled(Image)`
    top: -138px;
    right: -300px;

    width: 628px;
    height: 1209px;

    ${media.desktop`
        right: -270px;
    `}
`;

const Person = styled(Image)`
    top: 93px;
    right: -12px;
    width: 160px;
    height: 320px;

    ${media.desktop`
        right: 2px;
    `}
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
    width: 119px;
    object-fit: contain;
`;

const DesktopImage = styled(Image)`
    display: none;
    
    ${media.desktop`
        display: block;
    `}
`;

const DesktopPerson = styled(DesktopImage)`
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
    height: 518px;
    width: 291px;
    z-index: 1;
`;

const DesktopCircle = styled(DesktopImage)`
    right: 0;
    top: -5%;
    height: 110%;
    width: auto;
    z-index: 0;
`;


export const Post2Default = ({bgCircle, bgCard, config = {}, image, onClick, textColor}) => {
    const ModalComponent = (
        <>
            <DesktopPerson src={image} alt=""/>
                <DesktopCircle src={bgCircle} alt=""/>
                <FullTextWrapper $color={textColor}>
                    <Title>
                        {config.title}
                    </Title>
                    <br/>
                    <Text>{config.desc}</Text>
                    <DesktopBr />
                    <MobileImage $bg={bgCard}>
                        <MobilePerson src={image}/>
                    </MobileImage>
                    <OlStyled $markerColor={'var(--color-orange)'}>
                        {config.points?.map((point, index) => (
                            <>
                                <li>
                                    <SmallText><ColoredSpan>{point.title}</ColoredSpan></SmallText>
                                    <br/>
                                    {point.text && (
                                        <SmallText>{point.text}</SmallText>
                                    )}
                                    <br/>
                                    {point.additional && (
                                        point.additional
                                    )}
                                </li>
                                {index !== (config.points.length - 1) && (
                                    <br/>
                                )}
                            </>
                        ))}
                    </OlStyled>
                    {config.conclusion && (
                        <SmallText><ColoredSpan>{config.conclusion.title}</ColoredSpan></SmallText>
                    )}
                    {config.conclusion && (
                        <SmallText>{config.conclusion.text}</SmallText>
                    )}
                </FullTextWrapper>
        </>
    )
    const handleClick = () => {
        onClick?.({ModalComponent, isSmallModal: true});
    };

    return (
        <>
            <Card
                onClick={handleClick}
                title={config.title}
                desc={config.descSmall}
            >
                <Circle src={bgCircle} alt="" />
                <Person src={image} alt="" />
            </Card>
        </>
    )
}