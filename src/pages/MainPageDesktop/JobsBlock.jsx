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


const ImageElement = styled(motion.img)`
    position: absolute;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    object-fit: contain;
    z-index: 3;
`;

const StaticBlock = styled.div`
    position: relative;
    margin-top: ${({ $marginTop }) => $marginTop}px;
    margin-left: ${({ $marginLeft }) => $marginLeft}px;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    flex-shrink: 0;

    @media screen and (max-width: 1400px){
        height: calc(${({ $height }) => $height}px * 0.9);
        width: calc(${({ $width }) => $width}px * 0.9);
        margin-left: calc(${({ $marginLeft }) => $marginLeft}px * 0.9);
    }
    @media screen and (max-width: 1300px){
        height: calc(${({ $height }) => $height}px * 0.8);
        width: calc(${({ $width }) => $width}px * 0.8);
    }
`;

const AbsoluteBlock = styled.div`
    position: absolute;
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

export const JobsBlock = ({handleMouseEnter, handleMouseLeave, yBlocks}) => (
    <>
        <MotionBlock
            $top={368} $left={1083} $width={230} $height={211}
            style={{ y: yBlocks }}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 368, left: 1083, width: 230, height: 211 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={58} $width={170} $spacing={108}>Образование{'\n'}и педагогические{'\n'}науки</TextWrapper>
            <Person src={education} alt="" $width={134} $height={200} $top={0} $left={80} />
            <ImageElement src={educationMountin} alt="" $width={230} $height={127} $top={84} $left={0} />
        </MotionBlock>
        <MotionBlock
            $top={460} $left={0} $width={240} $height={183}
            style={{ y: yBlocks }}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 460, left: 0, width: 240, height: 183 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={58} $width={152} $spacing={80}>Управление{'\n'}в технических{'\n'}системах</TextWrapper>
            <Person $isMirror src={techcontrol} alt="" $width={168} $height={295} $top={-80} $left={135.5} />
            <ImageElement src={techcontrolMountin} alt="" $width={227} $height={175} $top={9} $left={0} />
        </MotionBlock>
        <MotionBlock
            $top={683} $left={205} $width={252} $height={213}
            style={{ y: yBlocks }}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 683, left: 205, width: 252, height: 213 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight={false} $top={40} $width={181} $height={30} $spacing={-24}>юриспруденция</TextWrapper>
            <Person src={pravo} alt="" $width={104} $height={184} $top={0} $left={141} />
            <ImageElement src={pravoMountin} alt="" $width={252} $height={159} $top={54} $left={0} />
        </MotionBlock>
        <MotionBlock
            $top={713} $left={1146} $width={251} $height={192}
            style={{ y: yBlocks }}
        >
            <TextWrapper $isRight={false} $top={70} $width={164} $spacing={119}>Электроника,{'\n'}радиотехника{'\n'}и системы связи</TextWrapper>
            <Person src={radioelectronic} alt="" $width={83} $height={175} $top={0} $left={13} />
            <ImageElement src={radioelectronicMoutin} alt="" $width={251} $height={192} $top={1} $left={0} />
        </MotionBlock>
        <StaticBlock
            onMouseEnter={(e) => handleMouseEnter(e, { top: 580, left: 633, width: 327, height: 210 })}
            onMouseLeave={() => handleMouseLeave()}
            $marginTop={52} $marginLeft={633} $width={327} $height={206}>
            <TextWrapper $isRight $top={40} $width={233} $spacing={150}>
                Прикладная геология,{'\n'}горное дело, нефтегазовое{'\n'}дело и геодезия
            </TextWrapper>
            <Person src={geology} alt="" $width={106} $height={170} $top={0} $left={188} />
            <ImageElement src={geologyMountin} alt="" $width={327} $height={206} $top={0} $left={0} />
        </StaticBlock>
        <StaticBlock
            onMouseEnter={(e) => handleMouseEnter(e, { top: 775, left: 465, width: 306, height: 208 })}
            onMouseLeave={() => handleMouseLeave()}
            $marginTop={-10} $marginLeft={465} $width={306} $height={208}
        >
            <TextWrapper $isRight $top={48} $width={155} $spacing={50}>
                Торговое дело{'\n'}и логистика
            </TextWrapper>
            <Person src={trade} alt="" $width={146} $height={185} $top={0} $left={160} />
            <ImageElement src={tradeMountin} alt="" $width={250} $height={172} $top={36} $left={0} />
        </StaticBlock>
        <AbsoluteBlock $top={900} $left={780} $width={306} $height={208}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 900, left: 780, width: 306, height: 208 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={44} $width={157} $spacing={30}>
                Техника{'\n'}
                и технологии{'\n'}
                строительства
            </TextWrapper>
            <Person src={stroy} alt="" $width={77} $height={175} $top={0} $left={140} />
            <ImageElement src={stroyMountin} alt="" $width={233} $height={156} $top={43} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1067} $left={506} $width={342} $height={180}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1067, left: 506, width: 342, height: 180 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $top={48} $width={157} $spacing={45}>
                Экономика{'\n'}
                и управление
            </TextWrapper>
            <Person src={economy} alt="" $width={95} $height={168} $top={0} $left={59} />
            <ImageElement src={economyMountin} alt="" $width={342} $height={155} $top={25} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1254} $left={292} $width={251} $height={222}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1254, left: 292, width: 251, height: 222 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={48} $width={121} $spacing={-16}>
                Сервис{'\n'}
                и туризм
            </TextWrapper>
            <Person src={service} alt="" $width={98} $height={185} $top={0} $left={68} />
            <ImageElement src={serviceMountin} alt="" $width={258} $height={139} $top={83} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1125} $left={21} $width={261} $height={235}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1125, left: 21, width: 261, height: 235 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={30} $width={204} $spacing={30}>
                Информационная{'\n'}безопасность
            </TextWrapper>
            <Person src={infosec} alt="" $width={175} $height={230} $top={-20} $left={15} />
            <ImageElement src={infosecMountin} alt="" $width={261} $height={169} $top={66} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1461, left: 14, width: 312, height: 202 })}
            onMouseLeave={() => handleMouseLeave()}
            $top={1461} $left={14} $width={312} $height={202}>
            <TextWrapper $top={16} $width={175} $height={30} $spacing={-21}>
                машиностроение
            </TextWrapper>
            <Person src={machine} alt="" $width={117} $height={181} $top={0} $left={145} />
            <ImageElement src={machineMountin} alt="" $width={312} $height={142} $top={60} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1809} $left={2} $width={283} $height={194}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1809, left: 2, width: 283, height: 194 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={7} $width={184} $spacing={-5}>
                Техносферная{'\n'}
                безопасность{'\n'}
                и природообустройство
            </TextWrapper>
            <Person src={safetech} alt="" $width={96 * 1.45} $height={180 * 1.45} $top={-42} $left={31} />
            <ImageElement src={safetechMountin} alt="" $width={283} $height={141} $top={53} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1976} $left={855} $width={320} $height={218}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1976, left: 855, width: 320, height: 218 })}
            onMouseLeave={() => handleMouseLeave()}>
            <TextWrapper $isRight $top={40} $width={170} $spacing={53}>
                Электро-{'\n'}и теплоэнергетика
            </TextWrapper>
            <Person src={energetics} alt="" $width={120 * 1.35} $height={200 * 1.35} $top={-42} $left={121} />
            <ImageElement src={electricsMountin} alt="" $width={320} $height={192} $top={26} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1796} $left={1109} $width={305} $height={209}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1796, left: 1109, width: 305, height: 209 })}
            onMouseLeave={() => handleMouseLeave()}>
            <TextWrapper $top={33} $width={173} $spacing={8}>
                Информатика{'\n'}и вычислительная{'\n'}техника
            </TextWrapper>
            <Person src={it} alt="" $width={104 * 1.35} $height={189 * 1.35} $top={-42} $left={80} />
            <ImageElement src={itMountin} alt="" $width={305} $height={162} $top={47} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1283} $left={858} $width={270} $height={202}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1283, left: 908, width: 270, height: 202 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={18} $width={203} $spacing={18}>
                Промышленная экология{'\n'}и биотехнологии
            </TextWrapper>
            <Person src={biotech} alt="" $width={92 * 1.45} $height={188 * 1.45} $top={-42} $left={10} />
            <ImageElement src={biotechMountin} alt="" $width={270} $height={141} $top={61} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1440} $left={518} $width={251} $height={206}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1440, left: 518, width: 251, height: 206 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={49} $width={135} $spacing={67}>
                Технологии{'\n'}материалов
            </TextWrapper>
            <Person src={materials} alt="" $width={83} $height={189} $top={0} $left={154} />
            <ImageElement src={materialsMountin} alt="" $width={251} $height={192} $top={14} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1590} $left={808} $width={342} $height={213}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1590, left: 808, width: 342, height: 213 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $top={49} $width={201} $spacing={22}>
                Сельское, лесное{'\n'}и рыбное хозяйство
            </TextWrapper>
            <Person src={agro} alt="" $width={109 * 1.4} $height={182 * 1.4} $top={-40} $left={90} />
            <ImageElement src={agroMountin} alt="" $width={342} $height={129} $top={84} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1679} $left={283} $width={261} $height={196}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1679, left: 283, width: 261, height: 196 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $isRight $top={49} $width={130} $spacing={61}>
                химические{'\n'}технологии
            </TextWrapper>
            <Person $isMirror src={himtech} alt="" $width={84 * 1.2} $height={183 * 1.2} $top={-45} $left={130} />
            <ImageElement src={himtechMountin} alt="" $width={261} $height={169} $top={27} $left={0} />
            <HimTechCircle />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1844} $left={591} $width={260} $height={208}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1844, left: 591, width: 260, height: 208 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $top={55} $width={192} $spacing={116}>
                Техника и технологии{'\n'}наземного транспорта
            </TextWrapper>
            <Person src={transportMain} alt="" $width={112} $height={180} $top={0} $left={23} />
            <ImageElement src={transportMountin} alt="" $width={260} $height={132} $top={75} $left={0} />
        </AbsoluteBlock>
        <AbsoluteBlock $top={1978} $left={245} $width={347} $height={236}
            onMouseEnter={(e) => handleMouseEnter(e, { top: 1978, left: 245, width: 347, height: 236 })}
            onMouseLeave={() => handleMouseLeave()}
        >
            <TextWrapper $top={74} $width={161} $spacing={29}>
                Технологии легкой{'\n'}промышленности
            </TextWrapper>
            <Person src={techprom} alt="" $width={128} $height={200} $top={0} $left={101} />
            <ImageElement src={techpromMountin} alt="" $width={347} $height={139} $top={97} $left={0} />
        </AbsoluteBlock>
    </>
)