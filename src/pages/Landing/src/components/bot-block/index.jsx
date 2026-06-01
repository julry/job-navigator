import { motion, useInView } from 'framer-motion';
import phone from '../../assets/images/phone.webp';
import ovalBg from '../../assets/images/ovalBg.webp';
import gift from '../../assets/images/gift.webp';
import giftHigh from '../../assets/images/giftHigh.webp';
import giftLong from '../../assets/images/giftLong.webp';
import { Block } from '../shared/block';
import { Button } from '../shared/button';
import { useRef } from 'react';
import {SPRING_TRANSITION} from './constants';
import {openBot} from '../../utils/openBot';
import styled from 'styled-components';
import { media } from '../../../../../styles/media';

const BotBlockStyled = styled.div`
  position: relative;
  margin-top: 30px;

    ${media.tablet`
        margin-top: 50px;
    `}

    ${media.desktop`
        margin-top: 70px;
    `}

   & img {
        object-fit: contain;
    }
`;

const MainButton = styled(Button)`
    margin-top: auto;
    width: 476px;

    & button {
        display: none;

        ${media.desktop`
            display: block;
            width: 476px;
            height: 56px;
        `}
    }
`;

const ButtonStyled = styled(Button)`
    margin: 40px auto 0;
    width: 100%;
    max-width: unset;

    ${media.desktop`
         display: none;
    `}

    & button {
        width: 100%;
    }
`;


const Oval = styled.img`
  display: none;

  ${media.desktop`
    display: block;
    position: absolute;
    right: -241px;
    top: -63px;
    height: 775px;
    width: 857px;
  `}
`;

const Content = styled.div`
  z-index: 2;
  padding: 15px 25px 30px;
  display: flex;
  flex-direction: column;

   ${media.desktop`
    min-height: 506px;
    padding: 44px 55px;
  `}
`;

const ImagesWrapper = styled.div`
  position: absolute;
  top: 0;
  right: max(-25%, -80px);
  z-index: 3;

    ${media.desktop`
        top: 14px;
        right: 56px;

        @media screen and (max-width: 1300px) {
        right: -80px;
        }

        @media screen and (max-width: 1200px) {
        right: -150px;
        }

        @media screen and (max-width: 1150px) {
        right: -200px;
        }
    `}
`;

const PhoneImg = styled.img`
  width: 244px;
  height: 343px;
  transform: rotate(12deg);

  ${media.desktop`
    transform: none;
    width: 407px;
    height: 571px;
  `}
`;

const TitleBot = styled.h3`
  font-size: 30px;
  line-height: 115%;
  text-transform: none;
  max-width: 280px;

  ${media.desktop`
    max-width: unset;
    font-size: 54px;
  `}
`;


const TitleJob = styled(TitleBot)`
    margin-top: 203px;
    line-height: 110%;
    color: var(--color-orange);
    margin-bottom: 20px;

    ${media.desktop`
        margin-bottom: 40px;
        margin-top: 0;
    `}
`;

const Text = styled.p`
  font-size: 14px;
  max-width: 476px;

  ${media.desktop`
    font-size: 18px;
  `}
`;

const Gift = styled(motion.img)`
  position: absolute;
  top: 75px;
  right: 48px;
  width: 133px;
  height: 132px;
  z-index: 2;

  ${media.desktop`
    top: 147px;
    right: 98px;
    width: 205px;
    height: 203px;
  `}

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

const GiftHigh = styled(motion.img)`
  position: absolute;
  top: 148px;
  right: 76px;
  width: 132px;
  height: 122px;
  transform: rotate(18deg);

  ${media.desktop`
    top: 233px;
    right: 106px;
    width: 219px;
    height: 203px;
  `}
`;

const GiftLong = styled(motion.img)`
  position: absolute;
  top: 124px;
  right: 106px;
  width: 67px;
  height: 88px;
  transform: rotate(10deg);

  ${media.desktop`
    display: none;
  `}
`;

export const BotBlock = () => {
    const imageWrapperRef = useRef();

    const isParentInView = useInView(imageWrapperRef, { 
        amount: 0.7,
    });

    const getGiftAnimation = (type) => {
        if (!isParentInView) {
            return {}
        }

        switch (type) {
            case "gift": {
                if (window.innerWidth > 1100) {
                    return ({x: -120, y: -120, rotate: -20});
                }

                return ({x: -50, y: -80, rotate: -20});
            }

            case "high": {
                if (window.innerWidth > 1100) {
                    return ({x: -140, y: -10, rotate: -25});
                }

                return ({x: -80, y: -50, rotate: -20});
            }

            case "long": {
                if (window.innerWidth > 1100) {
                    return ({});
                }
                if (window.innerWidth < 360) {
                    return ({x: -200, y: 50, rotate: 15});
                }

                return ({x: -250, y: 20, rotate: 25});
            }
            default: {
              return ({})
            }
        }
        
    }

    return (
        <BotBlockStyled>
                <Oval src={ovalBg} alt="" />
                <Block>
                    <Content>
                        <TitleBot>
                            переходи в VK‑бот 
                        </TitleBot>
                        <TitleJob>
                            работа по профессии
                        </TitleJob>
                        <Text>
                            твой помощник в поиске первой работы — внутри <span className='accent-text'>подарки, вакансии по специальности, лайфхаки</span> и другая полезная инфа для студентов колледжей и техникумов
                        </Text>
                        <MainButton onClick={openBot}>
                            переходи в бота!
                        </MainButton>
                    </Content>
                </Block>
                <ImagesWrapper ref={imageWrapperRef}>
                    <PhoneImg src={phone} alt="" />
                    <Gift
                        src={gift} 
                        alt=""
                        transition={SPRING_TRANSITION}
                        animate={getGiftAnimation('gift')}
                    />
                    <GiftHigh
                        src={giftHigh} 
                        alt="" 
                        animate={getGiftAnimation('high')}
                        transition={SPRING_TRANSITION}
                    />
                    <GiftLong
                        src={giftLong} 
                        alt="" 
                        transition={SPRING_TRANSITION}
                        animate={getGiftAnimation('long')}
                    />
                </ImagesWrapper>
                <ButtonStyled onClick={openBot}>
                    открыть бот
                </ButtonStyled>
        </BotBlockStyled>
    )
}