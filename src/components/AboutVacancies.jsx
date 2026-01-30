import { useRef, useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../styles/media";
import { Title } from "./shared/Texts";
import { Button } from "./shared/Button";

import defaultAdd from '../assets/images/default/defaultPhone.png'

const Wrapper = styled.div`
    position: relative;
    z-index: 2;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background-color: var(--color-white);
    padding: 25px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    --defaultColor: ${({$defaultColor}) => $defaultColor};

    & h3, h4, p {
        color: ${({$defaultColor}) => $defaultColor} !important;
    }
    
    ${media.desktop`   
        flex: 1;
        min-height: 100%;
        height: 100%;
        width: 40%;
        padding: 40px 60px 48px;
        border-top-left-radius: 72px;
        border-top-right-radius: 72px;
        height: 775px;
        

        &::after {
            content: '';
            position: absolute;
            bottom: -100px;
            right: 0;
            width: 100%;
            height: 120px;
            background-color: var(--color-white);
        }

        &::before {
            content: '';
            position: absolute;
            bottom: -11px;
            left: -50px;
            width: 60px;
            height: 62px;
            background-color: var(--color-white);
            transform: rotate(90deg) scale(-1, 1);
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
                #fff 51px
                ) exclude;
        }
    `}
`;

const SubTitle = styled(Title)`
    font-size: 20px;
    padding-bottom: 30px;
    position: relative;
    z-index: 3;
    width: 100%;

    ${media.desktop`
        padding-bottom: 60px;
       font-size: 24px;
    `}
`;

const Vacancy = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;

    width: 100%;
    height: 45px;
    padding: 14px 20px;

    background-color: var(--defaultColor);
    color: var(--color-white-text);
    border-radius: 100px;

    font-size: 12px;
    line-height: 110%;
    text-transform: lowercase;
    transition: background-color 0.3s;

    cursor: default;

    & + & {
        margin-top: 10px;
    }
`;

const VacancyInfo = styled(Vacancy)`
    position: absolute;
    inset: 0;
    background-color: var(--color-white);
    color: ${({$defaultColor}) => $defaultColor};
    box-shadow: inset 0 0 1px 1px  ${({$defaultColor}) => $defaultColor};

    ${({$isSmall}) => $isSmall ? 'font-size: 11px; line-height: 100%;' : ''};
`;

const AddBlock = styled.div`
    width: 100%;
    margin-top: 60px;
    position: relative;
    
    ${media.desktop`
        margin-top: auto;
    `}
`; 

const SubTitleAdd = styled(SubTitle)`
    max-width: 70%;
    ${media.desktop`
        max-width: 460px;
        padding-bottom: 20px;

         @media screen and (max-width: 1250px) {
            font-size: 19px;
            max-width: 300px;
        }
    `}

    @media screen and (max-width: 360px) {
        font-size: 16px;
    }
`;

const AddPicture = styled.img`
    position: absolute;
    bottom: 21px;
    right: -10px;
    object-fit: contain;
    width: 120px;
    height: 174px;
    z-index: 5;

    ${media.desktop`
        right: -48px;
        bottom: 9px;
        width: 114px;
        height: 166px;
    `};
`;

export const AboutVacancies = ({ className, accentColor, defaultColor = 'var(--color-gray)', addPicture = defaultAdd, vacanciesDescr = []}) => {
    const [hoveredCard, setHoveredCard] = useState();

    const touchTimerRef = useRef(null);

    const handleTouchStart = (id) => {
        if (touchTimerRef.current) {
        clearTimeout(touchTimerRef.current);
        }

        if (hoveredCard === id) {
            touchTimerRef.current = setTimeout(() => {
                setHoveredCard(undefined);
            }, 300);

            return;
        }
        setHoveredCard(id);
    };

    const containerVariants = {
        initial: { x: "100%" },
        hover: { x: 0 },
    };

    return (
    <Wrapper $defaultColor={defaultColor} className={className}>
        <SubTitle>
            где можно работать {'\n'}после выпуска?
        </SubTitle>
        {vacanciesDescr.map(({name, desc, id, isSmall}) => (
            <Vacancy 
                key={id} 
                whileHover="hover"
                initial="initial"
                onTouchStart={() => handleTouchStart(id)}
            >
                {name}
                <VacancyInfo 
                    key={`info${id}`}
                    variants={containerVariants}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                    }}
                    $isSmall={isSmall}
                    $defaultColor={defaultColor}
                    animate={hoveredCard === id ? {x: 0} : {x: '100%'}}
                >
                    {desc}
                </VacancyInfo>
            </Vacancy>
        ))}
        <AddBlock>
            <SubTitleAdd>
                хочешь узнать больше
                полезной инфы о навыках
                и развитии в профессии?
            </SubTitleAdd>
            <AddPicture src={addPicture} alt=""/>
            <Button $defaultColor={defaultColor} $accentColor={accentColor}>переходи в бота</Button>
        </AddBlock>
    </Wrapper>
)
}

