import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';

import { Button } from '../shared/button';
import oval from '../../assets/images/ovalBlock.webp';
import {openBot} from '../../utils/openBot';
import { media } from '../../../../../styles/media';

const ButtonStyled = styled(Button)`
    margin-top: 137px;
    width: 100%;
    max-width: 510px;

    ${media.desktop`
        margin-top: 236px;
    `}

    & button {
        width: 100%;
    }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 65px;

  ${media.tablet`
    margin-top: 80px;
  `}

  ${media.desktop`
    scroll-margin-block: 110px;
    margin-top: 100px;
  `}
`;

const HowBlockTitle = styled.h3`
  white-space: pre-line;
  font-size: 30px;

  ${media.desktop`
    font-size: 48px;
  `}
`;

const HowBlockContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 400px;

  ${media.desktop`
    display: flex;
    max-width: none;
    justify-content: space-between;
    padding: 186px 105px 0;
  `}
`;

const HowBlockTextLeft = styled.p`
  margin-top: 98px;
  white-space: pre-line;
  max-width: 235px;
  font-size: 20px;

  ${media.desktop`
    font-size: 24px;
    margin-top: 0;
    max-width: 315px;
  `}
`;

const HowBlockTextRight = styled.p`
  margin-top: 126px;
  margin-left: auto;
  white-space: pre-line;
  max-width: 222px;
  font-size: 20px;

  ${media.desktop`
    margin-top: 0;
    max-width: 275px;
    font-size: 24px;
  `}
`;

const HowBlockOvalLeft = styled.img`
  position: absolute;
  top: 66px;
  left: -82px;
  width: 330px;
  height: 268px;
  z-index: 2;
  transform: scale(-1, 1);

  ${media.desktop`
    top: 90px;
    left: -32px;
    width: 573px;
    height: 466px;
  `}

  @media screen and (max-width: 360px) {
    top: 96px;
  }
`;

const HowBlockTrajectory = styled.svg`
  position: absolute;
  top: -100vw;
  left: -100vw;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
`;

const HowBlockOval = styled(motion.img)`
  position: absolute;
  top: 236px;
  left: 50px;
  z-index: 1;
  width: 160px;
  height: 131px;
  object-fit: contain;

  ${media.desktop`
    display: none;
  `}

  @media screen and (max-width: 360px) {
    top: 266px;
  }
`;


const HowBlockOvalDesk = styled(motion.img)`
  position: absolute;
  display: none;
  z-index: 1;
  object-fit: contain;

  ${media.desktop`
    display: block;
    top: 160px;
    left: min(302px, 20vw);
    width: min(220px, 15vw);
    height: min(179px, 12.4vw);
  `}
`;

export const HowBlock = ({wrapperRef}) => {
    const [ovalXDis, setOvalXDis] = useState();
    const rightTextRef = useRef();
    const leftTextRef = useRef();

    const isParentInView = useInView(wrapperRef, { 
        amount: 0.4,
    });

    const getSvgSizes = useCallback(() => {
        if (!leftTextRef?.current || !rightTextRef?.current) {
            return;
        }

        const leftTextRect = leftTextRef.current.getBoundingClientRect();
        const rightTextRect = rightTextRef.current.getBoundingClientRect();

        const width = rightTextRect.left - leftTextRect.left;

        const dist = window.innerWidth > 1100 ? 815 : 113;
        const koef = window.innerWidth > 1100 ? 0.75 : 1;

        setOvalXDis((width - dist) * koef);

        return (width - dist) * koef;
    }, []);

    useEffect(() => {
        getSvgSizes();

        window.addEventListener('resize', getSvgSizes);

        return () => window.removeEventListener('resize', getSvgSizes);
    }, [getSvgSizes])

    return (
        <Wrapper ref={wrapperRef}>
            <HowBlockTitle>
                как это работает?{'\n'}
               <span className='accent-text'>изи!</span>
            </HowBlockTitle>
            <HowBlockContent>
                <HowBlockTextLeft ref={leftTextRef}>
                    бот отправляет посты каждую неделю
                </HowBlockTextLeft>
                <HowBlockTextRight ref={rightTextRef}>
                    ты прокачиваешься для крутой работы
                </HowBlockTextRight>
            </HowBlockContent>
            <HowBlockOvalLeft src={oval} alt="" />
            <HowBlockTrajectory viewBox="0 0 747 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="trajectory" d="M0.671875 202.473C40.8385 222.64 137.272 241.573 201.672 155.973C282.172 48.973 452.172 -48.027 587.672 29.473C696.072 91.473 737.839 144.64 745.172 163.473"/>
            </HowBlockTrajectory>
            <HowBlockTrajectory viewBox="0 0 184 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="trajectoryMob" d="M1.50061 0.0217185C1.72812 15.7314 13.4211 43.9426 58.3731 31.1106C114.563 15.0707 184.468 22.7726 181.656 78.8207C179.406 123.659 167.47 150.374 161.783 158.127" />
            </HowBlockTrajectory>
            <HowBlockOvalDesk
                src={oval} 
                alt="" 
                initial={{ offsetDistance: "0%"}}
                animate={isParentInView ? { offsetDistance: "100%", scale: 3.2, x: ovalXDis ?? getSvgSizes()} : {}}
                style={{offsetPath: `url("#trajectory")`, offsetRotate: '0deg'}}
                transition={{duration: 2.5, ease: 'easeInOut'}}
            />
            <HowBlockOval
                src={oval} 
                alt="" 
                initial={{ offsetDistance: "0%" }}
                animate={isParentInView ? { offsetDistance: "100%", scale: 2.5} : {}}
                style={{offsetPath: `url("#trajectoryMob")`, offsetRotate: '0deg', x: ovalXDis ?? getSvgSizes()}}
                transition={{duration: 1.8, ease: 'easeInOut',}}
            />
            <ButtonStyled onClick={openBot}>
                кайф, я в деле
            </ButtonStyled>
        </Wrapper>
    )
}