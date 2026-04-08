import { NoTransformSpan } from "../components/shared/Texts";

export const post3Questions = [
    {
        id: 0,
        points: [
            {
                id: 'point1',
                text: <>Имя: <NoTransformSpan>Иван Иванов</NoTransformSpan></>,
            },
            {
                id: 'point2',
                text: 'Электронная почта: ivan_ivanov@mail.ru',
            },
            {
                id: 'point3',
                text: 'Телефон: 8-999-999-99-99',
            },
            {
                id: 'point4',
                text: 'Цель: хочу найти работу, чтобы получать деньги',
            }
        ],
        answers: [
            {
                id: '01',
                text: 1,
            },
            {
                id: '02',
                text: 2,
            },
            {
                id: '03',
                text: 3,
            },
            {
                id: '04',
                text: 4,
            }
        ],
        hint: 'Цель написана непрофессионально, такое резюме рекрутер сразу отметет',
        correct: '04'
    },
    {
        id: 1,
        points: [
            {
                id: 'point11',
                text: 'Образование: среднее специальное',
            },
            {
                id: 'point12',
                text: 'Средний балл: 4.2',
            },
            {
                id: 'point13',
                text: 'Курсы: Excel, Photoshop, Кулинария',
            },
            {
                id: 'point14',
                text: <>Языки: <NoTransformSpan>английский — B2, французский — A1</NoTransformSpan></>,
            }
        ],
        answers: [
            {
                id: '11',
                text: 1,
            },
            {
                id: '12',
                text: 2,
            },
            {
                id: '13',
                text: 3,
            },
            {
                id: '14',
                text: 4,
            }
        ],
        hint: 'Оставляй только профильные навыки и курсы',
        correct: '13'
    },
    {
        id: 2,
        points: [
            {
                id: 'point21',
                text: 'Практика: стажировка в частной компании',
            },
            {
                id: 'point22',
                text: 'Дополнительно: люблю гулять с собакой и играть в компьютерные игры',
            },
            {
                id: 'point23',
                text:  <>Навыки: <NoTransformSpan>анализ данных, SQL, командная работа</NoTransformSpan></>,
            },
        ],
        answers: [
            {
                id: '21',
                text: 1,
            },
            {
                id: '22',
                text: 2,
            },
            {
                id: '23',
                text: 3,
            },
        ],
        hint: 'Личные увлечения лучше оставлять только тогда, когда они релевантны вакансии',
        correct: '22'
    },
    {
        id: 3,
        points: [
            {
                id: 'point32',
                text: 'Хобби: коллекционирование марок, просмотр сериалов',
            },
            {
                id: 'point33',
                text: 'Рекомендации: будут предоставлены по запросу',
            },
            {
                id: 'point43',
                text: 'Профессиональные цели: стать супергероем в финансовой аналитике',
            },
        ],
        answers: [
            {
                id: '32',
                text: '1 3',
            },
            {
                id: '33',
                text: '1',
            },
            {
                id: '43',
                text: '2',
            },
        ],
        hint: 'Личные увлечения и достижения лучше оставлять только в том случае,  если они релевантны вакансии',
        correct: '32'
    },
    {
        id: 4,
        points: [
            {
                id: 'point41',
                text: 'Личные качества: стрессоустойчивый, внимательный, иногда ленивый',
            },
            {
                id: 'point42',
                text: 'Портфолио: github.com/ivan123',
            },
            {
                id: 'point43',
                text: 'Готовность к командировкам: да',
            },
            {
                id: 'point44',
                text: <>Проживание: <NoTransformSpan>Москва</NoTransformSpan></>,
            },
        ],
        answers: [
            {
                id: '41',
                text: 1,
            },
            {
                id: '42',
                text: 2,
            },
            {
                id: '43',
                text: 3,
            },
            {
                id: '44',
                text: 4,
            },
        ],
        hint: 'В резюме фокусируемся на сильных сторонах, а не на негативных чертах',
        correct: '41'
    },
]