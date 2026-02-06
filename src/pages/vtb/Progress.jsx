import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { media } from "../../styles/media";
import { ProgressBar } from "../../components/ProgressBar";
import { Button } from "../../components/shared/Button";
import progrPic from '../../assets/images/vtb/vtbProgress.png';
import { ColoredSpan, NoTransformSpan, Subtitle, SubtitleSm, Title } from "../../components/shared/Texts";
import { InfoLine } from "../../components/shared/InfoLine";
import { ID_TO_BUTTONS, ID_TO_MAX_BRANCHES, ID_TO_OBJECT } from "./constants";

const Wrapper = styled.div`
    width: 100%;
    margin-top: 300px;
    position: relative;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;


    ${media.tablet`
        width: 100%;
        flex-direction: row;
        gap: 5px;
        justify-content: space-between;
    `}

    ${media.desktop`
        width: 100%;
        flex-direction: row;
        gap: 15px;
        justify-content: space-between;
    `}
`;

const InfoWrapper = styled.div`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: flex-start;

    margin-top: 30px;
    margin-bottom: 30px;

    ${media.tablet`
        align-items: center;
        flex-direction: column;
    `}

    ${media.desktop`
        gap: 40px;
    `}
`;

const InfoContent = styled(motion.div)`
    flex: 1;
    width: 100%;
    padding: 14px 15px;
    background-color: ${({ $defaultColor }) => $defaultColor};
    border-radius: 20px;
    height: stretch;

    ${media.tablet`
        transform: none !important;
        border-radius: 40px;
        padding: 25px;
    `}
`;

const Text = styled.p`
    font-size: 12px;
    line-height: 100%;
    color: ${({ $color }) => $color};

    ${media.desktop`
        font-size: 16px;
    `}

    margin-bottom: 10px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 20px;

    ${media.desktop`
        flex-direction: row;
        gap: 120px;

        & > div:first-child {
            width: 425px;
        }
    `}
`;

const ButtonStyled = styled(Button)`
    width: 140px;
    background-color: ${({ $defaultColor, $type }) => $type === 'main' ? $defaultColor : "var(--color-white)"};
    color: ${({ $defaultColor, $type }) => $type === 'main' ? "var(--color-white)" : $defaultColor};
    border: ${({ $defaultColor }) => '1px solid ' + $defaultColor};

    ${media.tablet`
        width: 100%;
        max-width: calc(100% - 0.5vw);
        font-size: 9px;
        padding: 14px 10px;
    `}
    ${media.desktop`
        font-size: 12px;
        max-width: calc(100% - 2vw);
        padding: 14px 20px;
    `}


    @media screen and (max-width: 350px){
        width: 110px;
    }

    &:hover {
        background-color: ${({ $defaultColor }) => $defaultColor};
        color: var(--color-white);
    }
`;

const InfoLineStyled = styled(InfoLine)`
    & p {
        font-size: 12px;
        ${media.desktop`
            font-size: 16px;
        `}

        @media screen and (max-width: 350px){
             font-size: 10px;
        }
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 0 100px;
    ${media.desktop`
        text-align: center;
        gap: 15px;
    `}
    ${media.tablet`
       gap: 8px;
    `}
`;

const BranchesWrapper = styled.div`
    position: absolute;
    display: flex;
    top: 295px;
    left: calc(100% + 10px);
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    & ${SubtitleSm} {
        width: calc(100% - 40px);
    }

    @media screen and (max-width: 334px) {
        top: 235px;
    }

    & > ${InfoContent} {
        width: 190px;

        ${media.tablet`
            width: 45%;
            max-width: unset;
        `}
    }
    & ${TextWrapper} {
        gap: 20px;
        flex-direction: column;

        ${media.tablet`
            gap: 120px;
            flex-direction: row;
        `}
    }

    ${media.tablet`
        width: 100%;
        height: auto;
        position: static;
        gap: 8px;
    `}
`;

const ArrowButton = styled.button`
    position: absolute;
    right: 20px;
    top: 275px;
    z-index: 20;
    border: 1px solid var(--color-vtb-blue);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.tablet`
        display: none;
    `}

    @media screen and (max-width: 334px) {
        top: 215px;
    }
`;

export const ProgressComponent = ({ defaultColor, accentColor, oppId }) => {
    const [part, setPart] = useState(1);
    const [branchShown, setBranch] = useState();

    const infoObject = ID_TO_OBJECT[oppId];
    const buttons = ID_TO_BUTTONS[oppId];
    const maxBranches = ID_TO_MAX_BRANCHES[oppId];

    if (!infoObject) {
        return;
    }

    const handleChangeBranch = () => {
        setBranch(prev => {
            if (!prev) return 1;
            if (prev === maxBranches) return undefined;

            return prev + 1;
        })
    }
    const handleSetPart = (buttonPart) => {
        setBranch();
        setPart(buttonPart)
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Title $color={defaultColor}><ColoredSpan $color={accentColor}>твой путь*</ColoredSpan> <NoTransformSpan>в ВТБ</NoTransformSpan></Title>
                <Subtitle $color={defaultColor}>шкала роста начинающего специалиста</Subtitle>
            </TitleWrapper>
            <ProgressBar amount={buttons.length} background={defaultColor} color={accentColor} picture={progrPic} part={part} />
            <InfoWrapper>
                <ButtonsWrapper>
                    {buttons.map(({name, part: buttonPart}) => (
                        <ButtonStyled key={`${oppId}_${buttonPart}`} $defaultColor={defaultColor} $type={part === buttonPart ? 'main' : 'secondary'} onClick={() => handleSetPart(buttonPart)}>{name}</ButtonStyled>
                    ))}
                </ButtonsWrapper>
                {infoObject[part]?.title && (
                    <InfoContent $defaultColor={defaultColor} animate={branchShown === undefined ? {x: 0} : {x: '100%'}} transition={{
                        duration: 0.3
                    }}>
                        <SubtitleSm $color="var(--color-white)">{infoObject[part].title}</SubtitleSm>
                        <TextWrapper>
                        {infoObject?.[part]?.aim && <div>
                                <Text $color={accentColor}>цель:</Text>
                                <InfoLineStyled defaultColor={'var(--color-white)'}>
                                    {infoObject[part].aim}
                                </InfoLineStyled>
                            </div>}
                            {infoObject?.[part]?.tasks && <div>
                                <Text $color={accentColor}>что будешь делать:</Text>
                                {infoObject[part].tasks.map((task, index) => (
                                    <InfoLineStyled key={index} defaultColor={'var(--color-white)'}>
                                        {task}
                                    </InfoLineStyled>
                                ))}
                            </div>}
                        </TextWrapper>
                    </InfoContent>
                )}
                {infoObject[part]?.branches?.length > 0 && !infoObject[part]?.title && (
                    <>
                        <InfoContent $defaultColor={defaultColor} animate={branchShown === undefined ? {x: 0} : {x: '100%'}} transition={{
                            duration: 0.3
                        }}>
                        <SubtitleSm $color="var(--color-white)">{infoObject[part].branches[0].title}</SubtitleSm>
                        <TextWrapper>
                        {infoObject[part].branches[0].aim && <div>
                                <Text $color={accentColor}>цель:</Text>
                                <InfoLineStyled defaultColor={'var(--color-white)'}>
                                    {infoObject[part].branches[0].aim}
                                </InfoLineStyled>
                            </div>}
                            {infoObject[part].branches[0].tasks && <div>
                                <Text $color={accentColor}>что будешь делать:</Text>
                                {infoObject[part].branches[0].tasks.map((task, index) => (
                                    <InfoLineStyled key={index} defaultColor={'var(--color-white)'}>
                                        {task}
                                    </InfoLineStyled>
                                ))}
                            </div>}
                        </TextWrapper>
                    </InfoContent>
                    <BranchesWrapper>
                     {infoObject[part]?.branches?.map((branch, index) => index > 0 ? (
                        <InfoContent key={branch.title} $defaultColor={defaultColor} 
                            animate={index === branchShown ? {x: -54 * (index) + 'vw'} : {x: '100%'}}
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                            }}
                        >
                            <SubtitleSm $color="var(--color-white)">{branch.title}</SubtitleSm>
                            <TextWrapper>
                                {branch.aim && (
                                    <div>
                                        <Text $color={accentColor}>цель:</Text>
                                        <InfoLineStyled defaultColor={'var(--color-white)'}>
                                            {branch.aim}
                                        </InfoLineStyled>
                                    </div>
                                )}
                                {branch.tasks && (
                                    <div>
                                        <Text $color={accentColor}>что будешь делать:</Text>
                                        {branch.tasks.map((task, index) => (
                                            <InfoLineStyled key={index} defaultColor={'var(--color-white)'}>
                                                {task}
                                            </InfoLineStyled>
                                        ))}
                                    </div>
                                )}
                            </TextWrapper>
                        </InfoContent>
                    ): null)}
                </BranchesWrapper>
                    </>
                )}
                {infoObject[part]?.branches?.length > 0 && infoObject[part]?.title?.length > 0 && (
                    <BranchesWrapper>
                     {infoObject[part]?.branches?.map((branch, index) => (
                        <InfoContent key={branch.title} $defaultColor={defaultColor} 
                            animate={index + 1 === branchShown ?  {x: -54 * (index + 1) + 'vw'} : {x: '100%'}}
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                            }}
                        >
                            <SubtitleSm $color="var(--color-white)">{branch.title}</SubtitleSm>
                            <TextWrapper>
                                {branch.aim && (
                                    <div>
                                        <Text $color={accentColor}>цель:</Text>
                                        <InfoLineStyled defaultColor={'var(--color-white)'}>
                                            {branch.aim}
                                        </InfoLineStyled>
                                    </div>
                                )}
                                {branch.tasks && (
                                    <div>
                                        <Text $color={accentColor}>что будешь делать:</Text>
                                        {branch.tasks.map((task, index) => (
                                            <InfoLineStyled key={index} defaultColor={'var(--color-white)'}>
                                                {task}
                                            </InfoLineStyled>
                                        ))}
                                    </div>
                                )}
                            </TextWrapper>
                        </InfoContent>
                    ))}
                </BranchesWrapper>
                )}
                {infoObject[part]?.branches?.length > 0 && (
                    <ArrowButton onClick={handleChangeBranch}>
                        <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6.36426C0.447715 6.36426 4.82822e-08 6.81197 0 7.36426C-4.82822e-08 7.91654 0.447715 8.36426 1 8.36426L1 7.36426L1 6.36426ZM22.7071 8.07137C23.0976 7.68084 23.0976 7.04768 22.7071 6.65715L16.3431 0.293191C15.9526 -0.0973331 15.3195 -0.0973331 14.9289 0.293191C14.5384 0.683716 14.5384 1.31688 14.9289 1.7074L20.5858 7.36426L14.9289 13.0211C14.5384 13.4116 14.5384 14.0448 14.9289 14.4353C15.3195 14.8259 15.9526 14.8259 16.3431 14.4353L22.7071 8.07137ZM1 7.36426L1 8.36426L22 8.36426L22 7.36426L22 6.36426L1 6.36426L1 7.36426Z" fill="#0A2896"/>
                            </svg>
                    </ArrowButton>
                )}
            </InfoWrapper>
            <Text $color={accentColor}>*это шкала роста — пример того, как можно расти <NoTransformSpan>в ВТБ</NoTransformSpan></Text>
        </Wrapper>
    )
}