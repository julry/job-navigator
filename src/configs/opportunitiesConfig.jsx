import { ColoredSpan, NoTransformSpan } from "../components/shared/Texts";

export const opportunitiesConfig = {
    chemical: [
        {
            id: 'labs',
            text: 'лабораторный контроль\nи анализ',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -114,
            jobs: [
                {
                    id: 'helper',
                    title: <><ColoredSpan>ассистент</ColoredSpan> / лаборант</>,
                    desc: 'помогает в проведении анализов, готовит реактивы и оборудование, ведёт записи'
                },
                {
                    id: 'ecology',
                    title: <><ColoredSpan>лаборант</ColoredSpan> химического анализа / лаборант-эколог</>,
                    desc: 'проводит анализы сырья и готовой продукции, контролирует соответствие стандартам, следит за экологическими показателями'
                },
                {
                    id: 'middle',
                    title: <><ColoredSpan>техник-лаборант</ColoredSpan> / старший лаборант</>,
                    desc: 'Организует работу лаборатории, проводит сложные анализы, отвечает за методики и точность результатов'
                },
                {
                    id: 'quality',
                    title: <><ColoredSpan>специалист</ColoredSpan> по контролю качества (лаборатория)</>,
                    desc: 'координирует все процессы контроля, внедряет новые методы анализа, готовит отчёты для производства'
                }
            ]
        },
        {
            id: 'creating',
            text: 'производство\n(аппаратчик-оператор)',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -119,
            jobs: [
                {
                    id: 'helper',
                    title: <><ColoredSpan>помощник</ColoredSpan> аппаратчика / оператор установок</>,
                    desc: 'Контролирует параметры процессов, следит за оборудованием, ведёт журналы'
                },
                {
                    id: 'operator',
                    title: <><ColoredSpan>аппаратчик-оператор </ColoredSpan> производства</>,
                    desc: 'управляет технологическим процессом (синтез, переработка, очистка), регулирует параметры, предотвращает аварии за экологическими показателями'
                },
                {
                    id: 'middle',
                    title: <><ColoredSpan>старший аппаратчик</ColoredSpan> / сменный мастер</>,
                    desc: 'Руководит сменой, отвечает за выполнение плана, обучение новых операторов, решение нештатных ситуаций'
                },
                {
                    id: 'director',
                    title: <><ColoredSpan>технолог / начальник </ColoredSpan> участка</>,
                    desc: 'Разрабатывает и оптимизирует технологические режимы, внедряет новые процессы, контролирует эффективность производства'
                }
            ]
        },
        {
            id: 'control',
            text: 'контроль и управление\nкачеством',
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -169,
            jobs: [
                {
                    id: 'controller',
                    title: <><ColoredSpan>контролёр</ColoredSpan> сырья и продукции</>,
                    desc: 'Проверяет соответствие сырья и готовой продукции стандартам, отбирает пробы'
                },
                {
                    id: 'quality-m',
                    title: <><ColoredSpan>специалист</ColoredSpan> по качеству</>,
                    desc: 'Внедряет системы контроля (например, ISO), анализирует причины брака, готовит рекомендации для производства'
                },
                {
                    id: 'middle-quality',
                    title: <><ColoredSpan>инженер по качеству / руководитель </ColoredSpan> отдела качества</>,
                    desc: 'Разрабатывает политику качества на предприятии, взаимодействует с поставщиками и клиентами, отвечает за сертификацию'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '4/1/5/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'nasos',
                    title: <><ColoredSpan>машинист</ColoredSpan> технологических насосов и компрессоров</>,
                    desc: 'Обслуживает и управляет оборудованием для перекачки жидкостей и газов на производстве'
                },
                {
                    id: 'neft',
                    title: <><ColoredSpan>оператор</ColoredSpan> нефтепереработки</>,
                    desc: 'Контролирует процессы переработки нефти на установках (крекинг, ректификация и др.)'
                },
                {
                    id: 'truboprov',
                    title: <><ColoredSpan>мастер по обслуживанию</ColoredSpan> магистральных трубопроводов</>,
                    desc: 'Следит за состоянием трубопроводов, проводит диагностику, ремонт и профилактику',
                },
                // {
                //     id: 'creator',
                //     title: <><ColoredSpan>изготовитель</ColoredSpan>  фарфоровых и фаянсовых изделий</>,
                //     desc: 'Следит за состоянием трубопроводов, проводит диагностику, ремонт и профилактику',
                // },
            ]
        },
    ],
    it: [
        {
            id: 'sys',
            text: 'Системное администрирование\nи инфраструктура',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -114,
            jobs: [
                {
                    id: 'helper',
                    title: <><ColoredSpan>стажер</ColoredSpan> <NoTransformSpan>IT-отдела</NoTransformSpan> / помощник сисадмина</>,
                    desc: 'Помогает в настройке компьютеров и установке программ'
                },
                {
                    id: 'sysadmin',
                    title: <NoTransformSpan><ColoredSpan>системный администратор</ColoredSpan> / специалист по ИТ-инфраструктуре</NoTransformSpan>,
                    desc: 'Настраивает серверы, операционные системы, обеспечивает резервное копирование, контролирует доступы',
                },
                {
                    id: 'cyberspec',
                    title: <><ColoredSpan>сетевой администратор</ColoredSpan> / специалист по кибербезопасности</>,
                    desc: <>Проектирует и защищает сетевую инфраструктуру, настраивает маршрутизацию, <NoTransformSpan>VPN</NoTransformSpan>, межсетевые экраны</>
                },
                {
                    id: 'quality',
                    title: <NoTransformSpan><ColoredSpan>руководитель</ColoredSpan> IT-отдела / DevOps-инженер</NoTransformSpan>,
                    desc: 'Автоматизирует развертывание систем, управляет облачной инфраструктурой, координирует команду'
                }
            ]
        },
        {
            id: 'prog',
            text: 'Программирование\nи разработка',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -119,
            jobs: [
                {
                    id: 'internsh',
                    title: <>стажер<ColoredSpan>-программист / тестировщик</ColoredSpan></>,
                    desc: 'Пишет простые скрипты, тестирует готовые модули, ищет ошибки в коде'
                },
                {
                    id: 'developer',
                    title: <NoTransformSpan><ColoredSpan>разработчик </ColoredSpan> ПО / веб-разработчик</NoTransformSpan>,
                    desc: 'Создает приложения, сайты, базы данных',
                },
                {
                    id: 'fullstack',
                    title: <><ColoredSpan>fullstack-разработчик</ColoredSpan> /  cпециалист по mobile-разработке</>,
                    desc: 'Работает над всей цепочкой продукта: интерфейс, логика, серверная часть, мобильные версии'
                },
                {
                    id: 'tech',
                    title: <NoTransformSpan><ColoredSpan>техлид</ColoredSpan> архитектор ПО</NoTransformSpan>,
                    desc: 'Проектирует сложные системы, выбирает технологии, руководит командой разработки'
                }
            ]
        },
        {
            id: 'tele',
            text: 'Сетевые технологии\nи телекоммуникации',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -169,
            jobs: [
                {
                    id: 'nets',
                    title: <><ColoredSpan>техник</ColoredSpan> по компьютерным сетям</>,
                    desc: 'Прокладывает кабели, настраивает сетевое оборудование, устраняет неполадки'
                },
                {
                    id: 'wifinets',
                    title: <NoTransformSpan>сетевой <ColoredSpan>инженер / администратор</ColoredSpan> Wi‑Fi‑сетей</NoTransformSpan>,
                    desc: 'Проектирует локальные и беспроводные сети, настраивает маршрутизаторы, коммутаторы, точки доступа'
                },
                {
                    id: 'voip',
                    title: <NoTransformSpan><ColoredSpan>специалист</ColoredSpan> по телекоммуникациям VoIP‑инженер</NoTransformSpan>,
                    desc: <>Работает с телефонными сетями, видеоконференцсвязью, системами<NoTransformSpan>IP‑телефонии</NoTransformSpan></>
                },
                 
                {
                    id: 'managernets',
                    title: <><ColoredSpan>руководитель</ColoredSpan> группы сетевой инфраструктуры</>,
                    desc: <>Планирует развитие сетей предприятия, внедряет новые технологии <NoTransformSpan>(SD‑WAN, 5G)</NoTransformSpan></>
                },
            ]
        },
        {
            id: 'supp',
            text: 'Техническая поддержка\nи эксплуатация',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -169,
            jobs: [
                {
                    id: 'supp1',
                    title: <><ColoredSpan>cпециалист</ColoredSpan> технической поддержки (саппорт 1‑й линии)</>,
                    desc: 'принимает заявки от пользователей, решает типовые проблемы (сброс паролей, установка ПО)'
                },
                {
                    id: 'supp2',
                    title: <><ColoredSpan>инженер</ColoredSpan> технической поддержки (саппорт 2‑й линии)</>,
                    desc: 'диагностирует сложные сбои, работаетс серверами, сетями, системами мониторинга'
                },
                {
                    id: 'it-consult',
                    title: <>системный<ColoredSpan>аналитик / IT‑консультант</ColoredSpan></>,
                    desc: <NoTransformSpan>анализирует потребности бизнеса, подбирает решения, проектирует IT‑процессы</NoTransformSpan>
                },
                {
                    id: 'itManager',
                    title: <><ColoredSpan>руководитель</ColoredSpan>службы поддержки / <ColoredSpan>IT-менеджер</ColoredSpan></>,
                    desc: <NoTransformSpan>организует работу Help Desk, контролирует SLA, управляет командой</NoTransformSpan>
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '5/1/6/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'otherpo',
                    title: <><ColoredSpan>наладчик</ColoredSpan> аппаратного и программного обеспечения</>,
                    desc: 'диагностирует и ремонтирует компьютеры, принтеры, оргтехнику, настраивает драйверы'
                },
                {
                    id: 'operatorIt',
                    title: <><ColoredSpan>оператор</ColoredSpan> информационных систем</>,
                    desc: 'вводит данные, ведет электронные базы, пишет отчеты в корпоративных системах'
                },
                {
                    id: 'suppIT',
                    title: <><ColoredSpan>специалист</ColoredSpan> по технической поддержке</>,
                    desc: 'консультирует пользователей, оперативно решает их технические проблемы',
                },
                 
                {
                    id: 'dataS',
                    title: <><ColoredSpan>специалист</ColoredSpan> по работе с данными / Data-аналитик</>,
                    desc: <NoTransformSpan>собирает и анализирует большие массивы данных (Big Data), строит отчетыи визуализации для принятия бизнес-решений</NoTransformSpan>,
                },
                {
                    id: 'aispec',
                    title: <><ColoredSpan>специалист</ColoredSpan> в области машинного обучения  и ИИ</>,
                    desc: 'участвует в создании и обучении алгоритмов нейросетей, умных системи компьютерного зрения',
                },
            ]
        },
    ],
    infosec: [
        {
            id: 'defendence',
            text: 'Защита сетей и инфраструктуры',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -114,
            jobs: [
                {
                    id: 'helpersef',
                    title: <><ColoredSpan>стажер</ColoredSpan> / помощник администратора безопасности</>,
                    desc: 'мониторит логи, помогает настраивать базовые правила в firewall, ведетжурналы событий'
                },
                {
                    id: 'safetym',
                    title: <><ColoredSpan>специалист</ColoredSpan> по защите сетей</>,
                    desc: <>настраивает межсетевые экраны, <NoTransformSpan>IPS/IDS, VPN,</NoTransformSpan> сегментирует сеть</>,
                },
                 
                {
                    id: 'analyticSaf',
                    title: <><ColoredSpan>Инженер</ColoredSpan> по кибербезопасности / аналитик угроз</>,
                    desc: <>расследует инциденты, анализирует вредоносный код, настраивает <NoTransformSpan>SIEM-системы (Splunk, ArcSight)</NoTransformSpan></>
                },
                {
                    id: 'safManager',
                    title: <NoTransformSpan><ColoredSpan>руководитель</ColoredSpan> направления ИБ /Архитектор безопасных сетей</NoTransformSpan>,
                    desc: 'проектирует архитектуру безопасности, управляет бюджетом на защитныерешения, координирует команду'
                }
            ]
        },
        {
            id: 'audit',
            text: 'Аудит, расследования и соответствие',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -119,
            jobs: [
                {
                    id: 'auditassistance',
                    title: <>ассистент <ColoredSpan><NoTransformSpan>по аудиту ИБ</NoTransformSpan></ColoredSpan></>,
                    desc: 'помогает собирать данные для проверок, проверяет базовые политики доступа'
                },
                {
                    id: 'auditib',
                    title: <NoTransformSpan><ColoredSpan>разработчик </ColoredSpan> ПО / веб-разработчик</NoTransformSpan>,
                    desc: <NoTransformSpan>проверяет соответствие стандартам (ISO 27001, ФЗ-152, GDPR), составляетотчеты и рекомендации</NoTransformSpan>
                },
                {
                    id: 'criminalist',
                    title: <><ColoredSpan>криминалист</ColoredSpan></>,
                    desc: 'организует работу лаборатории, проводит Расследует киберинциденты, извлекает и анализирует цифровые улики с устройств'
                },
                {
                    id: 'auditmanager',
                    title: <><ColoredSpan>руководитель</ColoredSpan> службы внутреннего аудита</>,
                    desc: 'отвечает за соблюдение законодательства о персональных данных, взаимодействует с регуляторами'
                }
            ]
        },
        {
            id: 'safety',
            text: 'Безопасность приложений и данных',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -169,
            jobs: [
                {
                    id: 'testSaf',
                    title: <><ColoredSpan>тестировщик</ColoredSpan> безопасности</>,
                    desc: <>проводит базовые тесты на уязвимости web-приложений, использует сканеры <NoTransformSpan>(Burp Suite, OWASP ZAP)</NoTransformSpan></>
                },
                {
                    id: 'appsec',
                    title: <NoTransformSpan><ColoredSpan>cпециалист</ColoredSpan> по AppSec / DevSecOps</NoTransformSpan>,
                    desc: 'Внедряет безопасность в цикл разработки (SAST/DAST), проверяет код на уязвимости'
                },
                {
                    id: 'shifr',
                    title: <><ColoredSpan>специалист</ColoredSpan> по шифрованию</>,
                    desc: <NoTransformSpan>работает с алгоритмами шифрования, ключевой инфраструктурой (PKI), защитой данных на rest и in transit</NoTransformSpan>
                },
                {
                    id: 'mainArch',
                    title: <NoTransformSpan><ColoredSpan>главный архитектор</ColoredSpan> безопасности ПО</NoTransformSpan>,
                    desc: 'строит процессы безопаснойразработки, выбирает фреймворки и стандарты для команды'
                },
            ]
        },
        {
            id: 'safetycontrol',
            text: 'Управление безопасностью и администрирование',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -169,
            jobs: [
                {
                    id: 'supdsp1',
                    title: <><ColoredSpan>Администратор</ColoredSpan> средств защиты информации</>,
                    desc: <>Настраивает <NoTransformSpan>DLP</NoTransformSpan>, антивирусы, системы контроля доступа, управляет политиками</>
                },
                {
                    id: 'sdsaupp2',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по управлению инцидентами <NoTransformSpan>ИБ</NoTransformSpan></>,
                    desc: 'Координирует реакцию на атаки, восстанавливает системы, готовит отчеты для руководства'
                },
                {
                    id: 'it-consult',
                    title: <><ColoredSpan>Менеджер</ColoredSpan> <NoTransformSpan>ИБ</NoTransformSpan> / Риск‑менеджер</>,
                    desc: 'Оценивает риски, разрабатывает политики и регламенты, обучает сотрудников'
                },
                {
                    id: 'itManager',
                    title: <><ColoredSpan>руководитель</ColoredSpan> службы <NoTransformSpan>ИБ</NoTransformSpan></>,
                    desc: 'Определяет стратегию безопасности компании, отвечает за бюджет, взаимодействует с советом директоров'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '5/1/6/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'othfdserpo',
                    title: <><ColoredSpan>Этичный хакер</ColoredSpan></>,
                    desc: 'Легально взламывает системы по заказу компании для поиска уязвимостей'
                },
                {
                    id: 'sufsppIT',
                    title: <><ColoredSpan>специалист</ColoredSpan> по киберразведке</>,
                    desc: 'Собирает и анализирует данные об угрозах, атаках и прогнозирует риски',
                },
                 
                {
                    id: 'datadfsS',
                    title: <><ColoredSpan>Консультант</ColoredSpan> по информационной безопасности</>,
                    desc: 'Помогает компаниям внедрять системы защиты, проводит обучение',
                },
            ]
        },
    ],
    energetics: [
        {
            id: 'defesegrnewqdence',
            text: 'Эксплуатация электростанций',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -214,
            jobs: [
                {
                    id: 'helpersdasef',
                    title: <><ColoredSpan>Помощник</ColoredSpan> машиниста / Оператор котла</>,
                    desc: 'Контролирует параметры работы основного оборудования, ведет сменный журнал, выполняет поручения старшего персонала'
                },
                {
                    id: 'sdsafetym',
                    title: <><ColoredSpan>Машинист</ColoredSpan> котла / Машинист турбины</>,
                    desc: 'Управляет работой паровых котлов, турбин, генераторов, обеспечивает заданные режимы работы, предотвращает аварии',
                },
                 
                {
                    id: 'a2nalyticSaf',
                    title: <><ColoredSpan>Старший машинист</ColoredSpan> / Начальник смены станции</>,
                    desc: 'Руководит сменой, отвечает за выполнение диспетчерского графика, координацию ремонтных бригад'
                },
                {
                    id: 'saf21Manager32',
                    title: <><ColoredSpan>Начальник</ColoredSpan> цеха / Технический директор станции</>,
                    desc: 'Организует работу целого направления (котельный, турбинный), отвечает за ремонты, модернизацию, экономику'
                }
            ]
        },
        {
            id: 'adsudit',
            text: 'Электросети и подстанции',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -199,
            jobs: [
                {
                    id: 'auditassistance',
                    title: <><ColoredSpan>Электромонтер</ColoredSpan> по ремонту электросетей (помощник)</>,
                    desc: 'Участвует в плановых обходах, мелком ремонте, заготовке материалов'
                },
                {
                    id: 'a00tassistance',
                    title: <><ColoredSpan>Электромонтер</ColoredSpan> по эксплуатации распределительных сетей</>,
                    desc: 'Обслуживает воздушные и кабельные линии, выполняет переключения, устраняет повреждения'
                },
                {
                    id: 'a432uditib',
                    title: <NoTransformSpan><ColoredSpan>Электромонтер-линейщик </ColoredSpan> по монтажу ВЛ высокого напряжения</NoTransformSpan>,
                    desc: 'Специализируется на монтаже и ремонте высоковольтных линий, работает на высоте'
                },
                {
                    id: 'auccxditmanager',
                    title: <><ColoredSpan>Мастер</ColoredSpan> участка сетей / Диспетчер электросетей</>,
                    desc: 'Планирует работы на участке, выдает наряды-допуски, управляет режимами сети дистанционно'
                }
            ]
        },
        {
            id: 'sa31fety',
            text: 'Теплоэнергетика и теплоснабжение',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -229,
            jobs: [
                {
                    id: 'test32Saf',
                    title: <><ColoredSpan>Слесарь</ColoredSpan> по ремонту оборудования тепловых сетей</>,
                    desc: 'Обслуживает трубопроводы, задвижки, компенсаторы, насосные станции',
                },
                {
                    id: 'afdsppsec',
                    title: <><ColoredSpan>Оператор</ColoredSpan> котельной / Аппаратчик теплового пункта</>,
                    desc: 'Контролирует работу котельных агрегатов, регулирует параметры теплоносителя'
                },
                {
                    id: 's321hifr',
                    title: <><ColoredSpan>Техник-теплотехник</ColoredSpan>  / Инженер по наладке и испытаниям</>,
                    desc: 'Настраивает тепловые схемы, проводит испытания оборудования'
                },
                {
                    id: 'fdsmainArch',
                    title: <><ColoredSpan>Начальник</ColoredSpan> теплового района / Ведущий инженер по теплоснабжению</>,
                    desc: 'Отвечает за надежное теплоснабжение района, оптимизацию затрат, взаимодействие с потребителями.'
                },
            ]
        },
        {
            id: 'safet00ycontrol',
            text: 'Автоматизация, защита и метрология',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -189,
            jobs: [
                {
                    id: 'sudsfpdsp1',
                    title: <><ColoredSpan>Электрослесарь</ColoredSpan> по ремонту оборудования электростанций</>,
                    desc: 'Ремонтирует релейную защиту, автоматику, приборы учета',
                },
                {
                    id: 's32dsaudspp2',
                    title: <><ColoredSpan>Электромонтер</ColoredSpan> по ремонту и обслуживанию электрооборудования</>,
                    desc: 'Специализируется на силовом оборудовании (трансформаторы, выключатели, электродвигатели)'
                },
                {
                    id: 'it-consul53t',
                    title: <><ColoredSpan>Электромеханик</ColoredSpan> по релейной защите и автоматике <NoTransformSpan>(РЗА)</NoTransformSpan></>,
                    desc: 'Настраивает и обслуживает устройства, предотвращающие аварии в энергосистеме'
                },
                {
                    id: 'it432Manager',
                    title: <><ColoredSpan>Инженер-наладчик</ColoredSpan> / Специалист по <NoTransformSpan>АСУ ТП</NoTransformSpan> в энергетике</>,
                    desc: <>Программирует контроллеры, настраивает <NoTransformSpan>SCADA-системы</NoTransformSpan>, внедряет цифровые решения</>
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '5/1/6/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'o3thfdserpo',
                    title: <><ColoredSpan>Электромеханик</ColoredSpan> по лифтам</>,
                    desc: 'Специализируется на обслуживании и ремонте лифтов'
                },
                {
                    id: 'sufsppIT',
                    title: <><ColoredSpan>Электромонтажник-схемщик</ColoredSpan></>,
                    desc: 'Собирает щиты управления, панели релейной защиты, выполняет монтаж по схемам',
                },
                {
                    id: 'datadfsS',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по энергоаудиту</>,
                    desc: 'Проводит обследование предприятий, ищет потери, рассчитывает энергоэффективность',
                },
                {
                    id: 'd32atadfsS',
                    title: <><ColoredSpan>Мастер</ColoredSpan> участка по обслуживанию наружного освещения</>,
                    desc: 'Отвечает за работу и ремонт систем городского освещения',
                },
            ]
        },
    ],
    machine: [
        {
            id: 'mmeroijea',
            text: 'Металлообработка и станочные работы',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -264,
            jobs: [
                {
                    id: 'redeaw',
                    title: <><ColoredSpan>Станочник</ColoredSpan> широкого профиля (помощник)</>,
                    desc: 'Выполняет простые операции на токарных, фрезерных, сверлильных станках под руководством'
                },
                {
                    id: 'seinfeaetym',
                    title: <><ColoredSpan>Токарь-универсал</ColoredSpan> / Фрезеровщик-универсал</>,
                    desc: 'Работает на универсальных станках, изготавливает сложные детали по чертежам, настраивает оборудование',
                },
                 
                {
                    id: 'a2nalyticSaf',
                    title: <><ColoredSpan>Оператор</ColoredSpan>  станков <NoTransformSpan>с ЧПУ</NoTransformSpan> / Наладчик станков</>,
                    desc: <>Программирует и обслуживает современные обрабатывающие центры, <NoTransformSpan>3D-принтеры</NoTransformSpan>, лазерные комплексы</>
                },
                {
                    id: 'saf21Manager32',
                    title: <><ColoredSpan>Мастер</ColoredSpan> участка механической обработки / Технолог-программист <NoTransformSpan>ЧПУ</NoTransformSpan></>,
                    desc: 'Планирует загрузку станков, оптимизирует техпроцессы, разрабатывает управляющие программы'
                }
            ]
        },
        {
            id: 'sbhorea',
            text: 'Сборка, монтаж и обслуживание оборудования',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -219,
            jobs: [
                {
                    id: 'fdslvds32dw',
                    title: <><ColoredSpan>Слесарь-сборщик</ColoredSpan> (помощник)</>,
                    desc: 'Участвует в сборке узлов по инструкциям, готовит инструмент и компоненты'
                },
                {
                    id: 'asdvp3rofed',
                    title: <><ColoredSpan>Слесарь-монтажник</ColoredSpan> технологического оборудования</>,
                    desc: 'Собирает и устанавливает промышленные станки, конвейеры, прессы на месте эксплуатации'
                },
                {
                    id: 'sdvowss',
                    title: <NoTransformSpan><ColoredSpan>Электромеханик</ColoredSpan> по торговому и холодильному оборудованию</NoTransformSpan>,
                    desc: 'Специализируется на монтаже и ремонте коммерческого оборудования (витрины, холодильники, печи)'
                },
                {
                    id: 'bfp22',
                    title: <><ColoredSpan>Мастер</ColoredSpan> по монтажу и пусконаладке / Инженер-механик</>,
                    desc: 'Руководит комплексным монтажом линий, проводит испытания, сдает объекты в эксплуатацию'
                }
            ]
        },
        {
            id: 'sa31fety',
            text: 'Автоматизация, мехатроника и робототехника',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -279,
            jobs: [
                {
                    id: 'hueacdv',
                    title: <><ColoredSpan>Оператор</ColoredSpan> роботизированной линии</>,
                    desc: 'Контролирует работу промышленных роботов, выполняет загрузку/выгрузку, следит за параметрами',
                },
                {
                    id: 'ascyh5n',
                    title: <><ColoredSpan>Мехатроник</ColoredSpan> / Специалист по обслуживанию роботов</>,
                    desc: 'Диагностирует и ремонтирует роботизированные комплексы, датчики, приводы, системы управления'
                },
                {
                    id: 'bndfqwhjsc',
                    title: <><ColoredSpan>Техник-теплотехник</ColoredSpan>  / Инженер по наладке и испытаниям</>,
                    desc: 'Настраивает тепловые схемы, проводит испытания оборудования'
                },
                {
                    id: 'vdskERdn',
                    title: <><ColoredSpan>Наладчик</ColoredSpan> <NoTransformSpan>КИПиА</NoTransformSpan> / Специалист по автоматизированным системам</>,
                    desc: <>Настраивает датчики, контроллеры, системы визуализации <NoTransformSpan>(SCADA), программирует ПЛК</NoTransformSpan></>
                },
                {
                    id: 'zcqexdcsppd',
                    title: <><ColoredSpan>Инженер-проектировщик</ColoredSpan> <NoTransformSpan>АСУ ТП</NoTransformSpan> / Руководитель отдела автоматизации</>,
                    desc: <>проектирует системы автоматизации целых цехов, внедряет <NoTransformSpan>Industry 4.0</NoTransformSpan>, руководит командой</>
                },
            ]
        },
        {
            id: 'vmkdfopppalf',
            text: 'Контроль качества и метрология',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -269,
            jobs: [
                {
                    id: 'dsvvcxcv',
                    title: <><ColoredSpan>Контролер</ColoredSpan> станочных и слесарных работ</>,
                    desc: 'Проверяет геометрию деталей штангенциркулем, микрометром, шаблонами',
                },
                {
                    id: 'baekewncsd',
                    title: <><ColoredSpan>Дефектоскопист</ColoredSpan> / Лаборант по физико-механическим испытаниям</>,
                    desc: 'Проводит неразрушающий контроль (ультразвук, магнитопорошковый), испытывает материалы'
                },
                {
                    id: 'itsdvkm232323',
                    title: <><ColoredSpan>Мастер</ColoredSpan> <NoTransformSpan>ОТК</NoTransformSpan> / Специалист по метрологическому обеспечению<NoTransformSpan>(РЗА)</NoTransformSpan></>,
                    desc: 'Руководит отделом технического контроля, ведет документацию, работает с претензиями'
                },
                {
                    id: 'jjjksadfp',
                    title: <><ColoredSpan>Инженер</ColoredSpan> по качеству / Аудитор системы менеджмента качества <NoTransformSpan>(ISO 9001)</NoTransformSpan></>,
                    desc:'Внедряет системы качества, анализирует причины брака, готовит предприятие к сертификации'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '5/1/6/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'o3zcthfdserpo',
                    title: <><ColoredSpan>Сварщик</ColoredSpan> (ручной и частично механизированной сварки)</>,
                    desc: 'Соединяет металлические конструкции, отвечает за прочность и герметичность швов'
                },
                {
                    id: 'vxooppsfhturwn',
                    title: <><ColoredSpan>Чертежник-конструктор</ColoredSpan></>,
                    desc: <>Создает и оформляет чертежи деталей и сборочных единиц <NoTransformSpan>в CAD-системах (Компас, AutoCAD)</NoTransformSpan></>
                },
                {
                    id: 'oregjsfkbnaodwl',
                    title: <><ColoredSpan>Машинист</ColoredSpan> холодильных установок</>,
                    desc: 'Обслуживает промышленные холодильные системы, чиллеры, системы кондиционирования',
                },
                {
                    id: 'd32atadfsS',
                    title: <><ColoredSpan>Мастер</ColoredSpan> по ремонту и обслуживанию инженерных систем</>,
                    desc: 'Работает с системами вентиляции, пневматики, гидравлики на производстве',
                },
            ]
        },
    ],
    stroy: [
        {
            id: 'pgsBuildings',
            text: 'cтроительство зданий и сооружений (ПГС)',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -114,
            skills: ['умение работать в команде', 'пространственное мышление', 'ответственность',],
            readyFor: ['работа на строительной площадке', 'соблюдение техники безопасности', 'решение нестандартных задач'],
            jobs: [
                {
                    id: 'jun',
                    title: 'младший специалист',
                    desc: 'Помогает в работе на объекте, изучает чертежи и технологии под руководством наставника',
                    skills: [
                        {
                            name: 'обучаемость',
                            width: 100,
                            id: 'educ'
                        },
                        {
                            name: 'внимательность к деталям',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'базовое чтение чертежей',
                            width: 100,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: 'специалист',
                    desc: 'контролирует свой участок работ, отвечает за соблюдение технологий и сроков',
                    skills: [
                        {
                            name: <>знание<NoTransformSpan>СНиП/ГОСТ</NoTransformSpan></>,
                            width: 100,
                            id: 'snip'
                        },
                        {
                            name: 'организация процессов',
                            width: 100,
                            id: 'processes'
                        },
                        {
                            name: 'решение практических задач',
                            width: 100,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpecc',
                    title: 'ведущий специалист',
                    desc: 'руководит работами на объекте, распределяет задачи бригадам, контролирует качество и безопасность',
                    skills: [
                        {
                            name: 'управление командой',
                            width: 59,
                            id: 'team',
                        },
                        {
                            name: 'планирование',
                            width: 39,
                            id: 'plan',
                        },
                        {
                            name: 'контроль бюджета участка',
                            width: 100,
                            id: '432'
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title: 'главный специалист',
                    desc: 'Отвечает за реализацию всего проекта: от графика и сметы до итоговой сдачи объекта заказчику',
                    skills: [
                        {
                            name: 'проектный менеджмент',
                            width: 100,
                            id: 't32am'
                        },
                        {
                            name: 'управление ресурсами',
                            width: 100,
                            id: 'pl432an'
                        },
                        {
                            name: 'переговоры',
                            width: 100,
                            id: '431322'
                        },
                    ]
                },
                {
                    id: 'manager',
                    title: 'Руководитель проекта',
                },
            ]
        },
        {
            id: 'roadBuildens',
            text: 'Инфраструктура и дорожное строительство',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -114,
            skills: ['понимание геологии и материаловедения', 'внимательность к допускам и измерениям',],
            readyFor: ['работа на открытом воздухе в разных погодных условиях', 'высокая ответственность за долговечность объекта'],
            jobs: [
                {
                    id: 'jun1',
                    title: 'младший специалист',
                    desc: 'Участвует в геодезических работах, контроле материалов, ведении исполнительной документации',
                    skills: [
                        {
                            name: 'аккуратность',
                            width: 100,
                            id: 'ac423'
                        },
                        {
                            name: 'исполнительность',
                            width: 100,
                            id: 'isp3'
                        },
                        {
                            name: 'интерес к технологиям',
                            width: 100,
                            id: 'tech'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: 'специалист',
                    desc: 'Проводит испытания материалов, выполняет разбивку и съемку, обеспечивает точность работ',
                    skills: [
                        {
                            name: 'работа со спецоборудованием',
                            width: 100,
                            id: 's22nip'
                        },
                        {
                            name: 'знание нормативов',
                            width: 100,
                            id: 'proce342sses'
                        },
                        {
                            name: 'аналитический склад ума',
                            width: 100,
                            id: 'practic432e'
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title: 'главный специалист',
                    desc: 'Разрабатывает технологические карты на сложные участки, оптимизирует процессы укладки дорожного полотна',
                    skills: [
                        {
                            name: 'технологическое проектирование',
                            width: 100,
                            id: 't200am'
                        },
                        {
                            name: 'аналитика',
                            width: 39,
                            id: 'pl4an'
                        },
                        {
                            name: 'работа с ПО',
                            width: 59,
                            id: '431322'
                        },
                    ]
                },
                {
                    id: 'mai3nSpecc',
                    title: 'Ведущий специалист',
                    desc: '',
                    skills: [
                        {
                            name: 'аналитика',
                            width: 100,
                            id: 't21300am'
                        },
                        {
                            name: 'планирование',
                            width: 100,
                            id: 'pl431an'
                        },
                    ]
                },
                {
                    id: 'manager',
                    title: 'Руководитель проекта',
                    desc: 'Управляет строительством участка дороги или инфраструктурного объекта, отвечает за итоговое качество покрытия',
                    skills: [
                        {
                            name: 'управление субподрядчиками',
                            width: 100,
                            id: 't0021300am'
                        },
                        {
                            name: 'контроль сложных технологических цепочек',
                            width: 100,
                            id: 'pl40031an'
                        },
                    ]
                },
            ]
        },
        {
            id: 'indeniir',
            text: 'Строительство и эксплуатация инженерных сооружений',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -114,
            skills: ['аналитический склад ума', 'понимание механики грунтов и сложных нагрузок',],
            readyFor: ['работа на уникальных, часто удаленных объектах', 'жесткие стандарты качества и безопасности'],
            jobs: [
                {
                    id: 'jun1',
                    title: 'младший специалист',
                    desc: <>
                        Помогает в работах на объектах: мосты, тоннели, очистные сооружения, <NoTransformSpan>ЛЭП</NoTransformSpan>
                    </>,
                    skills: [
                        {
                            name: 'знание спецтехники и материалов',
                            width: 100,
                            id: 'a2c423'
                        },
                        {
                            name: 'исполнительность',
                            width: 100,
                            id: 'vadpv2'
                        },
                        {
                            name: 'осторожность',
                            width: 100,
                            id: 'afd2'
                        },
                    ]
                },
                {
                    id: 'specc012',
                    title: 'специалист',
                    desc: 'Контролирует узкоспециализированные работы (монтаж опор, бетонирование сложных конструкций)',
                    skills: [
                        {
                            name: 'знание специфических технологий и нормативов',
                            width: 100,
                            id: 's2d2nip'
                        },
                        {
                            name: 'повышенные требования к безопасности',
                            width: 100,
                            id: 'provbf'
                        },
                    ]
                },
                {
                    id: 'mainSpec32c',
                    title: 'главный специалист',
                    desc: 'Руководит строительством уникального объекта (части моста, секции тоннеля), решает нестандартные инженерные задачи',
                    skills: [
                        {
                            name: 'глубокие специализированные знания',
                            width: 100,
                            id: 't20fdaam'
                        },
                        {
                            name: 'сложные расчеты',
                            width: 100,
                            id: 'pl4an432'
                        },
                        {
                            name: 'работа с проектной документацией',
                            width: 100,
                            id: 'vxcdos'
                        },
                    ]
                },
                {
                    id: 'mai3nSpecc',
                    title: 'Ведущий специалист',
                    desc: 'Отвечает за реализацию всего объекта нестандартного типа, координирует работу узких экспертов',
                    skills: [
                        {
                            name: 'экспертиза в узкой области',
                            width: 100,
                            id: 't2vfds0am'
                        },
                        {
                            name: 'управление высокорисковыми проектами',
                            width: 100,
                            id: 'acdv'
                        },
                        {
                            name: 'взаимодействие с госэкспертизой',
                            width: 100,
                            id: 'efpwe'
                        },
                    ]
                },
                {
                    id: 'manager',
                    title: 'Руководитель проекта',
                    desc: 'Управляет строительством участка дороги или инфраструктурного объекта, отвечает за итоговое качество покрытия',
                    skills: [
                        {
                            name: 'управление субподрядчиками',
                            width: 100,
                            id: 't0021300am'
                        },
                        {
                            name: 'контроль сложных технологических цепочек',
                            width: 100,
                            id: 'pl40031an'
                        },
                    ]
                },
            ]
        },
         {
            id: 'electrom',
            text: 'Электромонтаж',
            textSize: 27,
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -114,
            jobs: [
                {
                    id: 'jun1',
                    title: 'младший специалист (электромонтер)',
                    desc:'Помогает в прокладке кабельных трасс, монтаже электрощитового оборудования, установке розеток',
                    skills: [
                        {
                            name: 'знания электротехники, аккуратность',
                            width: 100,
                            id: 'abs2c423'
                        },
                        {
                            name: <>строгое соблюдение правил <NoTransformSpan>ПУЭ и ТБ</NoTransformSpan></>,
                            width: 100,
                            id: 'v321dpv2'
                        },
                    ]
                },
                {
                    id: 'specc012',
                    title: 'специалист',
                    desc: 'Самостоятельно выполняет монтаж силовых и слаботочных сетей, сборку распределительных щитов',
                    skills: [
                        {
                            name: 'чтение электросхем',
                            width: 100,
                            id: 'sga2d2nip'
                        },
                        {
                            name: 'навыки пайки и соединения проводов',
                            width: 100,
                            id: 'p21rovbf'
                        },
                        {
                            name: 'работа с профессиональным инструментом',
                            width: 100,
                            id: '1bqrovbf'
                        },
                    ]
                },
                {
                    id: 'mainSpec32c',
                    title: 'главный специалист',
                    desc: 'Руководит бригадой электромонтажников на объекте, распределяет задачи, отвечает за качество и сроки участка',
                    skills: [
                        {
                            name: 'планирование электромонтажных работ',
                            width: 100,
                            id: 'tcas20fdaam'
                        },
                        {
                            name: 'заказ материалов32',
                            width: 100,
                            id: 'ppln432'
                        },
                        {
                            name: 'рзнание стандартов и правил допуска',
                            width: 100,
                            id: 'vcsxcdos'
                        },
                    ]
                },
                {
                    id: 'mai3nSpecc',
                    title: 'Ведущий специалист',
                    desc: 'Проектирует электроснабжение объекта, подбирает оборудование, отвечает за все электрохозяйство на проекте',
                    skills: [
                        {
                            name: 'расчет нагрузок',
                            width: 100,
                            id: 't2vdffds0am'
                        },
                        {
                            name: 'проектирование в специальных программах',
                            width: 100,
                            id: 'vvdsacdv'
                        },
                        {
                            name: 'ведение исполнительной документации',
                            width: 100,
                            id: 'efpdfscwe'
                        },
                        {
                            name: 'согласования с энергоснабжающими организациями',
                            width: 100,
                            id: 'eewqfpwe'
                        },
                    ]
                },
                {
                    id: 'manager',
                    title: 'Руководитель проекта',
                },
            ]
        }
    
    ]
}