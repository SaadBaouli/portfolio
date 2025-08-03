import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs, 
  FaVuejs,
  FaDatabase,
  FaArrowUp,
  FaGithub,
  FaNpm,
  FaStackOverflow,
  FaChartLine,
  FaUsers,
  FaCodeBranch,
  FaMobile,
  FaServer,
  FaPhp,
  FaFire,
  FaPalette,
  FaMagic
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiRedux, 
  SiNextdotjs, 
  SiVite, 
  SiWebpack,
  SiTailwindcss,
  SiFirebase
} from 'react-icons/si';


const StatCard = ({ icon, value, label }) => (
  <motion.div 
    className="bg-white/5 p-4 rounded-lg flex items-center gap-3"
    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
  >
    <div className="text-2xl text-secondary">{icon}</div>
    <div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </motion.div>
);


const Timeline = ({ events }) => (
  <div className="relative pl-8 border-l-2 border-secondary/50">
    {events.map((event, idx) => (
      <div key={idx} className="mb-6 relative">
        <div className="absolute -left-9 top-1 w-4 h-4 rounded-full bg-secondary border-2 border-white"></div>
        <div className="text-secondary font-semibold">{event.year}</div>
        <div className="text-gray-300">{event.description}</div>
      </div>
    ))}
  </div>
);

const details = {
  react: {
    name: 'React',
    icon: <FaReact className="text-sky-400 text-[80px]" />,
    definition:
      "React est une bibliothèque JavaScript open-source développée par Facebook pour construire des interfaces utilisateur. Elle introduit le concept révolutionnaire de DOM virtuel et de composants réutilisables, changeant fondamentalement la manière dont les développeurs conçoivent les applications web.",
    created: "2013",
    creator: "Jordan Walke (Facebook)",
    evolution:
      "Depuis son lancement, React a dominé l'écosystème frontend, inspirant de nombreux autres frameworks. Son adoption massive par des entreprises comme Netflix, Airbnb et Instagram en a fait une compétence essentielle pour les développeurs web. La communauté a créé un écosystème riche avec des outils comme Next.js, Gatsby, et des bibliothèques d'état comme Redux et Zustand.",
    technicalDetails: {
      language: "JavaScript (avec support TypeScript)",
      paradigm: "Déclaratif, Composants, Fonctionnel",
      virtualDOM: "Oui (optimisation des performances)",
      serverSideRendering: "Possible via Next.js",
      license: "MIT",
      latestVersion: "18.2.0 (2023)",
      bundleSize: "~6kB (gzipped)"
    },
    statistics: [
      { icon: <FaGithub />, value: "210k+", label: "Stars GitHub" },
      { icon: <FaNpm />, value: "17M+/semaine", label: "Téléchargements npm" },
      { icon: <FaStackOverflow />, value: "1.2M+", label: "Questions StackOverflow" },
      { icon: <FaUsers />, value: "78%", label: "Utilisation chez les devs frontend" }
    ],
    ecosystem: [
      { name: "Next.js", description: "Framework SSR/SSG pour React", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Redux", description: "Gestion d'état prévisible", icon: <SiRedux className="text-purple-500" /> },
      { name: "React Native", description: "Développement mobile cross-platform", icon: <FaMobile className="text-blue-400" /> },
      { name: "Vite", description: "Tooling moderne pour React", icon: <SiVite className="text-yellow-500" /> }
    ],
    timeline: [
      { year: "2011", description: "Première version interne chez Facebook (FaxJS)" },
      { year: "2013", description: "Sortie open-source à JSConf US" },
      { year: "2015", description: "Introduction de React Native" },
      { year: "2016", description: "Sortie de Redux et adoption massive" },
      { year: "2018", description: "Introduction des Hooks (v16.8)" },
      { year: "2020", description: "Concurrent Mode et Server Components annoncés" },
      { year: "2022", description: "Sortie de React 18 avec streaming SSR" }
    ],
    performance: "React optimise les mises à jour du DOM grâce à son algorithme de réconciliation et son DOM virtuel. Les benchmarks montrent des performances 30-50% meilleures que les frameworks MVVM traditionnels pour les applications complexes.",
    links: [
      { label: 'Site officiel', url: 'https://reactjs.org/' },
      { label: 'Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { label: 'React GitHub', url: 'https://github.com/facebook/react' },
      { label: 'Benchmarks', url: 'https://krausest.github.io/js-framework-benchmark/' }
    ],
  },
  laravel: {
    name: 'Laravel',
    icon: <FaLaravel className="text-red-500 text-[80px]" />,
    definition:
      "Laravel est un framework PHP moderne qui a révolutionné le développement backend avec son élégance syntaxique, son système de routage expressif et son ORM Eloquent. Il suit le pattern MVC et intègre des solutions prêtes à l'emploi pour l'authentification, les queues, les tests et plus.",
    created: "2011",
    creator: "Taylor Otwell",
    evolution:
      "Laravel est rapidement devenu le framework PHP le plus populaire, dépassant des alternatives comme Symfony et CodeIgniter. Son écosystème inclut des outils comme Laravel Forge, Vapor, et des packages officiels pour des fonctionnalités avancées. La communauté Laravel est particulièrement active avec des conférences mondiales (Laracon) et une documentation exemplaire.",
    technicalDetails: {
      language: "PHP (8.0+)",
      pattern: "MVC (Modèle-Vue-Contrôleur)",
      orm: "Eloquent ORM",
      templating: "Blade",
      queueSystem: "Oui (Redis, SQS, etc.)",
      license: "MIT",
      latestVersion: "10.x (2023)",
      requirements: "PHP 8.1+, Composer"
    },
    statistics: [
      { icon: <FaGithub />, value: "74k+", label: "Stars GitHub" },
      { icon: <FaCodeBranch />, value: "2.3k+", label: "Contributeurs" },
      { icon: <FaStackOverflow />, value: "180k+", label: "Questions" },
      { icon: <FaUsers />, value: "65%", label: "Part de marché PHP" }
    ],
    ecosystem: [
      { name: "Livewire", description: "Full-stack framework pour Laravel", icon: <FaCodeBranch className="text-blue-500" /> },
      { name: "Nova", description: "Administration premium", icon: <FaServer className="text-green-500" /> },
      { name: "Sail", description: "Environnement Docker", icon: <FaDatabase className="text-blue-300" /> },
      { name: "Vapor", description: "Serverless deployment", icon: <FaChartLine className="text-purple-400" /> }
    ],
    timeline: [
      { year: "2011", description: "Première version de Laravel" },
      { year: "2013", description: "Sortie de Laravel 4 avec Composer" },
      { year: "2015", description: "Laravel 5 introduit Elixir et Socialite" },
      { year: "2017", description: "Laravel 5.5 avec auto-discovery" },
      { year: "2019", description: "Laravel 6 et Horizon" },
      { year: "2020", description: "Laravel 8 avec Jetstream" },
      { year: "2022", description: "Laravel 9 avec PHP 8.0 requirement" },
      { year: "2023", description: "Laravel 10 avec Laravel Pennant" }
    ],
    performance: "Laravel offre des performances compétitives pour un framework full-stack, avec des optimisations comme le cache de routes, le préchargement OPcache, et le support natif de Redis. Les benchmarks montrent des temps de réponse de 100-300ms pour des applications moyennes avec un bon hébergement.",
    links: [
      { label: 'Site officiel', url: 'https://laravel.com/' },
      { label: 'Documentation', url: 'https://laravel.com/docs' },
      { label: 'Laravel News', url: 'https://laravel-news.com/' },
      { label: 'Packagist Stats', url: 'https://packagist.org/packages/laravel/framework/stats' }
    ],
  },
  mysql: {
    name: 'MySQL',
    icon: <FaDatabase className="text-amber-400 text-[80px]" />,
    definition:
      "MySQL est un système de gestion de base de données relationnelle (SGBDR) open-source qui utilise le langage SQL. Il est un composant central de la stack LAMP et est réputé pour sa fiabilité, sa rapidité et sa facilité d'utilisation. MySQL est utilisé par des géants comme Facebook, YouTube et Twitter.",
    created: "1995",
    creator: "Michael Widenius (MySQL AB)",
    evolution:
      "Acquis par Oracle en 2010, MySQL reste l'une des bases de données les plus populaires au monde. Le fork MariaDB a gagné en popularité dans la communauté open-source. MySQL continue d'innover avec des fonctionnalités comme les JSON fields, les window functions et le support spatial.",
    technicalDetails: {
      type: "Relationnel (SGBDR)",
      license: "GPL (version communautaire)",
      storageEngines: "InnoDB, MyISAM, Memory, etc.",
      replication: "Master-slave, group replication",
      latestVersion: "8.0 (2023)",
      maxDbSize: "256TB",
      maxTableSize: "64TB",
      languages: "C, C++"
    },
    statistics: [
      { icon: <FaDatabase />, value: "#2", label: "DB la plus populaire" },
      { icon: <FaChartLine />, value: "5.7M", label: "Installations" },
      { icon: <FaStackOverflow />, value: "450k+", label: "Questions" },
      { icon: <FaUsers />, value: "55%", label: "Utilisation web" }
    ],
    ecosystem: [
      { name: "MariaDB", description: "Fork communautaire de MySQL", icon: <FaCodeBranch className="text-red-500" /> },
      { name: "Percona", description: "Version optimisée de MySQL", icon: <FaServer className="text-blue-500" /> },
      { name: "MySQL Workbench", description: "Outil visuel officiel", icon: <FaDatabase className="text-orange-500" /> },
      { name: "ProxySQL", description: "Proxy haute performance", icon: <FaChartLine className="text-green-500" /> }
    ],
    timeline: [
      { year: "1995", description: "Première version de MySQL" },
      { year: "2000", description: "Support des transactions avec InnoDB" },
      { year: "2008", description: "Acquisition par Sun Microsystems" },
      { year: "2010", description: "Acquisition par Oracle" },
      { year: "2013", description: "MySQL 5.6 avec optimisation InnoDB" },
      { year: "2015", description: "MySQL 5.7 avec JSON support" },
      { year: "2018", description: "MySQL 8.0 avec CTE et window functions" },
      { year: "2021", description: "MySQL HeatWave (DB cloud)" }
    ],
    performance: "MySQL peut gérer des millions de requêtes par seconde sur du matériel approprié. Les benchmarks montrent des performances de 50,000 requêtes simples par seconde sur un serveur moyen. InnoDB offre des transactions ACID complètes avec isolation des niveaux de lecture.",
    links: [
      { label: 'Site officiel', url: 'https://www.mysql.com/' },
      { label: 'Documentation', url: 'https://dev.mysql.com/doc/' },
      { label: 'Benchmarks', url: 'https://www.mysql.com/why-mysql/benchmarks/' },
      { label: 'MySQL vs MariaDB', url: 'https://mariadb.com/kb/en/mariadb-vs-mysql-features/' }
    ],
  },
  html5: {
    name: 'HTML5',
    icon: <FaHtml5 className="text-orange-500 text-[80px]" />,
    definition:
      "HTML5 est la cinquième et actuelle version majeure du HTML (HyperText Markup Language), le langage fondamental du web. Il introduit des éléments sémantiques, des APIs puissantes et une meilleure intégration multimédia, réduisant le besoin de plugins tiers comme Flash.",
    created: "2014 (finalisé)",
    creator: "WHATWG / W3C",
    evolution:
      "HTML5 a marqué une révolution dans le développement web en standardisant des fonctionnalités auparavant dépendantes de JavaScript ou de plugins. Il a permis le développement d'applications web riches (PWAs) et a été adopté par tous les navigateurs modernes. Le développement continue avec des spécifications comme HTML 5.3.",
    technicalDetails: {
      version: "HTML5.3 (2021)",
      mediaSupport: "Audio, Vidéo, Canvas, WebGL",
      storage: "LocalStorage, IndexedDB",
      apis: "Geolocation, Drag&Drop, Web Workers",
      semantics: "Header, Footer, Article, Section",
      compatibility: "Tous navigateurs modernes",
      doctype: "<!DOCTYPE html>"
    },
    statistics: [
      { icon: <FaUsers />, value: "100%", label: "Adoption navigateurs" },
      { icon: <FaCodeBranch />, value: "50+", label: "Nouvelles balises" },
      { icon: <FaChartLine />, value: "1B+", label: "Sites utilisant HTML5" },
      { icon: <FaStackOverflow />, value: "1M+", label: "Questions" }
    ],
    ecosystem: [
      { name: "Web Components", description: "Custom Elements API", icon: <FaHtml5 className="text-blue-500" /> },
      { name: "Canvas API", description: "Dessin 2D dans le navigateur", icon: <FaCodeBranch className="text-green-500" /> },
      { name: "Web Storage", description: "Stockage côté client", icon: <FaDatabase className="text-yellow-500" /> },
      { name: "Web Workers", description: "Multithreading JavaScript", icon: <FaServer className="text-purple-500" /> }
    ],
    timeline: [
      { year: "2004", description: "WHATWG forme pour développer HTML5" },
      { year: "2008", description: "Première draft HTML5" },
      { year: "2011", description: "Support initial par les navigateurs" },
      { year: "2014", description: "Recommandation officielle HTML5" },
      { year: "2016", description: "HTML 5.1 devient standard" },
      { year: "2017", description: "HTML 5.2 publié" },
      { year: "2021", description: "HTML 5.3 working draft" }
    ],
    performance: "HTML5 offre des performances optimales pour le rendu de contenu, avec des améliorations comme le parsing algorithmique et le rendu progressif. Les éléments natifs comme <video> et <canvas> offrent des performances 2-5x meilleures que les solutions plugin équivalentes.",
    links: [
      { label: 'W3C HTML5', url: 'https://www.w3.org/TR/html5/' },
      { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
      { label: 'HTML5 Test', url: 'https://html5test.com/' },
      { label: 'Can I Use', url: 'https://caniuse.com/' }
    ],
  },
  css3: {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-blue-600 text-[80px]" />,
    definition:
      "CSS3 est la dernière évolution des Cascading Style Sheets, le langage qui décrit la présentation des documents HTML. CSS3 introduit des modules comme Flexbox, Grid, animations, transitions et media queries, permettant des designs responsives et complexes sans JavaScript.",
    created: "1999 (début) / 2011 (standardisé)",
    creator: "W3C",
    evolution:
      "CSS3 a transformé le design web en permettant des mises en page complexes qui s'adaptent automatiquement à tout appareil. L'ajout de variables CSS (custom properties), de calculs (calc()) et de fonctions a rendu CSS plus puissant et maintenable. Les préprocesseurs comme Sass ont étendu ses capacités.",
    technicalDetails: {
      modules: "Flexbox, Grid, Animations, etc.",
      specificity: "Système de poids (0,0,0,0)",
      preprocessors: "Sass, Less, Stylus",
      postprocessor: "PostCSS",
      frameworks: "Tailwind, Bootstrap, Bulma",
      latestFeatures: "Container Queries, :has()"
    },
    statistics: [
      { icon: <FaUsers />, value: "100%", label: "Adoption navigateurs" },
      { icon: <FaCodeBranch />, value: "70+", label: "Modules CSS" },
      { icon: <FaChartLine />, value: "98%", label: "Sites utilisant CSS3" },
      { icon: <FaStackOverflow />, value: "800k+", label: "Questions" }
    ],
    ecosystem: [
      { name: "Sass", description: "Préprocesseur CSS", icon: <FaCodeBranch className="text-pink-500" /> },
      { name: "Tailwind CSS", description: "Framework utility-first", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "CSS Modules", description: "Local scope pour CSS", icon: <FaServer className="text-green-500" /> },
      { name: "PostCSS", description: "Transformation CSS avec JS", icon: <FaDatabase className="text-red-500" /> }
    ],
    timeline: [
      { year: "1996", description: "CSS1 devient recommandation" },
      { year: "1998", description: "CSS2 publié" },
      { year: "1999", description: "Début du développement CSS3" },
      { year: "2009", description: "Flexbox introduit" },
      { year: "2011", description: "Premiers modules CSS3 finalisés" },
      { year: "2017", description: "CSS Grid devient standard" },
      { year: "2020", description: "Variables CSS largement supportées" },
      { year: "2022", description: "Container Queries implémentées" }
    ],
    performance: "Le rendu CSS moderne est hautement optimisé dans les navigateurs, avec des moteurs comme Blink (Chrome) et Gecko (Firefox) offrant des performances de rendu à 60fps. Les techniques comme le hardware acceleration et le will-change property permettent des animations fluides.",
    links: [
      { label: 'W3C CSS3', url: 'https://www.w3.org/TR/css-2018/' },
      { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
      { label: 'CSS Tricks', url: 'https://css-tricks.com/' },
      { label: 'Can I Use', url: 'https://caniuse.com/' }
    ],
  },
  javascript: {
  name: 'JavaScript',
  icon: <FaJs className="text-yellow-400 text-[80px]" />,
  definition:
    "JavaScript est un langage de script orienté objet principalement utilisé pour rendre les pages web interactives. C'est un langage clé du développement web avec HTML et CSS, permettant de créer des expériences utilisateur dynamiques. JavaScript s'exécute côté client mais peut aussi être utilisé côté serveur avec Node.js.",
  created: "1995",
  creator: "Brendan Eich (Netscape)",
  evolution:
    "Initialement créé en 10 jours sous le nom Mocha, JavaScript est devenu un langage puissant avec l'introduction d'ES6 en 2015. Les versions annuelles ECMAScript ont ajouté des fonctionnalités modernes comme les classes, les modules, et async/await. Aujourd'hui, JavaScript est utilisé partout - frontend, backend, mobile, IoT et plus.",
  technicalDetails: {
    type: "Langage de script multi-paradigme",
    paradigme: "Objet, Fonctionnel, Événementiel",
    execution: "Interprété (JIT compilation avec V8, SpiderMonkey)",
    standard: "ECMAScript (ES2023 actuel)",
    typing: "Dynamique, faible",
    license: "Open source (implémentations diverses)",
    latestVersion: "ECMAScript 2023",
    runtime: "Navigateurs, Node.js, Deno, Bun"
  },
  statistics: [
    { icon: <FaGithub />, value: "1.5M+", label: "Projets GitHub" },
    { icon: <FaNpm />, value: "2B+/semaine", label: "Téléchargements npm" },
    { icon: <FaStackOverflow />, value: "2M+", label: "Questions" },
    { icon: <FaUsers />, value: "97%", label: "Sites web utilisant JS" }
  ],
  ecosystem: [
    { name: "Node.js", description: "Runtime JavaScript serveur", icon: <FaNodeJs className="text-green-500" /> },
    { name: "TypeScript", description: "Sur-ensemble typé de JS", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", description: "Bibliothèque UI", icon: <FaReact className="text-blue-400" /> },
    { name: "Vue.js", description: "Framework progressif", icon: <FaVuejs className="text-green-400" /> }
  ],
  timeline: [
    { year: "1995", description: "Création en 10 jours par Brendan Eich" },
    { year: "1997", description: "Standardisation ECMAScript" },
    { year: "2009", description: "Sortie de Node.js et npm" },
    { year: "2015", description: "ES6 - Grande mise à jour du langage" },
    { year: "2018", description: "ES Modules standardisés" },
    { year: "2020", description: "Deno 1.0 - Runtime alternatif" },
    { year: "2022", description: "ES2022 avec top-level await" }
  ],
  performance: "Les moteurs JavaScript modernes (V8, SpiderMonkey, JavaScriptCore) utilisent des techniques avancées comme le JIT compiling et l'optimisation à chaud pour atteindre des performances proches des langages compilés. WebAssembly permet d'exécuter du code encore plus performant dans le navigateur.",
  links: [
    { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
    { label: 'ECMAScript Spec', url: 'https://tc39.es/ecma262/' },
    { label: 'Node.js', url: 'https://nodejs.org/' },
    { label: 'State of JS', url: 'https://stateofjs.com/' }
  ],
},
  php: {
    name: 'PHP',
    icon: <FaPhp className="text-purple-500 text-[80px]" />,
    definition:
      "PHP est un langage de script généraliste et open source, spécialement conçu pour le développement web. Il peut être intégré directement dans le HTML et est exécuté côté serveur, permettant de générer des pages web dynamiques. PHP alimente près de 80% du web, dont des plateformes majeures comme WordPress, Wikipedia et Facebook.",
    created: "1995",
    creator: "Rasmus Lerdorf",
    evolution:
      "Initialement conçu comme un ensemble simple d'outils CGI, PHP est devenu un langage complet avec la version 3.0. PHP 5 a introduit un modèle objet complet, et PHP 7 a apporté des améliorations majeures de performances. PHP 8 continue d'évoluer avec JIT compilation et de nouvelles fonctionnalités.",
    technicalDetails: {
      type: "Langage de script côté serveur",
      paradigme: "Impératif, Objet, Fonctionnel",
      execution: "Interprété (Zend Engine)",
      license: "PHP License",
      latestVersion: "8.2 (2023)",
      performance: "2-3x plus rapide depuis PHP 7.0",
      utilisation: "78.9% des sites web (W3Techs)"
    },
    statistics: [
      { icon: <FaUsers />, value: "78.9%", label: "Part de marché web" },
      { icon: <FaGithub />, value: "36k+", label: "Stars GitHub" },
      { icon: <FaStackOverflow />, value: "1.4M+", label: "Questions" },
      { icon: <FaServer />, value: "244M", label: "Sites utilisant PHP" }
    ],
    ecosystem: [
      { name: "Composer", description: "Gestionnaire de dépendances", icon: <FaCodeBranch className="text-blue-500" /> },
      { name: "Laravel", description: "Framework PHP moderne", icon: <FaLaravel className="text-red-500" /> },
      { name: "Symfony", description: "Framework et composants PHP", icon: <FaServer className="text-black dark:text-white" /> },
      { name: "WordPress", description: "CMS le plus populaire", icon: <FaDatabase className="text-blue-400" /> }
    ],
    timeline: [
      { year: "1995", description: "PHP/FI (Personal Home Page Tools)" },
      { year: "1998", description: "PHP 3.0 - Première version majeure" },
      { year: "2000", description: "PHP 4 avec Zend Engine" },
      { year: "2004", description: "PHP 5 avec modèle objet complet" },
      { year: "2015", description: "PHP 7 - Améliorations majeures de performance" },
      { year: "2020", description: "PHP 8 avec JIT compiler" },
      { year: "2022", description: "PHP 8.2 avec nouvelles fonctionnalités" }
    ],
    performance: "PHP 8.x est significativement plus rapide que les versions précédentes, avec des performances comparables à Node.js pour de nombreux cas d'utilisation. Le JIT compiler introduit en PHP 8 permet des gains de performance supplémentaires pour les calculs intensifs.",
    links: [
      { label: 'Site officiel', url: 'https://www.php.net/' },
      { label: 'Documentation', url: 'https://www.php.net/manual/fr/' },
      { label: 'PHP The Right Way', url: 'https://phptherightway.com/' },
      { label: 'Packagist', url: 'https://packagist.org/' }
    ],
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-cyan-400 text-[80px]" />,
    definition:
      "Tailwind CSS est un framework CSS utility-first qui permet de construire des designs personnalisés directement dans le markup. Contrairement aux frameworks traditionnels comme Bootstrap, Tailwind fournit des classes bas niveau qui peuvent être composées pour créer n'importe quel design sans quitter votre HTML.",
    created: "2017",
    creator: "Adam Wathan",
    evolution:
      "Tailwind CSS a révolutionné l'approche du styling en proposant une méthodologie utility-first qui maximise la réutilisation et minimise la taille du CSS. Sa popularité a explosé grâce à son excellente documentation, ses performances et son intégration avec les frameworks JavaScript modernes. La v3 a introduit JIT compiler pour des performances encore meilleures.",
    technicalDetails: {
      approach: "Utility-first CSS",
      size: "~10kB (gzipped)",
      processor: "PostCSS",
      customization: "Fichier de configuration extensible",
      darkMode: "Support natif",
      license: "MIT",
      latestVersion: "3.3.0 (2023)",
      requirements: "Node.js 12.13.0+"
    },
    statistics: [
      { icon: <FaGithub />, value: "68k+", label: "Stars GitHub" },
      { icon: <FaNpm />, value: "6M+/semaine", label: "Téléchargements npm" },
      { icon: <FaStackOverflow />, value: "25k+", label: "Questions" },
      { icon: <FaUsers />, value: "35%", label: "Utilisation CSS" }
    ],
    ecosystem: [
      { name: "Tailwind UI", description: "Composants premium", icon: <FaPalette className="text-indigo-500" /> },
      { name: "Headless UI", description: "Composants accessibles", icon: <FaMagic className="text-purple-500" /> },
      { name: "daisyUI", description: "Composants Tailwind", icon: <SiTailwindcss className="text-pink-500" /> },
      { name: "Tailwind Play", description: "Sandbox en ligne", icon: <FaCodeBranch className="text-blue-400" /> }
    ],
    timeline: [
      { year: "2017", description: "Première version de Tailwind CSS" },
      { year: "2019", description: "Version 1.0 avec documentation améliorée" },
      { year: "2020", description: "Tailwind UI lancé" },
      { year: "2021", description: "Version 2.0 avec JIT compiler" },
      { year: "2022", description: "Version 3.0 avec toutes les fonctionnalités JIT" },
      { year: "2023", description: "Support amélioré pour CSS nesting" }
    ],
    performance: "Tailwind CSS génère un CSS extrêmement optimisé grâce à son approche utility-first et à son purge CSS intégré. Les sites utilisant Tailwind chargent typiquement 10-20kB de CSS contre 100-200kB pour les frameworks traditionnels. Le JIT compiler réduit encore les temps de build tout en permettant un développement plus rapide.",
    links: [
      { label: 'Site officiel', url: 'https://tailwindcss.com/' },
      { label: 'Documentation', url: 'https://tailwindcss.com/docs' },
      { label: 'GitHub', url: 'https://github.com/tailwindlabs/tailwindcss' },
      { label: 'Tailwind Play', url: 'https://play.tailwindcss.com/' },
      { label: 'Tailwind UI', url: 'https://tailwindui.com/' }
    ],
  },
  firebase: {
    name: 'Firebase',
    icon: <SiFirebase className="text-amber-500 text-[80px]" />,
    definition:
      "Firebase est une plateforme de développement d'applications mobiles et web créée par Firebase, Inc. en 2011, acquise par Google en 2014. Elle fournit des outils pour le développement d'applications de qualité, la croissance de votre base d'utilisateurs et la génération de revenus.",
    created: "2011",
    creator: "Firebase, Inc. (acquired by Google)",
    evolution:
      "Initialement conçu comme une base de données temps réel, Firebase s'est transformé en une plateforme complète offrant des services d'authentification, d'hébergement, de stockage, de fonctions cloud, et d'analyse. Son intégration avec Google Cloud Platform en fait une solution puissante pour les développeurs.",
    technicalDetails: {
      type: "Platforme Backend-as-a-Service (BaaS)",
      database: "Firestore (NoSQL), Realtime Database",
      hosting: "Hébergement global avec CDN",
      authentification: "Multi-provider (Google, Facebook, etc.)",
      functions: "Cloud Functions (Node.js)",
      analytics: "Google Analytics intégré",
      pricing: "Gratuit avec limites, puis pay-as-you-go"
    },
    statistics: [
      { icon: <FaUsers />, value: "3M+", label: "Applications utilisant Firebase" },
      { icon: <FaGithub />, value: "33k+", label: "Stars GitHub" },
      { icon: <FaStackOverflow />, value: "85k+", label: "Questions" },
      { icon: <FaServer />, value: "1B+", label: "Utilisateurs authentifiés/mois" }
    ],
    ecosystem: [
      { name: "Firestore", description: "Base de données NoSQL", icon: <FaDatabase className="text-blue-500" /> },
      { name: "Cloud Functions", description: "Backend sans serveur", icon: <FaServer className="text-green-500" /> },
      { name: "Authentication", description: "Gestion des utilisateurs", icon: <FaFire className="text-red-500" /> },
      { name: "Hosting", description: "Hébergement global", icon: <FaChartLine className="text-purple-500" /> }
    ],
    timeline: [
      { year: "2011", description: "Lancement initial comme startup" },
      { year: "2014", description: "Acquisition par Google" },
      { year: "2016", description: "Extension avec de nouveaux services" },
      { year: "2017", description: "Intégration avec Google Cloud" },
      { year: "2020", description: "Extensions Firebase et Emulator Suite" },
      { year: "2022", description: "Nouvelles fonctionnalités de sécurité" }
    ],
    performance: "Firebase offre des performances excellentes grâce à son infrastructure globale. Firestore peut gérer des millions de connexions simultanées avec une latence faible. Les fonctions cloud s'exécutent en moins de 100ms pour des opérations simples, et l'hébergement utilise le CDN de Google pour une livraison ultra-rapide.",
    links: [
      { label: 'Site officiel', url: 'https://firebase.google.com/' },
      { label: 'Documentation', url: 'https://firebase.google.com/docs' },
      { label: 'Console Firebase', url: 'https://console.firebase.google.com/' },
      { label: 'GitHub', url: 'https://github.com/firebase/' }
    ],
  }
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: 'easeOut' }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const pulseIcon = {
  animate: {
    scale: [1, 1.1, 1],
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
  }
};

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return show ? (
    <motion.button
      onClick={scrollTop}
      className="fixed bottom-5 right-5 bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-primary transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowUp />
    </motion.button>
  ) : null;
};

const SkillDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const skill = details[slug];

  if (!skill) {
    return (
      <div className="min-h-screen bg-primary text-white flex items-center justify-center px-4">
        <p className="text-xl text-gray-300">Aucune information disponible.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-primary text-white px-4 sm:px-8 py-20 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div 
        className="flex items-center gap-6 mb-10 justify-center md:justify-start w-full max-w-4xl"
        variants={itemVariants}
      >
        <motion.div 
          className="text-[80px]"
          variants={pulseIcon}
          animate="animate"
        >
          {skill.icon}
        </motion.div>
        <div>
          <h1 className="text-5xl font-extrabold">{skill.name}</h1>
          <p className="text-gray-400 mt-2">Créé en {skill.created} • {skill.creator}</p>
        </div>
      </motion.div>

      <motion.p 
        className="text-lg text-gray-200 mb-12 max-w-4xl leading-relaxed text-center sm:text-left"
        variants={itemVariants}
      >
        {skill.definition}
      </motion.p>

      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-4xl"
        variants={itemVariants}
      >
        {skill.statistics.map((stat, idx) => (
          <StatCard key={idx} icon={stat.icon} value={stat.value} label={stat.label} />
        ))}
      </motion.div>

     
      <motion.div 
        className="bg-white/10 backdrop-blur rounded-xl p-8 space-y-6 text-gray-100 shadow-lg max-w-4xl w-full mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-4 text-secondary">📊 Détails Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skill.technicalDetails).map(([key, value]) => (
            <div key={key} className="flex">
              <span className="font-semibold min-w-[180px] capitalize">{key}:</span>
              <span className="text-gray-300">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>

     
      <motion.div 
        className="w-full max-w-4xl mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl font-semibold mb-6 text-secondary">🌐 Écosystème & Outils Associés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skill.ecosystem.map((tool, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white/5 p-4 rounded-lg flex items-center gap-3 hover:bg-white/10 transition"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl">{tool.icon}</div>
              <div>
                <div className="font-bold">{tool.name}</div>
                <div className="text-sm text-gray-400">{tool.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6 text-secondary">⏳ Chronologie & Évolution</h2>
          <Timeline events={skill.timeline} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6 text-secondary">⚡ Performances</h2>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-gray-300">
            {skill.performance}
          </div>
        </motion.div>
      </div>

      
      <motion.div className="w-full max-w-4xl mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-6 text-secondary">🔗 Ressources & Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skill.links.map(({ label, url }) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <div className="text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
              <div>
                <div className="font-semibold">{label}</div>
                <div className="text-sm text-gray-400 truncate">{url}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.button
        onClick={() => navigate(-1)}
        className="mt-8 px-8 py-3 bg-secondary rounded-full text-white font-semibold hover:bg-secondary/80 transition"
        variants={itemVariants}
        whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(236, 72, 153, 0.7)' }}
        whileTap={{ scale: 0.95 }}
      >
        ← Retour
      </motion.button>

      <ScrollToTop />
    </motion.div>
  );
};

export default SkillDetail;