import styled from "styled-components";
import { media } from "../styles/media";

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 445px;
    z-index: 2;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 54.5%;
    max-width: 205px;
    height: 131px;

    ${media.desktop`   
        width: 47%;
        bottom: 0;
        top: auto;
        border-top-left-radius: 72px;
        border-top-right-radius: 72px;
        height: 175px;
        max-width: 544px;
    `}

    &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        right: -20px;
        background-color: var(--color-white);
       
        width: 30px;
        height: 32px;
        transform: rotate(90deg) scale(-1, -1);
        -webkit-mask: 
            radial-gradient(circle at 100% 100%, 
            transparent 20px, 
            #fff 21px
            ),
            linear-gradient(#fff, #fff);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        
        /* Для Firefox */
        mask: 
            radial-gradient(circle at 100% 100%, 
            transparent 20px, 
            red 21px
            ) exclude;
    }

    ${media.desktop`
        &::before {
            width: 60px;
            height: 62px;
            right: -50px;

             -webkit-mask: 
            radial-gradient(circle at 100% 100%, 
            transparent 50px, 
            #fff 51px
            ),
            linear-gradient(#fff, #fff);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        
        /* Для Firefox */
        mask: 
            radial-gradient(circle at 100% 100%, 
            transparent 50px, 
            red 51px
            ) exclude;
        }
    `}
`;


export const LogoBlock = (props) => (
    <Wrapper {...props} />
)