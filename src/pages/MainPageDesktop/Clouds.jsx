import { motion } from "framer-motion";
import styled from "styled-components";
import cloudLg from '../../assets/images/mountins/cloudLg.webp';

const CloudsField = styled.div`
    overflow: visible;
    position: absolute;
    inset: 0;
    z-index: 0;
`;

const AnimatedItem = styled(motion.div)`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    z-index: 0;
    pointer-events: none;

    & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;


export const Clouds = ({y}) => (
    <CloudsField>
        <AnimatedItem style={{y}}
            $top={417} $left={1006} $width={133} $height={56}
            initial={{ x: 0 }}
            animate={{
                x: -50,
            }}
            transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem style={{y}}
            $top={578} $left={330} $width={188} $height={68}
            initial={{ x: 0 }}
            animate={{
                x: 50,
            }}

            transition={{
                repeat: Infinity,
                duration: 2.5,
                delay: 0.015,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem style={{y}}
            $top={1241} $left={1130} $width={283} $height={119}
            initial={{ x: 0 }}
            animate={{
                x: -50,
            }}

            transition={{
                repeat: Infinity,
                duration: 2.5,
                delay: 0.02,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem style={{y}}
            $top={1155} $left={0} $width={188} $height={68}
            initial={{ x: 0 }}
            animate={{
                x: 50,
            }}

            transition={{
                repeat: Infinity,
                duration: 2.5,
                delay: 0.05,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem style={{y}}
            $top={1181} $left={658} $width={173} $height={72}
            initial={{ x: 0 }}
            animate={{
                x: [50, 0, -50],
            }}

            transition={{
                repeat: Infinity,
                duration: 6,
                delay: 0.02,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem style={{y}}
            $top={1601} $left={1250} $width={188} $height={68}
            initial={{ x: 0 }}
            animate={{
                x: -50,
            }}

            transition={{
                repeat: Infinity,
                duration: 6,
                delay: 0.02,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem style={{y}}
            $top={2200} $left={632} $width={350} $height={147}
            initial={{ x: 0 }}
            animate={{
                x: [-100, 0, 100],
            }}

            transition={{
                repeat: Infinity,
                duration: 9,
                delay: 0.02,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem style={{y}}
            $top={1659} $left={97} $width={128} $height={54}
            initial={{ x: 0 }}
            animate={{
                x: [40, 0, 40],
            }}

            transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
                repeatType: 'reverse'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
    </CloudsField>
)