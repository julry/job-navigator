import {Header} from './src/components/header';
import { BotBlock } from './src/components/bot-block';
import {InfoBlock} from './src/components/info-block/index';
import {HowBlock} from './src/components/how-block/index';
import { useEffect, useRef } from 'react';
import { Footer } from './src/components/footer';
import { Wrapper } from './src/components/wrapper';

export const Landing = () => {
    const infoBlockRef = useRef();
    const howBlockRef = useRef();

    const handleScrollToInfo = () => {
        infoBlockRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const handleScrollToHow = () => {
        howBlockRef.current.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        window.ym?.(106540858,'reachGoal','page');
    }, []);

    return (
        <Wrapper>
            <Header onScrollToInfo={handleScrollToInfo} onScrollToHow={handleScrollToHow}/>
            <BotBlock />
            <InfoBlock wrapperRef={infoBlockRef}/>
            <HowBlock wrapperRef={howBlockRef}/>
            <Footer />
        </Wrapper>     
    )
}

