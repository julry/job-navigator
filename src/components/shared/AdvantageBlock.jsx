import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../styles/media";

const Advantage = styled(motion.div)`
    position: relative;
    
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    margin-top: 30px;

    width: 100%;
    height: 164px;
    padding: 14px 20px;

    background-color: transparent;
    box-shadow: inset 0 0 1px 1px ${({$accentColor}) => $accentColor};
    color: ${({$defaultColor}) => $defaultColor};
    border-radius: 30px;

    font-size: 12px;
    line-height: 100%;
    text-transform: lowercase;

    cursor: default;

    ${media.desktop`
        font-size: 20px;
        height: 200px;
        width: ${({$isWide}) => $isWide ? 'calc(100vw / 2.2)' : 'calc(100vw / 3.1)'};
        max-width: ${({$isWide}) => $isWide ? 644 : 420}px;
    `}
`;

const AdvantageInfo = styled(Advantage)`
    position: absolute;
    margin-top: 0;
    inset: 0;
    z-index: 10;
    padding: 0;
`;


export const AdvantageBlock = ({isWide, isActive, defaultColor, accentColor, children, infoComponent, id, onTouchStart}) => {
     const containerVariants = {
        initial: { x: "100%" },
        hover: { x: 0 },
    };

    return (
    <Advantage
        key={id} 
        whileHover={infoComponent !== undefined ? "hover" : undefined}
        initial="initial"
        onTouchStart={onTouchStart}
        $defaultColor={defaultColor}
        $accentColor={accentColor}
        $isWide={isWide}
    >
        {children}
        <AdvantageInfo
            key={`info${id}`}
            $isWide={isWide}
            variants={containerVariants}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
            animate={isActive ? {x: 0} : {x: '100%'}}
        >
            {infoComponent}
        </AdvantageInfo>
    </Advantage>
)}