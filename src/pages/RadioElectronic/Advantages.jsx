import { useRef, useState } from "react";
import styled from "styled-components";
import { media } from "../../styles/media";
import { AdvantageBlock } from "../../components/shared/AdvantageBlock";
import adv1 from '../../assets/images/beeline/beelineAdvant1.png';
import adv2 from '../../assets/images/beeline/beelineAdvant2.png';
import adv3 from '../../assets/images/beeline/beelineAdvant3.png';
import adv4 from '../../assets/images/beeline/beelineAdvant4.png';
import { AbsoluteImage } from "../../components/shared/AbsoluteImage";

const InfoComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ $defaultColor }) => $defaultColor};
    width: 100%;
    height: 100%;
    padding: 15px;

    ${media.desktop`
        padding: 25px;
    `}

`;

const Subtitle = styled.h3`
    font-size: 16px;
    line-height: 100%;
    color: ${({ $color }) => $color};
    white-space: pre-line;
    max-width: ${({$maxWidth}) => $maxWidth ?? 260}px;

    ${media.desktop`
        font-size: 20px;
        max-width: 350px;
    `}
`;

const TextInfo = styled.p`
    font-size: 14px;
    line-height: 100%;
    color: ${({ $color }) => $color};
    white-space: pre-line;

    ${media.desktop`
        font-size: 16px;
    `}
`;


const ImageWrapper = styled.div`
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    overflow: hidden;
    border-radius: 30px;
`;

export const Advantages = ({ defaultColor, accentColor }) => {
    const [active, setActive] = useState(false);

    const touchTimerRef = useRef();

    const handleTouchStart = (id) => {
        if (touchTimerRef.current) {
            clearTimeout(touchTimerRef.current);
        }

        if (active === id) {
            touchTimerRef.current = setTimeout(() => {
                setActive(undefined);
            }, 300);

            return;
        }
        setActive(id);
    };
    return (
        <>
            <AdvantageBlock
                isWide
                accentColor={defaultColor} defaultColor={accentColor}
                isActive={active === 'first'}
                onTouchStart={() => handleTouchStart('first')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            наставник и обучение{'\n'} за счет компании
                        </Subtitle>
                        <TextInfo $color={'var(--color-beeline-dark)'}>
                            опытный куратор поможет не растеряться и влиться в команду, а ещё составитдля тебя индивидуальный план обучения
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle 
                    $color={defaultColor}
                    $maxWidth={160}
                >
                     наставник и обучение{'\n'} за счет компании
                </Subtitle>
                <AbsoluteImage
                    src={adv1}
                    alt=""
                    $right={18}
                    $top={1}
                    $width={146}
                    $height={162}
                    $rightD={45}
                    $topD={2}
                    $widthD={169}
                    $heightD={198}
                />
            </AdvantageBlock>
             <AdvantageBlock isWide accentColor={defaultColor} defaultColor={accentColor}
                isActive={active === '4th'}
                onTouchStart={() => handleTouchStart('4th')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                           гибкий график и возможность
совмещения с учебой
                        </Subtitle>
                        <TextInfo $color={'var(--color-beeline-dark)'}>
                            обучение на практике: коллеги помогут разобраться и найти свой путь в профессии
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor} $maxWidth={180}>
                   гибкий график и возможность{'\n'}
совмещения с учебой
                </Subtitle>
                <ImageWrapper>
                    <AbsoluteImage
                    src={adv2}
                    alt=""
                    $right={8}
                    $top={26}
                    $width={154}
                    $height={136}
                    $rightD={20}
                    $topD={13}
                    $widthD={210}
                    $heightD={185}
                />
                </ImageWrapper>
            </AdvantageBlock>
            <AdvantageBlock accentColor={defaultColor} defaultColor={accentColor}
                isWide
                isActive={active === 'sec'}
                onTouchStart={() => handleTouchStart('sec')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            велком-пак{'\n'}
и корпоративные бонусы
                        </Subtitle>
                        <TextInfo $color={'var(--color-beeline-dark)'}>
                            тебе оплатят связь и выезды на объекты,
а ещё есть внутренние бонусные программы, скидки и другие приятные плюшки, которые делают работу веселее
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor} $maxWidth={180}>
                    велком-пак{'\n'}
и корпоративные бонусы
                </Subtitle>
                <AbsoluteImage
                    src={adv3}
                    alt=""
                    $right={8}
                    $top={17}
                    $width={146}
                    $height={146}
                    $rightD={25}
                    $topD={5}
                    $widthD={194}
                    $heightD={194}
                />
            </AdvantageBlock>
            <AdvantageBlock accentColor={defaultColor} defaultColor={accentColor}
            isWide
                isActive={active === 'third'}
                onTouchStart={() => handleTouchStart('third')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            корпоративные мероприятия и поддержка крутой команды
                        </Subtitle>
                        <TextInfo $color={'var(--color-beeline-dark)'}>
                            ты всегда сможешь обратиться за советом к наставнику, и подружиться с коллегами на корпоративах
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor} $maxWidth={180}>
                    корпоративные мероприятия и поддержка крутой команды
                </Subtitle>
                <ImageWrapper>
<AbsoluteImage
                    src={adv4}
                    alt=""
                    $right={24}
                    $top={24}
                    $width={125}
                    $height={138}
                    $rightD={44}
                    $topD={10}
                    $widthD={171}
                    $heightD={188}
                />
                </ImageWrapper>
                
            </AdvantageBlock>
           
        </>
    )
}