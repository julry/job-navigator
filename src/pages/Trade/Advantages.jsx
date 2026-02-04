import { useRef, useState } from "react";
import styled from "styled-components";
import { media } from "../../styles/media";
import { AdvantageBlock } from "../../components/shared/AdvantageBlock";
import adv1 from '../../assets/images/lemana/lemanaAdvant1.png';
import adv2 from '../../assets/images/lemana/lemanaAdvant2.png';
import adv3 from '../../assets/images/lemana/lemanaAdvant3.png';
import adv4 from '../../assets/images/lemana/lemanaAdvant4.png';
import adv5 from '../../assets/images/lemana/lemanaAdvant5.png';
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
    max-width: 260px;

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
                accentColor={defaultColor} defaultColor={accentColor}
                isActive={active === 'first'}
                onTouchStart={() => handleTouchStart('first')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            официальное{'\n'}
                            трудоустройство{'\n'}
                            и оклад с 1-го дня{'\n'}
                            на полной ставке
                        </Subtitle>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor}
                >
                    официальное{'\n'}
                    трудоустройство{'\n'}
                    и оклад с 1-го дня{'\n'}
                    на полной ставке
                </Subtitle>
                <AbsoluteImage
                    src={adv1}
                    alt=""
                    $right={-15}
                    $top={-40}
                    $width={179}
                    $height={210}
                    $rightD={-25}
                    $topD={-50}
                    $widthD={179 * 1.1}
                    $heightD={210 * 1.1}
                />
            </AdvantageBlock>
            <AdvantageBlock accentColor={defaultColor} defaultColor={accentColor}
                isActive={active === 'sec'}
                onTouchStart={() => handleTouchStart('sec')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            свобода{'\n'}
                            передвижений
                        </Subtitle>
                        <TextInfo $color={'var(--color-lemana-dark)'}>
                            ты можешь строить карьеру
                            в разных городах и отделах внутри одной и той же компании
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor}>
                    свобода{'\n'}
                    передвижений
                </Subtitle>
                <AbsoluteImage
                    src={adv2}
                    alt=""
                    $right={20}
                    $top={-10}
                    $width={179 * 0.8}
                    $height={217 * 0.8}
                    $rightD={20}
                    $topD={-28}
                    $widthD={179}
                    $heightD={217}
                />
            </AdvantageBlock>
            <AdvantageBlock accentColor={defaultColor} defaultColor={accentColor}
                isActive={active === 'third'}
                onTouchStart={() => handleTouchStart('third')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            корпоративная{'\n'}
                            поддержка
                        </Subtitle>
                        <TextInfo $color={'var(--color-lemana-dark)'}>
                            компенсация питания и мобильной связи, транспорт от компании, стильная форма, тренажерный зал
                            в каждом подразделении
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor}>
                    корпоративная{'\n'}
                    поддержка
                </Subtitle>
                <ImageWrapper>
<AbsoluteImage
                    src={adv3}
                    alt=""
                    $right={-120}
                    $top={-65}
                    $width={337 * 1.3}
                    $height={198 * 1.3}
                    $rightD={-158}
                    $topD={-85}
                    $widthD={337 * 1.7}
                    $heightD={198 * 1.7}
                />
                </ImageWrapper>
                
            </AdvantageBlock>
            <AdvantageBlock isWide accentColor={defaultColor} defaultColor={accentColor}
                isActive={active === '4th'}
                onTouchStart={() => handleTouchStart('4th')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            программы ускоренного развития{' '}
и понятный план роста в профессии{' '}
от новичка до специалиста
                        </Subtitle>
                        <TextInfo $color={'var(--color-lemana-dark)'}>
                            обучение на практике: коллеги помогут разобраться и найти свой путь в профессии
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor}>
                   программы ускоренного развития{' '}
и понятный план роста в профессии{' '}
от новичка до специалиста
                </Subtitle>
                <ImageWrapper>
                    <AbsoluteImage
                    src={adv4}
                    alt=""
                    $right={-30}
                    $top={5}
                    $width={190 * 0.8}
                    $height={198 * 0.8}
                    $rightD={10}
                    $topD={0}
                    $widthD={190}
                    $heightD={198}
                />
                </ImageWrapper>
            </AdvantageBlock>
            <AdvantageBlock isWide accentColor={defaultColor} defaultColor={accentColor}
                isActive={active === '5th'}
                onTouchStart={() => handleTouchStart('5th')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            крутая команда
{'\n'}и атмосфера
                        </Subtitle>
                        <TextInfo $color={'var(--color-lemana-dark)'}>
                            молодое комьюнити, проводятся экскурсии{' '}
и ярмарки вакансий, есть свой карьерный портал для студентов 
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <Subtitle $color={defaultColor}>
                   крутая команда
{'\n'}и атмосфера
                </Subtitle>
                <AbsoluteImage
                    src={adv5}
                    alt=""
                    $right={8}
                    $top={13}
                    $width={171 * 0.8}
                    $height={188 * 0.8}
                    $rightD={100}
                    $topD={10}
                    $widthD={171}
                    $heightD={188}
                />
            </AdvantageBlock>
        </>
    )
}