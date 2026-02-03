import { motion } from 'framer-motion';
import styled from 'styled-components';
import techpromMountinSm from '../../assets/images/mountins/techPromMountinSm.png';
import pravoMountinSm from '../../assets/images/mountins/pravoMountinSm.png';
import himtechMountinSm from '../../assets/images/mountins/himTechMountinSm.png';
import educationMountinSm from '../../assets/images/mountins/educationMountinSm.png';
import agroMountinSm from '../../assets/images/mountins/agroMountinSm.png';
import mountinSm from '../../assets/images/mountins/mountinSm.png';

const AnimatedItem = styled(motion.div)`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    z-index: 1;
    pointer-events: none;
    transform: translateZ(0);

    & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;


export const Stones = ({yBlocks, yBlocksMiddle}) => (
    <>
        <AnimatedItem
            $top={310} $left={1345} $width={136} $height={74}
            style={{ y: yBlocks }}
        >
            <img src={mountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={663} $left={991} $width={110} $height={88}
            style={{ y: yBlocksMiddle }}
        >
            <img src={educationMountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={695} $left={0} $width={125} $height={84}
            style={{ y: yBlocks }}
        >
            <img src={mountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={883} $left={770} $width={96} $height={44}
        >
            <img src={mountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1135} $left={310} $width={89} $height={73}
        >
            <img src={pravoMountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1592} $left={978} $width={141} $height={76}
        >
            <img src={mountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1593} $left={386} $width={97} $height={78}
        >
            <img src={himtechMountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1747} $left={718} $width={108} $height={85}
        >
            <img src={agroMountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={2168} $left={553} $width={141} $height={76}
        >
            <img src={techpromMountinSm} alt="" />
        </AnimatedItem>
    </>
)