import { ChemicalOpp } from '../components/shared/svg/ChemicalOpp';
import chemT from '../assets/images/default/chemical_top.png';
import chemB from '../assets/images/default/chemical_bot.png';

export const defaultPages = [
    {
        id: 'chemical',
        testQuestions: [
            {
                id: 'q-0',
                text: 'Знаю основы химии, физики и математики для расчётов процессов'
            },
            {
                id: 'q-1',
                text: 'Умею работать с лабораторным оборудованием и проводить химический анализ'
            },
            {
                id: 'q-2',
                text: 'Понимаю устройство и принципы работы химико-технологического оборудования'
            },
            {
                id: 'q-3',
                text: 'Знаю правила техники безопасности и экологические нормы на производстве'
            },
            {
                id: 'q-4',
                text: 'Умею читать технологические схемы и инструкции'
            },
            {
                id: 'q-5',
                text: 'Владею методами контроля качества сырья и продукции'
            },
            {
                id: 'q-6',
                text: 'Внимателен к деталям и аккуратен в работе',
                isSoft: true,
            },
            {
                id: 'q-7',
                text: 'Умею анализировать данные и принимать решения',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Ответственно отношусь к безопасности: своей, коллег и окружающей среды',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Готов работать в команде и четко следовать инструкциям',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Стремлюсь к постоянному обучению и освоению новых технологий',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Умею сохранять спокойствие в нештатных ситуациях',
                isSoft: true
            },
        ],
        testName: 'химической промышленности',
        opportunities: [
            {
                text: 'лабораторный контроль\nи анализ',
                style: { 'grid-area': '1/1/2/2' }
            },
            {
                text: 'производство\n(аппаратчик-оператор)',
                style: { 'grid-area': '2/1/3/2' }
            },
            {
                text: 'контроль и управление\nкачеством',
                style: { 'grid-area': '3/1/4/2' }
            },
            {
                text: 'смежные профессии',
                style: { 'grid-area': '4/1/5/2' }
            },
        ],
        opportunitiesSvg: {
            image: ChemicalOpp,
            top: 32,
            left: 292,
            width: 199,
            height: 190,
        },
        testPerson: {
            top: {
                widthDesc: 260,
                heightDesc: 247,
                src: chemT,
                bottomDesc: 178,
                leftDesc: -205.5,
            },
            bot: {
                widthDesc: 283,
                heightDesc: 247,
                src: chemB,
                bottomDesc: -68,
                leftDesc: -203,
            },
        }
    }
]