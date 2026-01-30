import styled from "styled-components";
import { Text } from "./Texts";

const Wrapper = styled.div`
    display: flex;
    gap: 5px;

    & + & {
        margin-top: 5px;
    }

    & svg {
        flex-shrink: 0;
        margin-top: 4px;

        @media screen and (max-width: 335px) {
            transform: scale(0.8);
            margin-top: 6px;
        }
    }
`;

export const InfoLine = ({children, defaultColor, ...props}) => (
    <Wrapper {...props}>
        <svg width="32" height="15" viewBox="0 0 32 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.36426C0.447715 6.36426 0 6.81197 0 7.36426C0 7.91654 0.447715 8.36426 1 8.36426V7.36426V6.36426ZM31.4225 8.07136C31.813 7.68084 31.813 7.04768 31.4225 6.65715L25.0585 0.29319C24.668 -0.0973344 24.0348 -0.0973344 23.6443 0.29319C23.2538 0.683714 23.2538 1.31688 23.6443 1.7074L29.3011 7.36426L23.6443 13.0211C23.2538 13.4116 23.2538 14.0448 23.6443 14.4353C24.0348 14.8259 24.668 14.8259 25.0585 14.4353L31.4225 8.07136ZM1 7.36426V8.36426H30.7154V7.36426V6.36426H1V7.36426Z" fill={defaultColor}/>
        </svg>
        <Text $color={defaultColor}>{children}</Text>
    </Wrapper>
)