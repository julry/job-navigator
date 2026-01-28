import { Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { HimTech } from "../pages/HimTech";
import { Page3 } from "../pages/Page3";
import { ITPage } from "../pages/IT";
import { InfoSecPage } from "../pages/InfoSec";

export const routes = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        //Информатика и вычислительная техника
        path: '/it',
        element: <ITPage />
    },
    {
        //Информационная безопасность
        path: '/infosec',
        element: <InfoSecPage />
    },
    {
        //Электро- и теплоэнергетика
        path: '/energetics',
        element: <div />
    },
    {
        //Машиностроение
        path: '/machine',
        element: <div />
    },
    {
        //Химические технологии
        path: '/himtech',
        element: <HimTech />
    },
    {
        //Промышленная экология и биотехнологии
        path: '/biotech',
        element: <div />
    },
    {
        //Техносферная безопасность и природообустройство
        path: '/safetech',
        element: <div />
    },
    {
        //Прикладная геология, горное дело, нефтегазовое дело и геодезия
        path: '/geology',
        element: <div />
    },
    {
        //Технологии материалов
        path: '/materials',
        element: <div />
    },
    {
        //Техника и технологии наземного транспорта
        path: '/transport',
        element: <div />
    },
    {
        //Управление в технических системах
        path: '/techcontrol',
        element: <div />
    },
    {
        //Технологии легкой промышленности
        path: '/techprom',
        element: <div />
    },
    {
        //Сельское, лесное и рыбное хозяйство
        path: '/agro',
        element: <div />
    },
    {
        //Сервис и туризм
        path: '/service',
        element: <div />
    },
    {
        //Образование и педагогические науки
        path: '/education',
        element: <Page3 />
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace />,
    },
]