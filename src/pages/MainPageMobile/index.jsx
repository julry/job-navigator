import styled from "styled-components";
import { ColoredSpan, SmallText, Title } from "../../components/shared/Texts";
import compas from '../../assets/images/compas/compasFull.png';
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import agro from '../../assets/images/default/people/agro.png';
import biotech from '../../assets/images/default/people/biotech.png';
import education from '../../assets/images/default/people/education.png';
import energetics from '../../assets/images/default/people/energetics.png';
import geology from '../../assets/images/default/people/geology.png';
import himtech from '../../assets/images/default/people/himtech.png';
import machine from '../../assets/images/default/people/machine.png';
import materials from '../../assets/images/default/people/materials.png';
import infosec from '../../assets/images/default/people/infosec.png';
import it from '../../assets/images/default/people/it.png';
import safetech from '../../assets/images/default/people/safetech.png';
import service from '../../assets/images/default/people/serviceMain.png';
import techcontrol from '../../assets/images/default/people/techcontrol.png';
import transportMain from '../../assets/images/default/people/transportMain.png';
import techprom from '../../assets/images/default/people/techpromMain.png';
import stroy from '../../assets/images/default/people/stroy.png';
import economy from '../../assets/images/default/people/economy.png';
import pravo from '../../assets/images/default/people/pravo.png';
import radioelectronic from '../../assets/images/default/people/radioelectronic.png';
import trade from '../../assets/images/default/people/trade.png';

import agroMountin from '../../assets/images/mountins/agroMountin.png';
import biotechMountin from '../../assets/images/mountins/biotechMountin.png';
import economyMountin from '../../assets/images/mountins/economyMountin.png';
import educationMountin from '../../assets/images/mountins/educationMountin.png';
import electricsMountin from '../../assets/images/mountins/electricsMountin.png';
import geologyMountin from '../../assets/images/mountins/geologyMountin.png';
import himtechMountin from '../../assets/images/mountins/himTechMountin.png';
import infosecMountin from '../../assets/images/mountins/infosecMountin.png';
import itMountin from '../../assets/images/mountins/itMountin.png';
import machineMountin from '../../assets/images/mountins/machineMountin.png';
import materialsMountin from '../../assets/images/mountins/materialsMountin.png';
import pravoMountin from '../../assets/images/mountins/pravoMountin.png';
import radioelectronicMoutin from '../../assets/images/mountins/radioelectronicMoutin.png';
import safetechMountin from '../../assets/images/mountins/safetechMountin.png';
import serviceMountin from '../../assets/images/mountins/serviceMountin.png';
import stroyMountin from '../../assets/images/mountins/stroyMountin.png';
import techcontrolMountin from '../../assets/images/mountins/techcontrolMountin.png';
import techpromMountin from '../../assets/images/mountins/techpromMountin.png';
import transportMountin from '../../assets/images/mountins/transportMountin.png';
import tradeMountin from '../../assets/images/mountins/tradeMountin.png';
import { Button } from "../../components/shared/Button";
import { media } from "../../styles/media";
import { DetailsModal } from "./DetailsModal";
import { openBot } from "../../utils/openBot";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;

    ${media.desktop`
        display: none;
    `}
`;

const TitleStyled = styled(motion.h3)`
    position: relative;
    z-index: 5;
    font-size: 40px;
    line-height: 100%;
    white-space: pre-line;
    text-align: center;
    margin: 41px 0 47px;
    color: var(--color-white-text);

    @media screen and (max-width: 374px) {
        font-size: 36px;
    }
`;

const OrangeBlock = styled.div`
    height: 40px;
    width: 100%;
    max-width: 350px;
    border-radius: 100px;
    padding: 0 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-orange);
    margin-top: 10px;
    & ${SmallText} {
        color: var(--color-dark-text) !important;
    }
`;

const BotBlockWrapper = styled.div`
    position: sticky;
    top: 100px;
    width: 100%;
    height: 40px;
    margin: 36px 0;
    z-index: 10;
`;

const BotBlock = styled(OrangeBlock)`
    margin-left: -30px;
    justify-content: flex-end;
    width: 150px;
`;

const ImageElement = styled(motion.img)`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    object-fit: contain;
    z-index: 3;
    transform: ${({ $isMirror }) => $isMirror ? 'scale(-1,1)' : 'none'};

    ${media.tablet`
        transform: ${({ $isMirror }) => $isMirror ? 'scale(-1.4, 1.4) ' : 'scale(1.4)'};
    `}
`;

const Person = styled(ImageElement)`
    z-index: 5;
`;

const CompasBlock = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background-color: var(--color-gray);
    border: 1px solid var(--color-white);
    width: 100%;
    border-radius: 30px;
    max-width: min(315px, 84vw);

    & ${SmallText} {
        max-width: 390px;
        color: var(--color-white);
    }
`;

const CompasStyled = styled.img`
    position: absolute;
    top: 100px;
    right: calc(50% - 186px);
    height: 133px;
    width: 133px;
    object-fit: contain;
`;

const CompasHeader = styled(Title)`
    font-size: 16px;
    margin-bottom: 25px;
    color: var(--color-white-text);
`;

const TextWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    --text-spacing: ${({ $spacing }) => -1 * $spacing + 'px'};
    border-radius: 100px;
    border: 1px solid var(--color-white);
    background-color: ${({ $isInversed }) => $isInversed ? 'var(--color-white)' : 'var(--color-gray)'};
    font-size: 12px;
    line-height: 90%;
    padding: 0 15px;
    letter-spacing: -0.03em;
    white-space: pre-wrap;
    color: ${({ $isInversed }) => $isInversed ? 'var(--color-dark-text)' : 'var(--color-white-text)'};
    top: ${({ $top }) => $top}px;
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height ?? 40}px;
    justify-content: flex-end;
    right: var(--text-spacing);
    ${({ $style }) => $style};

    ${media.tablet`
        transform: scale(1.4);
        top: ${({ $top }) => $top - 20}px;
        --text-spacing: ${({ $spacing }) => -1.25 * $spacing - 20 + 'px'};
        width: ${({ $width }) => $width + 10}px;
    `}
`;

const StaticBlock = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    margin-top: ${({ $marginTop }) => $marginTop ?? -20}px;
    
    flex-shrink: 0;

    &:nth-child(even) {
        justify-content: flex-end;

        & ${TextWrapper} {
            right: auto;
            justify-content: flex-start;
            left: var(--text-spacing);
        }
    }
`;

const PictureWrapper = styled.div`
    position: relative;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
`

const JobsWrapper = styled.div`
    width: 100%;
`;

const BotInfo = styled.div`
    margin: 40px auto 20px;
    padding: 40px 30px 0;

    & p {
        font-size: 20px;
        line-height: 100%;
        color: var(--color-white-text);
        margin-bottom: 20px;
    }

    ${media.tablet`
       margin-top: 80px;
    `}
`;

const FooterText = styled(SmallText)`
    text-align: center;
    text-transform: none;
    color: var(--color-white-text);
    margin-bottom: 34px;
`;

const ButtonStyled = styled(Button)`
    background-color: var(--color-orange);
    color: var(--color-gray);
`;

const UpButton = styled.button`
    margin-right: 30px;
    margin-left: auto;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
`;

export const MainPageMobile = () => {
    const [modal, setModal] = useState({ shown: false, data: null });
    const wrapperRef = useRef();

    return (
        <Wrapper ref={wrapperRef}>
            <DetailsModal isActive={modal.shown} onClose={() => setModal({ shown: false })} {...modal.data} />
            <TitleStyled>
                <ColoredSpan>навигатор</ColoredSpan>{'\n'}профессий
            </TitleStyled>
            <CompasStyled src={compas} alt="" />
            <CompasBlock>
                <CompasHeader>
                    навигатор профессий{'\n'}
                    — Это <ColoredSpan>интерактивный
                        помощник</ColoredSpan> для студентов колледжей и техникумов
                </CompasHeader>
                <SmallText>
                    Мы создали его, чтобы помочь тебе понять свою специальность, узнать, как вырасти в профессии и найти первую работу {'\n\n'}
                    погрузись в мир реальных вакансий, лайфхаков и советов от ведущих работодателей!
                </SmallText>
                <OrangeBlock>
                    <SmallText>Выбирай свою специальность</SmallText>
                </OrangeBlock>
            </CompasBlock>
            <BotBlockWrapper onClick={openBot}>
                <BotBlock>
                    <SmallText>бот — твой{'\n'}личный гид</SmallText>
                </BotBlock>
            </BotBlockWrapper>
            <JobsWrapper>
                <StaticBlock
                    $marginTop={0}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <>
                                    <PictureWrapper $width={166} $height={142}>
                                        <TextWrapper $isInversed $top={33} $width={206} $spacing={165}>
                                            Техника
                                            и технологии{'\n'}
                                            строительства
                                        </TextWrapper>
                                        <Person src={stroy} alt="" $width={55} $height={125} $top={0} $left={100} />
                                        <ImageElement src={stroyMountin} alt="" $width={166} $height={156} $top={20} $left={0} />
                                    </PictureWrapper>
                                </>
                            ),
                            jobId: 'stroy'
                        }
                    })}
                >
                    <PictureWrapper $width={166} $height={142}>
                        <TextWrapper $top={33} $width={206} $spacing={165}>
                            Техника
                            и технологии{'\n'}
                            строительства
                        </TextWrapper>
                        <Person src={stroy} alt="" $width={55} $height={125} $top={0} $left={100} />
                        <ImageElement src={stroyMountin} alt="" $width={166} $height={156} $top={20} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={135} $height={135} >
                                    <TextWrapper $isInversed $top={28} $width={244} $spacing={187} $style={{ fontSize: '11px' }}>
                                        Электроника, радиотехника{'\n'}и системы связи
                                    </TextWrapper>
                                    <Person $isMirror src={radioelectronic} alt="" $width={57} $height={130} $top={-5} $left={13} />
                                    <ImageElement src={radioelectronicMoutin} alt="" $width={182} $height={135} $top={-5} $left={-10} />
                                </PictureWrapper>
                            ),
                            jobId: 'radioelectronic'
                        }
                    })}
                >
                    <PictureWrapper $width={155} $height={155} >
                        <TextWrapper $top={48} $width={244} $spacing={200}>Электроника, радиотехника{'\n'}и системы связи</TextWrapper>
                        <Person src={radioelectronic} alt="" $width={67} $height={171} $top={0} $left={13} />
                        <ImageElement src={radioelectronicMoutin} alt="" $width={202} $height={155} $top={1} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={172} $height={165}>
                                    <TextWrapper $isInversed $isRight={false} $top={25} $width={215} $spacing={150}>юриспруденция</TextWrapper>
                                    <Person src={pravo} alt="" $width={85} $height={150} $top={-10} $left={69} />
                                    <ImageElement src={pravoMountin} alt="" $width={205} $height={129} $top={34} $left={-20} />
                                </PictureWrapper>
                            ),
                            jobId: 'pravo'
                        }
                    })}
                >
                    <PictureWrapper $width={172} $height={165}>
                        <TextWrapper $isRight={false} $top={40} $width={180} $spacing={135}>юриспруденция</TextWrapper>
                        <Person src={pravo} alt="" $width={85} $height={150} $top={0} $left={89} />
                        <ImageElement src={pravoMountin} alt="" $width={205} $height={129} $top={44} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={243} $height={148}>
                                    <TextWrapper $isInversed $top={42} $width={175} $spacing={87}>
                                        Экономика{'\n'}
                                        и финансы
                                    </TextWrapper>
                                    <Person src={economy} alt="" $width={79} $height={138} $top={0} $left={17} />
                                    <ImageElement src={economyMountin} alt="" $width={280} $height={147} $top={0} $left={-30} />
                                </PictureWrapper>
                            ),
                            jobId: 'economy',
                            marginTop: 100,
                        }
                    })}
                >
                    <PictureWrapper $width={243} $height={148}>
                        <TextWrapper $top={42} $width={155} $spacing={77}>
                            Экономика{'\n'}
                            и финансы
                        </TextWrapper>
                        <Person src={economy} alt="" $width={79} $height={138} $top={0} $left={47} />
                        <ImageElement src={economyMountin} alt="" $width={280} $height={147} $top={0} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={226} $height={167}>
                                    <TextWrapper $isInversed $top={40} $width={188} $spacing={93}>
                                        Торговое дело{'\n'}и логистика
                                    </TextWrapper>
                                    <Person src={trade} alt="" $width={117} $height={148} $top={0} $left={99} />
                                    <ImageElement src={tradeMountin} alt="" $width={200} $height={138} $top={29} $left={-30} />
                                </PictureWrapper>
                            ),
                            jobId: 'trade',
                            marginTop: 70,
                        }
                    })}
                >
                    <PictureWrapper $width={226} $height={167}>
                        <TextWrapper $isRight $top={40} $width={168} $spacing={83}>
                            Торговое дело{'\n'}и логистика
                        </TextWrapper>
                        <Person src={trade} alt="" $width={117} $height={148} $top={0} $left={109} />
                        <ImageElement src={tradeMountin} alt="" $width={200} $height={138} $top={29} $left={-20} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={206} $height={158}>
                                    <TextWrapper $isInversed $top={38} $width={247} $spacing={125} $style={{fontSize: '11px'}}>
                                        Информатика{'\n'}и вычислительная техника
                                    </TextWrapper>
                                    <Person src={it} alt="" $width={79 * 1.35} $height={143 * 1.35} $top={-25} $left={20} />
                                    <ImageElement src={itMountin} alt="" $width={230} $height={123} $top={33} $left={-40} />
                                </PictureWrapper>
                            ),
                            jobId: 'it',
                            marginTop: 100
                        }
                    })}
                >
                    <PictureWrapper $width={206} $height={158}>
                        <TextWrapper $top={38} $width={247} $spacing={125}>
                            Информатика{'\n'}и вычислительная техника
                        </TextWrapper>
                        <Person src={it} alt="" $width={79 * 1.35} $height={143 * 1.35} $top={-22} $left={60} />
                        <ImageElement src={itMountin} alt="" $width={230} $height={123} $top={36} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={156} $height={153}>
                                    <TextWrapper $isInversed $top={55} $width={269} $spacing={173}>Управление{'\n'}в технических системах</TextWrapper>
                                    <Person $isMirror src={techcontrol} alt="" $width={87 * 1.4} $height={146 * 1.4} $top={-40} $left={63.5} />
                                    <ImageElement src={techcontrolMountin} alt="" $width={188} $height={145} $top={9} $left={-42} />
                                </PictureWrapper>
                            ),
                            jobId: 'techcontrol',
                            marginTop: 70
                        }
                    })}
                >
                    <PictureWrapper $width={156} $height={153}>
                        <TextWrapper $isRight $top={61} $width={249} $spacing={183}>Управление{'\n'}в технических системах</TextWrapper>
                        <Person $isMirror src={techcontrol} alt="" $width={87 * 1.4} $height={146 * 1.4} $top={-40} $left={63.5} />
                        <ImageElement src={techcontrolMountin} alt="" $width={188} $height={145} $top={9} $left={-42} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={15}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={262} $height={165}>
                                    <TextWrapper $isInversed $top={20} $height={50} $width={272} $spacing={70}>
                                        Прикладная геология,{'\n'}горное дело, нефтегазовое{'\n'}дело и геодезия
                                    </TextWrapper>
                                    <Person $isMirror src={geology} alt="" $width={85 * 1.3} $height={137 * 1.3} $top={-30} $left={40} />
                                    <ImageElement src={geologyMountin} alt="" $width={262} $height={165} $top={0} $left={-65} />
                                </PictureWrapper>
                            ),
                            jobId: 'geology',
                            marginTop: 90
                        }
                    })}
                >
                    <PictureWrapper $width={262} $height={165}>
                        <TextWrapper $isRight $top={0} $height={50} $width={272} $spacing={70}>
                            Прикладная геология,{'\n'}горное дело, нефтегазовое{'\n'}дело и геодезия
                        </TextWrapper>
                        <Person src={geology} alt="" $width={85 * 1.3} $height={137 * 1.3} $top={-30} $left={125} />
                        <ImageElement src={geologyMountin} alt="" $width={262} $height={165} $top={0} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    $marginTop={-35}
                    onClick={() => setModal({
                            shown: true,
                            data: {
                                component: (
                                    <PictureWrapper $width={142} $height={128}>
                                        <TextWrapper $isInversed $top={34} $width={217} $spacing={175}>
                                            Технологии материалов
                                        </TextWrapper>
                                        <Person src={materials} alt="" $width={56 * 1.3} $height={128 * 1.3} $top={-30} $left={68} />
                                        <ImageElement src={materialsMountin} alt="" $width={170} $height={130} $top={9} $left={-15} />
                                    </PictureWrapper>
                                ),
                                jobId: 'materials',
                            }
                        })}
                >
                    <PictureWrapper $width={142} $height={128}>
                        <TextWrapper $isRight $top={44} $width={217} $spacing={175}>
                            Технологии материалов
                        </TextWrapper>
                        <Person src={materials} alt="" $width={56 * 1.3} $height={128 * 1.3} $top={-30} $left={63} />
                        <ImageElement src={materialsMountin} alt="" $width={170} $height={130} $top={9} $left={-30} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-35}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={166} $height={155}>
                                    <TextWrapper $isInversed $top={56} $width={236} $spacing={154}>
                                        Промышленная экология{'\n'}и биотехнологии
                                    </TextWrapper>
                                    <Person $isMirror src={biotech} alt="" $width={70 * 1.45} $height={143 * 1.45} $top={-32} $left={-10} />
                                    <ImageElement src={biotechMountin} alt="" $width={206} $height={107} $top={46} $left={-28} />
                                </PictureWrapper>
                            ),
                            jobId: 'biotech',
                            marginTop: 100,
                        }
                    })}
                >
                    <PictureWrapper $width={166} $height={155}>
                        <TextWrapper $isRight $top={56} $width={236} $spacing={154}>
                            Промышленная экология{'\n'}и биотехнологии
                        </TextWrapper>
                        <Person src={biotech} alt="" $width={70 * 1.45} $height={143 * 1.45} $top={-32} $left={10} />
                        <ImageElement src={biotechMountin} alt="" $width={206} $height={107} $top={46} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-45}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={186} $height={173}>
                                <TextWrapper $isInversed $top={43} $width={242} $spacing={139}>
                                    Сервис и туризм
                                </TextWrapper>
                                <Person $isMirror src={service} alt="" $width={77} $height={144} $top={0} $left={58} />
                                <ImageElement src={serviceMountin} alt="" $width={195} $height={108} $top={65} $left={-20} />
                            </PictureWrapper>
                            ),
                            jobId: 'service',
                            marginTop: 60,
                        }
                    })}
                >
                    <PictureWrapper $width={186} $height={173}>
                        <TextWrapper $isRight $top={43} $width={192} $spacing={94}>
                            Сервис и туризм
                        </TextWrapper>
                        <Person $isMirror src={service} alt="" $width={77} $height={144} $top={0} $left={63} />
                        <ImageElement src={serviceMountin} alt="" $width={195} $height={108} $top={65} $left={-15} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-35}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={235} $height={170}>
                                    <TextWrapper $isInversed $top={35} $width={253} $spacing={90}>
                                        машиностроение
                                    </TextWrapper>
                                    <Person src={machine} alt="" $width={93} $height={144} $top={0} $left={50} />
                                    <ImageElement $isMirror src={machineMountin} alt="" $width={247} $height={113} $top={57} $left={0} />
                                </PictureWrapper>
                            ),
                            jobId: 'machine',
                            marginTop: 120,
                        }
                    })}
                >
                    <PictureWrapper $width={235} $height={170}>
                        <TextWrapper $top={25} $width={213} $spacing={30}>
                            машиностроение
                        </TextWrapper>
                        <Person $isMirror src={machine} alt="" $width={93} $height={144} $top={0} $left={120} />
                        <ImageElement src={machineMountin} alt="" $width={247} $height={113} $top={57} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-45}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={195} $height={176}>
                                    <TextWrapper $isInversed $top={29} $width={274} $spacing={125}>
                                        Информационная{'\n'}безопасность
                                    </TextWrapper>
                                    <Person src={infosec} alt="" $width={75 * 1.3} $height={134 * 1.3} $top={-40} $left={0} />
                                    <ImageElement src={infosecMountin} alt="" $width={195} $height={126} $top={29} $left={-20} />
                                </PictureWrapper>
                            ),
                            jobId: 'infosec',
                        }
                    })}
                >
                    <PictureWrapper $width={195} $height={176}>
                        <TextWrapper $isRight $top={49} $width={254} $spacing={105}>
                            Информационная{'\n'}безопасность
                        </TextWrapper>
                        <Person src={infosec} alt="" $width={75 * 1.3} $height={134 * 1.3} $top={-20} $left={20} />
                        <ImageElement src={infosecMountin} alt="" $width={195} $height={126} $top={49} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-15}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={207} $height={159}>
                                    <TextWrapper $isInversed $top={37} $height={50} $width={261} $spacing={122}>
                                        Техносферная{'\n'}
                                        безопасность{'\n'}
                                        и природообустройство
                                    </TextWrapper>
                                    <Person src={safetech} alt="" $width={79 * 1.45} $height={147 * 1.45} $top={-47} $left={0} />
                                    <ImageElement $isMirror src={safetechMountin} alt="" $width={231} $height={116} $top={39} $left={-30} />
                                </PictureWrapper>
                            ),
                            jobId: 'safetech',
                            marginTop: 100,
                        }
                    })}
                >
                    <PictureWrapper $width={207} $height={159}>
                        <TextWrapper $isRight $top={42} $height={50} $width={231} $spacing={142}>
                            Техносферная{'\n'}
                            безопасность{'\n'}
                            и природообустройство
                        </TextWrapper>
                        <Person $isMirror src={safetech} alt="" $width={79 * 1.45} $height={147 * 1.45} $top={-42} $left={31} />
                        <ImageElement src={safetechMountin} alt="" $width={231} $height={116} $top={44} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-15}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={193} $height={165}>
                                    <TextWrapper $isInversed $top={32} $width={250} $spacing={135}>
                                        химические технологии
                                    </TextWrapper>
                                    <Person src={himtech} alt="" $width={71 * 1.2} $height={153 * 1.2} $top={-65} $left={30} />
                                    <ImageElement src={himtechMountin} alt="" $width={219} $height={142} $top={4} $left={-39} />
                                </PictureWrapper>
                            ),
                            jobId: 'himtech',
                        }
                    })}
                >
                    <PictureWrapper $width={193} $height={165}>
                        <TextWrapper $isRight $top={52} $width={220} $spacing={150}>
                            химические технологии
                        </TextWrapper>
                        <Person src={himtech} alt="" $width={71 * 1.2} $height={153 * 1.2} $top={-35} $left={95} />
                        <ImageElement src={himtechMountin} alt="" $width={219} $height={142} $top={24} $left={-24} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-45}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={217} $height={157}>
                                    <TextWrapper $isInversed $top={34} $width={258} $spacing={110}>
                                        Сельское, лесное{'\n'}и рыбное хозяйство
                                    </TextWrapper>
                                    <Person $isMirror src={agro} alt="" $width={81 * 1.4} $height={134 * 1.4} $top={-40} $left={30} />
                                    <ImageElement src={agroMountin} alt="" $width={252} $height={95} $top={62} $left={-30} />
                                </PictureWrapper>
                            ),
                            jobId: 'agro',
                            marginTop: 115
                        }
                    })}
                >
                    <PictureWrapper $width={217} $height={157}>
                        <TextWrapper $top={64} $width={268} $spacing={129}>
                            Сельское, лесное{'\n'}и рыбное хозяйство
                        </TextWrapper>
                        <Person src={agro} alt="" $width={81 * 1.4} $height={134 * 1.4} $top={-40} $left={60} />
                        <ImageElement src={agroMountin} alt="" $width={252} $height={95} $top={62} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-10}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={193} $height={147}>
                                    <TextWrapper $isInversed $top={26} $width={280} $spacing={130}>
                                        Техника и технологии{'\n'}наземного транспорта
                                    </TextWrapper>
                                    <Person src={transportMain} alt="" $width={92} $height={177} $top={-20} $left={0} />
                                    <ImageElement src={transportMountin} alt="" $width={213} $height={108} $top={55} $left={-20} />
                                </PictureWrapper>
                            ),
                            jobId: 'transport',
                            marginTop: 95
                        }
                    })}
                >
                    <PictureWrapper $width={193} $height={147}>
                        <TextWrapper $top={26} $width={240} $spacing={90}>
                            Техника и технологии{'\n'}наземного транспорта
                        </TextWrapper>
                        <Person src={transportMain} alt="" $width={92} $height={177} $top={0} $left={0} />
                        <ImageElement src={transportMountin} alt="" $width={213} $height={108} $top={75} $left={-20} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock 
                    $marginTop={-25}
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={196} $height={174}>
                                    <TextWrapper $isInversed $top={35} $width={271} $spacing={130}>
                                        Технологии легкой{'\n'}промышленности
                                    </TextWrapper>
                                    <Person $isMirror src={techprom} alt="" $width={85} $height={147} $top={-10} $left={22} />
                                    <ImageElement src={techpromMountin} alt="" $width={256} $height={103} $top={54} $left={-30} />
                                </PictureWrapper>
                            ),
                            jobId: 'techprom',
                            marginTop: 100
                        }
                    })}
                >
                    <PictureWrapper $width={196} $height={174}>
                        <TextWrapper $top={65} $width={226} $spacing={115}>
                            Технологии легкой{'\n'}промышленности
                        </TextWrapper>
                        <Person src={techprom} alt="" $width={85} $height={147} $top={0} $left={52} />
                        <ImageElement src={techpromMountin} alt="" $width={256} $height={103} $top={64} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={212} $height={160}>
                                    <TextWrapper $isInversed $top={32} $width={232} $spacing={112}>
                                        Электро-{'\n'}и теплоэнергетика
                                    </TextWrapper>
                                    <Person $isMirror src={energetics} alt="" $width={81 * 1.35} $height={131 * 1.35} $top={-34} $left={81} />
                                    <ImageElement src={electricsMountin} alt="" $width={227} $height={135} $top={24} $left={-23} />
                                </PictureWrapper>
                            ),
                            jobId: 'energetics',
                            marginTop: 110
                        }
                    })}
                >
                    <PictureWrapper $width={212} $height={160}>
                        <TextWrapper $isRight $top={82} $width={232} $spacing={142}>
                            Электро-{'\n'}и теплоэнергетика
                        </TextWrapper>
                        <Person $isMirror src={energetics} alt="" $width={89 * 1.35} $height={148 * 1.35} $top={-40} $left={81} />
                        <ImageElement src={electricsMountin} alt="" $width={236} $height={142} $top={19} $left={-23} />
                    </PictureWrapper>
                </StaticBlock>
                <StaticBlock
                    onClick={() => setModal({
                        shown: true,
                        data: {
                            component: (
                                <PictureWrapper $width={212} $height={150}>
                                    <TextWrapper $isInversed $top={62} $width={250} $spacing={110}>Образование{'\n'}и педагогические науки</TextWrapper>
                                    <Person $isMirror src={education} alt="" $width={114} $height={170} $top={-10} $left={50} />
                                    <ImageElement src={educationMountin} alt="" $width={230} $height={127} $top={44} $left={-40} />
                                </PictureWrapper>
                            ),
                            jobId: 'education',
                            marginTop: 120
                        }
                    })}
                >
                    <PictureWrapper $width={212} $height={150}>
                        <TextWrapper $isRight $top={62} $width={270} $spacing={85}>Образование{'\n'}и педагогические науки</TextWrapper>
                        <Person src={education} alt="" $width={134} $height={200} $top={0} $left={70} />
                        <ImageElement src={educationMountin} alt="" $width={230} $height={127} $top={84} $left={0} />
                    </PictureWrapper>
                </StaticBlock>
            </JobsWrapper>
            <BotInfo>
                <p>
                    Хочешь узнать больше{'\n'}
                    полезной инфы о навыках{'\n'}
                    и развитии в профессии?
                </p>
                <ButtonStyled onClick={openBot}>переходи в бота!</ButtonStyled>
            </BotInfo>
            <UpButton onClick={() => wrapperRef?.current?.scrollTo({ top: 0, behavior: "smooth" })}>
                <svg width="100%" height="100%" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 31C20 31.5523 20.4477 32 21 32C21.5523 32 22 31.5523 22 31L21 31L20 31ZM21.7071 9.29289C21.3166 8.90237 20.6834 8.90237 20.2929 9.29289L13.9289 15.6569C13.5384 16.0474 13.5384 16.6805 13.9289 17.0711C14.3195 17.4616 14.9526 17.4616 15.3431 17.0711L21 11.4142L26.6569 17.0711C27.0474 17.4616 27.6805 17.4616 28.0711 17.0711C28.4616 16.6805 28.4616 16.0474 28.0711 15.6569L21.7071 9.29289ZM21 31L22 31L22 10L21 10L20 10L20 31L21 31Z" fill="var(--color-white)" />
                    <rect x="1" y="41" width="40" height="40" rx="20" transform="rotate(-90 1 41)" stroke="var(--color-white)" stroke-width="2" />
                </svg>
            </UpButton>
            <FooterText>
                © 2005-2026 FutureToday.{'\n'}Все права защищены.
            </FooterText>
        </Wrapper>
    )
}