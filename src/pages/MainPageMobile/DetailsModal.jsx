import styled from "styled-components";
import { popups } from "../../configs/popups";
import { motion, AnimatePresence } from "framer-motion";
import { SmallText } from "../../components/shared/Texts";
import { Button } from "../../components/shared/Button";
import { useNavigate } from "react-router-dom";
import { media } from "../../styles/media";

const ModalWrapper = styled(motion.div)`
    position: fixed;
    inset: 0;
    background-color: rgba(30,30,30,0.85);
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 30px;
    z-index: 30;
`;

const ComponentWrapper = styled.div`
    position: absolute;
    top: -13px;
    left: -25px;

    ${media.tablet`
       
         & > div > div {
            margin-top: 30px;
         }
    `}
`;

const DetailedWrapper = styled(motion.div)`
    width: 100%;
    padding: 25px 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    max-width: 315px;
    align-items: ${({$isMirror}) => $isMirror ? 'flex-end' : 'flex-start'};
    border-radius: 30px;
    background-color: var(--color-gray);
    border: 1px solid var(--color-white);

    @media screen  and (min-width: 360px) {
        min-width: 300px;
    }

    ${media.tablet`
        max-width: 445px;
    `}
`;

const ButtonStyled = styled(Button)`
    background-color: var(--color-orange);
    color: var(--color-gray);
    width: 100%;
    max-width: 315px;
    @media screen  and (min-width: 360px) {
        min-width: 300px;
    }

    ${media.tablet`
        max-width: 445px;
    `}
`;

const DetailedTitle = styled.h3`
    font-size: 10px;
    margin-bottom: 10px;
    color: var(--color-orange);
    line-height: 100%;
    max-width: ${({$titleWidth = 155}) => $titleWidth}px;

    ${media.tablet`
        font-size: 14px;

        max-width: ${({$titleWidth = 155}) => $titleWidth * 1.4}px;
    `}
`;

const DetailedJob = styled.div`
    display: flex;
    align-items: center;
    max-width: 155px;
    gap: 5px;

    & ${SmallText} {
        font-size: 10px;
        color: var(--color-white-text);
    }

    & svg {
        margin-top: 5px;
    }

    ${media.tablet`
        & ${SmallText} {
            font-size: 14px;
        }
    `}
`;

const ClosedButton = styled.button`
    width: 47px;
    height: 40px;

    border-radius: 14px;
    display: flex;
    align-items: center;
    margin-left:auto;
    justify-content: center;
    
    background-color: var(--color-gray);
    border: 1px solid var(--color-white);
    z-index: 10;
`;

const TextWrapper = styled.div`
    margin-top: ${({$marginTop}) => $marginTop ?? 50}px;
    margin-left: ${({$marginLeft}) => $marginLeft !== undefined ? $marginLeft + 'px' : 'auto'};

    ${media.tablet`
        margin-top: ${({$marginTop}) => ($marginTop ?? 50) * 1.4}px;
        margin-left: ${({$marginLeft}) => $marginLeft !== undefined ? $marginLeft * 1.4 + 'px' : 'auto'};
    `}
`;

export const DetailsModal = ({jobId, marginTop, onClose, isActive, isMirror, component}) => {
    const info = popups.find(({id}) => id === jobId) ?? {};
    const navigate = useNavigate();

    return (
    <AnimatePresence>
            {isActive && (
                <ModalWrapper
                    initial={{opacity: 0}} 
                    exit={{opacity: 0}} 
                    animate={{opacity: 1}}  
                >
                    <ClosedButton onClick={onClose}>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.625L8.21272 7.78396L8.17435 8.23242L0.422152 0H1.91886L8.98027 7.55973H8.443L15.466 0H16.9243L9.13378 8.36055L9.17215 7.75193L17.5 16.625H15.9265L8.48137 8.55275L8.90352 8.58478L1.49671 16.625H0Z" fill="#FFF2EC"/>
                        </svg>
                    </ClosedButton>
                    <DetailedWrapper 
                        $isMirror={isMirror}
                    >
                        <ComponentWrapper>
                            {component}
                        </ComponentWrapper>
                        <TextWrapper $marginTop={marginTop}>
                            <DetailedTitle>{info?.title}</DetailedTitle>
                            {info.jobs?.map((job) => (
                                <DetailedJob>
                                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 3.18201C0.223858 3.18201 2.41411e-08 3.40586 0 3.68201C-2.41411e-08 3.95815 0.223858 4.18201 0.5 4.18201L0.5 3.68201L0.5 3.18201ZM12.8536 4.03556C13.0488 3.8403 13.0488 3.52372 12.8536 3.32845L9.67157 0.146474C9.47631 -0.0487885 9.15973 -0.0487885 8.96447 0.146474C8.7692 0.341736 8.7692 0.658318 8.96447 0.85358L11.7929 3.68201L8.96447 6.51043C8.7692 6.7057 8.7692 7.02228 8.96447 7.21754C9.15973 7.4128 9.47631 7.4128 9.67157 7.21754L12.8536 4.03556ZM0.5 3.68201L0.5 4.18201L12.5 4.18201L12.5 3.68201L12.5 3.18201L0.5 3.18201L0.5 3.68201Z" fill="#FFF2EC"/>
                                    </svg>
                                    <SmallText>{job}</SmallText>
                                </DetailedJob>
                            ))}
                        </TextWrapper>
                    </DetailedWrapper>
                    <ButtonStyled onClick={() => navigate(`/${jobId}`)}>подробнее</ButtonStyled>
                </ModalWrapper>
            )}
        </AnimatePresence>
)
}