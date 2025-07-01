import { useState } from 'react';
import { motion } from 'framer-motion';

const projets = [
  {
    id: 1,
    title: 'LocaTech',
    desc: "Plateforme immobilière moderne avec recherche avancée, chat AI, notifications, et carte des biens.",
    tech: ['React', 'Laravel', 'Tailwind'],
  },
  {
    id: 2,
    title: 'LearnCodeLab',
    desc: "Plateforme interactive pour apprendre à coder. Contenu dynamique, quiz, et socket pour collaboration.",
    tech: ['React', 'Laravel', 'Socket.io'],
  },
  {
    id: 3,
    title: 'Site vitrine React',
    desc: "Site personnel moderne et responsive avec animations fluides et intégration Tailwind + Framer Motion.",
    tech: ['React', 'Tailwind'],
  },
  {
    id: 4,
    title: 'API Laravel',
    desc: "Développement d’une API RESTful sécurisée avec authentification JWT, gestion des utilisateurs, et base MySQL.",
    tech: ['Laravel', 'MySQL'],
  },
];

const stacks = ['Tous', 'React', 'Laravel', 'Tailwind', 'MySQL', 'Socket.io'];

const Projects = () => {
  const [activeStack, setActiveStack] = useState('Tous');

  const filtered = activeStack === 'Tous'
    ? projets
    : projets.filter(p => p.tech.includes(activeStack));

  return (
    <section id="projects" className="py-20 px-6 bg-primary min-h-[90vh] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-4"
      >
        <span className="text-secondary">Mes Projets</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center text-gray-200 max-w-2xl mx-auto mb-6"
      >
        À travers ces projets, j’ai pu consolider mes compétences en développement web moderne en alliant design, performance et expérience utilisateur. 
        Chaque application reflète ma capacité à résoudre des problèmes concrets grâce à une stack technique adaptée, en mettant l'accent sur la qualité du code, la sécurité, et l'interactivité.
      </motion.p>

      {/* Filtres par stack */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {stacks.map((stack) => (
          <button
            key={stack}
            onClick={() => setActiveStack(stack)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${activeStack === stack
                ? 'bg-secondary text-white'
                : 'bg-white text-primary hover:bg-secondary hover:text-white'}
            `}
          >
            {stack}
          </button>
        ))}
      </div>

      {/* Cartes de projets */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="relative group bg-white text-gray-900 rounded-xl p-6 shadow-lg border border-transparent hover:border-secondary transition overflow-hidden"
          >
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-all duration-300 group-hover:w-full" />
            <h3 className="text-2xl font-semibold mb-2 text-secondary">{proj.title}</h3>
            <p className="text-gray-800 mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-white text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
