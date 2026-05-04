import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsModal } from './DetailsModal';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { popups } from '../../configs/popups';
import {jobs} from './jobsConfig';
import { JobsTextWrapper } from './JobTextWrapper';


const ImageElement = styled(motion.img)`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    object-fit: contain;
    z-index: 2;
    transform: translateZ(0);
`;

const MotionBlock = styled(motion.div)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    z-index: 2;

    @media screen and (max-width: 1400px){
        height: calc(${({ $height }) => $height}px * 0.9);
        width: calc(${({ $width }) => $width}px * 0.9);
        left: calc(${({ $left }) => $left}px * 0.9);
        top: ${({ $top, $spaceTopSmall = 0 }) => $top + $spaceTopSmall}px;
    }
    @media screen and (max-width: 1300px){
        height: calc(${({ $height }) => $height}px * 0.9);
        width: calc(${({ $width }) => $width}px * 0.9);
        left: calc(${({ $left }) => $left}px * 0.82);
    }
`;

const Person = styled(ImageElement)`
    z-index: 5;
    transform: scale(${({$scale}) => $scale[0] + ',' + $scale[1]}) translateZ(0);
    cursor: pointer;
`;


//TODO: remove if dont need this circle
// const HimTechCircle = styled.div`
//     position: absolute;
//     width: 10px;
//     height: 10px;
//     top: 4px;
//     right: 85px;
//     z-index: 4;
//     border-radius: 50%;
//     background-color: var(--color-orange);
// `;

export const JobsBlock = ({handleMouseEnter, handleMouseLeave, yBlocks}) => {
    const [chosen, setChosen] = useState();
    const navigate = useNavigate();

    const handleHover = (e, data, id) => {
        handleMouseEnter(e, data);
        setChosen(id)
    }

     const handleStopHover = () => {
        handleMouseLeave();
        setChosen(undefined);
    }

    const handleNavigate = (id) => {
        if (chosen === id) {
            const info = popups.find((job) => job.id === id) ?? {};
            reachMetrikaGoal(info.metrika);
            
            navigate(`/${id}`);
        }
    }

    const getPersonScale = (id, isMirror) => {
        let koef = chosen === id ? 1.2 : 1;

        return [koef * (isMirror ? -1 : 1), koef];
    }

    return (
        jobs.map((job) => (
            <MotionBlock
                key={job.id}
                $top={job.position.top}
                $left={job.position.left}
                $width={job.position.width}
                $height={job.position.height}
                $spaceTopSmall={job.spaceTopSmall}
                style={{ y: job.type === 'motion' ? yBlocks : yBlocks, zIndex: chosen === job.id ? 10 : 2 }}
                onMouseEnter={(e) => handleHover(e, job.position, job.id)}
                onMouseLeave={handleStopHover}
            >
                <JobsTextWrapper  
                    onClick={() => handleNavigate(job.id)}
                    $isRight={job.text.isRight}
                    $top={job.text.top}
                    $width={job.text.width}
                    $height={job.text.height}
                    $spacing={job.text.spacing}
                    $isHovered={chosen === job.id}
                >
                    {job.text.content}
                </JobsTextWrapper>
                <Person
                    onClick={() => handleNavigate(job.id)}
                    src={job.person.src}
                    alt=""
                    $isMirror={job.person.isMirror}
                    $width={job.person.width}
                    $height={job.person.height}
                    $top={job.person.top}
                    $left={job.person.left}
                    $scale={getPersonScale(job.id, job.person.isMirror)}
                />
                <ImageElement
                    src={job.mountain.src}
                    alt=""
                    $width={job.mountain.width}
                    $height={job.mountain.height}
                    $top={job.mountain.top}
                    $left={job.mountain.left}
                />
                {/* {job.hasCircle && <HimTechCircle />} */}
                <DetailsModal
                    isActive={chosen === job.id}
                    jobId={job.id}
                    onClick={() => handleNavigate(job.id)}
                    {...job.modal}
                />
            </MotionBlock>
        ))
    )
}