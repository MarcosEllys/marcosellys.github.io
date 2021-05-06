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
    'Software Development Engineer, graduate in ADS by FVS with expertise in Angular working with @nodejs stack, enthusiast Open Source and Free Software.',
    'Engenheiro em Desenvolvimento de Software, graduado em ADS pela FVS com expertise em Angular trabalhando com @nodejs stack, entusiasta em Open Source e Software Livre.'
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
    'present',
    'até o momento'
  ],
  descriptionBusinessTwo: [
    'Brisanet is the 9th largest internet provider in Brazil.',
    'A Brisanet é a 9ª maior provedora de internet do Brasil.'
  ],
  descriptionBusinessTwoRef1: [
    'Works with a highly trained team to deliver incredible products.',
    'Trabalha com uma equipe altamente treinada para entregar produtos incríveis.'
  ],
  descriptionBusinessTwoRef2: [
    'Serves as a developer for Javascript and all web technologies.',
    'Trabalha como desenvolvedor Javascript e com as todas tecnologias da web.'
  ],
  descriptionBusinessTwoRef3: [
    'Expert in version control, code review and CI.',
    'Especialista em controle de versão, revisão de código e CI.'
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
    'Databases (Postgres, MongoDB, Firebase).',
    'Bancos de Dados (Postgres, MongoDB, Firebase).'
  ],
  talentDescribeFour: [
    'Version Control (Git preferred).',
    'Controle de Versão (Git prefido).'
  ],
  talentDescribeFive: [
    'Tracking (GitHub, Jira, Gitlab).',
    'Rastreamento (GitHub, Jira, Gitlab).'
  ],
  talentDescribeSix: [
    'Editors (VSCode, Sublime, Atom).',
    'Editores (VSCode, Sublime, Atom).'
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
  skillsDescritption: [
    'Expert in analyze, design, implement and update web systems.',
    'Especialista em análise, design, implementação e atualização de sistemas web.'
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