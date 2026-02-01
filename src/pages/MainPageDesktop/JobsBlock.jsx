import styled from 'styled-components';
import { motion } from 'framer-motion';

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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsModal } from './DetailsModal';


const ImageElement = styled(motion.img)`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    object-fit: contain;
    z-index: 2;
`;

const AbsoluteBlock = styled.div`
    position: absolute;
    z-index: 2;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;

    @media screen and (max-width: 1400px){
        height: calc(${({ $height }) => $height}px * 0.9);
        width: calc(${({ $width }) => $width}px * 0.9);
        left: calc(${({ $left }) => $left}px * 0.9);
    }
    @media screen and (max-width: 1300px){
        height: calc(${({ $height }) => $height}px * 0.9);
        width: calc(${({ $width }) => $width}px * 0.9);
        left: calc(${({ $left }) => $left}px * 0.86);
    }
`;

const MotionBlock = styled(motion.div)`
    position: absolute;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    z-index: 2;

    @media screen and (max-width: 1400px){
        height: calc(${({ $height }) => $height}px * 0.9);
        width: calc(${({ $width }) => $width}px * 0.9);
        left: calc(${({ $left }) => $left}px * 0.9);
    }
    @media screen and (max-width: 1300px){
        height: calc(${({ $height }) => $height}px * 0.9);
        width: calc(${({ $width }) => $width}px * 0.9);
        left: calc(${({ $left }) => $left}px * 0.86);
    }
`;

const Person = styled(ImageElement)`
    z-index: 5;
    transform: ${({ $isMirror }) => $isMirror ? 'scale(-1,1)' : 'none'};
    cursor: pointer;
`;

const TextWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 100px;
    border: 1px solid var(--color-white);
    background-color: var(--color-gray);
    font-size: 10px;
    line-height: 90%;
    padding: 0 15px;
    letter-spacing: -0.03em;
    white-space: pre-wrap;
    z-index: 4;
    color: var(--color-white-text);
    top: ${({ $top }) => $top}px;
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height ?? 40}px;
    justify-content: ${({ $isRight }) => $isRight ? 'flex-end' : 'flex-start'};
    right: ${({ $isRight, $spacing }) => $isRight ? -$spacing + 'px' : 'auto'};
    left: ${({ $isRight, $spacing }) => $isRight ? 'auto' : -$spacing + 'px'};

    @media screen and (max-width: 1400px){
        transform: scale(0.9);
    }
    @media screen and (max-width: 1300px){
        transform: scale(0.85);
    }
`;

const HimTechCircle = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 4px;
    right: 95px;
    z-index: 4;
    border-radius: 50%;
    background-color: var(--color-orange);
`;

export const JobsBlock = ({handleMouseEnter, handleMouseLeave, yBlocks}) => {
    const [chosen, setChosen] = useState();
    const navigate = useNavigate();

    const handleHover = (e, data, id) => {
        handleMouseEnter(e, data);
        setChosen(id)
    }

     const handleStopHover = () => {
        handleMouseLeave();
        setChosen(undefined);
    }

    const handleNavigate = (id) => {
        if (chosen === id) {
            navigate(`/${id}`);
        }
    }

    return (
    <>
        <MotionBlock
            $top={368} $left={1083} $width={230} $height={211}
            style={{ y: yBlocks, zIndex: chosen === 'education' ? 10 : 2}}
            onMouseEnter={(e) => handleHover(e, {top: 368, left: 1083, width: 230, height: 211 }, 'education')}
            onMouseLeave={handleStopHover}
        >
            <TextWrapper $isRight $top={58} $width={170} $spacing={108}>Образование{'\n'}и педагогические{'\n'}науки</TextWrapper>
            <Person onClick={() => handleNavigate('education')} src={education} alt="" $width={134} $height={200} $top={0} $left={80} />
            <ImageElement src={educationMountin} alt="" $width={230} $height={127} $top={84} $left={0} />
            <DetailsModal 
                isActive={chosen === 'education'}
                jobId="education" 
                onClick={() => handleNavigate('education')}
                width={460} top={-15}  height={230} right={-93} 
            />
        </MotionBlock>
        <MotionBlock
            $top={460} $left={0} $width={240} $height={183}
            style={{ y: yBlocks, zIndex: chosen === 'techcontrol' ? 10 : 2}}
            onMouseEnter={(e) => handleHover(e, { top: 460, left: 0, width: 240, height: 183 }, 'techcontrol')}
            onMouseLeave={handleStopHover}
        >
            <TextWrapper $isRight $top={58} $width={152} $spacing={80}>Управление{'\n'}в технических{'\n'}системах</TextWrapper>
            <Person onClick={() => handleNavigate('techcontrol')} $isMirror src={techcontrol} alt="" $width={168} $height={295} $top={-80} $left={135.5} />
            <ImageElement src={techcontrolMountin} alt="" $width={227} $height={175} $top={9} $left={0} />
            <DetailsModal 
                isActive={chosen === 'techcontrol'} 
                jobId="techcontrol" 
                onClick={() => handleNavigate('techcontrol')}
                width={460} top={-35} height={230} right={-350} isMirror
            />
        </MotionBlock>
        <MotionBlock
            $top={683} $left={205} $width={252} $height={213}
            style={{ y: yBlocks,  zIndex: chosen === 'pravo' ? 10 : 2}}
            onMouseEnter={(e) => handleHover(e, { top: 683, left: 205, width: 252, height: 213 }, 'pravo')}
            onMouseLeave={handleStopHover}
        >
            <TextWrapper $isRight={false} $top={40} $width={181} $height={30} $spacing={-24}>юриспруденция</TextWrapper>
            <Person onClick={() => handleNavigate('pravo')} src={pravo} alt="" $width={104} $height={184} $top={0} $left={141} />
            <ImageElement src={pravoMountin} alt="" $width={252} $height={159} $top={54} $left={0} />
            <DetailsModal 
                isActive={chosen === 'pravo'}
                jobId="pravo" 
                onClick={() => handleNavigate('pravo')}
                width={480} top={-25} height={230} right={-270}
                isMirror
            />
        </MotionBlock>
        <MotionBlock
            $top={713} $left={1146} $width={251} $height={192}
            style={{ y: yBlocks,  zIndex: chosen === 'radioelectronic' ? 10 : 2 }}
            onMouseEnter={(e) => handleHover(e, { top: 713, left: 1146, width: 251, height: 192 }, 'radioelectronic')}
            onMouseLeave={handleStopHover}
        >
            <TextWrapper $isRight={false} $top={70} $width={164} $spacing={119}>Электроника,{'\n'}радиотехника{'\n'}и системы связи</TextWrapper>
            <Person  onClick={() => handleNavigate('radioelectronic')} src={radioelectronic} alt="" $width={83} $height={175} $top={0} $left={13} />
            <ImageElement src={radioelectronicMoutin} alt="" $width={251} $height={192} $top={1} $left={0} />
            <DetailsModal 
                isActive={chosen === 'radioelectronic'} 
                jobId="radioelectronic" 
                onClick={() => handleNavigate('radioelectronic')}
                width={460} top={-25} height={230} right={140}
            />
        </MotionBlock>
        <AbsoluteBlock
            style={{ zIndex: chosen === 'geology' ? 10 : 2 }}
            onMouseEnter={(e) => handleHover(e, { top: 580, left: 633, width: 327, height: 210 }, 'geology')}
            onMouseLeave={handleStopHover}
            $top={580} $left={633} $width={327} $height={206}>
            <TextWrapper $isRight $top={40} $width={233} $spacing={150}>
                Прикладная геология,{'\n'}горное дело, нефтегазовое{'\n'}дело и геодезия
            </TextWrapper>
            <Person  onClick={() => handleNavigate('geology')} src={geology} alt="" $width={106 * 1.3} $height={170 * 1.3} $top={-25} $left={168} />
            <ImageElement src={geologyMountin} alt="" $width={327} $height={206} $top={0} $left={0} />
            <DetailsModal 
                isActive={chosen === 'geology'} 
                jobId="geology" 
                onClick={() => handleNavigate('geology')}
                width={485} top={-35} height={230} right={-135}
            />
        </AbsoluteBlock>
        <AbsoluteBlock
            $active={chosen === 'trade'}
            onMouseEnter={(e) => handleHover(e, { top: 775, left: 465, width: 306, height: 208 }, 'trade')}
            onMouseLeave={handleStopHover}
            $top={775} $left={465} $width={306} $height={208}
            style={{ zIndex: chosen === 'trade' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={48} $width={155} $spacing={50}>
                Торговое дело{'\n'}и логистика
            </TextWrapper>
            <Person onClick={() => handleNavigate('trade')} src={trade} alt="" $width={146} $height={185} $top={0} $left={160} />
            <ImageElement src={tradeMountin} alt="" $width={250} $height={172} $top={36} $left={0} />
            <DetailsModal 
                isActive={chosen === 'trade'} 
                jobId="trade" 
                onClick={() => handleNavigate('trade')}
                width={415} top={-20} height={230} right={-35}
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={900} $left={780} $width={306} $height={208}
            onMouseEnter={(e) => handleHover(e, { top: 900, left: 780, width: 306, height: 208 }, 'stroy')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'stroy' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={44} $width={157} $spacing={30}>
                Техника{'\n'}
                и технологии{'\n'}
                строительства
            </TextWrapper>
            <Person onClick={() => handleNavigate('stroy')} src={stroy} alt="" $width={77} $height={175} $top={0} $left={140} />
            <ImageElement src={stroyMountin} alt="" $width={233} $height={156} $top={43} $left={0} />
            <DetailsModal 
                isActive={chosen === 'stroy'} 
                jobId="stroy" 
                onClick={() => handleNavigate('stroy')}
                width={430} top={-25} height={230} right={-15}
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1067} $left={506} $width={342} $height={180}
            onMouseEnter={(e) => handleHover(e, { top: 1067, left: 506, width: 342, height: 180 }, 'economy')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'economy' ? 10 : 2 }}
        >
            <TextWrapper $top={48} $width={157} $spacing={45}>
                Экономика{'\n'}
                и финанс
            </TextWrapper>
            <Person  onClick={() => handleNavigate('economy')} src={economy} alt="" $width={95} $height={168} $top={0} $left={59} />
            <ImageElement src={economyMountin} alt="" $width={342} $height={155} $top={25} $left={0} />
            <DetailsModal 
                isActive={chosen === 'economy'} 
                jobId="economy" 
                $titleWidth={170}
                onClick={() => handleNavigate('economy')}
                width={380} top={-25} height={230} right={-15} isMirror
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1254} $left={292} $width={251} $height={222}
            onMouseEnter={(e) => handleHover(e, { top: 1254, left: 292, width: 251, height: 222 }, 'service')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'service' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={48} $width={121} $spacing={-16}>
                Сервис{'\n'}
                и туризм
            </TextWrapper>
            <Person onClick={() => handleNavigate('service')} src={service} alt="" $width={98} $height={185} $top={0} $left={68} />
            <ImageElement src={serviceMountin} alt="" $width={258} $height={139} $top={83} $left={0} />
            <DetailsModal 
                isActive={chosen === 'service'} 
                jobId="service" 
                onClick={() => handleNavigate('service')}
                width={380} top={-25} height={230} right={35}
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1125} $left={21} $width={261} $height={235}
            onMouseEnter={(e) => handleHover(e, { top: 1125, left: 21, width: 261, height: 235 }, 'infosec')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'infosec' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={30} $width={204} $spacing={30}>
                Информационная{'\n'}безопасность
            </TextWrapper>
            <Person onClick={() => handleNavigate('infosec')} src={infosec} alt="" $width={175} $height={230} $top={-20} $left={15} />
            <ImageElement src={infosecMountin} alt="" $width={261} $height={169} $top={66} $left={0} />
            <DetailsModal 
                isActive={chosen === 'infosec'} 
                jobId="infosec" 
                onClick={() => handleNavigate('infosec')}
                width={530} top={-20} height={230} right={-305} isMirror
            />
        </AbsoluteBlock>
        <AbsoluteBlock
            onMouseEnter={(e) => handleHover(e, { top: 1461, left: 14, width: 312, height: 202 }, 'machine')}
            onMouseLeave={handleStopHover}
            $top={1461} $left={14} $width={312} $height={202}
            style={{ zIndex: chosen === 'machine' ? 10 : 2 }}
        >
            <TextWrapper $top={16} $width={175} $height={30} $spacing={-21}>
                машиностроение
            </TextWrapper>
            <Person onClick={() => handleNavigate('machine')} src={machine} alt="" $width={117} $height={181} $top={0} $left={145} />
            <ImageElement src={machineMountin} alt="" $width={312} $height={142} $top={60} $left={0} />
            <DetailsModal 
                isActive={chosen === 'machine'} 
                jobId="machine" 
                onClick={() => handleNavigate('machine')}
                width={450} top={-25} height={230} right={-175} isMirror
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1809} $left={2} $width={283} $height={194}
            onMouseEnter={(e) => handleHover(e, { top: 1809, left: 2, width: 283, height: 194 }, 'safetech')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'safetech' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={7} $width={184} $spacing={-5}>
                Техносферная{'\n'}
                безопасность{'\n'}
                и природообустройство
            </TextWrapper>
            <Person onClick={() => handleNavigate('safetech')} src={safetech} alt="" $width={96 * 1.45} $height={180 * 1.45} $top={-42} $left={31} />
            <ImageElement src={safetechMountin} alt="" $width={283} $height={141} $top={53} $left={0} />
            <DetailsModal 
                isActive={chosen === 'safetech'} 
                jobId="safetech" 
                onClick={() => handleNavigate('safetech')}
                width={515} top={-20} height={220} right={-265} isMirror
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1976} $left={855} $width={320} $height={218}
            onMouseEnter={(e) => handleHover(e, { top: 1976, left: 855, width: 320, height: 218 }, 'energetics')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'energetics' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={40} $width={170} $spacing={53}>
                Электро-{'\n'}и теплоэнергетика
            </TextWrapper>
            <Person  onClick={() => handleNavigate('energetics')} src={energetics} alt="" $width={120 * 1.35} $height={200 * 1.35} $top={-42} $left={121} />
            <ImageElement src={electricsMountin} alt="" $width={320} $height={192} $top={26} $left={0} />
            <DetailsModal 
                isActive={chosen === 'energetics'} 
                jobId="energetics" 
                onClick={() => handleNavigate('energetics')}
                width={485} top={-25} height={230} right={-35} 
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1796} $left={1109} $width={305} $height={209}
            onMouseEnter={(e) => handleHover(e, { top: 1796, left: 1109, width: 305, height: 209 }, 'it')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'it' ? 10 : 2 }}
        >
            <TextWrapper $top={33} $width={173} $spacing={8}>
                Информатика{'\n'}и вычислительная{'\n'}техника
            </TextWrapper>
            <Person onClick={() => handleNavigate('it')} src={it} alt="" $width={104 * 1.35} $height={189 * 1.35} $top={-42} $left={80} />
            <ImageElement src={itMountin} alt="" $width={305} $height={162} $top={47} $left={0} />
            <DetailsModal 
                isActive={chosen === 'it'} 
                jobId="it" 
                onClick={() => handleNavigate('it')}
                width={455} top={-25} height={230} right={75} 
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1283} $left={858} $width={270} $height={202}
            onMouseEnter={(e) => handleHover(e, { top: 1283, left: 908, width: 270, height: 202 }, 'biotech')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'biotech' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={18} $width={203} $spacing={18}>
                Промышленная экология{'\n'}и биотехнологии
            </TextWrapper>
            <Person onClick={() => handleNavigate('biotech')} src={biotech} alt="" $width={92 * 1.45} $height={188 * 1.45} $top={-42} $left={10} />
            <ImageElement src={biotechMountin} alt="" $width={270} $height={141} $top={61} $left={0} />
            <DetailsModal 
                isActive={chosen === 'biotech'} 
                jobId="biotech" 
                onClick={() => handleNavigate('biotech')}
                width={460} top={-13} height={210} right={0} 
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1440} $left={518} $width={251} $height={206}
            onMouseEnter={(e) => handleHover(e, { top: 1440, left: 518, width: 251, height: 206 }, 'materials')}
            onMouseLeave={handleStopHover}
             style={{ zIndex: chosen === 'materials' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={49} $width={135} $spacing={67}>
                Технологии{'\n'}материалов
            </TextWrapper>
            <Person  onClick={() => handleNavigate('materials')} src={materials} alt="" $width={83} $height={189} $top={0} $left={154} />
            <ImageElement src={materialsMountin} alt="" $width={251} $height={192} $top={14} $left={0} />
            <DetailsModal 
                isActive={chosen === 'materials'} 
                jobId="materials" 
                onClick={() => handleNavigate('materials')}
                width={400} top={-6} height={200} right={-48} 
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1590} $left={808} $width={342} $height={213}
            onMouseEnter={(e) => handleHover(e, { top: 1590, left: 808, width: 342, height: 213 }, 'agro')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'agro' ? 10 : 2 }}
        >
            <TextWrapper $top={49} $width={201} $spacing={22}>
                Сельское, лесное{'\n'}и рыбное хозяйство
            </TextWrapper>
            <Person src={agro} alt="" $width={109 * 1.4} $height={182 * 1.4} $top={-40} $left={90} />
            <ImageElement src={agroMountin} alt="" $width={342} $height={129} $top={84} $left={0} />
            <DetailsModal 
                isActive={chosen === 'agro'} 
                jobId="agro" 
                onClick={() => handleNavigate('agro')}
                width={470} top={-25} height={230} right={115} 
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1679} $left={283} $width={261} $height={196}
            onMouseEnter={(e) => handleHover(e, { top: 1679, left: 283, width: 261, height: 196 }, 'himtech')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'himtech' ? 10 : 2 }}
        >
            <TextWrapper $isRight $top={49} $width={130} $spacing={61}>
                химические{'\n'}технологии
            </TextWrapper>
            <Person onClick={() => handleNavigate('himtech')} $isMirror src={himtech} alt="" $width={84 * 1.2} $height={183 * 1.2} $top={-45} $left={130} />
            <ImageElement src={himtechMountin} alt="" $width={261} $height={169} $top={27} $left={0} />
            <HimTechCircle />
            <DetailsModal 
                isActive={chosen === 'himtech'} 
                jobId="himtech" 
                onClick={() => handleNavigate('himtech')}
                width={410} top={-25} height={210} right={-42} 
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1844} $left={591} $width={260} $height={208}
            onMouseEnter={(e) => handleHover(e, { top: 1844, left: 591, width: 260, height: 208 }, 'transport')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'transport' ? 10 : 2 }}
        >
            <TextWrapper $top={55} $width={192} $spacing={116}>
                Техника и технологии{'\n'}наземного транспорта
            </TextWrapper>
            <Person onClick={() => handleNavigate('transport')} src={transportMain} alt="" $width={112} $height={180} $top={0} $left={23} />
            <ImageElement src={transportMountin} alt="" $width={260} $height={132} $top={75} $left={0} />
            <DetailsModal 
                isActive={chosen === 'transport'} 
                jobId="transport" 
                $titleWidth={220}
                onClick={() => handleNavigate('transport')}
                width={490} top={-15} height={210} right={-128} isMirror
            />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1978} $left={245} $width={347} $height={236}
            onMouseEnter={(e) => handleHover(e, { top: 1978, left: 245, width: 347, height: 236 }, 'techprom')}
            onMouseLeave={handleStopHover}
            style={{ zIndex: chosen === 'techprom' ? 10 : 2 }}
        >
            <TextWrapper $top={74} $width={161} $spacing={29}>
                Технологии легкой{'\n'}промышленности
            </TextWrapper>
            <Person onClick={() => handleNavigate('techprom')} src={techprom} alt="" $width={128} $height={200} $top={0} $left={101} />
            <ImageElement src={techpromMountin} alt="" $width={347} $height={139} $top={97} $left={0} />
            <DetailsModal 
                isActive={chosen === 'techprom'} 
                jobId="techprom" 
                $titleWidth={215}
                onClick={() => handleNavigate('techprom')}
                width={470} top={-10} height={210} right={-108} isMirror
            />
        </AbsoluteBlock>
    </>
)
}