import { useEffect, useState } from 'react';
import { Button } from '../shared/button';
import { DesktopBlock } from './parts/desktop-block';
import styles from './styles.module.scss';
import { MobileBlock } from './parts/mobile-block';
import {openBot} from '../../utils/openBot';

export const InfoBlock = ({wrapperRef}) => {
    const [isDesktop, setIsDesktop] = useState();

    useEffect(() => {
        const resize = () => {
            setIsDesktop(window?.innerWidth > 1100);
        }

        resize();
        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div className={styles.infoBlock} ref={wrapperRef}>
            <h3 className={styles.infoBlock_title}>
               <span className='accent-text'>регистрируйся — </span>{'\n'}получи от бота максимум
            </h3>
            <div className={styles.infoBlock_content}>
               {isDesktop ? <DesktopBlock /> : <MobileBlock />}
            </div>
            <Button wrapperClassName={styles.infoBlock_buttonWrapper} className={styles.infoBlock_button} onClick={openBot}>
                быстрее в бот
            </Button>
        </div>
    )
}