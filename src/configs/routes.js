import { Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { HimTech } from "../pages/HimTech";
import { Page3 } from "../pages/Page3";
import { ITPage } from "../pages/IT";
import { InfoSecPage } from "../pages/InfoSec";
import { EnergeticsPage } from "../pages/Energetics";
import { StroyPage } from "../pages/Stroy";
import { MachinePage } from "../pages/Machine";
import { BioTechPage } from "../pages/Biotech";
import { SafetechPage } from "../pages/Safetech";
import { GeologyPage } from "../pages/Geology";
import { MaterialsPage } from "../pages/Materials";
import { TransportPage } from "../pages/Transport";
import { TechcontrolPage } from "../pages/Techcontrol";
import { TechpromPage } from "../pages/Techprom";
import { AgroPage } from "../pages/Agro";
import { ServicePage } from "../pages/Service";
import { EducationPage } from "../pages/Education";
import { EconomyPage } from "../pages/vtb/Economy";

export const routes = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        //Информатика и вычислительная техника
        path: '/it',
        element: <ITPage />
    },
    {
        //Информационная безопасность
        path: '/infosec',
        element: <InfoSecPage />
    },
    {
        //Электро- и теплоэнергетика
        path: '/energetics',
        element: <EnergeticsPage />
    },
    {
        //Машиностроение
        path: '/machine',
        element: <MachinePage />
    },
    {
        //Химические технологии
        path: '/himtech',
        element: <HimTech />
    },
    {
        //Промышленная экология и биотехнологии
        path: '/biotech',
        element: <BioTechPage />
    },
    {
        //Техносферная безопасность и природообустройство
        path: '/safetech',
        element: <SafetechPage />
    },
    {
        //Прикладная геология, горное дело, нефтегазовое дело и геодезия
        path: '/geology',
        element: <GeologyPage />
    },
    {
        //Технологии материалов
        path: '/materials',
        element: <MaterialsPage />
    },
    {
        //Техника и технологии наземного транспорта
        path: '/transport',
        element: <TransportPage />
    },
    {
        //Управление в технических системах
        path: '/techcontrol',
        element: <TechcontrolPage />
    },
    {
        //Технологии легкой промышленности
        path: '/techprom',
        element: <TechpromPage />
    },
    {
        //Сельское, лесное и рыбное хозяйство
        path: '/agro',
        element: <AgroPage />
    },
    {
        //Сервис и туризм
        path: '/service',
        element: <ServicePage />
    },
    {
        //Образование и педагогические науки
        path: '/education',
        element: <EducationPage />
    },
    {
        // втб юрист
        path: '/pravo',
        element: <Page3 />
    },
    {
        // Торговое дело и логистика – Лемана ПРО
        path: '/trade',
        element: <Page3 />
    },
    {
        //Экономика и финанс втб
        path: '/economy',
        element: <EconomyPage />
    },
    {
        //Электроника, радиотехника и системы связи – Билайн
        path: '/radioelectronic',
        element: <Page3 />
    },
    {
        //Техника и технологии строительства – Алабуга
        path: '/stroy',
        element: <StroyPage />
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace />,
    },
]