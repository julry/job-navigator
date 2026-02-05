import { Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

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
        lazy: async () => {
            try {
                const component = await import('../pages/vtb/Pravo');
                return { Component: component.PravoPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        // Торговое дело и логистика – Лемана ПРО
        path: '/trade',
        lazy: async () => {
            try {
                const component = await import('../pages/Trade');
                return { Component: component.TradePage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Экономика и финанс втб
        path: '/economy',
        lazy: async () => {
            try {
                const component = await import('../pages/vtb/Economy');
                return { Component: component.EconomyPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Электроника, радиотехника и системы связи – Билайн
        path: '/radioelectronic',
        lazy: async () => {
            try {
                const component = await import('../pages/RadioElectronic');
                return { Component: component.RadioElectronicPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        //Техника и технологии строительства – Алабуга
        path: '/stroy',
        lazy: async () => {
            try {
                const component = await import('../pages/Stroy');
                return { Component: component.StroyPage };
            } catch (error) {
                console.error('Ошибка при загрузке компонента:', error);
            }
        }
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace />,
    },
]