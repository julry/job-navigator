import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 31px;
    border-radius: 60px;
    background-color: ${({$background}) => $background};
    z-index: 10;
`;

const Progress = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 31px;
    border-radius: 60px;
    --bg: ${({$background}) => $background};
    background-color: var(--bg);

    background: linear-gradient(90deg, var(--bg) 0%, var(--bg) 90%, rgba(255, 255, 255, 0) 100%);
    background: -moz-linear-gradient(90deg, var(--bg) 0%, var(--bg) 90%, rgba(255, 255, 255, 0) 100%);
    background: -webkit-linear-gradient(0deg, var(--bg) 0%, var(--bg) 90%, rgba(255, 255, 255, 0) 100%);
`;

const Picture = styled.img`
    position: absolute;
    --size: 0.25;
    right: -25px;
    top: -60px;
    height: 122px;
    width: 176px;
`;

export const ProgressBar = ({background, color, amount, picture, part = 1}) => {
    const movePart = 100 / amount;

    const width = movePart * part;

    return (
        <Wrapper $background={background}>
            <Progress initial={{width: width + '%'}} animate={{width: width + '%'}} $background={color}>
                <Picture src={picture} alt=""/>
            </Progress>
        </Wrapper>
    )

}