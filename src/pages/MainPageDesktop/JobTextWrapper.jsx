import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import {NoiseSvg} from '../../components/NoiseSvg';

const Wrapper = styled(motion.div)`
    position: absolute;
    padding: 2px;
    top: ${({ $top }) => $top}px;
    right: ${({ $isRight, $spacing }) => $isRight ? -$spacing + 'px' : 'auto'};
    left: ${({ $isRight, $spacing }) => $isRight ? 'auto' : -$spacing + 'px'};
    z-index: 4;

    @media screen and (max-width: 1400px){
        transform: scale(0.9) translateX(${({ $isRight }) => ($isRight ? 1 : -1) * 9}%);
    }
    @media screen and (max-width: 1300px){
        transform: scale(0.85) translateX(8.5%);
    }
`;

const TextWrapper = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    border-radius: 100px;
    background-color: var(--color-orange);
    font-size: 12px;
    line-height: 90%;
    padding: 0 20px;
    letter-spacing: -0.03em;
    white-space: pre-wrap;
    color: var(--color-gray);
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height ?? 46}px;
    justify-content: ${({ $isRight }) => $isRight ? 'flex-end' : 'flex-start'};
    
    cursor: pointer;

    ${({$isHovered}) => $isHovered ? 'box-shadow: 0 0 3px 0 var(--color-orange)' : ''};
`;

export const JobsTextWrapper = ({$top, $isRight, $spacing, $isHovered, ...props}) => (
    <Wrapper $top={$top} $isRight={$isRight} $spacing={$spacing} $isHovered={$isHovered}>
        <TextWrapper $isRight={$isRight} {...props}/>
        <AnimatePresence>
            {$isHovered && (
                <NoiseSvg 
                    exit={{opacity: 0}} 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    $borderRadius={100}
                    $backgroundColor="var(--color-orange)"
                />
            )}
        </AnimatePresence>
    </Wrapper>
)