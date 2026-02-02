import { useRef, useState } from "react";
import styled from "styled-components";
import { media } from "../../styles/media";
import { NoTransformSpan, SubtitleSm } from "../../components/shared/Texts";
import { AdvantageBlock } from "../../components/shared/AdvantageBlock";
import adv1 from '../../assets/images/vtb/vtbAdvent1.png';
import adv2 from '../../assets/images/vtb/vtbAdvent2.png';
import adv3 from '../../assets/images/vtb/vtbAdvent3.png';
import adv4 from '../../assets/images/vtb/vtbAdvent4.png';
import adv5 from '../../assets/images/vtb/vtbAdvent5.png';
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

    ${media.desktop`
        font-size: 20px;
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
                defaultColor={defaultColor} accentColor={accentColor}
                isActive={active === 'first'}
                onTouchStart={() => handleTouchStart('first')}
                infoComponent={
                    <InfoComponent $defaultColor={defaultColor}>
                        <Subtitle $color={accentColor}>
                            полноценная система обучения, наставничества и развития
                        </Subtitle>
                        <TextInfo $color={'var(--color-white)'}>
                            у тебя будет опытный наставник
                            и помощник по адаптации, который поможет освоить полезную информацию и влиться
                            в корпоративную культуру банка
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}

                >
                    полноценная{'\n'}система обучения,{'\n'}наставничества{'\n'}и развития
                </SubtitleSm>
                <AbsoluteImage
                    src={adv1}
                    alt=""
                    $right={10}
                    $top={0}
                    $width={179 * 0.8}
                    $height={210 * 0.8}
                    $rightD={5}
                    $topD={-10}
                    $widthD={179}
                    $heightD={210}
                />
            </AdvantageBlock>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}
                isActive={active === 'sec'}
                onTouchStart={() => handleTouchStart('sec')}
                infoComponent={
                    <InfoComponent $defaultColor={defaultColor}>
                        <Subtitle $color={accentColor}>
                            поддержка{'\n'}
                            персонального{'\n'}
                            развития
                        </Subtitle>
                        <TextInfo $color={'var(--color-white)'}>
                            компания предоставляет большую библиотеку курсов и помощь
                            в составлении индивидуального
                            плана для развития навыков
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    поддержка{'\n'}
                    персонального{'\n'}
                    развития
                </SubtitleSm>
                <AbsoluteImage
                    src={adv2}
                    alt=""
                    $right={0}
                    $top={-10}
                    $width={179 * 0.8}
                    $height={217 * 0.8}
                    $rightD={0}
                    $topD={-18}
                    $widthD={179}
                    $heightD={217}
                />
            </AdvantageBlock>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}
                isActive={active === 'third'}
                onTouchStart={() => handleTouchStart('third')}
                infoComponent={
                    <InfoComponent $defaultColor={defaultColor}>
                        <Subtitle $color={accentColor}>
                            корпоративные{'\n'}
                            плюшки
                        </Subtitle>
                        <TextInfo $color={'var(--color-white)'}>
                            у тебя будет полис <NoTransformSpan>ДМС</NoTransformSpan> со стоматологией, материальная помощь, скидки на связь, курсы, книги и многое другое
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    корпоративные{'\n'}плюшки
                </SubtitleSm>
                <AbsoluteImage
                    src={adv3}
                    alt=""
                    $right={0}
                    $top={5}
                    $width={194 * 0.8}
                    $height={196 * 0.8}
                    $rightD={0}
                    $topD={25}
                    $widthD={194 * 0.9}
                    $heightD={196 * 0.9}
                />
            </AdvantageBlock>
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}
                isActive={active === '4th'}
                onTouchStart={() => handleTouchStart('4th')}
                infoComponent={
                    <InfoComponent $defaultColor={defaultColor}>
                        <Subtitle $color={accentColor}>
                            комфортное{'\n'}
место работы
                        </Subtitle>
                        <TextInfo $color={'var(--color-white)'}>
                            у компании современный{'\n'}
и уютный офис в центре города
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    комфортное{'\n'}место работы
                </SubtitleSm>
                <AbsoluteImage
                    src={adv4}
                    alt=""
                    $right={14}
                    $top={5}
                    $width={190 * 0.8}
                    $height={198 * 0.8}
                    $rightD={90}
                    $topD={0}
                    $widthD={190}
                    $heightD={198}
                />
            </AdvantageBlock>
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}
             isActive={active === '5th'}
                onTouchStart={() => handleTouchStart('5th')}
                infoComponent={
                    <InfoComponent $defaultColor={defaultColor}>
                        <Subtitle $color={accentColor}>
                            корпоративные{'\n'}
                            плюшки
                        </Subtitle>
                        <TextInfo $color={'var(--color-white)'}>
                            регулярно проводятся онлайн и офлайн-корпоративы, квизы и вебинары, чтобы дружить с коллегами
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    тимбилдинги{'\n'}и крутая команда
                </SubtitleSm>
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