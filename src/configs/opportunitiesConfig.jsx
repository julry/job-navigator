import { ColoredSpan, NoTransformSpan, ShortScreen } from "../components/shared/Texts";

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
                    title: <><ColoredSpan>специалист</ColoredSpan> по контролю качества (лаборатория)</>,
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
            text: 'контроль и управление\nкачеством',
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
                    title: <><ColoredSpan>мастер по обслуживанию</ColoredSpan> магистральных трубопроводов</>,
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
                    desc: <>Проектирует и защищает сетевую инфраструктуру, настраивает маршрутизацию, <NoTransformSpan>VPN</NoTransformSpan>, межсетевые экраны</>
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
                    title: <NoTransformSpan><ColoredSpan>разработчик </ColoredSpan> по / веб-разработчик</NoTransformSpan>,
                    desc: 'Создает приложения, сайты, базы данных',
                },
                {
                    id: 'fullstack',
                    title: <><ColoredSpan>fullstack-разработчик</ColoredSpan> /  cпециалист по mobile-разработке</>,
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
                    title: <NoTransformSpan><ColoredSpan>специалист</ColoredSpan> по телекоммуникациям VoIP‑инженер</NoTransformSpan>,
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
                    desc: 'принимает заявки от пользователей, решает типовые проблемы (сброс паролей, установка ПО)'
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
                    title: <><ColoredSpan>специалист</ColoredSpan> по технической поддержке</>,
                    desc: 'консультирует пользователей, оперативно решает их технические проблемы',
                },
                 
                {
                    id: 'dataS',
                    title: <><ColoredSpan>специалист</ColoredSpan> по работе с данными / Data-аналитик</>,
                    desc: <NoTransformSpan>собирает и анализирует большие массивы данных (Big Data), строит отчетыи визуализации для принятия бизнес-решений</NoTransformSpan>,
                },
                {
                    id: 'aispec',
                    title: <><ColoredSpan>специалист</ColoredSpan> в области машинного обучения  и ИИ</>,
                    desc: 'участвует в создании и обучении алгоритмов нейросетей, умных системи компьютерного зрения',
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
                    desc: 'мониторит логи, помогает настраивать базовые правила в firewall, ведетжурналы событий'
                },
                {
                    id: 'safetym',
                    title: <><ColoredSpan>специалист</ColoredSpan> по защите сетей</>,
                    desc: <>настраивает межсетевые экраны, <NoTransformSpan>IPS/IDS, VPN,</NoTransformSpan> сегментирует сеть</>,
                },
                 
                {
                    id: 'analyticSaf',
                    title: <><ColoredSpan>Инженер</ColoredSpan> по кибербезопасности / аналитик угроз</>,
                    desc: <>расследует инциденты, анализирует вредоносный код, настраивает <NoTransformSpan>SIEM-системы (Splunk, ArcSight)</NoTransformSpan></>
                },
                {
                    id: 'safManager',
                    title: <NoTransformSpan><ColoredSpan>руководитель</ColoredSpan> направления ИБ /Архитектор безопасных сетей</NoTransformSpan>,
                    desc: 'проектирует архитектуру безопасности, управляет бюджетом на защитныерешения, координирует команду'
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
                    title: <NoTransformSpan><ColoredSpan>разработчик </ColoredSpan> по / веб-разработчик</NoTransformSpan>,
                    desc: <NoTransformSpan>проверяет соответствие стандартам (ISO 27001, ФЗ-152, GDPR), составляетотчеты и рекомендации</NoTransformSpan>
                },
                {
                    id: 'criminalist',
                    title: <><ColoredSpan>криминалист</ColoredSpan></>,
                    desc: 'организует работу лаборатории, проводит Расследует киберинциденты, извлекает и анализирует цифровые улики с устройств'
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
                    desc: <>проводит базовые тесты на уязвимости web-приложений, использует сканеры <NoTransformSpan>(Burp Suite, OWASP ZAP)</NoTransformSpan></>
                },
                {
                    id: 'appsec',
                    title: <NoTransformSpan><ColoredSpan>cпециалист</ColoredSpan> по AppSec / DevSecOps</NoTransformSpan>,
                    desc: 'Внедряет безопасность в цикл разработки (SAST/DAST), проверяет код на уязвимости'
                },
                {
                    id: 'shifr',
                    title: <><ColoredSpan>специалист</ColoredSpan> по шифрованию</>,
                    desc: <NoTransformSpan>работает с алгоритмами шифрования, ключевой инфраструктурой (PKI), защитой данных на rest и in transit</NoTransformSpan>
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
                    desc: 'Определяет стратегию безопасности компании, отвечает за бюджет, взаимодействует с советом директоров'
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
                    desc: 'Легально взламывает системы по заказу компании для поиска уязвимостей'
                },
                {
                    id: 'sufsppIT',
                    title: <><ColoredSpan>специалист</ColoredSpan> по киберразведке</>,
                    desc: 'Собирает и анализирует данные об угрозах, атаках и прогнозирует риски',
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
            text: 'Электросети и подстанции',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -199,
            jobs: [
                {
                    id: 'auditassistance',
                    title: <><ColoredSpan>Электромонтер</ColoredSpan> по ремонту электросетей (помощник)</>,
                    desc: 'Участвует в плановых обходах, мелком ремонте, заготовке материалов'
                },
                {
                    id: 'a00tassistance',
                    title: <><ColoredSpan>Электромонтер</ColoredSpan> по эксплуатации распределительных сетей</>,
                    desc: 'Обслуживает воздушные и кабельные линии, выполняет переключения, устраняет повреждения'
                },
                {
                    id: 'a432uditib',
                    title: <NoTransformSpan><ColoredSpan>Электромонтер-линейщик </ColoredSpan> по монтажу ВЛ высокого напряжения</NoTransformSpan>,
                    desc: 'Специализируется на монтаже и ремонте высоковольтных линий, работает на высоте'
                },
                {
                    id: 'auccxditmanager',
                    title: <><ColoredSpan>Мастер</ColoredSpan> участка сетей / Диспетчер электросетей</>,
                    desc: 'Планирует работы на участке, выдает наряды-допуски, управляет режимами сети дистанционно'
                }
            ]
        },
        {
            id: 'sa31fety',
            text: 'Теплоэнергетика и теплоснабжение',
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
                    title: <><ColoredSpan>Техник-теплотехник</ColoredSpan>  / Инженер по наладке и испытаниям</>,
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
            text: 'Автоматизация, защита и метрология',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -189,
            jobs: [
                {
                    id: 'sudsfpdsp1',
                    title: <><ColoredSpan>Электрослесарь</ColoredSpan> по ремонту оборудования электростанций</>,
                    desc: 'Ремонтирует релейную защиту, автоматику, приборы учета',
                },
                {
                    id: 's32dsaudspp2',
                    title: <><ColoredSpan>Электромонтер</ColoredSpan> по ремонту и обслуживанию электрооборудования</>,
                    desc: 'Специализируется на силовом оборудовании (трансформаторы, выключатели, электродвигатели)'
                },
                {
                    id: 'it-consul53t',
                    title: <><ColoredSpan>Электромеханик</ColoredSpan> по релейной защите и автоматике <NoTransformSpan>(РЗА)</NoTransformSpan></>,
                    desc: 'Настраивает и обслуживает устройства, предотвращающие аварии в энергосистеме'
                },
                {
                    id: 'it432Manager',
                    title: <><ColoredSpan>Инженер-наладчик</ColoredSpan> / Специалист по <NoTransformSpan>АСУ ТП</NoTransformSpan> в энергетике</>,
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
                    title: <><ColoredSpan>Специалист</ColoredSpan> по энергоаудиту</>,
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
            text: 'Металлообработка и станочные работы',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -264,
            jobs: [
                {
                    id: 'redeaw',
                    title: <><ColoredSpan>Станочник</ColoredSpan> широкого профиля (помощник)</>,
                    desc: 'Выполняет простые операции на токарных, фрезерных, сверлильных станках под руководством'
                },
                {
                    id: 'seinfeaetym',
                    title: <><ColoredSpan>Токарь-универсал</ColoredSpan> / Фрезеровщик-универсал</>,
                    desc: 'Работает на универсальных станках, изготавливает сложные детали по чертежам, настраивает оборудование',
                },
                 
                {
                    id: 'a2nalyticSaf',
                    title: <><ColoredSpan>Оператор</ColoredSpan>  станков <NoTransformSpan>с ЧПУ</NoTransformSpan> / Наладчик станков</>,
                    desc: <>Программирует и обслуживает современные обрабатывающие центры, <NoTransformSpan>3D-принтеры</NoTransformSpan>, лазерные комплексы</>
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
                    desc: 'Участвует в сборке узлов по инструкциям, готовит инструмент и компоненты'
                },
                {
                    id: 'asdvp3rofed',
                    title: <><ColoredSpan>Слесарь-монтажник</ColoredSpan> технологического оборудования</>,
                    desc: 'Собирает и устанавливает промышленные станки, конвейеры, прессы на месте эксплуатации'
                },
                {
                    id: 'sdvowss',
                    title: <NoTransformSpan><ColoredSpan>Электромеханик</ColoredSpan> по торговому и холодильному оборудованию</NoTransformSpan>,
                    desc: 'Специализируется на монтаже и ремонте коммерческого оборудования (витрины, холодильники, печи)'
                },
                {
                    id: 'bfp22',
                    title: <><ColoredSpan>Мастер</ColoredSpan> по монтажу и пусконаладке / Инженер-механик</>,
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
                    desc: 'Диагностирует и ремонтирует роботизированные комплексы, датчики, приводы, системы управления'
                },
                {
                    id: 'bndfqwhjsc',
                    title: <><ColoredSpan>Техник-теплотехник</ColoredSpan>  / Инженер по наладке и испытаниям</>,
                    desc: 'Настраивает тепловые схемы, проводит испытания оборудования'
                },
                {
                    id: 'vdskERdn',
                    title: <><ColoredSpan>Наладчик</ColoredSpan> <NoTransformSpan>КИПиА</NoTransformSpan> / Специалист по автоматизированным системам</>,
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
                    title: <><ColoredSpan>Мастер</ColoredSpan> <NoTransformSpan>ОТК</NoTransformSpan> / Специалист по метрологическому обеспечению<NoTransformSpan>(РЗА)</NoTransformSpan></>,
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
                    desc: <>Создает и оформляет чертежи деталей и сборочных единиц <NoTransformSpan>в CAD-системах (Компас, AutoCAD)</NoTransformSpan></>
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
    biotech: [
        {
            id: 'jbhrsdo2d',
            text: 'Контроль, мониторинг и анализ',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -94,
            jobs: [
                {
                    id: 'redvfd2eaw',
                    title: <><ColoredSpan>Лаборант</ColoredSpan> химического анализа / Помощник эколога</>,
                    desc: 'Выполняет отбор проб воды, воздуха, почвы, проводит базовые анализы в лаборатории'
                },
                {
                    id: 'tesgtibsnqpv',
                    title: <><ColoredSpan>Лаборант-аналитик</ColoredSpan> / Специалист по экологическому мониторингу</>,
                    desc: 'Проводит комплексные анализы проб (химические, микробиологические), оценивает степень загрязнения',
                },
                {
                    id: 'pidvbvkbqn',
                    title: <><ColoredSpan>Инженер-эколог</ColoredSpan> / Специалист по нормированию</>,
                    desc: 'Организует всю экологическую работу на предприятии, проводит внутренние аудиты, взаимодействует с контролирующими органами'
                },
            ]
        },
        {
            id: 'biotjsdchc',
            text: 'Биотехнологическое производство',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -89,
            jobs: [
                {
                    id: 'vasdpvnf02dd',
                    title: <><ColoredSpan>Ассистент-технолог</ColoredSpan> / Оператор биотехнологических установок</>,
                    desc: 'Контролирует параметры биореакторов, следит за стерильностью, ведет журнал процесса'
                },
                {
                    id: 'asdvp3rofed',
                    title: <><ColoredSpan>Аппаратчик-оператор</ColoredSpan> в биотехнологии / Техник-технолог</>,
                    desc: <>Управляет процессом ферментации, выделения и очистки целевых продуктов (ферменты, антибиотики, <NoTransformSpan>БАВ)</NoTransformSpan></>
                },
                {
                    id: 'vdvneiucnvcas',
                    title: <NoTransformSpan><ColoredSpan>Мастер</ColoredSpan> участка / Технолог биотехнологического производства</NoTransformSpan>,
                    desc: 'Разрабатывает и оптимизирует технологические регламенты, отвечает за качество продукции, внедряет новые методы'
                },
                {
                    id: 'vdfkjnweicx222009',
                    title: <><ColoredSpan>Ведущий инженер-технолог</ColoredSpan> / Руководитель биопроизводства</>,
                    desc: 'Организует полный цикл производства, от разработки до выпуска, управляет командой, внедряет инновации'
                }
            ]
        },
        {
            id: 'sa3cds1fety',
            text: 'Экологическая безопасность и очистка',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -139,
            jobs: [
                {
                    id: 'bieodps',
                    title: <><ColoredSpan>Оператор</ColoredSpan> очистных сооружений</>,
                    desc: 'Контролирует работу установок по очистке сточных вод и газовых выбросов, регулирует режимы',
                },
                {
                    id: 'gaedcbiotsv',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по эксплуатации природоохранного оборудования</>,
                    desc: 'Обслуживает фильтры, абсорберы, установки утилизации отходов, проводит плановый ремонт'
                },
                {
                    id: 'badfiemdxv',
                    title: <><ColoredSpan>Инженер</ColoredSpan> по охране окружающей среды <NoTransformSpan>(ООС)</NoTransformSpan></>,
                    desc: <>Проектирует системы очистки, внедряет наилучшие доступные технологии <NoTransformSpan>(НДТ)</NoTransformSpan>, рассчитывает эффективность</>
                },
                {
                    id: 'vdskERdn',
                    title: <><ColoredSpan>Руководитель</ColoredSpan> направления экологической безопасности / Консультант по{' '}<NoTransformSpan>НДТ</NoTransformSpan></>,
                    desc: 'Разрабатывает стратегию снижения экологического следа предприятия, внедряет принципы циркулярной экономики'
                },
            ]
        },
        {
            id: 'cpereraborka',
            text: 'Переработка отходов и ресурсосбережение',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -139,
            jobs: [
                {
                    id: 'dsvvcxcv',
                    title: <><ColoredSpan>Сортировщик</ColoredSpan> отходов / Оператор линии по переработке</>,
                    desc: 'Работает на сортировочных линиях, управляет оборудованием для дробления, прессования',
                },
                {
                    id: 'technologpopere',
                    title: <><ColoredSpan>Технолог</ColoredSpan> по переработке отходов</>,
                    desc: 'Разрабатывает и контролирует технологии переработки вторсырья (пластик, бумага, стекло)'
                },
                {
                    id: 'othodifns',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по обращению с отходами<NoTransformSpan>I–IV</NoTransformSpan> опасности</>,
                    desc: 'Организует сбор, транспортировку, обезвреживание и размещение опасных отходов'
                },
                {
                    id: 'cyrcumflex',
                    title: <><ColoredSpan>Эксперт</ColoredSpan> по циркулярной экономике / Менеджер проектов «зеленой» трансформации</>,
                    desc:'Внедряет безотходные технологии, налаживает замкнутые циклы использования ресурсов'
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
                    id: 'ecoprosvet',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по экологическому просвещению</>,
                    desc: 'Проводит лекции и семинары по экологической грамотности для сотрудников производства и промышленных компаний и населения'
                },
                {
                    id: 'biofdkvnw',
                    title: <><ColoredSpan>Биоинформатик</ColoredSpan> (лаборант с цифровыми навыками)</>,
                    desc: 'Работает с базами биологических данных, помогает анализировать результаты исследований'
                },
                {
                    id: 'setifsf',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по сертификации продукции</>,
                    desc: 'Помогает предприятиям получать экологические сертификаты',
                },
                {
                    id: 'evbsdvtiy',
                    title: <><ColoredSpan>Мониторинг</ColoredSpan> состояния водных биоресурсов (гидробиолог-лаборант)</>,
                    desc: 'Оценивает состояние водоемов, исследует пробы на наличие фито- и зоопланктона',
                },
            ]
        },
    ],
    safetech: [
        {
            id: 'firevjndfb',
            text: 'Пожарная безопасность',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -174,
            jobs: [
                {
                    id: 'vbvdshtvfncdj',
                    title: <><ColoredSpan>Пожарный</ColoredSpan> / Спасатель (рядовой)</>,
                    desc: <>Участвует в тушении пожаров, спасении людей, ликвидации последствий <NoTransformSpan>ЧС</NoTransformSpan> на пожаре, обслуживает технику</>
                },
                {
                    id: 'vskotinusa',
                    title: <><ColoredSpan>Старший пожарный</ColoredSpan> / Командир отделения</>,
                    desc: 'Руководит действиями отделения при пожаре, отвечает за состояние оборудования, проводит учения',
                },
                {
                    id: 'vdsknbdswexvnmj',
                    title: <><ColoredSpan>Инспектор</ColoredSpan> пожарного надзора / Специалист по пожарной профилактике</>,
                    desc: 'Проводит проверки соблюдения норм пожарной безопасности, консультирует организации, согласовывает проекты'
                },
                {
                    id: 'Gvdsnjwxxjabvlwbzlfgtjnswl',
                    title: <><ColoredSpan>Начальник</ColoredSpan> караула / Руководитель пожарно-спасательного подразделения</>,
                    desc: 'Организует несение службы, планирует оперативные действия, отвечает за обучение и готовность личного состава'
                },
            ]
        },
        {
            id: 'chschcshshcshhschchschcscpg',
            text: 'Чрезвычайные ситуации и гражданская защита',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -196,
            jobs: [
                {
                    id: 'vasdpvnf02dd',
                    title: <><ColoredSpan>Спасатель</ColoredSpan> <NoTransformSpan>(МЧС)</NoTransformSpan> / Дежурный оперативного штаба</>,
                    desc: <>Выполняет задачи по ликвидации последствий аварий, <NoTransformSpan>ДТП</NoTransformSpan>, природных катастроф, ведет оперативные журналы</>
                },
                {
                    id: 'uusjvnxbwbnchslzbvksdpbals',
                    title: <><ColoredSpan>Специалист</ColoredSpan>по экстренному реагированию / Инженер-спасатель</>,
                    desc: 'Проводит аварийно-спасательные работы с применением специального оборудования, разрабатывает планы эвакуации'
                },
                {
                    id: 'specjfdbgnkndovbkcbslk',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по промышленной безопасности / Аналитик рисков</>,
                    desc: 'Оценивает опасность производственных объектов, разрабатывает меры по предотвращению аварий.'
                },
                {
                    id: 'vdfkjnweicx222009',
                    title: <><ColoredSpan>Руководитель</ColoredSpan>службы <NoTransformSpan>ГО и ЧС</NoTransformSpan> предприятия / Менеджер по кризисным ситуациям</>,
                    desc: 'Организует систему управления в кризисных ситуациях, взаимодействует с надзорными органами, обучает персонал'
                }
            ]
        },
        {
            id: 'complexghufowqcndk',
            text: 'Экологическая безопасность природных комплексов',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -199,
            jobs: [
                {
                    id: 'bieodps',
                    title: <><ColoredSpan>Техник-эколог</ColoredSpan> / Мониторинговый лаборант</>,
                    desc: 'Проводит наблюдения за состоянием воздуха, воды, почвы в зоне влияния предприятия, отбирает пробы'
                },
                {
                    id: 'secutriyen',
                    title: <><ColoredSpan>Инженер</ColoredSpan> по охране окружающей среды</>,
                    desc: 'Разрабатывает проекты по восстановлению нарушенных земель, рекультивации полигонов, минимизации воздействия'
                },
                {
                    id: 'sprbjcndjsosrkfmmfkvmcdvff',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по экологической экспертизе / Аудитор-эколог</>,
                    desc: 'Оценивает экологические риски проектов, готовит заключения для госэкспертизы, проверяет отчетность'
                },
                {
                    id: 'cszx',
                    title: <><ColoredSpan>Руководитель</ColoredSpan> отдела экологической безопасности / Главный эколог предприятия</>,
                    desc: 'Формирует экологическую политику компании, отвечает за соответствие природоохранному законодательству'
                },
            ]
        },
        {
            id: 'pririodjvfblamv',
            textSize: 25,
            text: 'Природообустройство и водное хозяйство',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -189,
            jobs: [
                {
                    id: 'dsvvewcscxcv',
                    title: <><ColoredSpan>Рабочий</ColoredSpan> по природо<ShortScreen>- </ShortScreen>обустройству / Машинист мелиоративных машин</>,
                    desc: 'Выполняет работы по восстановлению ландшафтов, строительству водоемов, укреплению берегов',
                },
                {
                    id: 'technikghyfjvsljhfr',
                    title: <><ColoredSpan>Техник-гидротехник</ColoredSpan> / Специалист по мелиорации</>,
                    desc: 'Проектирует и обслуживает системы осушения и орошения земель, гидротехнические сооружения'
                },
                {
                    id: 'ifnefekv',
                    title: <><ColoredSpan>Инженер</ColoredSpan> по природо<ShortScreen>- </ShortScreen>обустройству / Ландшафтный инженер</>,
                    desc: 'Разрабатывает проекты рекультивации нарушенных территорий, создания рекреационных зон, зеленых зон'
                },
                {
                    id: 'minvifnbleqbnkfebke',
                    title: <><ColoredSpan>Руководитель</ColoredSpan> природо<ShortScreen>- </ShortScreen>обустройства / Эксперт по устойчивому развитию территорий</>,
                    desc:'Координирует комплексные проекты восстановления экосистем, управляет ресурсами и командой'
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
                    id: 'ecoprvsdfvsvet',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по охране труда и промышленной безопасности</>,
                    desc: 'Контролирует соблюдение норм охраны труда и техники безопасности на производстве'
                },
                {
                    id: 'ecoprosvet',
                    title: <><ColoredSpan>Спасатель</ColoredSpan> на акватории / Водолаз-спасатель</>,
                    desc: 'Специализируется на поисково-спасательных работах на воде, подводных обследованиях и ремонтах'
                },
                {
                    id: 'vgjeiwvniiieuchsjfnvj',
                    title: <><ColoredSpan>Инспектор</ColoredSpan> по маломерным судам <NoTransformSpan>(ГИМС)</NoTransformSpan></>,
                    desc: 'Работает с базами биологических данных, помогает анализировать результаты исследований'
                },
                {
                    id: 'setifsf',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по пожарной автоматике и связи</>,
                    desc: 'Обслуживает системы пожарной сигнализации, оповещения и управления эвакуацией',
                },
            ]
        },
    ],
    geology: [
        {
            id: 'grtobwvfsklbr',
            text: 'Геология',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -226,
            jobs: [
                {
                    id: 'labefojdt',
                    title: <><ColoredSpan>Лаборант</ColoredSpan> / Помощник геолога</>,
                    desc: 'Участвует в полевых работах, заполняет документы, занимается первичной обработкой проб',
                },
                {
                    id: 'geolfvfsb ',
                    title: <><ColoredSpan>Геолог</ColoredSpan></>,
                    desc: 'Участвует в исследованиях, отбирает и обрабатывает породы, составляет геологические карты'
                },
                {
                    id: 'naxscvfhrgeol',
                    title: <><ColoredSpan>Начальник</ColoredSpan> геологической службы</>,
                    desc: 'Планирует маршруты и точки опробования, контролирует безопасность и качество работ геологов, анализирует результаты опробования'
                },
                {
                    id: 'Gvdsnjwxxjabvlwbzlfgtjnswl',
                    title: <><ColoredSpan>Руководитель</ColoredSpan> геологической экспедиции / Главный геолог проекта</>,
                    desc: 'Разрабатывает бюджет проекта, подсчитывает материально-техническую базы проекта, работает с лицензированием участков, принимает окончательные решения и несет полную ответственность за проект'
                },
            ]
        },
        {
            id: 'gornyy',
            text: 'Горное дело',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -196,
            jobs: [
                {
                    id: 'baffivfdkbpr',
                    title: <><ColoredSpan>Мастер</ColoredSpan> горного участка</>,
                    desc: 'Руководит участком, следит за безопасностью, ведёт документацию, ликвидирует мелкие аварии'
                },
                {
                    id: 'obfsdkcjbaff',
                    title: <><ColoredSpan>Начальник</ColoredSpan> участка</>,
                    desc: 'Составляет планы работ, координирует работу, разрабатывает и согласовывает проведение горных проектов, подбирает персонал'
                },
                {
                    id: 'fdbrckd',
                    title: <><ColoredSpan>Главный</ColoredSpan>инженер</>,
                    desc: 'Управляет всем горным предприятием, составляет правила безопасности на участке, утверждает бюджет для проекта, работает с экологическими службами и государственными органами'
                },
            ]
        },
        {
            id: 'fgjbnbnjgedehtibnfwjnvjsdk',
            text: 'Нефтегазовое дело',
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -199,
            jobs: [
                {
                    id: 'bieodpvfspvfsdmlbqdlc,lss',
                    title: <><ColoredSpan>Оператор</ColoredSpan> по добыче нефти и газа / Помощник бурильщика</>,
                    desc:'Проводит обход скважин, находит места для скважин и устанавливает их, отбирает пробы нефти и газа, участвует в ремонтных работах' 
                },
                {
                    id: 'sbsfecutriyen',
                    title: <><ColoredSpan>Бурильщик</ColoredSpan> / Старший оператор </>,
                    desc: 'Координирует работу бригады и других операторов, управляет процессом бурения, обучает новых операторов'
                },
                {
                    id: 'bsmaainfamgreimb',
                    title: <><ColoredSpan>Начальник</ColoredSpan> цеха добычи</>,
                    desc: 'Несет ответственность за выполнение плана добычи, составляет и контролирует график работ, анализирует эффективность оборудования и операторов, работает с другими геологами и службами'
                },
            ]
        },
        {
            id: 'geodeveogeo',
            text: 'Геодезия',
            style: { 'grid-area': '4/1/5/2' },
            pictureBottom: -189,
            jobs: [
                {
                    id: 'dsvvewcscxcv',
                    title: <><ColoredSpan>Техник-</ColoredSpan> геодезист</>,
                    desc: 'Устанавливает и настраивает приборы, проводит измерения, обрабатывает полученные результаты.'
                },
                {
                    id: 'technikghyfjvsljhfr',
                    title: <><ColoredSpan>Инженер-</ColoredSpan>геодезист</>,
                    desc: 'Составляет программу работ, проводит топографические съемки, анализирует полученные результаты, составляет технические отчеты по проекту'
                },
                {
                    id: 'minvifnbleqbnkfebke',
                    title: <><ColoredSpan>Главный специалист</ColoredSpan> по геодезическим съемкам</>,
                    desc:'Руководит отделом, предотвращает ошибки и анализирует результаты всего проекта, взаимодействует с государственными структурами'
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
                    id: 'ecoprvsdfvsvet',
                    title: <>Строительный, дорожный и горнодобывающий <ColoredSpan>рабочий</ColoredSpan></>,
                    desc: 'Развивает сырьевую базу страны, работает с инфраструктурой',
                },
            ]
        },
    ],
    materials: [
        {
            id: 'peoizzodskl',
            text: 'Производство материалов',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -86,
            jobs: [
                {
                    id: 'labefojdt',
                    title: <><ColoredSpan>Стажер-техник </ColoredSpan>(производства или материала)</>,
                    desc: 'Учится считать расход материалов, изучает сметы и операционные карты'
                },
                {
                    id: 'geolfvfsb ',
                    title: <><ColoredSpan>Оператор</ColoredSpan></>,
                    desc: 'Настраивает и запускает автоматические линии, проводит первичный визуальный контроль продукции, ведет сменную отчетность.'
                },
                {
                    id: 'naxscvfhrgeol',
                    title: <><ColoredSpan>Техник-технолог</ColoredSpan> (производства или материала)</>,
                    desc: 'Разрабатывает операционные карты, выбирает необходимое оборудование для работы, рассчитывает расход материалов и составляет техническую документацию'
                },
                {
                    id: 'Gvdsnjwxxjabvlwbzlfgtjnswl',
                    title: <><ColoredSpan>Мастер</ColoredSpan> смены</>,
                    desc: 'Управляет сменой, выбирает состав на смену, следит за производительностью сотрудников'
                },
            ]
        },
        {
            id: 'metalurhgrfkbksf',
            text: 'Металлургия',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -96,
            jobs: [
                {
                    id: 'dsvmdhelpr',
                    title: <><ColoredSpan>Помощник</ColoredSpan> машиниста крана</>,
                    desc: 'Учится работать с краном, технику безопасности, помогает проводить вспомогательные операции'
                },
                {
                    id: 'fdbrckd',
                    title: <><ColoredSpan>Машинист</ColoredSpan> крана</>,
                    desc: 'Проводит самостоятельные работы на кране, осваивает разные типы кранов', 
                },
                {
                    id: 'obfsdkcfedstargshjbaff',
                    title: <><ColoredSpan>Старший</ColoredSpan>  машинист крана</>,
                    desc: 'Проводит сложные работы на кране, занимается обучением команды машинистов'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '3/1/4/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'ecoprvsdfvsvet',
                    title: <><ColoredSpan>Инженер-</ColoredSpan>материаловед</>,
                    desc: 'Производит и изучает материалы',
                },
                {
                    id: 'ecoprvsdfvsvet',
                    title: <><ColoredSpan>Специалист</ColoredSpan> по{' '}<NoTransformSpan>3D-печати</NoTransformSpan></>,
                    desc: 'Создает изделия в сфере медицины и инженерии',
                },
            ]
        },
    ],
    transport: [
        {
            id: 'dfdfdsfscvbnhmjko',
            text: 'Автомеханика',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -115,
            jobs: [
                {
                    id: 'vdvavsdv',
                    title: <><ColoredSpan>Мастер</ColoredSpan> технической диагностики</>,
                    desc: 'Проводит компьютерную диагностику, работает с профессиональным оборудованием, решает сложные неисправности'
                },
                {
                    id: 'geolfvfbcgfmkdssb ',
                    title: <><ColoredSpan>Начальник</ColoredSpan> технического отдела / Главный механик </>,
                    desc: 'Координирует работу отдела, контролирует качество работы и выполнение сроков, заказывает детали и утверждает сметы, а ещё проводит обучение сотрудников'
                },
                {
                    id: 'naxscvfhrgeol',
                    title: <><ColoredSpan>Оператор</ColoredSpan> / Аппаратчик автоматических линий</>,
                    desc: 'Настраивает и запускает автоматические линии, работает с приборами для контроля процесса, проводит первичный контроль продукции, ведет отчетность'
                },
                {
                    id: 'vbfmds',
                    title: <><ColoredSpan>Владелец</ColoredSpan> <NoTransformSpan> СТО</NoTransformSpan></>,
                    desc: <>Контролирует работу всего <NoTransformSpan>СТО</NoTransformSpan>, координирует команду, а еще умеет чинить самые сложные неисправности и стратегически планирует развитие бизнеса</>  
                },
            ]
        },
        {
            id: 'logizsticea',
            text: 'Логистика',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -120,
            jobs: [
                {
                    id: 'baffivfdkbpr',
                    title: <><ColoredSpan>Диспетчер</ColoredSpan></>,
                    desc: 'Координирует заказы на внутренних или международных рейсах'
                },
                {
                    id: 'obfsdkcjbaff',
                    title: <><ColoredSpan>Старший</ColoredSpan> диспетчер</>,
                    desc: 'Распределяет задачи между диспетчерами и контролирует их работу, ведет документооборот'
                },
                {
                    id: 'fdbrckd',
                    title: <><ColoredSpan>Начальник</ColoredSpan> отдела логистики</>,
                    desc: 'Ведет полный цикл организации перевозок, ведет переговоры с подрядчиками, контролирует и составляет логистический бюджет.'
                },
                {
                    id: 'fd432brckd',
                    title: <><ColoredSpan>Руководитель</ColoredSpan> службы логистики</>,
                    desc: 'Управляет складами, создает планы грузоперевозок, ведет международные переговоры о логистике.'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '3/1/4/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'ecoprvsdfgsgffvsvet',
                    title: <ColoredSpan>Машинист</ColoredSpan>,
                    desc: 'Управляет различными механизмами и транспортными средствами',
                },
                {
                    id: 'sdvlmlbbtepv',
                    title: <ColoredSpan>Таможенник</ColoredSpan>,
                    desc: 'Оформляет документы, контролирует платежи, классифицирует товары и сделки',
                },
            ]
        },
    ],
    techcontrol: [
        {
            id: 'g3rtfvsobwvfsklbr',
            textSize: 26,
            blockTextSize: 10,
            text: 'Программирование Автоматизированных Систем Управления Техническими Процессами',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -106,
            jobs: [
                {
                    id: 'labefojdt',
                    title: <><ColoredSpan>Техник-</ColoredSpan>программист</>,
                    desc: 'Работает с базами данных, разрабатывает проекты с помощью наставника'
                },
                {
                    id: 'geolfvfsb ',
                    title: <><ColoredSpan>Инженер-</ColoredSpan>программист</>,
                    desc: 'Пишет скрипты, разрабатывает проекты «под ключ», создает алгоритмы и интерфейс, обучает команду.'
                },
                {
                    id: 'naxscvfhrgeol',
                    title: <><ColoredSpan>Ведущий</ColoredSpan> инженер</>,
                    desc: 'Руководит командой разработчиков, ведет переговоры с заказчиком, выбирает оборудование и ПО для работы, проводит отбор в команду.'
                },
            ]
        },
        {
            id: 'gornyy',
            text: 'Инженерия',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -106,
            jobs: [
                {
                    id: 'baffivfdkbpr',
                    title: <><ColoredSpan>Оператор</ColoredSpan> / Дежурный</>,
                    desc: 'Настраивает и поддерживает работу автоматизированных систем на предприятиях'
                },
                {
                    id: 'obfsdkcjbaff',
                    title: <><ColoredSpan>Старший</ColoredSpan> оператор</>,
                    desc: 'Координирует работу операторов смены, обучает персонал, принимает решение в нештатных ситуациях.',
                },
                {
                    id: 'fdbrckd',
                    title: <><ColoredSpan>Технолог</ColoredSpan></>,
                    desc: 'Управляет результатом, анализирует результаты процессов, разрабатывает регламенты, несет ответственность за работу всего цеха.'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '3/1/4/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'ecoprvsdfvsvet',
                    title: <ColoredSpan>Аналитик</ColoredSpan>,
                    desc: 'Разбирается с данными, анализирует ключевые показатели, предсказывает результат'
                },
                {
                    id: 'sewdfvsvet',
                    title: <ColoredSpan>Программист</ColoredSpan>,
                    desc: 'Разрабатывает и пишет скрипты, оптимизирует работу процессов'
                },
                {
                    id: 'ecopdmcmt',
                    title: <ColoredSpan>Менеджер</ColoredSpan>,
                    desc: 'Координирует команду, управляет проектами'
                },
            ]
        },
    ],
    techprom: [
        {
            id: 'gradtobwvfsklbr',
            text: 'Конструирование',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -86,
            jobs: [
                {
                    id: 'labefojdt',
                    title: <ColoredSpan>Техник-конструктор</ColoredSpan>,
                    desc: 'Подбирает материалы для производства, занимается пошивом'
                },
                {
                    id: 'geolfvfsb ',
                    title: <><ColoredSpan>Старший конструктор</ColoredSpan></>,
                    desc: 'Руководит группой конструкторов, участвует в процессе производства, обучает сотрудников'
                },
            ]
        },
        {
            id: 'gor2nyy',
            text: 'Технологии',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -96,
            jobs: [
                {
                    id: 'baffivfdkbpr',
                    title: <ColoredSpan>Техник-технолог</ColoredSpan>,
                    desc: 'Проводит технологические операции, работает на специализированном оборудовании, рассчитывает стоимость материалов.'
                },
                {
                    id: 'obfsdkcjbaff',
                    title: <><ColoredSpan>Инженер-технолог</ColoredSpan></>,
                    desc: 'Разрабатывает технологии для линеек, участвует в аналитических процессах для снижения себестоимости продукции'
                },
                {
                    id: 'fdbrckd',
                    title: <><ColoredSpan>Начальник</ColoredSpan> технологического отдела</>,
                    desc: 'Управляет результатом цеха, утверждает план технологических процессов, выбирает и покупает новое оборудование'
                },
            ]
        },
        {
            id: 'fgjbnbnjge00987dk',
            text: 'Контроль качества',
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -79,
            jobs: [
                {
                    id: 'bieo23dpvfspvfsdmlbqdlc,lss',
                    title: <><ColoredSpan>Контролер</ColoredSpan> качества</>,
                    desc: 'Проверяет стандарты качества, изучает причины появления дефектов, работает с измерительными приборами'
                },
                {
                    id: 'sbsfe34cutriyen',
                    title: <><ColoredSpan>Начальник</ColoredSpan> Отдела Технического Контроля</>,
                    desc: 'Разрабатывает службу и методы контроля на производстве, анализирует статистику брака, выбирает заказчиков и коммуницирует с ними'
                },
                {
                    id: 'bsmaainfamgreimb',
                    title: <><ColoredSpan>Аудитор</ColoredSpan> системы проверки качества</>,
                    desc: 'Разрабатывает стандарты проверки качества работы на производстве'
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
                    id: 'ecoprvsdfvsvet',
                    title: <><ColoredSpan>Стилист</ColoredSpan> / технолог</>,
                    desc: 'Анализирует продажи, создает одежду для брендов, производит материалы'
                },
                {
                    id: 'e632dfvsvet',
                    title: <><ColoredSpan>Консультант</ColoredSpan> / аудитор</>,
                    desc: 'Проверяет стандарты качества, оформляет сертификаты качества для производства.'
                },
            ]
        },
    ],
    agro: [
        {
            id: 'grtobwvfsklbr',
            text: 'Растениеводство и агрономия',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -125,
            jobs: [
                {
                    id: 'labefojdt',
                    title: <><ColoredSpan>Агроном</ColoredSpan></>,
                    desc: 'Работает на полях с различными культурами, исследует и анализирует культуры, подготавливает почву, защищает ее от вредителей, организует сбор урожая'
                },
                {
                    id: 'geolfvfsb ',
                    title: <><ColoredSpan>Старший</ColoredSpan>агроном</>,
                    desc: 'Координирует работу команды, проводит обучение'
                },
                {
                    id: 'naxscvfhrgeol',
                    title: <><ColoredSpan>Главный</ColoredSpan> агроном</>,
                    desc: 'Управляет всем циклом растениеводства в хозяйстве, планирует бюджет, подбирает гибриды'
                },
            ]
        },
        {
            id: 'gornyy',
            text: 'Зоотехника',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -96,
            jobs: [
                {
                    id: 'baffivfdkbpr',
                    title: <><ColoredSpan>Зоотехник</ColoredSpan></>,
                    desc: 'Работает на ферме, разводит, содержит, кормит животных'
                },
                {
                    id: 'obfsdkcjbaff',
                    title: <><ColoredSpan>Старший</ColoredSpan> Зоотехник</>,
                    desc: 'Руководит всей фермой, добивается выполнения производственных показателей.'
                },
                {
                    id: 'fdbrckd',
                    title: <><ColoredSpan>Главный</ColoredSpan> Зоотехник холдинга</>,
                    desc: 'Разрабатывает стандарты и технологические карты для фермы, внедряет различные инновации.'
                },
            ]
        },
        {
            id: 'fgjbnbnjgedehtibnfwjnvjsdk',
            text: 'Лесное дело',
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -199,
            jobs: [
                {
                    id: 'bieodpvfspvfsdmlbqdlc,lss',
                    title: <><ColoredSpan>Техник-</ColoredSpan>лесовод</>,
                    desc: 'Занимается лесопосадками, следит за пожарной безопасностью'
                },
                {
                    id: 'sbsfecutriyen',
                    title: <><ColoredSpan>Участковый</ColoredSpan> лесничий </>,
                    desc: 'Руководит группой лесников, планирует лесохозяйственные работы, контролирует свой участок леса'
                },
                {
                    id: 'bsmaainfamgreimb',
                    title: <><ColoredSpan>Руководитель</ColoredSpan> лесничества</>,
                    desc: 'Взаимодействует с арендаторами и органами власти, планирует работу на участках и утверждает состав сотрудников'
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
                    id: 'ecoprvsdfvsvet',
                    title: <ColoredSpan>Ветеринар</ColoredSpan>,
                    desc: 'Заботится о здоровье животных'
                },
                {
                    id: 'ecerw34fvsvet',
                    title: <ColoredSpan>Пчеловод</ColoredSpan>,
                    desc: 'Разводит пчел, ухаживает за ними и получает продукты пчеловодства'
                },
            ]
        },
    ],
    service: [
        {
            id: 'grtobwvfsklbr',
            text: 'Гостиничный сервис',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -85,
            jobs: [
                {
                    id: 'labefojdt',
                    title: <ColoredSpan>Портье</ColoredSpan>,
                    desc: 'Встречает гостей, оформляет им заезды и выезды, ведет документы для подсчета'
                },
                {
                    id: 'geolfvfsb ',
                    title: <><ColoredSpan>Администратор</ColoredSpan></>,
                    desc: 'Координирует работу смены, обучает персонал, решает конфликтные ситуации'
                },
                {
                    id: 'naxscvfhrgeol',
                    title: <><ColoredSpan>Управляющий</ColoredSpan> отелем</>,
                    desc: 'Управляет всеми службами гостиницы, добивается выполнения финансовых планов, разрабатывает стандарты сервиса'
                },
            ]
        },
        {
            id: 'gornyy',
            text: 'Туризм',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -96,
            jobs: [
                {
                    id: 'baffivfdkbpr',
                    title: <><ColoredSpan>Менеджер</ColoredSpan> по продаже туров</>,
                    desc: 'Собирает турпроекты, рассчитывает стоимость, общается с клиентами'
                },
                {
                    id: 'obfsdkcjbaff',
                    title: <><ColoredSpan>Руководитель</ColoredSpan> турагентства</>,
                    desc: 'Придумывает схему продаж, анализирует результаты, управляет всей командой, ищет партнеров'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '3/1/4/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'e32fvs54vet',
                    title: <ColoredSpan>Экскурсовод</ColoredSpan>,
                    desc: 'Проводит экскурсии, знакомит людей с историей и достопримечательностями'
                },
                {
                    id: 'efvs54vet',
                    title: <ColoredSpan>Event-менеджер</ColoredSpan>,
                    desc: 'Организует и проводит мероприятия различных форматов'
                },
            ]
        },
    ],
    education: [
        {
            id: 'grtobwvfsklbr',
            text: 'Дошкольное образование',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -126,
            jobs: [
                {
                    id: 'labefojdt',
                    title: <><ColoredSpan>Воспитатель</ColoredSpan></>,
                    desc: 'Организует игры, проводит активности с детьми младшего возраста, общается с родителями'
                },
                {
                    id: 'geolfvfsb ',
                    title: <><ColoredSpan>Старший воспитатель</ColoredSpan></>,
                    desc: 'Организует работу других воспитателей, составляет программы обучения детей, внедряет новые технологии'
                },
                {
                    id: 'naxscvfhrgeol',
                    title: <><ColoredSpan>Заведующий</ColoredSpan> детским садом</>,
                    desc: 'Управляет дошкольным учреждением, следит за финансовыми отчетами, взаимодействует с районной администрацией'
                },
            ]
        },
        {
            id: 'gornyy',
            text: 'Преподавание',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -146,
            jobs: [
                {
                    id: 'baffivfdkbpr',
                    title: <><ColoredSpan>Учитель</ColoredSpan> начальных классов</>,
                    desc: 'Преподает основные предметы, работает классным руководителем, коммуницирует с родителями'
                },
                {
                    id: 'obfsdkcjbaff',
                    title: <><ColoredSpan>Учитель-методист</ColoredSpan></>,
                    desc: 'Разрабатывает методические материалы, обучает молодых специалистов, проводит мастер-классы'
                },
                {
                    id: 'fdbrckd',
                    title: <><ColoredSpan>Заместитель директора</ColoredSpan> по учебно-воспитательной работе</>,
                    desc: 'Руководит образовательным процессом, составляет расписание, контролирует качество преподавания'
                },
            ]
        },
        {
            id: 'other',
            text: 'смежные профессии',
            style: { 'grid-area': '3/1/4/2' },
            hasPicture: false,
            jobs: [
                {
                    id: 'ecoprvsdfvsvet',
                    title: <><ColoredSpan>Социальный</ColoredSpan> педагог</>,
                    desc: 'Работает с детьми, которые испытывают психологические проблемы',
                },
                {
                    id: 'epsiprvsdfvsvet',
                    title: <><ColoredSpan>Педагог</ColoredSpan> по внеучебной деятельности</>,
                    desc: 'Организует внеучебную деятельность образовательного учреждения: конкурсы, мероприятия'
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
            pictureBottom: -194,
            skills: ['умение работать в команде', 'пространственное мышление', 'ответственность',],
            readyFor: ['работа на строительной площадке', 'соблюдение техники безопасности', 'решение нестандартных задач'],
            jobs: [
                {
                    id: 'jun',
                    title: 'младший специалист',
                    desc: 'Помогает в работе на объекте, изучает чертежи и технологии под руководством наставника',
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
            skills: ['понимание геологии и материаловедения', 'внимательность к допускам и измерениям',],
            readyFor: ['работа на открытом воздухе в разных погодных условиях', 'высокая ответственность за долговечность объекта'],
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
                            name: 'работа с ПО',
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
            text: 'Строительство и эксплуатация инженерных сооружений',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -114,
            skills: ['аналитический склад ума', 'понимание механики грунтов и сложных нагрузок',],
            readyFor: ['работа на уникальных, часто удаленных объектах', 'жесткие стандарты качества и безопасности'],
            jobs: [
                {
                    id: 'jun1',
                    title: 'младший специалист',
                    desc: <>
                        Помогает в работах на объектах: мосты, тоннели, очистные сооружения, <NoTransformSpan>ЛЭП</NoTransformSpan>
                    </>,
                    skills: [
                        {
                            name: 'знание спецтехники и материалов',
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
                            name: 'знание специфических технологий и нормативов',
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
                            name: 'взаимодействие с госэкспертизой',
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
            pictureBottom: -184,
            jobs: [
                {
                    id: 'jun1',
                    title: 'младший специалист (электромонтер)',
                    desc:'Помогает в прокладке кабельных трасс, монтаже электрощитового оборудования, установке розеток',
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
    
    ],
    economy: [
        {
            id: 'clients work',
            text: 'Работа с клиентами (розничный бизнес)',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -252,
            skills: ['умение общаться с разными людьми', 'знание банковских продуктов', 'ориентация на клиента', 'финансовая грамотность'],
            readyFor: ['работа в офисе', 'много общения с клиентами',],
            jobs: [
                {
                    id: 'jun',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">стажёр</ColoredSpan> программы «ВТБ Юниор»</>,
                    desc: 'Изучает продукты банка,помогает консультировать клиентов, оформляет документы',
                    skills: [
                        {
                            name: 'работа с документами',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'обучаемость',
                            width: 52,
                            id: 'educ'
                        },
                        {
                            name: 'переговоры',
                            width: 48,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">клиентский</ColoredSpan> менеджер</>,
                    desc: 'Рассказывает клиентам о продуктах банка и помогает подобрать подходящие решения',
                    skills: [
                        {
                            name: 'консультирование',
                            width: 59,
                            id: 'snip'
                        },
                        {
                            name: 'продажи',
                            width: 39,
                            id: 'processes'
                        },
                        {
                            name: 'знание банковских продуктов и сервиса',
                            width: 100,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpecc',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">ведущий / главный</ColoredSpan> менеджер</>,
                    desc: 'Решает сложные задачии обучает новых коллег',
                    skills: [
                        {
                            name: 'умение работать со сложными клиентами',
                            width: 100,
                            id: 'team',
                        },
                        {
                            name: 'наставничество',
                            width: 100,
                            id: 'plan',
                        },
                        {
                            name: 'знание банковских продуктов и сервиса',
                            width: 100,
                            id: '432'
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title:  <><ColoredSpan $color="var(--color-vtb-accent)">руководитель</ColoredSpan>  группы / заместитель начальника отдела</>,
                    skills: [
                        {
                            name: 'управление',
                            width: 49,
                            id: 't32am'
                        },
                        {
                            name: 'аналитика',
                            width: 49,
                            id: 'pl432an'
                        },
                        {
                            name: 'планирование',
                            width: 100,
                            id: '431322'
                        },
                    ]
                },
            ]
        },
        {
            id: 'roadBuildens',
            text: 'Работа с малым и средним бизнесом',
            textSize: 27,
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -262,
            skills: ['переговоры','аналитика', 'excel', 'crm', 'финансовая грамотность'],
            skillsWidth: [49, 49, 49, 49, 100],
            readyFor: ['работа в офисе', 'встреча с клиентами', 'полный рабочий день'],
            jobs: [
                {
                    id: 'jun1',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">стажёр</ColoredSpan> «ВТБ Юниор» / помощник менеджера</>,
                    desc: 'Помогает сопровождать клиентов-предпринимателей',
                    skills: [
                        {
                            name: 'работа с документами',
                            width: 100,
                            id: 'ac423'
                        },
                        {
                            name: 'обучаемость',
                            width: 46,
                            id: 'isp3'
                        },
                        {
                            name: 'переговоры',
                            width: 52,
                            id: 'tech'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">менеджер</ColoredSpan> по работе с бизнесом</>,
                    desc: 'Работает с юридическими лицами и подбирает решения под бизнес-задачи',
                    skills: [
                        {
                            name: 'аналитическое мышление',
                            width: 100,
                            id: 's22nip'
                        },
                        {
                            name: 'переговоры',
                            width: 100,
                            id: 'proce342sses'
                        },
                        {
                            name: 'знание банковских продуктов и сервиса',
                            width: 100,
                            id: 'practic432e'
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">ведущий менеджер</ColoredSpan>  / эксперт по направлению</>,
                    desc: 'Разрабатывает индивидуальные решения для клиентов',
                    skills: [
                        {
                            name: 'аналитика',
                            width: 39,
                            id: 'pl4an'
                        },
                        {
                            name: 'экспертиза',
                            width: 100,
                            id: 't200am'
                        },
                        {
                            name: 'переговоры',
                            width: 59,
                            id: '431322'
                        },
                    ]
                },
                {
                    id: 'mai3nSpecc',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">руководитель</ColoredSpan>  группы / заместитель начальника отдела</>,
                    skills: [
                        {
                            name: 'управление',
                            width: 100,
                            id: 't21300am'
                        },
                        {
                            name: 'аналитика',
                            width: 100,
                            id: '32fdledmfl'
                        },
                        {
                            name: 'планирование',
                            width: 100,
                            id: 'pl431an'
                        },
                    ]
                },
            ]
        },
        {
            id: 'admanjoenvjdf',
            text: 'Контакт-центр и дистанционные сервисы',
            textSize: 27,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -252,
            readyFor: ['офисный или гибридный, сменный график','много взаимодействия с клиентами', 'много работы за компьютером'],
            skills: ['умение общаться с разными людьми', 'эмоциональный интеллект', 'грамотная речь', 'внимание к деталям'],
            jobs: [
                {
                    id: 'jun1',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">специалист</ColoredSpan> контакт-центра </>,
                    desc: 'Отвечает на вопросы клиентов на входящей линии',
                    skills: [
                        {
                            name: 'умение общаться с людьми',
                            width: 100,
                            id: 'ac423'
                        },
                        {
                            name: 'эмоциональный интеллект',
                            width: 100,
                            id: 'isp3'
                        },
                        {
                            name: 'грамотная речь',
                            width: 100,
                            id: 'tech'
                        },
                        {
                            name: 'внимание к деталям',
                            width: 100,
                            id: 'dskpvne'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">старший</ColoredSpan> специалист / наставник</>,
                    desc: 'Анализирует обращения, разбирает сложные кейсы и помогает улучшать качество сервиса',
                    skills: [
                        {
                            name: 'умение общаться с людьми',
                            width: 100,
                            id: 's22nip'
                        },
                        {
                            name: 'эмоциональный интеллект',
                            width: 100,
                            id: 'proce342sses'
                        },
                        {
                            name: 'грамотная речь',
                            width: 100,
                            id: 'practic432e'
                        },
                        {
                            name: 'внимание к деталям',
                            width: 100,
                            id: 'proce342sselbapfs'
                        },
                        {
                            name: 'решение сложных вопросов',
                            width: 100,
                            id: 'pracre34tic432e'
                        },
                    ]
                },
                {
                    id: 'mai3nSpecc',
                    title: <><ColoredSpan $color="var(--color-vtb-accent)">руководитель</ColoredSpan>  группы / заместитель начальника отдела</>,
                    skills: [
                        {
                            name: 'управление',
                            width: 100,
                            id: 't21300am'
                        },
                        {
                            name: 'аналитика',
                            width: 100,
                            id: '32fdledmfl'
                        },
                        {
                            name: 'планирование',
                            width: 100,
                            id: 'pl431an'
                        },
                    ]
                },
            ]
        },
    ],
    trade: [
        {
            id: 'fmvavjfidshops',
            text: 'Коммерция / Гипермаркеты',
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -252,
            aboutJob: (
                <>
                    <ColoredSpan $color={'var(--color-lemana-accent)'}>коммерция в гипермаркетах</ColoredSpan> — это работа в сердце ритейла: от персональных консультаций по товарам для ремонта до управления ассортиментом на полках
                    {'\n\n'}
                    здесь каждый день помогают клиентам благоустраивать жилье, сопровождают их от идеи до реализации любого проекта по обустройству дома
                </>
            ),
            skills: ['умение общаться с разными людьми', 'адаптивность', 'ориентир на результат'],
            readyFor: ['физически активная, подвижная работа', 'желание помогать клиентам', 'дружелюбие'],
            jobs: [
                {
                    id: 'jun',
                    title: <><ColoredSpan $color="var(--color-white)">Практикант</ColoredSpan>  / Продавец-консультант</>,
                    desc: 'Изучает ассортимент и помогает покупателям',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'вежливость',
                            width: 48,
                            id: 'educ'
                        },
                        {
                            name: 'работа в команде',
                            width: 48,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: <><ColoredSpan $color="var(--color-white)">кассир-консультант</ColoredSpan></>,
                    desc: 'Обслуживает на кассе и отвечает за свой сектор ',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'snip'
                        },
                        {
                            name: 'аккуратность',
                            width: 46,
                            id: 'processes'
                        },
                        {
                            name: <NoTransformSpan>работа в 1С</NoTransformSpan>,
                            width: 50,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpecc',
                    title: <><ColoredSpan $color="var(--color-white)">менеджер</ColoredSpan> сектора по обслуживанию клиентов</>,
                    desc: 'Управляет ассортиментом и командой своего отдела',
                    skills: [
                        {
                            name: 'ответственность',
                            width: 100,
                            id: 'team',
                        },
                        {
                            name: 'наставничество',
                            width: 100,
                            id: 'plan',
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title:  <><ColoredSpan $color="var(--color-white)">руководитель</ColoredSpan> сектора по обслуживанию клиентов</>,
                    desc: 'Отвечает за работу всей торговой точки',
                    skills: [
                        {
                            name: 'управление командой',
                            width: 61,
                            id: 't32am'
                        },
                        {
                            name: 'аналитика',
                            width: 35,
                            id: 'pl432an'
                        },
                        {
                            name: 'решение нестандартных задач',
                            width: 100,
                            id: '431322'
                        },
                    ]
                },
                {
                    id: 'mainSpecc3243',
                    title:  <><ColoredSpan $color="var(--color-white)">директор</ColoredSpan> магазина</>,
                    skills: [
                        {
                            name: 'управление',
                            width: 48,
                            id: 't32am'
                        },
                        {
                            name: 'аналитика',
                            width: 48,
                            id: 'pl432an'
                        },
                        {
                            name: 'планирование',
                            width: 100,
                            id: '431322'
                        },
                    ]
                },
            ]
        },
        {
            id: 'logistokagipermarket',
            text: 'Логистика / Работа в гипермаркетах и на складах',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -252,
            aboutJob: (
                <>
                    <ColoredSpan $color={'var(--color-lemana-accent)'}>Логистика</ColoredSpan> — это управление точными и сложными проектами: от приёмки многотонных фур на складе до момента, когда товар оказывается на полке или в руках у покупателя
                    {'\n\n'}
                    каждый день здесь получают и обрабатывают всё больше заказов, оптимизируют процессы сборки и доставки товаров — у компании есть собственная маршрутизация и система управления складом 
                </>
            ),
            skills: ['знание основ безопасности', 'соблюдение стандартов работы', 'ориентир на результат'],
            readyFor: ['работа на складе или в гипермаркете','физически активная, подвижная работа',],
            jobs: [
                {
                    id: 'jun',
                    title: <><ColoredSpan $color="var(--color-white)">Практикант</ColoredSpan> / сотрудник склада</>,
                    desc: 'Принимает, отгружает и комплектует товары, которые отправятся в магазин',
                    skills: [
                        {
                            name: 'физическая выносливость',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'внимательность',
                            width: 48,
                            id: 'educ'
                        },
                        {
                            name: 'аккуратность',
                            width: 48,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: <><ColoredSpan $color="var(--color-white)">администратор</ColoredSpan> цепи поставок</>,
                    desc: 'Ведёт учёт, проверяет, чтобы товар хранился в целости и сохранности',
                    skills: [
                        {
                            name: 'работа с электронными системами',
                            width: 100,
                            id: 'snip'
                        },
                        {
                            name: 'организованность',
                            width: 100,
                            id: 'processes'
                        },
                        {
                            name: 'знание складской логистики',
                            width: 100,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpecc',
                    title: <><ColoredSpan $color="var(--color-white)">менеджер</ColoredSpan> цепи поставок</>,
                    desc: 'Организует работу команды на складе',
                    skills: [
                        {
                            name: 'лидерство',
                            width: 44,
                            id: 'team',
                        },
                        {
                            name: 'наставничество',
                            width: 52,
                            id: 'plan',
                        },
                        {
                            name: 'организация процессов',
                            width: 100,
                            id: 'te32am',
                        },
                        {
                            name: 'контроль безопасности',
                            width: 100,
                            id: 'pl41an',
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title:  <><ColoredSpan $color="var(--color-white)">руководитель</ColoredSpan> цепи поставок</>,
                    desc: 'Планирует графики поставок, следит, чтобы приходило всё вовремя и всё нужное',
                    skills: [
                        {
                            name: 'аналитика',
                            width: 100,
                            id: 'pl432an'
                        },
                        {
                            name: 'планирование',
                            width: 100,
                            id: '431322'
                        },
                    ]
                },
                {
                    id: 'mainSpecc3243',
                    title:  <><ColoredSpan $color="var(--color-white)">директор</ColoredSpan> склада</>,
                    skills: [ 
                        {
                            name: 'управление персоналом',
                            width: 100,
                            id: 't32am'
                        },
                        {
                            name: 'решение проблем',
                            width: 48,
                            id: 'pl432an'
                        },
                        {
                            name: 'ответственность',
                            width: 48,
                            id: '431322'
                        },
                    ]
                },
            ]
        },
        {
            id: 'businessprosupergoog',
            text: <NoTransformSpan>работа с бизнес-клиентами / Лемана ПРО</NoTransformSpan>,
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -252,
            aboutJob: (
                <>
                    <ColoredSpan $color={'var(--color-lemana-accent)'}>ПРО</ColoredSpan> — это направление, где специалисты помогают компаниям и профессионалам в сфере строительства и ремонта, от небольших бригад до крупных застройщиков, развивать свой бизнес
                    {'\n\n'}
                    Это участие в сложных проектах, работа с крупными клиентами, обучение на производстве и сообщество профессионалов
                </>
            ),
            skills: ['знание рынка B2B', 'аналитический склад ума'],
            readyFor: [<NoTransformSpan>работа в гипермаркете в отделе ПРО</NoTransformSpan>,'понимание задач клиента', 'работа с рынком b2b'],
            jobs: [
                {
                    id: 'jun',
                    title: <><ColoredSpan $color="var(--color-white)">специалист</ColoredSpan> по продажам проектов</>,
                    desc: 'консультирует и сопровождает клиентов',
                    skills: [
                        {
                            name: 'исполнительность',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'внимание к деталям',
                            width: 100,
                            id: 'educ'
                        },
                        {
                            name: 'работа с документами',
                            width: 100,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: <><ColoredSpan $color="var(--color-white)">менеджер</ColoredSpan> по продаже проектов</>,
                    desc: 'Подбирает персональные решения для клиентов и ведёт переговоры',
                    skills: [
                        {
                            name: 'переговоры',
                            width: 42,
                            id: 'snip'
                        },
                        {
                            name: 'знание продукта',
                            width: 54,
                            id: 'processes'
                        },
                        {
                            name: 'работа с возражениями',
                            width: 100,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpecc',
                    title: <><ColoredSpan $color="var(--color-white)">руководитель</ColoredSpan> отдела продаж</>,
                    desc: 'Координирует работу команды менеджеров, ставит цели и обучает коллег ',
                    skills: [
                        {
                            name: 'управление',
                            width: 48,
                            id: 'team',
                        },
                        {
                            name: 'аналитика',
                            width: 48,
                            id: 'plan',
                        },
                        {
                            name: 'планирование',
                            width: 100,
                            id: 'te32am',
                        },
                    ]
                },
            ]
        },
    ],
    radioelectronic: [
        {
            id: 'radioelectronicdsvds',
            text: 'Эксплуатация сети',
            textSize: 27,
            style: { 'grid-area': '1/1/2/2' },
            pictureBottom: -192,
            skills: ['знание сетевых протоколов', <NoTransformSpan>работа с оборудованием БС</NoTransformSpan>, 'Excel', <NoTransformSpan>autoCAD</NoTransformSpan>, 'логическое мышление'],
            skillsWidth: [100, 100, 48, 48, 100],
            readyFor: ['работа в гибридном формате', 'выезды на объекты'],
            lastCardPadding: {
                mob: 100,
                desk: 100,
            },
            jobs: [
                {
                    id: 'jun',
                    title: <><ColoredSpan $color="var(--color-white)">стажер</ColoredSpan> в направлении эксплуатации сети</>,
                    desc: 'Осваивает азы настройки и мониторинга оборудования, помогает в проверках и отчетах, чтобы сеть всегда работала как часы',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'вежливость',
                            width: 48,
                            id: 'educ'
                        },
                        {
                            name: 'работа в команде',
                            width: 48,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 'specc',
                    title: <><ColoredSpan $color="var(--color-white)">инженер</ColoredSpan> по эксплуатации сети</>,
                    desc: 'Отвечает за стабильность сети: оперативно находит и устраняет сбои, проводит плановое обслуживание',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'snip'
                        },
                        {
                            name: 'аккуратность',
                            width: 46,
                            id: 'processes'
                        },
                        {
                            name: <NoTransformSpan>работа в 1С</NoTransformSpan>,
                            width: 50,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpecc',
                    title: <><ColoredSpan $color="var(--color-white)">старший</ColoredSpan> инженер</>,
                    desc: 'Координирует работу команды, анализирует эффективность сети, планирует развитие узлов',
                    skills: [
                        {
                            name: 'ответственность',
                            width: 100,
                            id: 'team',
                        },
                        {
                            name: 'наставничество',
                            width: 100,
                            id: 'plan',
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title: <><ColoredSpan $color="var(--color-white)">руководитель</ColoredSpan> подразделения / региональный инженер сети</>,
                },
            ]
        },
        {
            id: 'logistoka432gipermarket',
            text: 'Энергетика в телекоме',
            style: { 'grid-area': '2/1/3/2' },
            pictureBottom: -132,
            skills: ['электротехническая база', 'умение работать с чертежами', 'знание систем электропитания', 'внимательность'],
            readyFor: ['офисный формат','можно без выезда',],
            lastCardPadding: {
                mob: 180,
                desk: 100,
            },
             jobs: [
                {
                    id: 'j423un',
                    title: <><ColoredSpan $color="var(--color-white)">стажер</ColoredSpan> в направлении энергетика</>,
                    desc: 'Ведет базы данных, документации, работает со схемами и проектами',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'вежливость',
                            width: 48,
                            id: 'educ'
                        },
                        {
                            name: 'работа в команде',
                            width: 48,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 'spe14cc',
                    title: <><ColoredSpan $color="var(--color-white)">инженер</ColoredSpan>-энергетик</>,
                    desc: 'Проектирует и сопровождает системы электропитания на объектах связи',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'snip'
                        },
                        {
                            name: 'аккуратность',
                            width: 46,
                            id: 'processes'
                        },
                        {
                            name: <NoTransformSpan>работа в 1С</NoTransformSpan>,
                            width: 50,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpe432cc',
                    title: <><ColoredSpan $color="var(--color-white)">ведущий</ColoredSpan> инженер сети</>,
                    desc: 'Контролирует энергетическую эффективность, модернизирует инфраструктуру',
                    skills: [
                        {
                            name: 'ответственность',
                            width: 100,
                            id: 'team',
                        },
                        {
                            name: 'наставничество',
                            width: 100,
                            id: 'plan',
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title: <><ColoredSpan $color="var(--color-white)">главный</ColoredSpan> инженер</>,
                },
            ]
        },
        {
            id: 'irgjbfdprmvx,fkkfdnefksbFBsb',
            text: 'Строительство сети',
            style: { 'grid-area': '3/1/4/2' },
            pictureBottom: -195,
            skills: ['проектирование', 'работа с подрядчиками', 'планирование сроков', <NoTransformSpan>autoCAD</NoTransformSpan>, 'работа в команде', 'коммуникация'],
            skillsWidthDesk: [100, 100, 57, 39, 57, 39],
            skillsWidth: [100, 100, 100, 48, 48, 100],
            readyFor: ['разъездной формат','часто на объектах',],
            lastCardPadding: {
                desk: 100,
                mob: 100,
            },
            jobs: [
                {
                    id: 'j432423un',
                    title: <><ColoredSpan $color="var(--color-white)">стажер</ColoredSpan> по направлению строительства сети</>,
                    desc: 'Участвует в проектировании и приемке на объектов связи, оформляет отчеты и работает с техническими подразделениями',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'details'
                        },
                        {
                            name: 'вежливость',
                            width: 48,
                            id: 'educ'
                        },
                        {
                            name: 'работа в команде',
                            width: 48,
                            id: 'chert'
                        },
                    ]
                },
                {
                    id: 's342pe14cc',
                    title: <><ColoredSpan $color="var(--color-white)">инженер</ColoredSpan> по строительству сети</>,
                    desc: 'Планирует размещение базовых станций, проверяет подрядчиков',
                    skills: [
                        {
                            name: 'внимательность',
                            width: 100,
                            id: 'snip'
                        },
                        {
                            name: 'аккуратность',
                            width: 46,
                            id: 'processes'
                        },
                        {
                            name: <NoTransformSpan>работа в 1С</NoTransformSpan>,
                            width: 50,
                            id: 'practice'
                        },
                    ]
                },
                {
                    id: 'senSpe432cc',
                    title: <><ColoredSpan $color="var(--color-white)">ведущий</ColoredSpan> инженер / координатор проектов строительства</>,
                    desc: 'Управляет проектами по расширению сети, контролирует сроки и качество',
                    skills: [
                        {
                            name: 'ответственность',
                            width: 100,
                            id: 'team',
                        },
                        {
                            name: 'наставничество',
                            width: 100,
                            id: 'plan',
                        },
                    ]
                },
                {
                    id: 'mainSpecc',
                    title: <><ColoredSpan $color="var(--color-white)">руководитель</ColoredSpan> направления / технический директор проекта</>,
                },
            ]
        },
    ],
}