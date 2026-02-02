import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { media } from "../styles/media";
import { CompasButton } from "./shared/CompasButton";
import { Title, Text, ColoredSpan } from "./shared/Texts";
import defaultMenuPerson from '../assets/images/default/modalPersonDefault.png';
import defaultMenuHead from '../assets/images/default/menuDefaultHead.png';
import { Button } from './shared/Button';
import { ModalLines } from "./shared/svg/ModalLines";
import { ModalLinesDesk } from "./shared/svg/ModalLinesDesk";

const Wrapper = styled(motion.div)`
    position: absolute;
    inset: 0;
    overflow-x: hidden;
    padding-top: 88px;
   
    z-index: 302;

    ${media.desktop`
        padding-top: 92px;
    `}

     backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
`;

const Content = styled(motion.div)`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;

    background-color: var(--color-white);
    overflow: hidden auto;

    padding: 30px 20px;

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    ${media.desktop`
        padding: 40px 60px;

        border-top-left-radius: 72px;
        border-top-right-radius: 72px;
    `}
`;

const CompasButtonStyled = styled(CompasButton)`
    top: -10px;
`;


const TitleStyled = styled(Title)`
    font-size: ${({ $fontSize }) => $fontSize}px;
    padding-bottom: 55px;
    max-width: 900px;

     @media screen and (min-width: 1200px){
        font-size: 50px;
    }
`;


const Card = styled.div`
    position: relative;
    padding: 5px;
    border-radius: 30px;
    width: fit-content;
    overflow: hidden;
    width: 100%;

    & + & {
        margin-top: 20px;
    }
`;

const CardContent = styled.div`
    position: relative;
    z-index: 2;
    background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'var(--color-gray)'};
    border-radius: 30px;
    padding: 20px;
    padding-right: 10px;

    ${({ $withPicture }) => $withPicture ? 'height: 440px' : ''};

    & p {
        color: ${({ $textColor }) => $textColor ?? 'var(--color-white)'} !important;
        font-size: 16px;
    }

   ${media.desktop`
        min-height: 210px;
        ${({ $withPicture }) => $withPicture ? 'height: 380px' : ''};

        & ${Text} {
            max-width: 420px;
        }
   `}

   @media screen  and (max-width: 350px){
        & p {
            font-size: 14px;
        }
    }

    @media screen  and (max-width: 330px){
        & p {
            font-size: 13px;
        }
    }
`

const NoiseSvg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'var(--color-gray)'};
    filter: url(#noiseFilter);   
    border-radius: 30px;
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    contain: content;
    isolation: isolate;
`;

const CardTitle = styled(Title)`
    font-size: 24px;
    color: ${({ $color }) => $color ?? 'var(--color-white-text)'};
    margin-bottom: 30px;
    max-width: 600px;

    @media screen  and (max-width: 350px){
        font-size: 22px;
    }

    @media screen  and (max-width: 330px){
        font-size: 20px;
    }
`;

const FilterSvg = styled.svg`
    position: absolute;
    top: -2vh;
    left: -2vh;
    visibility: hidden;
`;

const Picture = styled.img`
    position: absolute;
    bottom: ${({ $bottom }) => $bottom}px;
    left: ${({ $left }) => $left}%;
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    z-index: 3;
    object-fit: contain;

    ${media.desktop`
        display: none;
    `}
`;

const PictureDesk = styled(Picture)`
    display: none;
    left: ${({ $left }) => $left}px;

    ${media.desktop`
        display: block;
    `}
`;

const CardsWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 710px;
    margin: 0 auto ${({ $bottom }) => -1 * $bottom + 60}px;

    ${media.desktop`
       margin: 0;
    `}
`;

const MenuBlock = styled.div`
    position: relative;

    ${media.desktop`
        display: none;
    `}
`;

const MenuBlockDesktop = styled(motion.div)`
    position: sticky;
    margin-left: auto;
    top: 86px;
    right: 0;
    width: 660px;
    display: none;
    z-index: 1;

    ${media.desktop`
        display: block;
    `}
`;

const MenuMan = styled.img`
    position: absolute;
    object-fit: contain;
    top: 54px;
    right: max(-72.2vw, -270px);
    width: 528px;
    height: 453px;
    z-index: 1;

    @media screen and (min-width: 400px) {
       right: -256px;
    }

    ${media.tablet`
        right: auto;
        transform: scale(-1, 1);
        left: max(-67.2vw, -252px);
    `}

    ${media.desktop`
        width: 702px;
        height: 645px;
        right: -15px;
        top: -40px;
        left: auto;
        transform: scale(1, 1);
    `}
`;

const MobileLines = styled.div`
    position: absolute;
    right: min(6.6vw, 20px);
    top: 194px;
    z-index: 2;

    @media screen and (min-width: 400px) {
       right: 42px;
    }

    ${media.tablet`
        transform: scale(-1, 1);
        right: auto;
        left: min(9.5vw, 62px);
    `}

    ${media.desktop`
        display: none;
    `}
    
    @media screen and (max-width: 330px) {
       display: none;
    }
`;

const DesktopLines = styled.div`
    display: none;
    position: absolute;
    right: 230px;
    top: 23px;
    z-index: 0;

    ${media.desktop`
        display: block;
    `}
`;

const MenuContent = styled.div`
    position: absolute;
    top: 160px;
    right: min(35.46vw, 133px);
    z-index: 6;

     @media screen and (min-width: 400px) {
       right: 154px;
    }

    ${media.tablet`
        right: auto;
        left: 176px;
    `}

    ${media.desktop`
        top: 0;
        right: 0;
        left: auto;
    `}
`;

const MenuHead = styled(MenuMan)`
    z-index: 4;
`;

const ButtonWrapper = styled.div`
    position: relative;
    z-index: 2;
    width: fit-content;

    & + & {
        margin-top: 10px;
    }
`;

const ButtonNoiseSvg = styled(NoiseSvg)`
    background-color: ${({ $backgroundColor }) => $backgroundColor ?? 'var(--color-orange)'};
`;

const ButtonStyled = styled(Button)`
    font-size: 12px;
    transition: border 0.3s, background 0.3s, color 0.3s;
    border: 1px solid ${({ $isActive }) => $isActive ? 'var(--color-orange)' : 'var(--color-gray)'};
    ${({ $isActive }) => $isActive ? 'background-color: var(--color-orange); color: var(--color-white-text);' : ''};
    padding: 14px 5px;
    width: 206px;
    ${({ $styles }) => $styles};
    ${({ $hasActiveStyles, $activeStyles }) => $hasActiveStyles ? $activeStyles : ''};
    ${({$blockTextSize}) => $blockTextSize ? 'font-size:' + $blockTextSize + 'px' : ''};
    line-height: 100%;

    @media screen and (min-width: 400px) {
        width: 220px;
    }

    ${media.tablet`
        width: 280px;
    `}

    &:hover {
        border: 1px solid var(--color-orange);
        ${({ $hasActiveStyles, $activeStyles }) => $hasActiveStyles ? $activeStyles : ''};
    }

    @media screen  and (max-width: 350px){
       width: 190px;
    }

    @media screen  and (max-width: 330px){
        width: 170px;
    }
`;

const UpButton = styled.button`
    position: relative;
    margin-top: 320px;
    margin-left: auto;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    
    z-index: 10;
    ${media.desktop`
        margin-top: ${({$pictureBottom, $hasChildren}) =>$hasChildren ? 60 : -1 * $pictureBottom}px;
    `}
`;

const ClosedButton = styled.button`
    position: absolute;
    top: 68px;
    right: 25px;

    width: 47px;
    height: 40px;

    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: var(--color-gray);
    border: 1px solid var(--color-white);
    z-index: 10;
`;

const CardInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    ${media.desktop`
        flex-direction: row;
        justify-content: space-between;
    `}
`;

const DescWrapper = styled.div`
    flex: 1;

    /* max-width: ${({ $isBrand }) => $isBrand ? '317px' : 'unset'}; */
`;

const SkillContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
`;

const SkillWrapper = styled.div`
    max-width: 300px;
    width: 100%;

    ${({$shoudShowPicture}) => $shoudShowPicture ? 'margin-bottom: 60px' : ''};
`;

const Skill = styled.div`
    border-radius: 10px;
    padding: 6px;
    width: ${({ $width }) => $width ?? 100}%;
    font-size: 12px;
    text-align: center;
    ${({ $styles }) => $styles}; 
    margin-bottom: 10px;
`;

const CommonSkillsWrapper = styled.div`
    width: 100%;
    max-width: 710px;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 10px;

    ${media.desktop`
        justify-content: space-between;
        flex-direction: row;
    `}
`;

export const JobModal = ({ 
    isBrand, styles, opportunities, children, id, onClose, horizontalComponent,
    picture, menuPerson = defaultMenuPerson, menuPersonHead = defaultMenuHead 
}) => {
    const [chosen, setChosen] = useState(id);
    const [shownUpBtn, setShowUpBtn] = useState(true);
   
    const title = useRef();
    const lastCardRef = useRef();
    const contentRef = useRef();

    const { scrollY } = useScroll({container: contentRef});
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollY, "change", () => {
        if (children === undefined) return;

        const lastCard = lastCardRef?.current?.getBoundingClientRect();
        const bottom = lastCard?.top + lastCard?.height;
        if (scrollY.get() - bottom > 100) {
            setY((bottom - scrollY.get()) / 2)
        }
    });

    const chosenOpportunity = opportunities.find((opp) => chosen === opp.id) ?? {};
    const chosenId = opportunities.findIndex((opp) => chosen === opp.id);

    const { pictureBottom = -20, textSize = 36, jobs = [], hasPicture = true, skillsWidth = []} = chosenOpportunity;

    const { 
        textColor, titleColor, cardTitleColor, activeTabStyles = {}, 
        tabStyles, activeLineColor, lineColor, backgroundColor, 
        commonSkillStyles, skillStyles, accentColor
    } = styles ?? {};

    const {titleColor: titleColorCommonSkills, ...commonSkills} = commonSkillStyles ?? {};

    const scrollContentTop = () => {
        title?.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
    }

    useEffect(() => {
        if (chosen === 'horizontal') {
             setShowUpBtn(false);
             return;
        }
        const lastCard = lastCardRef?.current?.getBoundingClientRect();
        const bottom = lastCard?.top + lastCard?.height;
        setShowUpBtn(window.innerWidth < 1200 || bottom > window.innerHeight);
    }, [chosen]);

    const handleChoose = (id) => {
        setChosen(id);
        scrollContentTop();
    }

    const shoudShowPicture = !isBrand ? hasPicture : jobs?.[jobs.length - 1]?.desc === undefined;

    return (
        <Wrapper
            initial={{ y: '100vh' }}
            animate={{ y: 0, boxShadow: '0 -2px 35px 2px var(--color-gray)' }}
            exit={{ y: '100vh', boxShadow: 'unset' }}
            transition={{ duration: 0.3 }}
        >
            <ClosedButton onClick={onClose}>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 19L9.38597 8.89595L9.34211 9.40848L0.482459 0H2.19298L10.2632 8.63969H9.64914L17.6754 0H19.3421L10.4386 9.55491L10.4825 8.85935L20 19H18.2018L9.69299 9.77457L10.1755 9.81118L1.71052 19H0Z" fill="#FFF2EC" />
                </svg>
            </ClosedButton>
            <Content
                ref={contentRef}
                animate={{ boxShadow: '0 -2px 35px 2px var(--color-gray)' }}
                exit={{ boxShadow: 'unset' }}
                transition={{
                    delay: 0.28,
                    duration: 0.15
                }}
            >
                <MenuBlockDesktop animate={{y}}>
                    <DesktopLines>
                        <ModalLinesDesk accentColor={activeLineColor} defaultColor={lineColor} amount={opportunities.length} active={chosenId} />
                    </DesktopLines>
                    <MenuContent>
                        {opportunities.map(({ text, id, blockTextSize }) => (
                            <ButtonWrapper>
                                {id === chosen && (
                                    <ButtonNoiseSvg $backgroundColor={activeTabStyles?.backgroundColor} />
                                )}
                                <ButtonStyled
                                    onClick={() => handleChoose(id)}
                                    $isActive={id === chosen}
                                    $type='secondary'
                                    $blockTextSize={blockTextSize}
                                    $hasActiveStyles={id === chosen && isBrand}
                                    $activeStyles={activeTabStyles}
                                    $styles={isBrand ? tabStyles : {}}
                                >
                                    {text}
                                </ButtonStyled>
                            </ButtonWrapper>
                        ))}
                    </MenuContent>
                    <MenuMan src={menuPerson} alt="" />
                    <MenuHead src={menuPersonHead} alt="" />
                </MenuBlockDesktop>
                <TitleStyled $fontSize={textSize} $color={titleColor ?? textColor} ref={title}>
                    {chosen === 'horizontal' ? 'переход между направлениями' : chosenOpportunity.text}
                </TitleStyled>
                {isBrand && (chosenOpportunity.readyFor?.length || chosenOpportunity.skills?.length) && (
                    <CommonSkillsWrapper>
                        <SkillWrapper>
                            <Text $color={titleColorCommonSkills}>к чему быть готовым:</Text>
                            <br />
                            <SkillContent>
                                {chosenOpportunity.readyFor?.map((skill, index) => (
                                    <Skill
                                        key={chosenOpportunity.id + index + '_ready'}
                                        $styles={commonSkills}
                                    >
                                        {skill}
                                    </Skill>
                                ))}
                            </SkillContent>
                        </SkillWrapper>
                        <SkillWrapper>
                            <Text $color={titleColorCommonSkills}>навыки/скиллы:</Text>
                            <br />
                            <SkillContent>
                                {chosenOpportunity.skills?.map((skill, index) => (
                                    <Skill
                                        $width={skillsWidth?.[index]}
                                        key={chosenOpportunity.id + index + '_common'}
                                        $styles={commonSkills}
                                    >
                                        {skill}
                                    </Skill>
                                ))}
                            </SkillContent>
                        </SkillWrapper>
                    </CommonSkillsWrapper>
                )}
                {
                    chosen === 'horizontal' ? horizontalComponent : (
                        <CardsWrapper $bottom={pictureBottom}>
                    {jobs.map((job, index) => (
                        <Card key={job.id} ref={index === jobs.length - 1 ? lastCardRef : null}>
                            <CardContent
                                $withPicture={index === (jobs.length - 1) && !isBrand && hasPicture}
                                $backgroundColor={backgroundColor}
                                $textColor={textColor}
                            >
                                <CardTitle $color={cardTitleColor}>{job.title}</CardTitle>
                                <CardInnerWrapper $noDesc={index === (jobs.length - 1) && !job.desc}>
                                    <DescWrapper $isBrand={isBrand}>
                                        {(job.desc !== undefined || job?.desc?.length > 0) && (
                                            <>
                                                <Text>что делает</Text>
                                                <br />
                                                <Text $color={textColor}>{job.desc}</Text>
                                            </>
                                        )}
                                    </DescWrapper>
                                    {isBrand && job.skills?.length && (
                                        <SkillWrapper $shoudShowPicture={shoudShowPicture && index === (jobs.length - 1)}>
                                            <Text>навыки/скиллы</Text>
                                            <br />
                                            <SkillContent>
                                                {job.skills?.map((skill) => (
                                                    <Skill
                                                        key={skill.id}
                                                        $styles={skillStyles}
                                                        $width={skill.width ?? 100}
                                                    >
                                                        {skill.name}
                                                    </Skill>
                                                ))}
                                            </SkillContent>
                                        </SkillWrapper>
                                    )}
                                </CardInnerWrapper>

                            </CardContent>
                            <NoiseSvg $backgroundColor={backgroundColor} />
                        </Card>
                    ))}
                    {picture && shoudShowPicture && (
                        <>
                            <Picture
                                $bottom={pictureBottom}
                                $left={picture[0]?.left}
                                $width={picture[0]?.width}
                                $height={picture[0]?.height}
                                src={picture[0]?.img}
                                alt=""
                            />
                            <PictureDesk
                                $bottom={picture[1]?.bottom}
                                $left={picture[1]?.left}
                                $width={picture[1]?.width}
                                $height={picture[1]?.height}
                                src={picture[1]?.img}
                                alt=""
                            />
                        </>
                    )}
                </CardsWrapper>
                    )
                }
                {children}
                <MenuBlock>
                    <TitleStyled $color={titleColor ?? textColor}>
                        <ColoredSpan $color={accentColor ?? backgroundColor}>посмотреть</ColoredSpan> другие направления
                    </TitleStyled>
                    <MenuMan src={menuPerson} alt="" />
                    <MobileLines>
                        <ModalLines accentColor={activeLineColor} defaultColor={lineColor} active={chosenId} amount={opportunities.length} />
                    </MobileLines>
                    <MenuHead src={menuPersonHead} alt="" />
                    <MenuContent>
                        {opportunities.map(({ text, id, blockTextSize }) => (
                            <ButtonWrapper>
                                {id === chosen && (
                                    <ButtonNoiseSvg $backgroundColor={activeTabStyles.backgroundColor} />
                                )}
                                <ButtonStyled
                                    onClick={() => handleChoose(id)}
                                    $isActive={id === chosen}
                                    $type='secondary'
                                    $blockTextSize={blockTextSize}
                                    $hasActiveStyles={id === chosen && isBrand}
                                    $activeStyles={activeTabStyles}
                                    $styles={isBrand ? tabStyles : {}}
                                >
                                    {text}
                                </ButtonStyled>
                            </ButtonWrapper>
                        ))}
                    </MenuContent>
                </MenuBlock>
                {shownUpBtn && (<UpButton $hasChildren={children !== undefined} $pictureBottom={pictureBottom} onClick={scrollContentTop}>
                    <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 31C20 31.5523 20.4477 32 21 32C21.5523 32 22 31.5523 22 31L21 31L20 31ZM21.7071 9.29289C21.3166 8.90237 20.6834 8.90237 20.2929 9.29289L13.9289 15.6569C13.5384 16.0474 13.5384 16.6805 13.9289 17.0711C14.3195 17.4616 14.9526 17.4616 15.3431 17.0711L21 11.4142L26.6569 17.0711C27.0474 17.4616 27.6805 17.4616 28.0711 17.0711C28.4616 16.6805 28.4616 16.0474 28.0711 15.6569L21.7071 9.29289ZM21 31L22 31L22 10L21 10L20 10L20 31L21 31Z" fill={textColor ?? "var(--color-gray)"} />
                        <rect x="1" y="41" width="40" height="40" rx="20" transform="rotate(-90 1 41)" stroke={textColor ?? "var(--color-gray)"} stroke-width="2" />
                    </svg>
                </UpButton>)}
                <FilterSvg width="100%" height="100%">
                    <rect width="100%" height="100%" fill="none" filter="url(#noiseFilter)" clip-path="url(#clip)" />
                    <defs>
                        <clipPath id="clip">
                            <rect width="100%" height="100%" />
                        </clipPath>
                        <filter id="noiseFilter"
                            x="0" y="0"
                            width="110%" height="110%"
                            filterUnits="objectBoundingBox">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" in="SourceGraphic" />
                            <feTurbulence type="fractalNoise" baseFrequency="1.6666666269302368 1.6666666269302368" numOctavвбes="3" seed="4986" />
                            <feDisplacementMap in="effect1_foregroundBlur" scale="4" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="105%" height="105%" />
                            <feMerge>
                                <feMergeNode in="displacedImage" />
                            </feMerge>
                        </filter>
                    </defs>
                </FilterSvg>
            </Content>

        </Wrapper>
    )
}