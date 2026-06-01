import { AnimatePresence, motion } from "framer-motion";
import styled, { keyframes }  from "styled-components";
import cloudLg from '../../assets/images/mountins/cloudLg.webp';

const CloudsField = styled(motion.div)`
    overflow: visible;
    position: absolute;
    inset: 0;
    z-index: 0;
`;

const Cloud = styled.div`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    z-index: 0;
    pointer-events: none;
    opacity: ${({$opacity = 1}) => $opacity};
    will-change: transform opacity;
    transition: opacity 0.3s linear;

    animation: ${({ $animationType}) => {
        switch($animationType) {
            case 'leftRight': return floatLeftRight;
            case 'rightLeft': return floatRightLeft;
            case 'wide': return floatWide;
            case 'narrow': return floatNarrow;
            case 'threePoint1': return floatThreePoint1;
            case 'threePoint2': return floatThreePoint2;
            default: return floatLeftRight;
        }
    }} ${({ $duration }) => $duration || 4.5}s linear infinite;
    animation-delay: ${({ $delay }) => $delay || 0}s;
    animation-timing-function: ease-in-out;

    & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        contain: layout paint;
    }
`;

const floatLeftRight = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(-50px); }
    100% { transform: translateX(0); }
`;

const floatRightLeft = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(50px); }
    100% { transform: translateX(0); }
`;

const floatWide = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(-100px); }
    100% { transform: translateX(0); }
`;

const floatNarrow = keyframes`
    0% { transform: translateX(0); }
    50% { transform: translateX(40px); }
    100% { transform: translateX(0); }
`;

const floatThreePoint1 = keyframes`
   0% { transform: translateX(0px); }
    25% { transform: translateX(50px); }
    50% { transform: translateX(0px); }
    75% { transform: translateX(-50px); }
    100% { transform: translateX(0px); }
`;

const floatThreePoint2 = keyframes`
    0% { transform: translateX(0px); }
    25% { transform: translateX(-50px); }
    50% { transform: translateX(0px); }
    75% { transform: translateX(50px); }
    100% { transform: translateX(0px); }
`;

export const Clouds = ({animationProps, isFixed}) => {
    return (
    <CloudsField {...animationProps}>
            <Cloud
                $top={687} $left={1106} $width={133} $height={56}
                $animationType="leftRight"
                $duration={4.5}
            >
                <img src={cloudLg} alt="" />
            </Cloud>
                <Cloud
                    $top={747} $left={1186} $width={188} $height={68}
                    $animationType="rightLeft"
                    $opacity={+!isFixed}
                    $duration={7.5}
                    $delay={0.4}
                >
                    <img src={cloudLg} alt="" />
                </Cloud>
            <Cloud
                $top={578} $left={330} $width={188} $height={68}
                $animationType="rightLeft"
                $duration={5.5}
                $delay={0.015}
            >
                <img src={cloudLg} alt="" />
            </Cloud>

            <Cloud
                $top={1181} $left={1230} $width={283} $height={119}
                $animationType="threePoint1"
                $duration={7.5}
                $delay={0.02}
            >
                <img src={cloudLg} alt="" />
            </Cloud>

            <Cloud
                $top={1205} $left={330} $width={188} $height={68}
                $animationType="threePoint2"
                $duration={7.5}
                $delay={0.05}
            >
                <img src={cloudLg} alt="" />
            </Cloud>

            <Cloud
                $top={1701} $left={1250} $width={188} $height={68}
                $animationType="leftRight"
                $duration={6}
                $delay={0.02}
            >
                <img src={cloudLg} alt="" />
            </Cloud>

            <Cloud
                $top={2200} $left={632} $width={350} $height={147}
                $animationType="wide"
                $duration={9}
                $delay={0.02}
            >
                <img src={cloudLg} alt="" />
            </Cloud>

            <Cloud
                $top={1679} $left={20} $width={128} $height={54}
                $animationType="narrow"
                $duration={8}
            >
                <img src={cloudLg} alt="" />
            </Cloud>

            <Cloud
                $top={2179} $left={60} $width={128} $height={54}
                $animationType="narrow"
                $duration={8}
            >
                <img src={cloudLg} alt="" />
            </Cloud>
    </CloudsField>
)
}