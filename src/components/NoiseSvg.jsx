import {motion} from 'framer-motion';
import styled from 'styled-components';

export const NoiseSvg = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${({$backgroundColor}) => $backgroundColor};
    filter: url(#noiseFilter);   
    border-radius: ${({$borderRadius}) => $borderRadius}px;
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    contain: content;
    isolation: isolate;
`;