import { useState } from "react"
import { SubtitleSm } from "../../components/shared/Texts";
import { AdvantageBlock } from "../../components/shared/AdvantageBlock";
import adv1 from '../../assets/images/alabuga/alabugaAdvant1.png';
import adv2 from '../../assets/images/alabuga/alabugaAdvant2.png';
import adv3 from '../../assets/images/alabuga/alabugaAdvant3.png';
import adv4 from '../../assets/images/alabuga/alabugaAdvant4.png';
import adv5 from '../../assets/images/alabuga/alabugaAdvant5.png';
import { AbsoluteImage } from "../../components/shared/AbsoluteImage";

export const Advantages = ({ defaultColor, accentColor }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}>
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
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}>
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
            <AdvantageBlock defaultColor={defaultColor} accentColor={accentColor}>
                <SubtitleSm $color={defaultColor}>
                    четкая система{'\n'}
                    роста, которая{'\n'}
                    отражается{'\n'}
                    на зарплате
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
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}>
                <SubtitleSm $color={defaultColor}>
                    поддержка{'\n'}
                    и развитие
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
            <AdvantageBlock isWide defaultColor={defaultColor} accentColor={accentColor}>
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