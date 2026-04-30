import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { popups } from "../../configs/popups";
import { SmallText } from "../../components/shared/Texts";
import { NoiseSvg } from '../../components/NoiseSvg';
import safetech from '../../assets/images/default/people/safetech.webp';
import energetics from '../../assets/images/default/people/energetics.webp';
import biotech from '../../assets/images/default/people/biotech.webp';
import materials from '../../assets/images/default/people/materials.webp';
import himtech from '../../assets/images/default/people/himtech.webp';
import techprom from '../../assets/images/default/people/techpromMain.webp';
import techcontrol from '../../assets/images/default/people/techcontrol.webp';

const Wrapper = styled(motion.div)`
    position: absolute;
    z-index: 3;
    right: ${({$right}) => $right}px;
    top: ${({$top}) => $top}px;
`;

const DetailedWrapper = styled(motion.div)`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: ${({$isMirror}) => $isMirror ? 'flex-end' : 'flex-start'};

    width: ${({$width}) => $width}px;
    padding: ${({$paddingTop = 20}) => $paddingTop}px 25px 25px;

    border-radius: 30px;
    background-color: var(--color-white);
    box-shadow: 0 0 5px 0 var(--color-white);

    cursor: pointer;
`;

const DetailedTitle = styled.h3`
    font-size: 16px;
    margin-bottom: 20px;
    line-height: 100%;
    max-width: ${({$titleWidth = 240}) => $titleWidth}px;
`;

const UlStyled = styled.ul`
    padding-left: 16px;

    & li::marker {
        font-size: 8px;
    }

    width: 100%;
    max-width: ${({$textMaxWidth = 240}) => $textMaxWidth}px;
`

export const DetailsModal = ({jobId, onClick, isActive, isMirror, width, top, $textWidth, right, $titleWidth}) => {
    const info = popups.find(({id}) => id === jobId) ?? {};

    return (
    <AnimatePresence>
            {isActive && (
                <Wrapper 
                    $top={top} 
                    $right={right}
                    initial={{opacity: 0}} 
                    exit={{opacity: 0}} 
                    animate={{opacity: 1}}  
                >
                    <DetailedWrapper 
                        $width={width} 
                        $isMirror={isMirror}
                        onClick={onClick}
                    >
                        <DetailedTitle $titleWidth={$titleWidth}>{info?.title}</DetailedTitle>
                        <UlStyled $textMaxWidth={$textWidth}>
                            {info.jobs?.map((job) => (
                                <li key={job}>
                                    <SmallText>{job}</SmallText>
                                </li>
                            ))}
                        </UlStyled>
                    </DetailedWrapper>
                    <NoiseSvg $borderRadius={30} $backgroundColor={"var(--color-white)"}/>
                </Wrapper>
            )}
        </AnimatePresence>
)
}