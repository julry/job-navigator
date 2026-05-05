import { motion } from "framer-motion";
import styled from "styled-components";
import cloudLg from '../../assets/images/mountins/cloudLg.webp';

const CloudsField = styled(motion.div)`
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
    will-change: transform;

    & img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;


export const Clouds = ({y}) => (
    <CloudsField style={{y}}>
        <AnimatedItem
            $top={687} $left={1106} $width={133} $height={56}
            initial={{ x: 0 }}
            animate={{
                x: ['-50px', '0px', '50px'],
            }}
            transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: 'linear',
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={578} $left={330} $width={188} $height={68}
            animate={{
                x: ['50px', '0px', '-50px'],
            }}
            transition={{
                repeat: Infinity,
                duration: 5.5,
                delay: 0.015,
                ease: 'linear',
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem 
            $top={1181} $left={1230} $width={283} $height={119}
            initial={{ x: 0 }}
            animate={{
                x: ['-50px', '0px', '50px'],
            }}

            transition={{
                repeat: Infinity,
                duration: 4.5,
                delay: 0.02,
                ease: 'linear',
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem 
            $top={1205} $left={330} $width={188} $height={68}
            initial={{ x: 0 }}
            animate={{
                x: ['50px', '0px', '-50px'],
            }}

            transition={{
                repeat: Infinity,
                duration: 4.5,
                delay: 0.05,
                ease: 'linear',
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem
            $top={1701} $left={1250} $width={188} $height={68}
            initial={{ x: 0 }}
            animate={{
                x: ['-50px', '0px', '50px'],
            }}

            transition={{
                repeat: Infinity,
                duration: 6,
                delay: 0.02,
                ease: 'linear',
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem 
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
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem 
            $top={1679} $left={20} $width={128} $height={54}
            initial={{ x: 0 }}
            animate={{
                x: [40, 0, 40],
            }}

            transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
        <AnimatedItem 
            $top={2179} $left={60} $width={128} $height={54}
            initial={{ x: 0 }}
            animate={{
                x: [40, 0, 40],
            }}

            transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
                repeatType: 'mirror'
            }}
        >
            <img src={cloudLg} alt="" />
        </AnimatedItem>
    </CloudsField>
)