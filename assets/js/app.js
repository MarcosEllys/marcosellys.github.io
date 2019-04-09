let lang = true;

const configs = {
  language: [ 'EN', 'BR' ],
  role: [ 'Software Engineer', 'Engenheiro de Software' ],
  me: [ 'About', 'Sobre' ],
  description: [
    'Software Development Engineer, graduate in ADS by FVS with expertise in Angular working with @nodejs stack, enthusiast Open Source and Free Software.',
    'Engenheiro em Desenvolvimento de Software, graduado em ADS pela FVS com expertise em Angular trabalhando com @nodejs stack, entusiasta em Open Source e Software Livre.'
  ],
  level: [ 'Experience', 'Experiência' ],
  roleOne: [ 'Software Engineer,', 'Engenheiro de Software,' ],
  startDateOne: [ 'March 2015', 'Março de 2015' ],
  endDateOne: [ 'present', 'até o momento' ],
  descriptionBusinessOne: [
    'Brisanet is the 9th largest internet provider in Brazil.',
    'A Brisanet é a 9ª maior provedora de internet do Brasil.'
  ],
  descriptionBusinessOneRef1: [
    'Works with a highly trained team to deliver incredible products.',
    'Trabalha com uma equipe altamente treinada para entregar produtos incríveis.'
  ],
  descriptionBusinessOneRef2: [
    'Serves as a developer for Javascript and all web technologies.',
    'Trabalha como desenvolvedor Javascript e com as todas tecnologias da web.'
  ],
  descriptionBusinessOneRef3: [
    'Expert in version control, code review and CI.',
    'Especialista em controle de versão, revisão de código e CI.'
  ],
  talent: [ 'Skills', 'Habilidades' ],
  talent1: [ 'Web Platform', 'Plataforma Web' ],
  talent2: [ 'Backend', 'Backend' ],
  talent3: [ 'Operations', 'Operações' ],
  talent4: [ 'Tooling', 'Ferramentas' ],
  talentDescribeOne: [ 'Accessibility (ARIA).', 'Acessibilidade (ARIA).' ],
  talentDescribeTwo: [ 'Servers (Apache, Nginx).', 'Servidores (Apache, Nginx).' ],
  talentDescribeThree: [ 'Databases (Postgres, MongoDB, Firebase).', 'Bancos de Dados (Postgres, MongoDB, Firebase).' ],
  talentDescribeFour: [ 'Version Control (Git preferred).', 'Controle de Versão (Git prefido).' ],
  talentDescribeFive: [ 'Tracking (GitHub, Jira, Gitlab).', 'Rastreamento (GitHub, Jira, Gitlab).' ],
  talentDescribeSix: [ 'Editors (VSCode, Sublime, Atom).', 'Editores (VSCode, Sublime, Atom).' ],
  formation: [ 'Education', 'Formação' ],
  roleName: [ 'Systems Analyst and Developer, ', 'Analista de Sistemas e Desenvolvedor, ' ],
  graduatedDate: [ 'Graduated in 2014', 'Graduado em 2014' ],
  skillsDescritption: [ 'Expert in analyze, design, implement and update web systems.', 'Especialista em análise, design, implementação e atualização de sistemas web.' ]
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