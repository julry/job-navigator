import { useState } from "react"
import { Subtitle } from "../../components/shared/Texts";
import { AdvantageBlock } from "../../components/shared/AdvantageBlock";
import adv1 from '../../assets/images/alabuga/alabugaAdvant1.png';
import adv2 from '../../assets/images/alabuga/alabugaAdvant2.png';
import adv3 from '../../assets/images/alabuga/alabugaAdvant3.png';
import adv4 from '../../assets/images/alabuga/alabugaAdvant4.png';
import adv5 from '../../assets/images/alabuga/alabugaAdvant5.png';
import { AbsoluteImage } from "../../components/shared/AbsoluteImage";
import { media } from "../../styles/media";
import styled from "styled-components";

export const Advantages = ({ defaultColor, accentColor }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}>
                <Subtitle $color={defaultColor}>
                    официальное{'\n'}
                    трудоустройство{'\n'}
                    и оклад с первого дня
                </Subtitle>
                <AbsoluteImage
                    src={adv1}
                    alt=""
                    $right={-10}
                    $top={-10}
                    $width={114 * 1.3}
                    $height={112 * 1.3}
                    $rightD={20}
                    $topD={0}
                    $widthD={114}
                    $heightD={112}
                />
            </AdvantageBlock>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}>
                <Subtitle $color={defaultColor}>
                    создание{'\n'}
                    амбициозных{'\n'}
                    проектов мирового{'\n'}
                    уровня
                </Subtitle>
                <AbsoluteImage
                    src={adv2}
                    alt=""
                    $right={0}
                    $top={0}
                    $width={155}
                    $height={139}
                    $rightD={20}
                    $topD={0}
                    $widthD={114}
                    $heightD={112}
                />
            </AdvantageBlock>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}>
                <Subtitle $color={defaultColor}>
                    четкая система{'\n'}
                    роста, которая{'\n'}
                    отражается{'\n'}
                    на зарплате
                </Subtitle>
                <AbsoluteImage
                    src={adv3}
                    alt=""
                    $right={8}
                    $top={18}
                    $width={125}
                    $height={144}
                    $rightD={20}
                    $topD={0}
                    $widthD={114}
                    $heightD={112}
                />
            </AdvantageBlock>
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}>
                <Subtitle $color={defaultColor}>
                    поддержка{'\n'}
                    и развитие
                </Subtitle>
                <AbsoluteImage
                    src={adv4}
                    alt=""
                    $right={14}
                    $top={28}
                    $width={121 * 1.1}
                    $height={134 * 1.1}
                    $rightD={20}
                    $topD={0}
                    $widthD={114}
                    $heightD={112}
                />
            </AdvantageBlock>
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}>
                <Subtitle $color={defaultColor}>
                    современные{'\n'}
                    технологии
                </Subtitle>
                <AbsoluteImage
                    src={adv5}
                    alt=""
                    $right={20}
                    $top={0}
                    $width={114}
                    $height={112}
                    $rightD={20}
                    $topD={0}
                    $widthD={114}
                    $heightD={112}
                />
            </AdvantageBlock>
        </>
    )
}