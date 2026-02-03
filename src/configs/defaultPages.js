
import { ColoredSpan, NoTransformSpan, ShortScreen } from '../components/shared/Texts';
import { opportunitiesConfig } from './opportunitiesConfig';

import chemT from '../assets/images/default/chemical_top.png';
import chemB from '../assets/images/default/chemical_bot.png';
import itT from '../assets/images/default/itTop.png';
import itB from '../assets/images/default/itBot.png';
import infosecT from '../assets/images/default/infoSecTop.png';
import infosecB from '../assets/images/default/infoSecBot.png';
import biotechB from '../assets/images/default/biotechBot.png';
import biotechT from '../assets/images/default/biotechTop.png';
import geologyB from '../assets/images/default/geologyBot.png';
import geologyT from '../assets/images/default/geologyTop.png';
import safetechB from '../assets/images/default/safetechBot.png';
import safetechT from '../assets/images/default/safetechTop.png';
import energeticsB from '../assets/images/default/energeticsBot.png';
import energeticsT from '../assets/images/default/energeticsTop.png';
import machineB from '../assets/images/default/machineBot.png';
import machineT from '../assets/images/default/machineTop.png';
import materialsB from '../assets/images/default/materialsBot.png';
import materialsT from '../assets/images/default/materialsTop.png';
import transportB from '../assets/images/default/transportBot.png';
import transportT from '../assets/images/default/transportTop.png';
import techcontrolB from '../assets/images/default/techcontrolBot.png';
import techcontrolT from '../assets/images/default/techcontrolTop.png';
import techpromB from '../assets/images/default/techpromBot.png';
import techpromT from '../assets/images/default/techpromTop.png';
import agroB from '../assets/images/default/agroBot.png';
import agroT from '../assets/images/default/agroTop.png';
import serviceB from '../assets/images/default/serviceBot.png';
import serviceT from '../assets/images/default/serviceTop.png';
import educationB from '../assets/images/default/educationBot.png';
import educationT from '../assets/images/default/educationTop.png';

import agro from '../assets/images/default/people/agro.png';
import biotech from '../assets/images/default/people/biotech.png';
import education from '../assets/images/default/people/education.png';
import energetics from '../assets/images/default/people/energetics.png';
import geology from '../assets/images/default/people/geology.png';
import himTech from '../assets/images/default/people/himtech.png';
import infosec from '../assets/images/default/people/infosec.png';
import it from '../assets/images/default/people/it.png';
import machine from '../assets/images/default/people/machine.png';
import safetech from '../assets/images/default/people/safetech.png';
import service from '../assets/images/default/people/service.png';
import techcontrol from '../assets/images/default/people/techcontrol.png';
import transport from '../assets/images/default/people/transportMain.png';
import materials from '../assets/images/default/people/materials.png';
import techprom from '../assets/images/default/people/techprom.png';

export const defaultPages = [
    {
        id: 'chemical',
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>химические</ColoredSpan> технологии</>,
        jobDescription: 'Это инженеры, которые превращают лабораторные открытия в полезные продукты — от топлива и новых материаловдо лекарств и продуктов питания\n\nИх задача — сделать так, чтобы химическую реакцию можно было повторять на заводе каждый день, без сбоев и рисков\n\nИх работа — связующее звено между наукой и повседневной жизнью. Они помогают промышленности развиваться, следят за качеством и думают, как сделать технологии безопаснее и экологичнее',
        jobDescriptionSm: 'Превращают сырье в полезные продукты — от топлива и лекарств до новых материалов и продуктов питания:\n\nОни разрабатывают и контролируют химические процессы на производстве, следят за качеством и думают, как сделать технологии безопаснее и экологичнее',
        vacanciesDescr: [
            { id: 0, name: 'Промышленные предприятия (заводы, комбинаты)', desc: 'Следить, чтобы все производилось правильно и качественно' },
            { id: 1, name: 'Научно-исследовательские центры и лаборатории', desc: 'Разрабатывать новые материалы, лекарства, продукты и проводить опыты' },
            { id: 2, name: 'Экологические службы', desc: 'Следить за состоянием окружающей среды и придумывать, как её сохранить' },
            { id: 3, isSmall: true, name: 'Консалтинговые компании', desc: 'Давать рекомендации заводам и компаниям, как оптимизировать работу, внедрять новые технологии и решать нестандартные задачи' },
            { id: 4, name: 'Службы контроля качества', desc: 'Проверять, соответствует ли все, от сырья до готового товара, строгим стандартам и нормам' },
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Знаю основы химии, физики и математики для расчётов процессов'
            },
            {
                id: 'q-1',
                text: 'Умею работать с лабораторным оборудованием и проводить химический анализ'
            },
            {
                id: 'q-2',
                text: 'Понимаю устройство и принципы работы химико-технологического оборудования'
            },
            {
                id: 'q-3',
                text: 'Знаю правила техники безопасности и экологические нормы на производстве'
            },
            {
                id: 'q-4',
                text: 'Умею читать технологические схемы и инструкции'
            },
            {
                id: 'q-5',
                text: 'Владею методами контроля качества сырья и продукции'
            },
            {
                id: 'q-6',
                text: 'Внимателен к деталям и аккуратен в работе',
                isSoft: true,
            },
            {
                id: 'q-7',
                text: 'Умею анализировать данные и принимать решения',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Ответственно отношусь к безопасности: своей, коллег и окружающей среды',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Готов работать в команде и четко следовать инструкциям',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Стремлюсь к постоянному обучению и освоению новых технологий',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Умею сохранять спокойствие в нештатных ситуациях',
                isSoft: true
            },
        ],
        vacanciesLinks: [
            {name: 'Лаборант химического анализа', link: 'https://fut.ru/s/lab-assist-vac2026'},
            {name: 'Машинист технологических насосов', link: 'https://fut.ru/s/machinist-vac2026'},
            {name: 'Оператор нефтепереработки', link: 'https://fut.ru/s/oil-operator-vac2026'},
            {name: 'Мастер шиномонтажа', link: 'https://fut.ru/s/mastershin_26'},
        ],
        testName: 'химической промышленности',
        opportunities: opportunitiesConfig.chemical,
        opportunitiesPerson: {
            width: 183,
            height: 343,
            left: 32,
            img: himTech,
        },
        opportunitiesPersonDesk: {
            width: 229,
            height: 428,
            left: 440,
            img: himTech,
            bottom: -130,
        },
        testPerson: {
            top: {
                widthDesc: 260,
                heightDesc: 247,
                src: chemT,
                bottomDesc: 178,
                leftDesc: -205.5,
                width: 188,
                height: 179,
                bottom: -175,
                left: 56,
            },
            bot: {
                widthDesc: 283,
                heightDesc: 247,
                src: chemB,
                bottomDesc: -68,
                leftDesc: -203,
                width: 205,
                height: 178,
                bottom: -352,
                left: 56.4,
            },
        }
    },
    {
        id: 'it',
        jobTitleSize: 31,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>информатика</ColoredSpan> и вычислительная техника</>,
        jobDescription: 'Специалисты в области информатики и вычислительной техники создают, настраивают и поддерживают цифровую инфраструктуру — от компьютеров и сетей до сложных программных систем\n\nОни обеспечивают работоспособность оборудования, защищают данные, автоматизируют процессы и разрабатывают IT-решения для бизнеса, науки и повседневной жизни\n\nБез них невозможна работа современных организаций, банковских операций и цифровых сервисов',
        jobDescriptionSm: 'Специалисты в области информатики и вычислительной техники создают, настраивают и поддерживают цифровую инфраструктуру — от компьютеров и сетей до сложных программных систем\n\nОни обеспечивают работоспособность оборудования, защищают данные,\nавтоматизируют процессы\nи разрабатывают IT-решения\nдля бизнеса, науки \nи повседневной жизни\n\nБез них невозможна работа\nсовременных организаций,\nбанковских операций\nи цифровых сервисов',
        vacanciesDescr: [
            { id: 0, isSmall: true, name: 'IT-отделы в бизнесе и промышленности', desc: 'Обеспечивать бесперебойную работу компьютеров, сетей и программ в любой компании — от магазина до завода' },
            { id: 1, isSmall: true, name: 'IT-компании и продуктовые команды', desc: 'Создавать и развивать цифровые продукты: от приложений и видеоигр до облачных сервисов и платформ' },
            { id: 2, isSmall: true, name: 'Диджитал-агентства', desc: 'Настраивать рекламу, анализировать данные о пользователях и делать так, чтобы сайты компании были видны в интернете' },
            { id: 3, isSmall: true, name: 'Государственный сектор', desc: 'Создавать и обслуживать информационные системы, порталы и базы в государственных организациях' },
            { id: 4, isSmall: true, name: 'Компании по автоматизации и “умным” системам', desc: 'Настраивать технологии “интернета вещей” (IoT) и роботизированные решения: от датчиков на производстве до умных лампочек и колонок' },
            { id: 5, isSmall: true, name: 'IT-аутсорсинг и сервисные компании', desc: 'Помогать решать проблемы с программами или искать и исправлять ошибки в софте, чтобы он работал идеально' },
        ],
        vacanciesLinks: [
            {name: 'Системный администратор', link: 'https://fut.ru/s/admin_2'},
            {name: 'Специалист технической поддержки', link: 'https://fut.ru/s/tech_2'},
            {name: 'Техник по обслуживанию компьютеров', link: 'https://fut.ru/s/computer_1'},
            {name: 'Программист-стажёр', link: 'https://fut.ru/s/program_0'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Знаю устройство компьютеров, сетей и операционных систем'
            },
            {
                id: 'q-1',
                text: 'Умею настраивать серверы и сетевое оборудование'
            },
            {
                id: 'q-2',
                text: 'Владею основами программирования на одном из языков'
            },
            {
                id: 'q-3',
                text: 'Понимаю принципы работы баз данных (SQL, NoSQL)'
            },
            {
                id: 'q-4',
                text: 'Умею диагностировать и устранять неполадки в ПО и железе'
            },
            {
                id: 'q-6',
                text: 'Аналитический склад ума, умение быстро находить проблемы',
                isSoft: true,
            },
            {
                id: 'q-7',
                text: 'Внимательность к деталям и аккуратность в работе с кодом',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Готовность учиться новым технологиям ',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Умение объяснять сложное простыми словами (клиентам, коллегам)',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Способность работать в режиме многозадачности и соблюдать дедлайны',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Стрессоустойчивость при сбоях и авралах',
                isSoft: true
            },
        ],
        testName: 'айти',
        opportunities: opportunitiesConfig.it,
        opportunitiesPerson: {
            width: 183,
            height: 343,
            left: 32,
            img: it,
        },
        opportunitiesPersonDesk: {
            width: 229,
            height: 428,
            left: 440,
            img: it,
            bottom: -150,
        },
        testPerson: {
            top: {
                widthDesc: 304 * 0.5,
                heightDesc: 727 * 0.5,
                src: itT,
                bottomDesc: 26,
                leftDesc: -127,
                width:  304 * 0.38,
                height: 727 * 0.38,
                bottom: -232,
                left: 71,
            },
            bot: {
                widthDesc: 224,
                heightDesc: 278,
                src: itB,
                bottomDesc: -118,
                leftDesc: -71.5,
                width: 149,
                height: 186,
                bottom: -342,
                left: 87
            },
        }
    },
    {
        id: 'infosec',
        jobTitleSize: 33,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>информационная</ColoredSpan> безопасность</>,
        jobDescription: 'Задача специалистов по информационной безопасности — защитить всё ценное, что хранится в компьютерах и сетях: деньги клиентов, персональные данные, коммерческие тайны — от кибератак, утечек и несанкционированного доступа\n\nОни предупреждают кибератаки (как взломы сайтовили вирусы-вымогатели), не допускают утечек информации и следят, чтобы доступ к системам был только у тех, кому нужно. Без них банк не сможет безопасно переводить платежи, а сетевой магазин — хранить данные клиентов\n\nОни делают цифровой мир для людей и бизнеса предсказуемым и безопасным',
        jobDescriptionSm: 'Задача специалистов по информационной безопасности — защитить всё ценное, что хранится в компьютерах и сетях: деньги клиентов, персональные данные, коммерческие тайны — от кибератак, утечек и несанкционированного доступа\n\nОни предупреждают кибератаки (как взломы сайтовили вирусы-вымогатели), не допускают утечек информации и следят, чтобы доступ к системам был только у тех, кому нужно.\n\nБез них банк не сможет\nбезопасно переводить\nплатежи, а сетевой\nмагазин — хранить\nданные клиентов\n\nОни делают цифровой мир \nдля людей и бизнеса\nпредсказуемым и безопасным',
        vacanciesDescr: [
            { id: 0, isSmall: true, name: 'Банки и финансы', desc: 'Защищать важные финансовые данные, транзакции и клиентскую информацию от мошенничества и кибератак' },
            { id: 1, isSmall: true, name: 'Бизнес и производство', desc: 'Строить систему информационной безопасности в любой компании — от магазина до завода' },
            { id: 2, isSmall: true, name: 'IT-компании-разработчики систем безопасности', desc: 'Создавать продукты для защиты данных: антивирусы, системы мониторинга, средства шифрования' },
            { id: 3, isSmall: true, name: 'Государственный сектор', desc: 'Обеспечивать защиту государственных информационных ресурсов, систем и данных' },
            { id: 4, isSmall: true, name: 'Консалтинг и аудит', desc: 'Проводить независимые проверки (аудит) безопасности и помогать разным компаниям выстроить эффективную защиту' },
        ],
        vacanciesLinks: [
            {name: 'Специалист по информационной безопасности', link: 'https://fut.ru/s/infosec_2'},
            {name: 'Специалист технической поддержки', link: 'https://fut.ru/s/support_7'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Понимаю архитектуру сетей и принципы работы протоколов (TCP/IP, DNS, HTTP/S)'
            },
            {
                id: 'q-1',
                text: 'Умею настраивать средства защиты (firewall, IDS/IPS, SIEM, DLP)'
            },
            {
                id: 'q-2',
                text: 'Знаю основные классы уязвимостей и методы атак'
            },
            {
                id: 'q-3',
                text: 'Владею основами криптографии и механизмами аутентификации'
            },
            {
                id: 'q-4',
                text: 'Умею проводить базовый анализ вредоносного ПО и сетевого трафика'
            },
            {
                id: 'q-5',
                text: 'Знаю стандарты и регулятивы в области ИБ',
            },
            {
                id: 'q-6',
                text: 'Внимателен к ошибкам и аномалиям в системе',
                isSoft: true,
            },
            {
                id: 'q-7',
                text: 'Умею видеть общую картину и взаимосвязи процессов',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Обладаю усидчивостью для мониторинга логов и расследований',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Руководствуюсь этикой и ответственностью в работе с чувствительными данными',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Умею доступно объяснять риски нетехническому руководству',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Постоянно учусь, чтобы быть готовым к новым видам киберугроз',
                isSoft: true
            },
        ],
        testName: 'информационной безопасности',
        opportunities: opportunitiesConfig.infosec,
        opportunitiesPerson: {
            width: 183,
            height: 343,
            left: 32,
            img: infosec,
        },
        opportunitiesPersonDesk: {
            width: 229,
            height: 428,
            left: 440,
            img: infosec,
            bottom: -150,
        },
        testPerson: {
            top: {
                widthDesc: 321 * 0.5,
                heightDesc: 625 * 0.5,
                src: infosecT,
                bottomDesc: 71,
                leftDesc: -142,
                width: 321 * 0.38,
                height: 625 * 0.38,
                bottom: -205,
                left: 68,
            },
            bot: {
                widthDesc: 250,
                heightDesc: 326,
                src: infosecB,
                bottomDesc: -131,
                leftDesc: -101,
                width: 245,
                height: 225,
                bottom: -342,
                left: 75
            },
        }
    },
    {
        id: 'energetics',
        jobTitleSize: 28,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Электро-</ColoredSpan> и теплоэнергетика</>,
        jobDescription: 'Они проектируют, обслуживают и ремонтируют оборудование электростанций, подстанций, тепловых сетей, следят за безопасностью, эффективностью и надежностью энергосистем. Благодаря им транспорт ходит по улицам города, заводы выпускают товары, а люди не мерзнут зимой.',
        jobDescriptionSm: 'Они проектируют, обслуживают и ремонтируют оборудование электростанций, подстанций, тепловых сетей, следят за безопасностью, эффективностью и надежностью энергосистем.\n\nБлагодаря им транспорт ходит\nпо улицам города, заводы\nвыпускают товары,\nа люди не мерзнут\nзимой.',
        vacanciesDescr: [
            { id: 0, isSmall: true, name: 'Энергосбытовые и сетевые компании', desc: 'Следить за работой линий электропередач и подстанций, чтобы в домах и на предприятиях был свет' },
            { id: 1, isSmall: true, name: <>Тепловые электростанции <NoTransformSpan>(ТЭЦ)</NoTransformSpan> и котельные</>, desc: 'Работать с оборудованием, которое производит тепло и электричество, следить за котлами и турбинами' },
            { id: 2, isSmall: true, name: 'Промышленные предприятия и заводы', desc: 'Отвечать за бесперебойное энергоснабжение цехов, ремонтировать оборудование и снижать энергозатраты' },
            { id: 3, isSmall: true, name: 'Компании в сфере возобновляемой энергетики', desc: 'Работать на солнечных электростанциях и ветропарках — будущее за экологичной энергетикой!' },
            { id: 4, isSmall: true, name: 'Сервисные и монтажные организации', desc: 'Собирать, запускать и обслуживать сложное энергетическое оборудование у заказчиков' },
        ],
        vacanciesLinks: [
            {name: 'Электромонтёр', link: 'https://fut.ru/s/elecmon_1'},
            {name: 'Слесарь-электрик', link: 'https://fut.ru/s/slesel_3'},
            {name: 'Оператор котельной', link: 'https://fut.ru/s/boiler-vac2026'},
            {name: 'Электромеханик по лифтам', link: 'https://fut.ru/s/elevator-vac2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Знаю устройство и принципы работы энергооборудования'
            },
            {
                id: 'q-1',
                text: 'Умею читать электрические и тепловые схемы, чертежи'
            },
            {
                id: 'q-2',
                text: 'Знаю безопасные методы переключения в энергоустановках'
            },
            {
                id: 'q-3',
                text: 'Помню правила технической эксплуатации и охраны труда'
            },
            {
                id: 'q-4',
                text: 'Умею проводить измерения (напряжение, ток, сопротивление, температура)'
            },
            {
                id: 'q-6',
                text: 'Осознаю высокую ответственность — ошибки ведут к авариям',
                isSoft: true,
            },
            {
                id: 'q-7',
                text: 'Обладаю внимательностью к деталям и точностью в работе',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Готов работать в любых погодных условиях и в нестандартных ситуациях',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Умею быстро принимать решения в аварийных режимах',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Знаю инструкции и четко им следую ',
                isSoft: true
            },
        ],
        testName: 'энергетике',
        testAdditionMargin: 70,
        opportunities: opportunitiesConfig.energetics,
        opportunitiesPerson: {
            width: 188 * 1.2,
            height: 352 * 1.4,
            left: 12,
            img: machine,
        },
        opportunitiesPersonDesk: {
            width: 316,
            height: 448,
            left: 440,
            img: energetics,
            bottom: -150,
        },
        testPerson: {
            top: {
                widthDesc: 162,
                heightDesc: 379,
                src: energeticsT,
                bottomDesc: 3,
                leftDesc: -138,
                width: 105,
                height: 304 * 0.9,
                bottom: -265,
                left: 73.5,
            },
            bot: {
                widthDesc: 387,
                heightDesc: 352,
                src: energeticsB,
                bottomDesc: -181,
                leftDesc: -165,
                width: 292,
                height: 265,
                bottom: -462,
                left: 69
            },
        },
    },
    {
        id: 'machine',
        jobTitleSize: 32,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Машиностроение</ColoredSpan></>,
        jobDescription: 'Они превращают чертежи в реальные детали и устройства — от крошечных компонентов микроэлектроники до гигантских прессов и роботизированных линий.\n\nБлагодаря им работают заводы, строятся здания, ездит транспорт и выпускаются все-все товары',
        jobDescriptionSm: 'Они превращают чертежи в реальные детали и устройства — от крошечных компонентов микроэлектроники до гигантских прессов и роботизированных линий.\n\nБлагодаря им работают заводы, строятся здания, ездит транспорт и выпускаются все-все товары',
        vacanciesDescr: [
            { id: 0, name: <>Конструкторское бюро и проектные институты <NoTransformSpan>(КБ, НИИ)</NoTransformSpan></>, desc: <>Разрабатывать чертежи и{' '}<NoTransformSpan>3D-модели</NoTransformSpan> деталей и целых машин</> },
            { id: 1, isSmall: true, name: 'Производственные цеха', desc: <>Работать на станках с{' '}<NoTransformSpan>ЧПУ</NoTransformSpan>, собирать готовые изделия или контролировать процесс их изготовления</> },
            { id: 2, isSmall: true, name: 'Машиностроительные заводы', desc: 'Разрабатывать технологии изготовления деталей для машин и станков, подбирать удобные инструменты и режимы обработки' },
            { id: 3, isSmall: true, name: 'Сервисные и инжиниринговые компании', desc: 'Запускать, налаживать и обслуживать сложное промышленное оборудование на предприятиях' },
            { id: 4, isSmall: true, name: 'Компании по автоматизации и роботизации', desc: 'Программировать промышленных роботов и автоматические линии, обеспечивая их бесперебойную работу' },
            { id: 5, name: 'Предприятия тяжелой и транспортной промышленности', },
        ],
        vacanciesLinks: [
            {name: 'Оператор станков ЧПУ', link: 'https://fut.ru/s/operator-chpy-vac2026'},
            {name: 'Слесарь по ремонту оборудования', link: 'https://fut.ru/s/plumber-vac2026'},
            {name: 'Сварщик', link: 'https://fut.ru/s/welder-vac2026'},
            {name: <>Наладчик <NoTransformSpan>КИПиА (начинающий)</NoTransformSpan></>, link: 'https://fut.ru/s/adjuster-vac2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Умею читать и составлять чертежи'
            },
            {
                id: 'q-1',
                text: 'Знаю основные виды станков — токарные, фрезерные, сверлильные'
            },
            {
                id: 'q-2',
                text: 'Понимаю, чем один металл отличается от другого и как они себя ведут при обработке'
            },
            {
                id: 'q-3',
                text: 'Знаю основы того, как работают датчики, электрика и гидравлика в оборудовании'
            },
            {
                id: 'q-4',
                text: 'Дружу с измерительными инструментами (калибры, микрометры, индикаторы)'
            },
            {
                id: 'q-5',
                text: <>Знаком с основами <NoTransformSpan>ЧПУ</NoTransformSpan> или готов освоить программы для черчения и моделирования</>
            },
            {
                id: 'q-6',
                text: ' Обладаю пространственным мышлением и хорошим глазомером',
                isSoft: true,
            },
            {
                id: 'q-7',
                text: 'Могу быть аккуратным и точным в работе',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Умею находить  интересные решения технических задач',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Ответственно отношусь к безопасности — своей и коллег',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Готов к тому, что в цехе может быть шумно, и к работе руками',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Хочу осваивать современные станки и технологии',
                isSoft: true
            },
        ],
        testName: 'машиностроении',
        testAdditionMargin: 70,
        opportunities: opportunitiesConfig.machine,
        opportunitiesPerson: {
            width: 188 * 1.2,
            height: 352 * 1.4,
            left: 12,
            img: machine,
        },
        opportunitiesPersonDesk: {
            width: 316,
            height: 448,
            left: 440,
            img: machine,
            bottom: -150,
        },
        testPerson: {
            top: {
                widthDesc: 274 * 0.5,
                heightDesc: 707 * 0.5,
                src: machineT,
                bottomDesc: 84,
                leftDesc: -113,
                width: 274 * 0.38,
                height: 707 * 0.38,
                bottom: -218,
                left: 75,
            },
            bot: {
                widthDesc: 274,
                heightDesc: 311,
                src: machineB,
                bottomDesc: -123,
                leftDesc: -91,
                width: 203,
                height: 231,
                bottom: -385,
                left: 79
            },
        },
    },
    {
        id: 'biotech',
        jobTitleSize: 29,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Промышленная экология</ColoredSpan> и биотехнологии</>,
        jobDescription: 'Их главная задача – сделать так, чтобы заводы и фабрики не вредили природе. Они создают и контролируют системы очистки, чтобы в воздух, воду и почву попадало как можно меньше вредных веществ.\n\nА ещё они используют живые микроорганизмы, дрожжи или ферменты, чтобы создавать полезные продукты: от лекарств и экологичных материалов до пищевых добавок и биотоплива.\n\nИх работа соединяет химию, биологию и инженерию, чтобы заботиться о безопасности планеты и создавать технологии будущего',
        jobDescriptionSm: 'Их главная задача – сделать так, чтобы заводы и фабрики не вредили природе.\n\nОни создают и контролируют системы очистки, чтобы в воздух, воду и почву попадало как можно меньше вредных веществ. а ещё они используют живые микроорганизмы, дрожжи или ферменты, чтобы создавать полезные продукты: от лекарств и экологичных материалов до пищевых добавок и биотоплива.\n\nИх работа соединяет химию,\nбиологию и инженерию,\nчтобы заботиться\nо безопасности планеты\nи создавать технологии\nбудущего',
        vacanciesDescr: [
            { id: 0, isSmall: true, name: 'Отделы экологического контроля на предприятиях', desc: 'Следить, чтобы завод или фабрика не вредили окружающей среде, контролировать выбросы и стоки' },
            { id: 1, isSmall: true, name: 'Лаборатории анализа и мониторинга', desc: 'Исследовать пробы воды, воздуха и почвы, чтобы точно оценить состояние экосистемы' },
            { id: 2, name: 'Службы охраны труда и промышленной безопасности', desc: 'Создавать безопасные условия для людей на производстве' },
            { id: 3, isSmall: true, name: 'Биотехнологические производства', desc: 'Участвовать в создании полезных продуктов с помощью микроорганизмов: от ферментов до биодобавок' },
            { id: 4, isSmall: true, name: 'Консалтинг и экологический аудит', desc: 'Помогать компаниям стать экологичными: проводить проверки и давать рекомендации ' },
            { id: 5, isSmall: true, name: 'Компании водоподготовки и очистки сточных вод', desc: 'Обеспечивать, чтобы в наши краны и реки попадала только чистая вода, управляя системами очистки'},
        ],
        vacanciesLinks: [
            {name: 'Пекарь', link: 'https://fut.ru/s/baker-vac2026'},
            {name: 'Повар', link: 'https://fut.ru/s/cook-vac2006'},
            {name: 'Наладчик пищевого оборудования', link: 'https://fut.ru/s/foodadjuster-vac2026'},
            {name: 'Лаборант пищевого производства ', link: 'https://fut.ru/s/labassistant-vac2006'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Понимаю, как устроены вещества вокруг нас — от состава воды до основ биохимии'
            },
            {
                id: 'q-1',
                text: 'Готов осваивать приборы для точных измерений'
            },
            {
                id: 'q-2',
                text: 'Умею читать технологические схемы'
            },
            {
                id: 'q-3',
                text: 'Знаю методы микробиологического анализа и правила работы в стерильных условиях'
            },
            {
                id: 'q-4',
                text: 'Помню, как правильно отобрать пробы воды, воздуха или почвы, чтобы получить достоверные данные'
            },
            {
                id: 'q-5',
                text: 'Ориентируюсь в законах и нормативах, которые защищают природу'
            },
            {
                id: 'q-6',
                text: 'Осознаю ответственность – нужно работать с опасными веществами и микроорганизмами'
            },
            {
                id: 'q-7',
                text: 'Люблю искать закономерности в данных, цифрах и графиках, чтобы делать точные выводы',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Умею работать в команде и четко следовать правилам безопасности',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Не боюсь сочетать лабораторную работу с выездами на производство',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Беспокоюсь за природу, хочу, чтобы окружающий мир стал чище и безопаснее',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Хочу осваивать современные эко-технологии',
                isSoft: true
            },
        ],
        testName: 'экологии',
        opportunities: opportunitiesConfig.biotech,
        opportunitiesPerson: {
            width: 167,
            height: 309,
            left: 20,
            img: biotech,
        },
        opportunitiesPersonDesk: {
            width: 281,
            height: 463,
            left: 440,
            img: biotech,
            bottom: -137,
        },
        testPerson: {
            top: {
                widthDesc: 317 * 0.5,
                heightDesc: 513 * 0.5,
                src: biotechT,
                bottomDesc: 146,
                leftDesc: -139,
                width: 317 * 0.37,
                height: 513 * 0.37,
                bottom: -176,
                left: 69,
            },
            bot: {
                widthDesc: 300,
                heightDesc: 301,
                src: biotechB,
                bottomDesc: -55,
                leftDesc: -140,
                width: 229,
                height: 230,
                bottom: -351,
                left: 69.5
            },
        },
    },
    {
        id: 'safetech',
        jobTitleSize: 29,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Техносферная безопасность</ColoredSpan> и природо<ShortScreen>- </ShortScreen>обустройство</>,
        jobDescription: 'Их работа — предвидеть и предотвращать любые угрозы: от несчастного случая на заводе до пожара в лесу.\n\nОни создают правила и системы, которые защищают рабочих в цехах, жителей городов от наводнений и окружающую среду от вредных выбросов. Если авария всё же случилась, они знают, как грамотно и быстро ликвидировать её последствия.\n\nИх работа — это симбиоз инженерии, экологии и управления рисками, который делает наш мир более устойчивым, предсказуемым и безопасным для жизни',
        jobDescriptionSm: 'Их работа — предвидеть и предотвращать любые угрозы: от несчастного случая на заводе до пожара в лесу.\n\nОни создают правила и системы, которые защищают рабочих в цехах, жителей городов от наводнений и окружающую среду от вредных выбросов. Если авария всё же\nслучилась, они знают, как\nграмотно и быстро\nликвидировать её последствия.\n\nИх работа — это симбиоз\nинженерии, экологии\nи управления рисками,\nкоторый делает наш мир более\nустойчивым, предсказуемым\nи безопасным для жизни',
        vacanciesDescr: [
            { id: 0, isSmall: true, name: 'Промышленные предприятия', desc: 'Заботиться о том, чтобы работа в цехах и на объектах была безопасной для людей, а производство — для природы' },
            { id: 1, isSmall: true, name: 'Природоохранные и инжиниринговые компании', desc: 'Восстанавливать природу: от карьеров и свалок до берегов рек, возвращая земле жизнь и красоту' },
            { id: 2, isSmall: true, name: 'Службы МЧС и пожарного надзора', desc: 'Придумывать, как защитить леса, поля и населенные пункты от пожаров' },
            { id: 3, name: 'Государственный сектор', desc: 'Следить за состоянием воздуха, воды и почвы и выявлять нарушения' },
            { id: 4, name: 'Компании по обращению с отходами и эко-технологиям', desc: 'Организовывать переработку мусора и производственных отходов'},
        ],
        vacanciesLinks: [
            {name: 'Спасатель', link: 'https://fut.ru/s/rescuer-vac2026'},
            {name: 'Пожарный', link: 'https://fut.ru/s/firefighter-vac2026'},
            {name: 'Диспетчер аварийной службы', link: 'https://fut.ru/s/dispatcher-vac2026'},
            {name: 'Инспектор в области охраны окружающей среды', link: 'https://fut.ru/s/environmentalinspector-vac2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Сохраняю ясную голову в критической ситуации',
                isSoft: true,
            },
            {
                id: 'q-1',
                text: 'Осознаю высокую ответственность и понимаю, что от моих решений могут зависеть жизни людей',
                isSoft: true,
            },
            {
                id: 'q-2',
                text: 'Обладаю хорошей физической формой и выносливостью',
                isSoft: true,
            },
            {
                id: 'q-3',
                text: 'Быстро реагирую и могу принимать решения в сложной ситуации',
                isSoft: true,
            },
            {
                id: 'q-4',
                text: 'Умею работать в группе, слушать команды и доверять коллегам',
                isSoft: true,
            },
            {
                id: 'q-5',
                text: 'Хочу защищать людей, предотвращать ущерб и сохранять природу',
                isSoft: true,
            },
            {
                id: 'q-7',
                text: 'Знаю основные законы и нормативы по охране труда, промышленной и пожарной безопасности',
            },
            {
                id: 'q-8',
                text: 'Умею правильно использовать защитную экипировку',
            },
            {
                id: 'q-9',
                text: 'Разбираюсь в инструментах для спасения и ликвидации, принципах работы аварийного оборудования',
            },
            {
                id: 'q-10',
                text: 'Умею работать с цифрами и чертежами: могу рассчитать риски или нагрузку, прочитать проектную схему здания',
            },
            {
                id: 'q-11',
                text: 'Учу основы геодезии, картографии и экологического мониторинга',
            },
        ],
        testName: 'техносферной безопасности',
        opportunities: opportunitiesConfig.safetech,
        opportunitiesPerson: {
            width: 241,
            height: 332,
            left: 16,
            img: safetech,
        },
        opportunitiesPersonDesk: {
            width: 281,
            height: 463,
            left: 440,
            img: safetech,
            bottom: -137,
        },
        testPerson: {
            top: {
                widthDesc: 166,
                heightDesc: 242,
                src: safetechT,
                bottomDesc: 176,
                leftDesc: -129.5,
                width: 110,
                height: 161,
                bottom: -168,
                left: 74.5,
            },
            bot: {
                widthDesc: 274,
                heightDesc: 282,
                src: safetechB,
                bottomDesc: -73,
                leftDesc: -114,
                width: 180,
                height: 184,
                bottom: -321,
                left: 76
            },
        },
    },
    {
        id: 'geology',
        jobTitleSize: 27,
        jobInfoHeight: 645,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Прикладная геология</ColoredSpan>, горное дело, нефтегазовое дело и геодезия</>,
        jobDescription: 'Полезные ископаемые нужны обществу каждый день: это и энергия, и материалы для самых разных вещей. А специалисты этой специальности умеют их находить и организовывать добычу и исследования в лабораториях. Они изучают геологические структуры и породы, оценивают месторождения, учатся добывать и разведывать местоположения полезных ископаемых. Это полезно как для энергетики и промышленности, так и для экономической сферы.\n\nЭта работа соединяет химию и математику, обеспечивая контроль над изменениями поверхности Земли и сырьевую базу страны',
        jobDescriptionSm: 'Полезные ископаемые нужны обществу каждый день: это и энергия, и материалы для самых разных вещей.\n\nА специалисты этой специальности умеют их находить и организовывать добычу и исследования в лабораториях.\n\nОни изучают геологические структуры и породы, оценивают месторождения, учатся добывать и разведывать местоположения полезных ископаемых. Это полезно как для энергетики\nи промышленности, так и для\nэкономической сферы.\n\nЭта работа соединяет химию\nи математику, обеспечивая\nконтроль над изменениями\nповерхности Земли\nи сырьевую базу страны',
        vacanciesDescr: [
            { id: 0, name: 'Нефтяные и газовые компании', desc: 'Добывать полезные ископаемые' },
            { id: 1, name: 'Строительные компании', desc: 'Строить дороги, мосты, трубопроводы' },
            { id: 2, name: 'Научные учреждения', desc: 'Изучать природные ресурсы' },
            { id: 3, name: 'Экологический контроль', desc: 'Следить, чтобы производства не вредили окружающей среде' },
        ],
        vacanciesLinks: [
            {name: 'Техник-лаборант', link: 'https://fut.ru/s/tech9'},
            {name: 'Бурильщик', link: 'https://fut.ru/s/tech8'},
            {name: 'Оператор по добыче нефти и газа', link: 'https://fut.ru/s/tech7'},
            {name: 'Техник-геодезист', link: 'https://fut.ru/s/tech6'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Умею проводить полевые и лабораторные исследования (например, бурение)'
            },
            {
                id: 'q-1',
                text: 'Знаю основные принципы безопасности при работе с технологическими процессами'
            },
            {
                id: 'q-2',
                text: 'Умею проводить инженерно-технические расчеты'
            },
            {
                id: 'q-3',
                text: 'Понимаю принцип работы с геодезическими приборами'
            },
            {
                id: 'q-4',
                text: 'Умею составлять карту и работать с технической документацией'
            },
            {
                id: 'q-7',
                text: 'Обладаю аналитическим мышлением',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Внимателен к деталям',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Умею работать в команде',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Стрессоустойчив и ответственен',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Увлекаюсь экологией и забочусь о планете',
                isSoft: true
            },
        ],
        testName: 'техносферной безопасности',
        testFullName: 'работать с окружающей средой',
        opportunities: opportunitiesConfig.geology,
        opportunitiesPerson: {
            width: 241,
            height: 332,
            left: 16,
            img: geology,
        },
        opportunitiesPersonDesk: {
            width: 281,
            height: 463,
            left: 440,
            img: geology,
            bottom: -137,
        },
        testBlockMargin: 60,
        testPerson: {
            top: {
                widthDesc: 244 * 0.5,
                heightDesc: 603 * 0.5,
                src: geologyT,
                bottomDesc: 35,
                leftDesc: -103,
                width: 244 * 0.38,
                height: 603 * 0.38,
                bottom: -235,
                left: 77,
            },
            bot: {
                widthDesc: 177,
                heightDesc: 208,
                src: geologyB,
                bottomDesc: -110,
                leftDesc: -47,
                width: 144,
                height: 169,
                bottom: -345,
                left: 86
            },
        },
    },
    {
        id: 'materials',
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>технологии</ColoredSpan> материалов</>,
        jobDescription: 'Технологи разбираются в изучении и производстве материалов для всего, что нас окружает. Они учатся создавать, преобразовывать и совершенствовать материалы, которые используются абсолютно везде: от медицины до космической сферы.\n\nА ещё они активно участвуют в экологических\nпроцессах переработки и утилизации, делая\nнаш мир чище',
        jobDescriptionSm: 'Технологи разбираются в изучении и производстве материалов для всего, что нас окружает.\n\nОни учатся создавать, преобразовывать и совершенствовать материалы, которые используются абсолютно везде: от медицины до космической сферы.\n\nА ещё они активно участвуют в экологических процессах\n переработки и утилизации,\nделая наш мир чище',
        vacanciesDescr: [
            { id: 0, name: 'Оборонная промышленность', desc: 'Разрабатывать материалы для спецтехники' },
            { id: 1, name: 'Космическая сфера', desc: 'Разрабатывать материалы для спутников и ракет' },
            { id: 2, name: 'Научная сфера', desc: 'Производить новые сплавы и нанотехнологии' },
            { id: 3, name: 'Медицина', desc: 'Разрабатывать материалы для имплантатов и протезов' },
            { id: 4, name: 'Пищевая промышленность', desc: 'Создавать упаковки и пищевые материалы' },
        ],
        vacanciesLinks: [
            {name: 'Инженер-технолог', link: 'https://fut.ru/s/tech5'},
            {name: 'Подручный сталевара', link: 'https://fut.ru/s/tech4'},
            {name: 'Плавильщик металла', link: 'https://fut.ru/s/tech3'},
            {name: 'Обработка металлов давлением', link: 'https://fut.ru/s/tech2'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Знаю свойства различных материалов, их структуру и характеристики'
            },
            {
                id: 'q-1',
                text: 'Умею применять различные методы для анализа материалов'
            },
            {
                id: 'q-2',
                text: 'Понимаю, как работать с лабораторным и производственным оборудованием'
            },
            {
                id: 'q-3',
                text: 'Понимаю принцип работы полного цикла производства материалов'
            },
            {
                id: 'q-4',
                text: 'Умею составлять и читать чертежи'
            },
            {
                id: 'q-7',
                text: 'Умею критически и аналитически мыслить',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Готов самостоятельно учиться',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Умею выявлять взаимосвязи между различными объектами',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Получаю удовольствие от создания новых и уникальных изделий',
                isSoft: true
            },
        ],
        testName: '',
        testFullName: 'работать с производством материалов',
        testBlockMargin: 60,
        opportunities: opportunitiesConfig.materials,
        opportunitiesPerson: {
            width: 146,
            height: 331,
            left: 22,
            img: materials,
        },
        opportunitiesPersonDesk: {
            width: 186,
            height: 430,
            left: 460,
            img: materials,
            bottom: -147,
        },
        testAdditionMargin: 30,
        testPerson: {
            top: {
                widthDesc: 185,
                heightDesc: 248,
                src: materialsT,
                bottomDesc: 89,
                leftDesc: -164,
                width: 137,
                height: 185,
                bottom: -178,
                left: 64,
            },
            bot: {
                widthDesc: 245,
                heightDesc: 297,
                src: materialsB,
                bottomDesc: -161,
                leftDesc: -111,
                width: 192,
                height: 225,
                bottom: -369,
                left: 74.5
            },
        },
    },
    {
        id: 'transport',
        jobTitleSize: 27,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Техника</ColoredSpan> и технологии наземного транспорта</>,
        jobDescription: 'Благодаря этим специалистам ездят поезда, автобусы, трамваи и вообще весь наземный транспорт. Они занимаются ремонтом и обслуживанием.\n\nСпециалисты разбираются в устройстве двигателей, организуют транспортные процессы и внедряют современные решения для управления транспортом',
        jobDescriptionSm: 'Благодаря этим специалистам ездят поезда, автобусы, трамваи и вообще весь наземный транспорт. Они занимаются ремонтом и обслуживанием.\n\nСпециалисты разбираются в устройстве двигателей, организуют транспортные процессы и внедряют современные решения для управления\nтранспортом',
        vacanciesDescr: [
            { id: 0, name: 'Автомобилестроение', desc: 'Создавать машины и спецтехнику ' },
            { id: 1, name: 'Транспортные компании и логистика', desc: 'Разрабатывать организацию перевозок' },
            { id: 2, name: 'Ремонтный сервис, техобслуживание', desc: 'Проводить ремонт и диагностику техники' },
            { id: 3, name: 'Государственные органы', desc: 'Заниматься контролем, экспертизой и безопасностью наземного транспорта' },
            { id: 4, name: 'Сфера страхования', desc: 'Оценивать ущерб техники' },
        ],
        vacanciesLinks: [
            {name: 'Диспетчер автомобильного транспорта', link: 'https://fut.ru/s/tech1'},
            {name: 'Автомеханик / Автослесарь', link: 'https://fut.ru/s/tech0_2026'},
            {name: 'Машинист дорожно-строительной техники', link: 'https://fut.ru/s/tech_2026'},
            {name: 'Диспетчер', link: 'https://fut.ru/s/tech1_2026'},
            {name: 'Машинист электропоезда', link: 'https://fut.ru/s/tech2_2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Глубоко понимаю устройство спецтехники, умею проводить технические работы с ними'
            },
            {
                id: 'q-1',
                text: 'Умею пользоваться диагностическим оборудованием'
            },
            {
                id: 'q-2',
                text: 'Ориентируюсь в технической документации'
            },
            {
                id: 'q-7',
                text: 'Умею рационально мыслить и решать проблемы в критических ситуациях',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Стрессоустойчив и внимателен',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Работаю в команде',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Легко подстраиваюсь к новым обстоятельствам',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'постоянно учусь новому',
                isSoft: true
            },
        ],
        testFullName: 'работать с технологиями наземного транспорта',
        testBlockMargin: 80,
        opportunities: opportunitiesConfig.transport,
        opportunitiesPerson: {
            width: 241,
            height: 332,
            left: 16,
            img: transport,
        },
        opportunitiesPersonDesk: {
            width: 327,
            height: 491,
            left: 360,
            img: transport,
            bottom: -200,
        },
        testPerson: {
            top: {
                widthDesc: 293,
                heightDesc: 248,
                src: transportT,
                bottomDesc: 100,
                leftDesc: -275,
                width: 236,
                height: 200,
                bottom: -114,
                left: 46,
            },
            bot: {
                widthDesc: 370,
                heightDesc: 281,
                src: transportB,
                bottomDesc: -156,
                leftDesc: -276,
                width: 295,
                height: 208,
                bottom: -309,
                left: 46
            },
        },
    },
    {
        id: 'techcontrol',
        // jobTitleSize: 27,
        jobInfoHeight: 645,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Управление</ColoredSpan> в технических системах</>,
        jobDescription: 'контроль, точность, автоматизация — это основа, на которой держится эффективность современного производства, транспорта и городской инфраструктуры.\n\nСпециалисты создают и внедряют автоматизированные системы управления. Они следят за движением поездов, настраивают системы управления станками, проверяют каачество продукции и точность чертежей и приборов.\n\nот их внимательности зависит, будет ли транспорт ходить по расписанию, а завод — выпускать качественные детали. Их работа соединяет инженерию, It и робототехнику, обеспечивая безопасную работу технических систем',
        jobDescriptionSm: 'контроль, точность, автоматизация — это основа, на которой держится эффективность современного производства, транспорта и городской инфраструктуры.\n\nСпециалисты создают и внедряют автоматизированные системы управления. Они следят за движением поездов, настраивают системы управления станками, проверяют каачество продукции и точность чертежей и приборов.\n\nот их внимательности зависит, будет ли транспорт ходить по расписанию, а завод — выпускать качественные детали. Их работа соединяет инженерию, It и робототехнику, обеспечивая безопасную\nработу технических систем',
        vacanciesDescr: [
            { id: 0, name: 'Информационные технологии', desc: 'Разработка ПО, баз данных, работа с системной интеграцией' },
            { id: 1, name: 'Транспортные компании и логистика', desc: 'Заниматься автоматизацией транспортных и логистических систем' },
            { id: 2, name: 'Промышленная сфера', desc: 'производить автоматизированное оборудование' },
            { id: 3, name: 'Государственные органы', desc: 'Заниматься автоматизацией работы государственных информационных систем и приложений' },
        ],
        vacanciesLinks: [
            {name: <NoTransformSpan>контролёр ОТК</NoTransformSpan>, link: 'https://hh.ru/search/vacancy?text=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B5%D1%80+%D0%9E%D0%A2%D0%9A&salary=&ored_clusters=true&experience=noExperience&education=special_secondary&education=not_required_or_not_specified&area=113&suggestId=70fb6c0c-d24e-427f-96c2-fc2039bf13e1&hhtmFrom=vacancy_search_list&hhtmFromLabel=vacancy_search_line'},
            {name: <NoTransformSpan>наладчик КИПиА</NoTransformSpan>, link: 'https://fut.ru/s/tech4_2026'},
            {name: 'Метролог', link: 'https://fut.ru/s/tech5_2026'},
            {name: 'Оператор производственной линии', link: 'https://fut.ru/s/tech6_2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Читаю электрические и функциональные схемы',
            },
            {
                id: 'q-1',
                text: <>Знаю основы программирования <NoTransformSpan>ПЛК</NoTransformSpan> или микроконтроллеров</>,
            },
            {
                id: 'q-2',
                text: 'Понимаю принципы работы датчиков и исполнительных механизмов',
            },
            {
                id: 'q-3',
                text: 'Умею работать с измерительными приборами',
            },
            {
                id: 'q-7',
                text: 'Критически мыслю',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Легко общаюсь с людьми и работаю в команде',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Внимателен и ответственен',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Заинтересован в технологиях',
                isSoft: true
            },
        ],
        testFullName: 'работать в управлении техническими системами',
        opportunities: opportunitiesConfig.techcontrol,
        opportunitiesPerson: {
            width: 241,
            height: 332,
            left: 16,
            img: techcontrol,
        },
        opportunitiesPersonDesk: {
            width: 281,
            height: 463,
            left: 440,
            img: techcontrol,
            bottom: -137,
        },
        testAdditionMargin: 30,
        testBlockMargin: 70,
        testPerson: {
            top: {
                widthDesc: 136,
                heightDesc: 396,
                src: techcontrolT,
                bottomDesc: -82,
                leftDesc: -119,
                width: 95,
                height: 264,
                bottom: -287,
                left: 76,
            },
            bot: {
                widthDesc: 291,
                heightDesc: 264,
                src: techcontrolB,
                bottomDesc: -183,
                leftDesc: -109,
                width: 210,
                height: 191,
                bottom: -365,
                left: 75
            },
        },
    },
    {
        id: 'techprom',
        jobTitleSize: 31,
        // jobInfoHeight: 645,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Технологии</ColoredSpan> легкой промышленности</>,
        jobDescription: 'легкая промышленность — это мир, где творчество встречается с технологиями.\n\nСпециалисты создают все, что нас окружает: от кросоовок и курток до упаковок товара, книг, мебели и даже бриллиантов.\n\nих работа — цепочка от эскиза до готового изделия: конструирование, выбор материалов, управление современным оборудованием и строгий контроль качества на каждом этапе',
        jobDescriptionSm: 'легкая промышленность — это мир, где творчество встречается с технологиями.\n\nСпециалисты создают все, что нас окружает: от кросоовок и курток до упаковок товара, книг, мебели и даже бриллиантов.\n\nих работа — цепочка от эскиза до готового изделия: конструирование, выбор материалов, управление\nсовременным оборудованием\nи строгий контроль качества\nна каждом\nэтапе',
        vacanciesDescr: [
            { id: 0, name: 'Производство', desc: 'Работать на швейной фабрике, комбинате или в мастерской' },
            { id: 1, name: 'Сфера дизайна', desc: 'Разрабатывать лекало, техническую документацию, подбирать нужные материалы' },
            { id: 2, name: 'Сфера контроля качества', desc: 'Разработка стандартов качества в сертифицированных центрах и службах контроля на предприятиях' },
            { id: 3, name: 'IT сфера', desc: 'Разработка 3D-дизайнов и 3D-моделирование' },
        ],
        vacanciesLinks: [
            {name: 'Швея-портной', link: 'https://fut.ru/s/tech7_2026'},
            {name: 'Мастер по ремонту обуви', link: 'https://fut.ru/s/tech8_2026'},
            {name: 'Печатник / Полиграфист', link: 'https://fut.ru/s/printer_2026 '},
            {name: 'Ткач', link: 'https://fut.ru/s/weaver_2026 '},
            {name: 'Сборщик мебели / Столяр', link: 'https://fut.ru/s/carpenter_2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Знаю методы конструирования'
            },
            {
                id: 'q-1',
                text: 'Умею проводить расчеты'
            },
            {
                id: 'q-2',
                text: 'Знаю классификацию материалов'
            },
            {
                id: 'q-3',
                text: 'Настраиваю и обслуживаю оборудование'
            },
            {
                id: 'q-4',
                text: 'Контролирую процессы и операции цеха'
            },
            {
                id: 'q-7',
                text: 'Креативен и обладаю техническим мышлением',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Внимателен и стрессоустойчив',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Готов руководить командой',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Обладаю пространственным мышлением',
                isSoft: true
            },
        ],
        testName: '',
        testFullName: 'работать в легкой промышленности',
        opportunities: opportunitiesConfig.techprom,
        opportunitiesPerson: {
            width: 249,
            height: 305,
            left: 10,
            img: techprom,
        },
        opportunitiesPersonDesk: {
            width: 334,
            height: 430,
            left: 350,
            img: techprom,
            bottom: -150,
        },
        testPerson: {
            top: {
                widthDesc: 171,
                heightDesc: 327,
                src: techpromT, 
                bottomDesc: -29,
                leftDesc: -152,
                width: 129,
                height: 247,
                bottom: -227,
                left: 66,
            },
            bot: {
                widthDesc: 253,
                heightDesc: 255,
                src: techpromB,
                bottomDesc: -173,
                leftDesc: -114,
                width: 185,
                height: 187,
                bottom: -327,
                left: 73
            },
        },
    },
    {
        id: 'agro',
        jobInfoHeight: 635,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Сельское</ColoredSpan>, лесное и рыбное хозяйство</>,
        jobDescription: 'это направление — о работе с жизнью и ресурсами планеты. Специалисты обеспечивают нас едой, древесиной, чистой водой и сохраняют природное богатство\n\nно сегодня это не только физический труд: современный агроном управляет «умными» теплицами с помощью цифровых систем, а мастер лесного хозяйства использует дроны для мониторинга лесов.\n\nЗдесь соединяются биология, инженерия, экология и технологии для создания устойчивого будущего',
        jobDescriptionSm: 'это направление — о работе с жизнью и ресурсами планеты. Специалисты обеспечивают нас едой, древесиной, чистой водой и сохраняют природное богатство\n\nно сегодня это не только физический труд: современный агроном управляет «умными» теплицами с помощью цифровых систем, а мастер лесного хозяйства использует дроны\nдля мониторинга лесов.\n\nЗдесь соединяются\nбиология, инженерия,\nэкология и технологии\nдля создания\nустойчивого будущего',
        vacanciesDescr: [
            { id: 0, name: 'Лесное хозяйство', desc: 'Работать в лесничестве, национальных парках, заповедниках' },
            { id: 1, name: 'Сельское хозяйство', desc: 'Работать на ферме, агрокомплексе, сельхозпредприятии или фабрике' },
            { id: 2, name: 'Рыбное хозяйство', desc: 'Работа на рыбоводных хозяйствах и предприятиях по разведению рыбы' },
            { id: 3, name: 'Государственная сфера', desc: 'Заниматься охраной природы и экологическим надзором' },
        ],
        vacanciesLinks: [
            {name: 'Тракторист-машинист сельскохозяйственного производства', link: 'https://fut.ru/s/techtractor_2026'},
            {name: 'Обработчик рыбы', link: 'https://fut.ru/s/fish_2026 '},
            {name: 'Рабочий зеленого хозяйства', link: 'https://fut.ru/s/farm_2026'},
            {name: 'Кинолог', link: 'https://fut.ru/s/cynologist_2026 '},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Обладаю биологическими знаниями'
            },
            {
                id: 'q-1',
                text: 'Знаю устройство лесов'
            },
            {
                id: 'q-2',
                text: 'Знаю правила пожарной безопасности'
            },
            {
                id: 'q-3',
                text: 'Умею проводить различные процедуры (взятие крови, инъекции)'
            },
            {
                id: 'q-4',
                text: 'Работаю с системами управления стадом'
            },
            {
                id: 'q-7',
                text: 'Увлекаюсь экологией',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Внимателен и ответственен',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Легко приспосабливаюсь к разным ситуациям',
                isSoft: true
            },
        ],
        testName: 'работать в сфере хозяйств',
        opportunities: opportunitiesConfig.agro,
        opportunitiesPerson: {
            width: 213,
            height: 340,
            left: 12,
            img: agro,
        },
        opportunitiesPersonDesk: {
            width: 344,
            height: 428,
            left: 355,
            img: agro,
            bottom: -148,
        },
        testBlockMargin: 80,
        testPerson: {
            top: {
                widthDesc: 141,
                heightDesc: 304,
                src: agroB,
                bottomDesc: 0,
                leftDesc: -122,
                width: 96,
                height: 207,
                bottom: -197,
                left: 75
            },
            bot: {
                widthDesc: 172,
                heightDesc: 249,
                src: agroT,
                bottomDesc: -155,
                leftDesc: -23,
                width: 131,
                height: 189,
                bottom: -329,
                left: 95
            },
        },
    },
    {
        id: 'service',
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Сервис</ColoredSpan>{'\n'}и туризм</>,
        jobDescription: 'Здесь создают комфорт, эмоции и качество жизни.Специалисты этой сферы делают жизнь людей удобной, вкусной и красивой.\n\nОни управляют процессами, от которых зависит наше настроение и безопасность: готовят кулинарные шедевры, создают стильные образы, обеспечивают уют в отелях, комфорт в поездах и исправную работу техники в домах. Эта работа на стыке творчества, технологий и психологии, где главная цель — предвосхитить желание клиента и сделать всё по высшему стандарту',
        jobDescriptionSm: 'Здесь создают комфорт, эмоции и качество жизни.\n\nСпециалисты этой сферы делают жизнь людей удобной, вкусной и красивой.\n\nОни управляют процессами, от которых зависит наше настроение и безопасность: готовят кулинарные шедевры, создают стильные образы, обеспечивают уют в отелях, комфорт в поездах и исправную работу техники в домах. Эта работа на стыке творчества, технологий и психологии, где главная цель — предвосхитить желание клиента и сделать всё по высшему стандарту',
        vacanciesDescr: [
            { id: 0, name: 'Гостиничный бизнес', desc: 'Заниматься администрированием отелей, помогать бронировать номера и заселять в них людей' },
            { id: 1, name: 'Туроператорская деятельность', desc: 'Продавать путевки на отдых, подбирать предложения по вкусу клиента' },
            { id: 2, name: 'Экскурсионные услуги', desc: 'Работать в сфере экскурсий и гид-индустрии' },
            { id: 3, name: 'Event-индустрия', desc: 'Заниматься организацией мероприятий различных тематик' },
        ],
        vacanciesLinks: [
            {name: 'Менеджер по туризму', link: 'https://fut.ru/s/meneger_vac2026'},
            {name: 'Администратор гостиницы или отеля', link: 'https://fut.ru/s/admin_vac2026'},
            {name: 'Парикмахер / Барбер', link: 'https://fut.ru/s/barber_vac2026'},
            {name: 'Флорист', link: 'https://fut.ru/s/flowers_vac2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Умею пользоваться системами бронирования'
            },
            {
                id: 'q-1',
                text: <>Разбираюсь <NoTransformSpan> в Excel и Google </NoTransformSpan>таблицах</>
            },
            {
                id: 'q-2',
                text: 'Знаю основы документооборота'
            },
            {
                id: 'q-3',
                text: 'Работаю с системами управления'
            },
            {
                id: 'q-7',
                text: 'Умею быстро находить информацию',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Люблю общаться с людьми',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Умею решать конфликтные ситуации',
                isSoft: true
            },
        ],
        testFullName: 'работать в сфере сервиса и туризма',
        opportunities: opportunitiesConfig.service,
        opportunitiesPerson: {
            width: 241,
            height: 332,
            left: 16,
            img: service,
        },
        opportunitiesPersonDesk: {
            width: 281,
            height: 463,
            left: 440,
            img: service,
            bottom: -137,
        },
        testAdditionMargin: 20,
        testBlockMargin: 116,
        testPerson: {
            top: {
                widthDesc: 79,
                heightDesc: 227,
                src: serviceT,
                bottomDesc: 39,
                leftDesc: -60,
                width: 73,
                height: 210,
                bottom: -205,
                left: 83.3,
            },
            bot: {
                widthDesc: 150,
                heightDesc: 222,
                src: serviceB,
                bottomDesc: -174,
                leftDesc: -30,
                width: 150,
                height: 222,
                bottom: -375,
                left: 86
            },
        },
    },
    {
        id: 'education',
        jobTitleSize: 29,
        jobTitle: <><ColoredSpan $color='var(--color-orange)'>Образование</ColoredSpan> и педагогические науки</>,
        jobDescription: 'Педагог — профессия, которая создает будущее.\n\nспециалисты передают знания, раскрывая потенциаллюдей, формируя личность и вдохновляя на развитие.\n\nони знакомят малышей с миром, становятся первым и главным учителем для школьников, открывают талантыв кружках и секциях и передают профессиональные  секреты будущим рабочим и специалистам',
        jobDescriptionSm: 'Педагог — профессия, которая создает будущее. специалисты передают знания, раскрывая потенциаллюдей, формируя личность и вдохновляя на развитие.\n\nони знакомят малышей с миром, становятся первым и главным учителем для школьников, открывают талантыв кружках и секциях и передают профессиональные  секреты будущим рабочим и специалистам',
        vacanciesDescr: [
            { id: 0, name: 'детские сады и ясли', desc: 'Создавать для малышей среду, где интересно расти и познавать мир'},
            { id: 1, name: 'школы (начальные классы)', desc: 'Учить детей основам наук, воспитывая любознательность и уверенность'},
            { id: 2, name: 'центры детского творчества, спортивные школы и студии', desc: 'Раскрывать детские таланты через творчество, спорт или технологии'},
            { id: 3, name: 'коррекционные службы и реабилитационные центры', desc: 'Помогать детям с особыми потребностями развиваться и адаптироваться'},
            { id: 4, name: 'учебные центры и отделения колледжей', desc: 'Готовить будущих педагогов, передавая им знания и опыт'},
            { id: 5, name: 'онлайн-школы и разработчики учебных курсов', desc: 'Создавать цифровые образовательные продукты, доступные повсюду'},
        ],
        vacanciesLinks: [
            {name: 'Воспитатель в детском саду', link: 'https://fut.ru/s/detsad_vac2026'},
            {name: 'Учитель начальных классов', link: 'https://fut.ru/s/teacher_vac2026'},
            {name: 'Педагог дополнительного образования', link: 'https://fut.ru/s/dpo_vac2026'},
            {name: 'Методист', link: 'https://fut.ru/s/metodist_vac2026'},
        ],
        testQuestions: [
            {
                id: 'q-0',
                text: 'Умею разрабатывать и вести занятия'
            },
            {
                id: 'q-1',
                text: 'Знаю, как составлять учебную программу'
            },
            {
                id: 'q-2',
                text: 'Владею современными образовательными платформами'
            },
            {
                id: 'q-3',
                text: 'Умею оказывать первую медицинскую помощь'
            },
            {
                id: 'q-7',
                text: 'Люблю детей',
                isSoft: true,
            },
            {
                id: 'q-8',
                text: 'Легко общаюсь с людьми разного возраста',
                isSoft: true
            },
            {
                id: 'q-9',
                text: 'Умею решать конфликтные ситуации',
                isSoft: true
            },
            {
                id: 'q-10',
                text: 'Обладаю творческим мышлением',
                isSoft: true
            },
            {
                id: 'q-11',
                text: 'Готов быть лидером',
                isSoft: true
            },
        ],
        testFullName: 'работать в образования',
        opportunities: opportunitiesConfig.education,
        opportunitiesPerson: {
            width: 227,
            height: 324,
            left: 9,
            img: education,
        },
        opportunitiesPersonDesk: {
            width: 326,
            height: 465,
            left: 364,
            img: education,
            bottom: -180,
        },
        testAdditionMargin: 60,
        testBlockMargin: 50,
        testPerson: {
            top: {
                widthDesc: 94,
                heightDesc: 356,
                src: educationT,
                bottomDesc: -8,
                leftDesc: -74,
                width: 80,
                height: 304,
                bottom: -286,
                left: 81.5,
            },
            bot: {
                widthDesc: 186,
                heightDesc: 254,
                src: educationB,
                bottomDesc: -168,
                leftDesc: -26,
                width: 155,
                height: 211,
                bottom: -379,
                left: 90
            },
        },
    },
]