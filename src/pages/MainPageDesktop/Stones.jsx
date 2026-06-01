import { motion } from 'framer-motion';
import styled from 'styled-components';
import techpromMountinSm from '../../assets/images/mountins/techPromMountinSm.png';
import pravoMountinSm from '../../assets/images/mountins/pravoMountinSm.webp';
import himtechMountinSm from '../../assets/images/mountins/himTechMountinSm.webp';
import agroMountinSm from '../../assets/images/mountins/agroMountinSm.webp';
import mountinSm from '../../assets/images/mountins/mountinSm.webp';

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


export const Stones = ({animationProps, isFixed}) => (
    <>
        <AnimatedItem
            $top={735} $left={350} $width={96} $height={44}
            {...animationProps}
        >
            <img src={mountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={543} $left={1284} $width={141} $height={76}
            animate={isFixed ? {y: -30} : {}}
            transition={{duration: 0.4, ease: 'linear'}}
        >
            <img src={mountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1455} $left={1287} $width={125} $height={84}
            {...animationProps}
        >
            <img src={mountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1035} $left={335} $width={89} $height={73}
            {...animationProps}
        >
            <img src={pravoMountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={2193} $left={436} $width={97} $height={78}
            {...animationProps}
        >
            <img src={himtechMountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1454} $left={495} $width={108} $height={85}
            {...animationProps}
        >
            <img src={agroMountinSm} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1988} $left={19} $width={141} $height={76}
            {...animationProps}
        >
            <img src={techpromMountinSm} alt="" />
        </AnimatedItem>
    </>
)