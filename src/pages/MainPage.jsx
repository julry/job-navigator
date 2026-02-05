import { useEffect } from "react";
import { MainPageDesktop } from "./MainPageDesktop";
import { MainPageMobile } from "./MainPageMobile";

const preloadLazyComponent = async () => {
  try {
    await import('./Stroy');
    await import('./Trade');
    await import('./vtb/Economy');
    await import('./vtb/Pravo');
    await import('./Agro');
    await import('./Biotech');
    await import('./Education');
    await import('./Energetics');
    await import('./Geology');
    await import('./HimTech');
    await import('./InfoSec');
    await import('./IT');
    await import('./Machine');
    await import('./Materials');
    await import('./Safetech');
    await import('./Service');
    await import('./Techcontrol');
    await import('./Techprom');
    await import('./Transport');
    
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

export const MainPage = () => {
    useEffect(() => {
        preloadLazyComponent()
    }, []);

    return (
    <>
        <MainPageDesktop />
        <MainPageMobile />
    </>
)
}