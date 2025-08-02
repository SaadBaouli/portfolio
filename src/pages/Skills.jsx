import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaPhp,
  FaFire
} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

const skills = [
  {
    id: 1,
    name: 'React',
    icon: <FaReact />,
    slug: 'react',
    color: 'text-sky-400',
  },
  {
    id: 2,
    name: 'Laravel',
    icon: <FaLaravel />,
    slug: 'laravel',
    color: 'text-red-500',
  },
  {
    id: 3,
    name: 'MySQL',
    icon: <FaDatabase />,
    slug: 'mysql',
    color: 'text-amber-400',
  },
  {
    id: 4,
    name: 'HTML5',
    icon: <FaHtml5 />,
    slug: 'html5',
    color: 'text-orange-500',
  },
  {
    id: 5,
    name: 'CSS3',
    icon: <FaCss3Alt />,
    slug: 'css3',
    color: 'text-blue-600',
  },
  {
    id: 6,
    name: 'JavaScript',
    icon: <FaJs />,
    slug: 'javascript',
    color: 'text-yellow-300',
  },
  {
    id: 7,
    name: 'PHP',
    icon: <FaPhp />,
    slug: 'php',
    color: 'text-purple-500',
  },
  {
    id: 8,
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    slug: 'tailwind',
    color: 'text-cyan-400',
  },
  {
    id: 9,
    name: 'Firebase',
    icon: <SiFirebase />,
    slug: 'firebase',
    color: 'text-amber-500',
  },
];

const Skills = () => {
  const navigate = useNavigate();

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-primary text-white min-h-[90vh] flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-secondary">Mes Compétences</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-200 text-center max-w-2xl mb-12"
      >
        J'utilise ces technologies au quotidien pour bâtir des interfaces web élégantes et responsives,  
        ainsi que des systèmes robustes et performants, tout en assurant maintenabilité, sécurité et fluidité d'expérience.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            onClick={() => navigate(`/skill/${skill.slug}`)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer bg-white/10 backdrop-blur-sm text-white border border-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center transition-all hover:shadow-2xl overflow-hidden group"
          >
            
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gray-900/70 flex items-center justify-center z-10"
            >
              <span className="text-white font-bold text-sm tracking-wide">
                Consulter
              </span>
            </motion.div>

            
            <div
              className={`text-5xl mb-3 z-0 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
            >
              {skill.icon}
            </div>

            
            <p className="text-lg font-semibold tracking-wide z-0">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;