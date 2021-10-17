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
    `Software Engineer, graduated in Systems Analysis and Development from Centro Universitário Vale do Salgado, having worked most of the time with Node.js and PostgreSQL in the Back-end and passed through several frameworks and libraries for building applications in the Front-end since Jquery, ExtJS, Backbone, AngularJS and currently Angular.
     <br>
      I currently work as a full stack in a multidisciplinary team using Java Spring Boot, Oracle and Angular technologies at the front. This combination of using a robust and reliable language with Spring that has consolidated itself as one of the best alternatives in the Java world with the new versions of Angular that allows me to use all the premises of Object Orientation together with reactive programming allows me to build robust, reactive and reliable applications .
    `,
    `
     Engenheiro de Software, graduado em Análise e Desenvolvimento de sistemas pelo Centro Universitário Vale do Salgado, tendo trabalhado a maior parte do tempo com Node.js e PostgreSQL no Back-end e passado por vários frameworks e bibliotecas para construção de aplicações no Front-end desde Jquery, ExtJS, Backbone, AngularJS e atualmente Angular.
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
    'SUAC (Unified Social Assistance System)',
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
    'Worked as a php developer and with all web technologies.',
    'Trabalhou como desenvolvedor php e com as todas tecnologias da web.'
  ],
  roleTwo: [
    'Software Engineer,',
    'Engenheiro de Software,'
  ],
  startDateTwo: [
    'March 2015',
    'Março de 2015'
  ],
  endDateTwo: [
    'June 2021',
    'Junho de '
  ],
  descriptionBusinessTwo: [
    'Brisanet is the 5th largest internet provider in Brazil.',
    'A Brisanet é a 5ª maior provedora de internet do Brasil.'
  ],
  descriptionBusinessTwoRef1: [
    'Experience in project management using agile methodologies Scrum, Kanban and LEAN.',
    'Experiência em gerenciamento de projetos utilizando as metodologias agéis Scrum, Kanban and LEAN.'
  ],
  descriptionBusinessTwoRef2: [
    'Expert in version control, code review and CI.',
    'Especialista em controle de versão, revisão de código e CI.'
  ],
  descriptionBusinessTwoRef3: [
    'Serves as a developer for Javascript and all web technologies.',
    'Trabalha como desenvolvedor Javascript e com as todas tecnologias da web.'
  ],
  descriptionBusinessTwoRef4: [
    'Worked with dashboard, graph and systems with map.',
    'Trabalhou com sistemas de dashboards, gráficos e mapas.'
  ],
  descriptionBusinessTwoRef5: [
    'Experience in complex systems incl. multiple permissions and authorizations .',
    'Experiência em sistemas complexos incl. múltiplas permissões e autorizações.'
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
    'present',
    'até o momento'
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
    'Trabalha como desenvolvedor full stack utilizando Java e Typescript..'
  ],
  talent: [
    'Skills',
    'Habilidades'
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
  talentDescribeFour: [
    'Version Control (Git preferred).',
    'Controle de Versão (Git prefido).'
  ],
  talentDescribeFive: [
    'Tracking (GitHub, Bitbucket, Jira, Gitlab).',
    'Rastreamento (GitHub, Bitbucket, Jira, Gitlab).'
  ],
  talentDescribeSix: [
    'Editors (VSCode, IntelliJ, Sublime).',
    'Editores (VSCode, IntelliJ, Sublime).'
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
    'Remote Team Management ',
    'Gestão de Equipes Remotas'
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
    'Scrum Fundamentals Certified',
    'Scrum Fundamentals Certified'
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
    'DevOps & Agile Culture',
    'DevOps & Agile Culture'
  ],
  courseThreeDate: [
    'Jul 2021',
    'Julho de 2021'
  ],
  courseThreeDescription: [
    'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.',
    'Scrum Fundamentals Certified course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK® Guide; and to get a basic understanding of how Scrum framework works in delivering successful projects.'
  ],
  skillsDescritption: [
    'Specialist in computational tools and project methodologies in systems production. Use programming languages and methodologies in the construction of projects, paying attention to quality, usability, robustness, integrity and security.',
    'Especialista em ferramentas computacionais e metodologias de projetos na produção de sistemas. Utilizando linguagens de programação e metodologias na construção de projetos, atento a qualidade, usabilidade, robustez, integridade e segurança.'
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
  ],
  descriptionOpenSourceTwo: [
    'A simple PWA with the animal catalog and the technical sheet of each, with cute information provided by my children.',
    'Uma simples  PWA com o catálogo de animais e a ficha técnica  de cada, com informações fofinhas fornecidas pelos meus filhos.'
  ],
  descriptionOpenSourceTwoRef1: [
    'Pretty cool interface.',
    'Interface bem legal.',
  ],
  descriptionOpenSourceTwoRef2: [
    'Beautiful animations.',
    'Bonitas animações.',
  ],
  descriptionOpenSourceTwoRef3: [
    'Progressive Web App.',
    'Progressive Web App.',
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