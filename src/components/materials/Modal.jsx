import {AnimatePresence, motion} from 'framer-motion';
import styled from "styled-components"
import { media } from "../../styles/media";

const Modal = styled(motion.div)`
    position: fixed;
    inset: 0;
    background-color: rgba(30, 30, 30, 0.5);
    backdrop-filter: blur(3px);
    padding: 34px 4.8vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    z-index: 1000;

    ${media.desktop`
        padding: 84px;
    `}
`;

const Content = styled.div`
    position: relative;
    background-color: #FFF2EC;
    border-radius: 35px;
    padding: 20px min(20px, 5.8vw);
    max-width: 400px;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    ${media.desktop`
        overflow: hidden;
        width: 1100px;
        min-width: 1100px;
        height: 770px;
        padding: 30px 40px;
        padding-right: 0;
        border-radius: 40px;
    `}
`;

const ClosedButton = styled.button`
    position: absolute;
    top: 15px;
    right: 4.8vw;

    width: 47px;
    height: 40px;

    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: var(--color-gray);
    border: 1px solid var(--color-white);
    z-index: 500;

    ${media.desktop`
        --paddingRight: calc((100% - 1100px) / 2);
        top: 64px;
        right: var(--paddingRight)
    `}
`;

export const MaterialModal = ({isOpen, children, onClose}) => (
        <AnimatePresence>
            {
                isOpen && (
                    <Modal>
                        <ClosedButton onClick={onClose}>
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 19L9.38597 8.89595L9.34211 9.40848L0.482459 0H2.19298L10.2632 8.63969H9.64914L17.6754 0H19.3421L10.4386 9.55491L10.4825 8.85935L20 19H18.2018L9.69299 9.77457L10.1755 9.81118L1.71052 19H0Z" fill="#FFF2EC" />
                            </svg>
                        </ClosedButton>
                        <Content>
                            {children}
                        </Content>
                    </Modal>
                )
            }
        </AnimatePresence>
    )