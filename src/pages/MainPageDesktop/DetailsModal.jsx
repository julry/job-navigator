import styled from "styled-components";
import { popups } from "../../configs/popups";
import { motion, AnimatePresence } from "framer-motion";
import { SmallText } from "../../components/shared/Texts";

const DetailedWrapper = styled(motion.div)`
    background-color: var(--color-orange);
    right: ${({$right}) => $right}px;
    top: ${({$top}) => $top}px;
    height: ${({$height}) => $height}px;
    width: ${({$width}) => $width}px;
    padding: 17px 25px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: ${({$isMirror}) => $isMirror ? 'flex-end' : 'flex-start'};
    border-radius: 30px;
    position: absolute;
    cursor: pointer;
`;

const DetailedTitle = styled.h3`
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--color-white-text);
    line-height: 100%;
    max-width: ${({$titleWidth = 240}) => $titleWidth}px;
`;

const DetailedJob = styled.div`
    display: flex;
    align-items: center;
    max-width: 240px;
    gap: 5px;

    & ${SmallText} {
        color: var(--color-white-text);
    }

    & svg {
        margin-top: 5px;
    }
`

export const DetailsModal = ({jobId, onClick, isActive, isMirror, width, top, height, right, $titleWidth}) => {
    const info = popups.find(({id}) => id === jobId) ?? {};

    return (
    <AnimatePresence>
            {isActive && (
                <DetailedWrapper 
                    initial={{opacity: 0}} 
                    exit={{opacity: 0}} 
                    animate={{opacity: 1}}  
                    $width={width} 
                    $top={top} 
                    $height={height} 
                    $right={right}
                    $isMirror={isMirror}
                    onClick={onClick}
                >
                    <DetailedTitle $titleWidth={$titleWidth}>{info?.title}</DetailedTitle>
                    <div>
                        {info.jobs?.map((job) => (
                            <DetailedJob>
                                <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 4.77295C0.335786 4.77295 3.13191e-08 5.10874 0 5.52295C-3.13191e-08 5.93716 0.335786 6.27295 0.75 6.27295L0.75 5.52295L0.75 4.77295ZM21.8556 6.05328C22.1484 5.76039 22.1484 5.28551 21.8556 4.99262L17.0826 0.21965C16.7897 -0.0732434 16.3148 -0.0732435 16.0219 0.21965C15.729 0.512543 15.729 0.987417 16.0219 1.28031L20.2646 5.52295L16.0219 9.76559C15.729 10.0585 15.729 10.5334 16.0219 10.8263C16.3148 11.1191 16.7897 11.1191 17.0826 10.8263L21.8556 6.05328ZM0.75 5.52295L0.75 6.27295L21.3252 6.27295L21.3252 5.52295L21.3252 4.77295L0.75 4.77295L0.75 5.52295Z" fill="#FFF2EC"/>
                                </svg>
                                <SmallText>{job}</SmallText>
                            </DetailedJob>
                        ))}
                    </div>
                </DetailedWrapper>
            )}
        </AnimatePresence>
)
}