import { motion } from 'framer-motion';
import CVButton from '../components/CVButton';

const softSkills = ['Créatif', 'Rigoureux', 'Curieux', 'Autonome', 'Collaboratif'];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-primary min-h-[84vh] flex flex-col items-center text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-center text-secondary"
      >
        À propos de moi
      </motion.h2>

      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg leading-relaxed">
          Je suis un <span className="font-semibold text-secondary">développeur Full Stack</span> passionné par les technologies web et les solutions numériques innovantes.
          Mon objectif est de transformer des idées complexes en produits digitaux intuitifs, performants et centrés sur l’utilisateur.
        </p>

        <p className="text-lg leading-relaxed">
          Grâce à une solide expérience avec <span className="font-semibold text-secondary">React</span>, <span className="font-semibold text-secondary">Laravel</span>, 
          <span className="font-semibold text-secondary">MongoDB</span> et <span className="font-semibold text-secondary">MySQL</span>, je conçois des applications robustes, évolutives et maintenables.
          Ma priorité : un code propre, rapide, et orienté expérience utilisateur.
        </p>

        
        <div className="mt-8 mb-6 flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>

       
        <div className="mt-8">
          <CVButton />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
