import { Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { PravoPage } from '../pages/vtb/Pravo';
import { EconomyPage } from '../pages/vtb/Economy';
import { StroyPage } from '../pages/Stroy';
import { RadioElectronicPage } from '../pages/RadioElectronic';
import { TradePage } from '../pages/Trade';

export const routes = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        //Информатика и вычислительная техника
        path: '/it',
        lazy: async () => {
            try {
                const component = await import('../pages/IT');
                return { Component: component.ITPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        },
    },
    {
        //Информационная безопасность
        path: '/infosec',
        lazy: async () => {
            try {
                const component = await import('../pages/InfoSec');
                return { Component: component.InfoSecPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Электро- и теплоэнергетика
        path: '/energetics',
        lazy: async () => {
            try {
                const component = await import('../pages/Energetics');
                return { Component: component.EnergeticsPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Машиностроение
        path: '/machine',
        lazy: async () => {
            try {
                const component = await import('../pages/Machine');
                return { Component: component.MachinePage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Химические технологии
        path: '/himtech',
        lazy: async () => {
            try {
                const component = await import('../pages/HimTech');
                return { Component: component.HimTech };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Промышленная экология и биотехнологии
        path: '/biotech',
        lazy: async () => {
            try {
                const component = await import('../pages/Biotech');
                return { Component: component.BioTechPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Техносферная безопасность и природообустройство
        path: '/safetech',
        lazy: async () => {
            try {
                const component = await import('../pages/Safetech');
                return { Component: component.SafetechPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Прикладная геология, горное дело, нефтегазовое дело и геодезия
        path: '/geology',
        lazy: async () => {
            try {
                const component = await import('../pages/Geology');
                return { Component: component.GeologyPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Технологии материалов
        path: '/materials',
        lazy: async () => {
            try {
                const component = await import('../pages/Materials');
                return { Component: component.MaterialsPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Техника и технологии наземного транспорта
        path: '/transport',
        lazy: async () => {
            try {
                const component = await import('../pages/Transport');
                return { Component: component.TransportPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Управление в технических системах
        path: '/techcontrol',
        lazy: async () => {
            try {
                const component = await import('../pages/Techcontrol');
                return { Component: component.TechcontrolPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Технологии легкой промышленности
        path: '/techprom', 
        lazy: async () => {
            try {
                const component = await import('../pages/Techprom');
                return { Component: component.TechpromPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Сельское, лесное и рыбное хозяйство
        path: '/agro',
        lazy: async () => {
            try {
                const component = await import('../pages/Agro');
                return { Component: component.AgroPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Сервис и туризм
        path: '/service',
        lazy: async () => {
            try {
                const component = await import('../pages/Service');
                return { Component: component.ServicePage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Образование и педагогические науки
        path: '/education',
        lazy: async () => {
            try {
                const component = await import('../pages/Education');
                return { Component: component.EducationPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        // втб юрист
        path: '/pravo',
        element: <PravoPage />
    },
    {
        // Торговое дело и логистика – Лемана ПРО
        path: '/trade',
        element: <TradePage />
    },
    {
        //Экономика и финанс втб
        path: '/economy',
        element: <EconomyPage />
    },
    {
        //Электроника, радиотехника и системы связи – Билайн
        path: '/radioelectronic',
        element: <RadioElectronicPage />
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