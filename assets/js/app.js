let lang = true;

const configs = {
  language: [
    'EN',
    'BR'
  ],
  role: [
    'Software Engineer',
    'Engenheiro de Software'
  ],
  me: [
    'About',
    'Sobre'
  ],
  projects: [
    'Projects',
    'Projetos'
  ],
  description: [
    `Software Engineer, graduated in Systems Analysis and Development from Centro Universitário Vale do Salgado, having worked most of the time with Node.js and PostgreSQL in the Back-end and passed through several frameworks and libraries for building applications in the Front-end since Jquery, ExtJS, Backbone, AngularJS and Angular.
     <br>
      I currently work as a full stack in a multidisciplinary team using Java Spring Boot, Oracle and Angular technologies at the front. This combination of using a robust and reliable language with Spring that has consolidated itself as one of the best alternatives in the Java world with the new versions of Angular that allows me to use all the premises of Object Orientation together with reactive programming allows me to build robust, reactive and reliable applications .
    `,
    `
     Engenheiro de Software, graduado em Análise e Desenvolvimento de sistemas pelo Centro Universitário Vale do Salgado, tendo trabalhado a maior parte do tempo com Node.js e PostgreSQL no Back-end e passado por vários frameworks e bibliotecas para construção de aplicações no Front-end desde Jquery, ExtJS, Backbone, AngularJS e Angular.
     <br>
     Atualmente trabalho como full stack em um time multidisciplinar utilizando Java Spring Boot, tecnologias Oracle e Angular no front. Essa combinação de utilizar uma linguagem robusta e confiável com Spring que se consolidou uma das melhores alternativas no mundo Java com as novas versões do Angular que permite utilizar todas as premissas da Orientação a Objetos juntamente com programação reativa me possibilita construir aplicações robustas, reativas e confiaveis.
    `
  ],
  level: [
    'Experience',
    'Experiência'
  ],
  roleOne: [
    'Software Engineer,',
    'Engenheiro de Software,'
  ],
  roleOneOrg: [
    'SUAC (Single Social Assistance System)',
    'SUAC (Sistema Único de Assistência Social)'
  ],
  startDateOne: [
    'February 2014',
    'Fevereiro de 2014'
  ],
  endDateOne: [
    'December 2014',
    'Dezembro de 2014'
  ],
  descriptionBusinessOneRef1: [
    'Lead developer responsible for the stack of technologies and design patterns.',
    'Desenvolvedor líder responsável pela stack de tecnologias e padrões de design.'
  ],
  descriptionBusinessOneRef2: [
    'Worked as a php developer and all web technologies.',
    'Trabalhou como desenvolvedor php e com as todas tecnologias da web.'
  ],
  descriptionBusinessTwo: [
    'Brisanet is the 5th largest internet provider in Brazil.',
    'A Brisanet é a 5ª maior provedora de internet do Brasil.'
  ],
  descriptionBusinessTwoDescription1: [
    'Junior Software Developer',
    'Desenvolvedor de Software Junior',
  ],
  descriptionBusinessTwoDescription1Start: [
    'March 2015',
    'Março de 2015'
  ],
  descriptionBusinessTwoDescription1End: [
    'february 2016',
    'Fevereiro de 2016'
  ],
  descriptionBusinessTwoRef1_1: [
    '- Working as a Front-end using the ExtJS framework I was responsible for developing OTT middleware applications for IPTV and online platform management, having as some of the features: Registration and management of channels, packages, covers, descriptions and programming guides.',
    '- Trabalhando como Front-end utilizando o framework ExtJS fui responsável por desenvolver aplicações middleware OTT para IPTV e gerenciamento de plataforma online, tendo como algumas das funcionalidades: Cadastro e gerenciamento de canais, pacotes, capas, descrições e guias de programação.',
  ],
  descriptionBusinessTwoRef1_2: [
    '- Responsible for performing functional testing, usability testing and integration testing.',
    '- Responsável por realizar testes funcionais, testes de usabilidade e testes de integração.'
  ],
  descriptionBusinessTwoRef1_3: [
    '- Responsible for implementing new features, improvements and bug fixes.',
    '- Responsável por implementar novas funcionalidades, melhorias e correções de bug.',
  ],
  descriptionBusinessTwoRef1_4: [
    '- Responsible for training, training and developing platform administrators so that they could act with autonomy, flexibility and agility.',
    '- Responsável por treinar, capacitar e desenvolver administradores da plataforma para que pudessem agir com autonomia, flexibilidade e agilidade.',
  ],
  descriptionBusinessTwoDescription2: [
    'Middle Front-end Developer',
    'Desenvolvedor Front-end Pleno',
  ],
  descriptionBusinessTwoDescription2Start: [
    'March 2016',
    'Março de 2016'
  ],
  descriptionBusinessTwoDescription2End: [
    'february 2018',
    'Fevereiro de 2018'
  ],
  descriptionBusinessTwoRef2_1: [
    '- Front-end developer working on fixing, creation and improvement of new components and processes using AngularJS and ExtJS frameworks.',
    '- Desenvolvedor Front-end atuando na correção, criação e melhoria de novos componentes e processos utilizando os frameworks AngularJS e ExtJS.',
  ],
  descriptionBusinessTwoRef2_2: [
    '- Responsible for structuring and implementing the authentication and authorization system.',
    '- Responsável por estruturar e implementar o sistema de autenticação e autorização.',
  ],
  descriptionBusinessTwoRef2_3: [
    '- Responsible for implementing reports and dashboards with graphs, tables and lists using GeoJSON, D3.js, JsPDF.',
    '- Responsável por implementar relatórios e dashboards com gráficos, tabelas e listas utilizando GeoJSON, D3.js, JsPDF.',
  ],
  descriptionBusinessTwoRef2_4: [
    '- Responsible for conducting code review.',
    '- Responsável por realizar revisão de código.',
  ],
  descriptionBusinessTwoDescription3: [
    'Desenvolvedor Full Stack Back-End middle level',
    'Desenvolvedor Full Stack Back-End middle level',
  ],
  descriptionBusinessTwoDescription3Start: [
    'March 2018',
    'Março de 2018'
  ],
  descriptionBusinessTwoDescription3End: [
    'february 2020',
    'Fevereiro de 2020'
  ],
  descriptionBusinessTwoRef3_1: [
    '- Mainly using Node, Typescript, Angular and Perl technologies, I worked on several projects adding new features and performing integrations.',
    '- Utilizando principalmente as tecnologias Node, Typescript, Angular e Perl atuei em vários projetos adicionando novas funcionalidades e realizando integrações.',
  ],
  descriptionBusinessTwoRef3_2: [
    '- Developer responsible for researching, testing, validating and implementing new technologies and tools.',
    '- Desenvolvedor responsável por pesquisar, testar, validar e implementar novas tecnologias e ferramentas.',
  ],
  descriptionBusinessTwoRef3_3: [
    '- Working in multiple teams, he contributed to the CRM project that managed the entire lifecycle of customers, interactions via ticket and equipment management of the FTTH network.',
    '- Atuando em multiplos times contribui para o projeto de CRM que gerenciava todo o ciclo de vida dos clientes, interações via chamado e gerenciamento de equipamentos da rede FTTH.',
  ],
  descriptionBusinessTwoRef3_4: [
    '- Developer in the monitoring project of the company\'s entire FTTH network, including monitoring the status of the UN (Optical Network Unit), PON and OLTs Slots.',
    '- Desenvolvedor no projeto de monitoramento de toda a rede FTTH da empresa, incluindo o monitoramento do status das ONU (Optical Network Unit), PON e Slots das OLTs.',
  ],
  descriptionBusinessTwoRef3_5: [
    '- Technical leader of the CRM project working with stakeholders and everyone involved in the integration of new features and fixes.',
    '- Líder técnico do projeto de CRM atuando com os stackeholders e todos os envolvidos na integração de novas funcionalidades e correções.',
  ],

  descriptionBusinessTwoDescription4: [
    'Expert systems developer',
    'Desenvolvedor de sistemas especialista',
  ],
  descriptionBusinessTwoDescription4Start: [
    'March 2020',
    'Março de 2020'
  ],
  descriptionBusinessTwoDescription4End: [
    'June 2021',
    'Junho de 2021'
  ],
  descriptionBusinessTwoRef4_1: [
    '- Acting as an expert developer I participated in several teams directing implementations and assisting in new integrations. ',
    '- Atuando como desenvolvedor especialista participei de várias equipes direcionando implementações e auxiliando em novas integrações.',
  ],
  descriptionBusinessTwoRef4_2: [
    '- I worked on the implementation and integration of the company\'s private chat using Rocket.Chat.',
    '- Atuei na implementação e integração do chat privado da empresa utilizando Rocket.Chat.',
  ],
  descriptionBusinessTwoRef4_3: [
    '- Using the Kanban methodology, I worked directly on the development of the SSO (Single sign-on) project, I helped all teams in the integration, unifying and centralizing the users session.',
    '- Utilizando a metodologia Kanban atuei diretamente no desenvolvimento do projeto SSO (Single sign-on), auxiliei todos os times na integrção unificando e centralizando a sessão dos usuários.',
  ],
  descriptionBusinessTwoRef4_4: [
    '- I was part of the team that coordinated and created the styles, components, services library and the authorization part, centralizing the entire knowledge base used by all teams.',
    '- Participei da equipe que coordenou e criou a biblioteca de styles, components, services e a parte de autorização, centralizando toda a base de conhecimento utilizada por todas as equipes.',
  ],
  descriptionBusinessTwoRef4_5: [
    '- I was part of the team that designed, implemented and evolved the Dashboards system, a Server-Driven UI system for reports, cards and graphics.',
    '- Fiz parte do time que projetou, implementou e evoluiu o sistema de Dashboards, um sistema Server-Driven UI de relatórios, cards e gráficos.',
  ],
  roleThree: [
    'Software Engineer,',
    'Engenheiro de Software,'
  ],
  startDateThree: [
    'July 2021',
    'Julho de 2021'
  ],
  endDateThree: [
    'November 2021',
    'Novembro de 2021'
  ],
  descriptionBusinessThree: [
    'Business group focused on developing agility, productivity and innovation.',
    'Grupo empresarial com foco em desenvolver a agilidade, produtividade e inovação.'
  ],
  descriptionBusinessThreeRef1: [
    'Member of the new technologies sector, working with complex and innovative projects.',
    'Membro do setor de novas tecnologias, trabalhando com projetos complexos e inovadores.'
  ],
  descriptionBusinessThreeRef2: [
    'works in a multidisciplinary team.',
    'trabalha em um time multidisciplinar.'
  ],
  descriptionBusinessThreeRef3: [
    'Works as a full stack developer using Java and Typescript. ',
    'Trabalha como desenvolvedor full stack utilizando Java e Typescript.'
  ],

  roleFour: [
    'Specialist fullstack,',
    'Especialista fullstack,'
  ],
  startDateFour: [
    'November 2021',
    'Novembro de 2021'
  ],
  endDateFour: [
    'present',
    'até o momento'
  ],
  descriptionBusinessFour: [
    'TOTVS is the largest technology company in Brazil',
    'TOTVS é a maior empresa de tecnologia do Brasil'
  ],
  descriptionBusinessFourRef1: [
    'Angular Specialist responsible for evolving multi-library architectures.',
    'Especialista em Angular responsável por evoluir arquiteturas multi libs.'
  ],
  descriptionBusinessFourRef2: [
    'Works as a full stack developer using mainly Java, Typescript, Microservices, RabbitMQ and Postgres.',
    'Trabalha como desenvolvedor full stack utilizando principalmente Java, Typescript, Microservices, RabbitMQ e Postgres.'
  ],
  descriptionBusinessFourRef3: [
    'Works in the evolution of mobile applications with ionic.',
    'Atua na evolução de aplicações mobile com ionic.'
  ],
  descriptionBusinessFourRef4: [
    'Works in the evolution of mobile applications with ionic.',
    'Atua na evolução de aplicações mobile com ionic.'
  ],
  descriptionBusinessFourRef5: [
    'Cooperates to maintain and improve manual, unit and integration processes and tests.',
    'Coopera para manter e melhorar processos e testes manuais, unitários e de integração.'
  ],
  descriptionBusinessFourRef6: [
    'Member of the tech and front guild.',
    'Membro da guild de tecnologia e de front.'
  ],
  talent: [
    'Hard Skills',
    'Habilidades técnicas'
  ],
  talent1: [
    'Web Platform',
    'Plataforma Web'
  ],
  talent2: [
    'Backend',
    'Backend'
  ],
  talent3: [
    'Operations',
    'Operações'
  ],
  talent4: [
    'Tooling',
    'Ferramentas'
  ],
  talentDescribeOne: [
    'Accessibility (ARIA).',
    'Acessibilidade (ARIA).'
  ],
  talentDescribeTwo: [
    'Servers (Apache, Nginx).',
    'Servidores (Apache, Nginx).'
  ],
  talentDescribeThree: [
    'Databases (Oracle 11g, Postgres, Redis, Firebase).',
    'Bancos de Dados (Oracle 11g, Postgres, Redis, Firebase).'
  ],
  talentDescribeFive: [
    'Tracking (GitHub, Bitbucket, Jira, Gitlab).',
    'Rastreamento (GitHub, Bitbucket, Jira, Gitlab).'
  ],
  talentDescribeSix: [
    'Editors (VSCode, IntelliJ, Sublime Text).',
    'Editores (VSCode, IntelliJ, Sublime Text).'
  ],
  talentDescribeSeven: [
    'Database administration (pgAdmin 3 and 4, DBeaver, DataGrip).',
    'Administração de banco de dados (pgAdmin 3 and 4, DBeaver, DataGrip).',
  ],
  formation: [
    'Education',
    'Educação'
  ],
  roleName: [
    'Systems Analyst and Developer, ',
    'Analista de Sistemas e Desenvolvedor, '
  ],
  graduatedDate: [
    'Graduated in 2014',
    'Graduado em 2014'
  ],
  courseOne: [
    'Remote Team Management, ',
    'Gestão de Equipes Remotas, '
  ],
  courseOneDate: [
    'May 2021',
    'Maio de 2021'
  ],
  courseOneDescription: [
    'Course with the main objective is to present concepts, tools and techniques to effectively manage remote teams.',
    'Curso com o objetivo principal é apresentar conceitos, ferramentas e técnicas para gerenciar, efetivamente, equipes remotas. '
  ],
  skillsDescritption: [
    'Specialist in computational tools and project methodologies in systems production. Use programming languages and methodologies in the construction of projects, paying attention to quality, usability, robustness, integrity and security.',
    'Especialista em ferramentas computacionais e metodologias de projetos na produção de sistemas. Utilizando linguagens de programação e metodologias na construção de projetos, atento a qualidade, usabilidade, robustez, integridade e segurança.'
  ],
  courseTwo: [
    'Scrum Fundamentals Certified, ',
    'Scrum Fundamentals Certified, '
  ],
  courseTwoDate: [
    'Jun 2021',
    'Junho de 2021'
  ],
  courseTwoDescription: [
    'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.',
    'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.'
  ],
  courseThree: [
    'DevOps & Agile Culture, ',
    'DevOps & Agile Culture, '
  ],
  courseThreeDate: [
    'July 2021',
    'Julho de 2021'
  ],
  courseThreeDescription: [
    'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.',
    'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.'
  ],
  courseFour: [
    'Angular: Testes automatizados com jasmine e karma, ',
    'Angular: Testes automatizados com jasmine e karma, '
  ],
  courseFourDate: [
    'November 2021',
    'Novembro de 2021'
  ],
  courseFourDescription: [
    'Test services and components, create custom pipelines and generate coverage metrics.',
    'Teste serviços e componentes, crie pipelines customizadas e gere métricas de cobertura.'
  ],
  courseFive: [
    'Angular: Avançando com testes automatizados, ',
    'Angular: Avançando com testes automatizados, '
  ],
  courseFiveDate: [
    'December 2021',
    'Dezembro de 2021'
  ],
  courseFiveDescription: [
    'Master the use of fakeAsync, use mock providers in component tests, advance in the use of Spies.',
    'Domine o uso de fakeAsync, utilize mock providers em testes de componentes, avance no uso de Spies.'
  ],
  courseSix: [
    'Unit Testing in Angular, ',
    'Unit Testing in Angular, '
  ],
  courseSixDate: [
    'February 2022',
    'Fevereiro de 2022'
  ],
  courseSixDescription: [
    'Automated tests are an important ingredient in a successful project. This course will teach you everything you need to know to unit test your Angular projects, including testing services, component templates, and dealing with asynchronous code.',
    'Automated tests are an important ingredient in a successful project. This course will teach you everything you need to know to unit test your Angular projects, including testing services, component templates, and dealing with asynchronous code.'
  ],
  courseSeven: [
    'Kubernetes: Pods, Services e ConfigMaps, ',
    'Kubernetes: Pods, Services e ConfigMaps, '
  ],
  courseSevenDate: [
    'April 2022',
    'Abril de 2022'
  ],
  courseSevenDescription: [
    'Learn about Kubernetes architecture, manage Pods with kubectl, configure environment settings using ConfigMaps.',
    'Conheça arquitetura Kubernetes, gerencie Pods com o kubectl, defina configurações de ambiente utilizando ConfigMaps.'
  ],
  courseEight: [
    'Remote management, ',
    'Gestão remota, '
  ],
  courseEightDate: [
    'July 2022',
    'Julho de 2022'
  ],
  courseEightDescription: [
    'Learn the best practices and work tools for effective remote management and ensuring speed in the progress of all your teams projects.',
    'Aprenda as melhores práticas e ferramentas de trabalho para fazer uma gestão remota eficaz e garantir velocidade no andamento de todos os projetos dos seus times.'
  ],
  courseNine: [
    'Smart Productivity, ',
    'Produtividade inteligente, '
  ],
  courseNineDate: [
    'February 2022',
    'Fevereiro de 2023'
  ],
  courseNineDescription: [
    'The Intelligent Productivity course presents a practical approach, bringing information that can be applied in everyday professional, academic and personal life.',
    'O curso produtividade inteligente apresenta uma abordagem prática, trazendo informações que podem ser aplicadas no dia a dia profissional, acadêmico e pessoal.'
  ],
  descriptionOpenSource: [
    'With experience in open source projects and privates, i already contributes to community and private companies projects like Globo.com.',
    'Com experiência em projetos open source e privados, eu já contribui para projetos da comunide e de empresas privadas como Globo.com.'
  ],
  descriptionOpenSourceOne: [
    'A newman html report template which contains request and response details (body plus http headers) in the report. (similar what you could get with the newman v2 -O out option).',
    'Um modelo de relatório html newman que contém detalhes de request e responde (body, headers do http) no relatório. (semelhante ao que você poderia obter com a opção newman v2 -O out).'
  ],
  descriptionOpenSourceOneRef1: [
    'Simple interface.',
    'Interface simples.',
  ],
  descriptionOpenSourceOneRef2: [
    'Contains dashboard.',
    'Contém dashboard.',
  ],
  descriptionOpenSourceOneRef3: [
    'Contains filter search.',
    'Contém pesquisa com filtros.',
  ]
}

const createState = function(state) {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value;
      return render();
    }
  });
};

const state = createState({ configs });

const loopKeys = function(nextFunc) { Object.keys(configs).forEach(nextFunc); };

const render = function() {
  loopKeys(function(key){ document.querySelector('[data-binding="'+key+'"]').innerHTML = state[key]; })
};

const changeLang = function() {
  lang = !lang;
  loopKeys(function(key) { state[key] = configs[key][Number(lang)];});
};

changeLang();