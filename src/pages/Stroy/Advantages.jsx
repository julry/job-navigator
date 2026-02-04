import { useRef, useState } from "react"
import { NoTransformSpan, SubtitleSm } from "../../components/shared/Texts";
import { AdvantageBlock } from "../../components/shared/AdvantageBlock";
import adv1 from '../../assets/images/alabuga/alabugaAdvant1.png';
import adv2 from '../../assets/images/alabuga/alabugaAdvant2.png';
import adv3 from '../../assets/images/alabuga/alabugaAdvant3.png';
import adv4 from '../../assets/images/alabuga/alabugaAdvant4.png';
import adv5 from '../../assets/images/alabuga/alabugaAdvant5.png';
import { AbsoluteImage } from "../../components/shared/AbsoluteImage";
import styled from "styled-components";
import { media } from "../../styles/media";

const InfoComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ $defaultColor }) => $defaultColor};
    width: 100%;
    height: 100%;
    padding: 15px;
    gap: 10px;

    ${media.desktop`
        gap: 15px;
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
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}
             isActive={active === 'first'}
                onTouchStart={() => handleTouchStart('first')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            официальное{'\n'}
                    трудоустройство{'\n'}
                    и оклад с первого дня
                        </Subtitle>
                        <TextInfo $color={defaultColor}>
                           Зарплата младшего специалиста — до 120 тысяч рублей
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    официальное{'\n'}
                    трудоустройство{'\n'}
                    и оклад с первого дня
                </SubtitleSm>
                <AbsoluteImage
                    src={adv1}
                    alt=""
                    $right={-10}
                    $top={-10}
                    $width={114 * 1.3}
                    $height={112 * 1.3}
                    $rightD={0}
                    $topD={-10}
                    $widthD={114 * 1.5}
                    $heightD={112 * 1.5}
                />
            </AdvantageBlock>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}
            isActive={active === 'secngs'}
                onTouchStart={() => handleTouchStart('secngs')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            Работа над проектами мирового уровня, которыми гордишься
                        </Subtitle>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    создание{'\n'}
                    амбициозных{'\n'}
                    проектов мирового{'\n'}
                    уровня
                </SubtitleSm>
                <AbsoluteImage
                    src={adv2}
                    alt=""
                    $right={0}
                    $top={0}
                    $width={155}
                    $height={139}
                    $rightD={0}
                    $topD={0}
                    $widthD={155 * 1.1}
                    $heightD={139 * 1.1}
                />
            </AdvantageBlock>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}
            isActive={active === '3th'}
                onTouchStart={() => handleTouchStart('3th')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            четкая система роста,{'\n'}которая отражается{'\n'}на зарплате
                        </Subtitle>
                        <TextInfo $color={defaultColor}>
                           Младший специалист может спокойно дорасти до руководителя с зарплатой от 550 тысяч рублей — ограничений для роста нет
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    четкая система{'\n'}
                    роста, которая{'\n'}
                    отражается{'\n'}
                    на зарплате
                </SubtitleSm>
                <AbsoluteImage
                    src={adv3}
                    alt=""
                    $right={8}
                    $top={18}
                    $width={125}
                    $height={144}
                    $rightD={10}
                    $topD={0}
                    $widthD={125 * 1.1}
                    $heightD={144 * 1.1}
                />
            </AdvantageBlock>
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}
            isActive={active === '4th'}
                onTouchStart={() => handleTouchStart('4th')}
                infoComponent={
                    <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            поддержка{'\n'}
                    и развитие
                        </Subtitle>
                        <TextInfo $color={defaultColor}>
                            Наставничество, оплачиваемое жилье, корпоративный мерч, обучение
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    поддержка{'\n'}
                    и развитие
                </SubtitleSm>
                <AbsoluteImage
                    src={adv4}
                    alt=""
                    $right={14}
                    $top={28}
                    $width={121 * 1.1}
                    $height={134 * 1.1}
                    $rightD={40}
                    $topD={20}
                    $widthD={121 * 1.4}
                    $heightD={134 * 1.4}
                />
            </AdvantageBlock>
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}
            isActive={active === '5th'}
                onTouchStart={() => handleTouchStart('5th')}
                infoComponent={
                   <InfoComponent $defaultColor={accentColor}>
                        <Subtitle $color={defaultColor}>
                            современные{'\n'}
                            технологии
                        </Subtitle>
                        <TextInfo $color={defaultColor}>
                            Работа <NoTransformSpan>с BIM и передовыми</NoTransformSpan> строительными решениями
                        </TextInfo>
                    </InfoComponent>
                }
            >
                <SubtitleSm $color={defaultColor}>
                    современные{'\n'}
                    технологии
                </SubtitleSm>
                <AbsoluteImage
                    src={adv5}
                    alt=""
                    $right={-55}
                    $top={-75}
                    $width={114 * 2.6}
                    $height={112 * 2.6}
                    $rightD={20}
                    $topD={-105}
                    $widthD={114 * 3.6}
                    $heightD={112 * 3.6}
                />
            </AdvantageBlock>
        </>
    )
}