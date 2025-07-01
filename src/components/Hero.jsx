import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import pic1 from '../assets/dominik.jpg';

const Hero = () => {
  return (
    <section className="min-h-[84vh] flex items-center justify-center px-6 md:px-8 bg-primary text-white">
      <div className="w-full max-w-6xl">
        {/* Titre centré */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Développeur Full Stack | Créateur d&apos;expériences web
        </motion.h1>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          {/* Photo */}
          <motion.div
            className="col-span-1 md:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={pic1}
              alt="Photo de profil"
              className="rounded-full w-40 h-40 md:w-52 md:h-52 object-cover border-4 border-white shadow-lg"
            />
          </motion.div>

          {/* Infos */}
          <motion.div
            className="col-span-1 md:col-span-3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Bonjour, je suis <span className="text-secondary">Saad Baouli</span>
            </h2>
            <p className="mb-6 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              <span className="text-secondary font-semibold">Développeur Full Stack</span> basé au Maroc, je conçois des applications web modernes, performantes et évolutives. 
              Passionné par les technologies comme React, Laravel et MySQL, je combine une expertise frontend et backend 
              pour créer des expériences utilisateur intuitives, robustes et centrées sur la qualité du code.
            </p>

            {/* Réseaux sociaux avec icônes bleu ciel par défaut */}
            <div className="flex justify-center md:justify-start gap-6 text-3xl">
              {[
                { href: 'https://linkedin.com', icon: <FaLinkedin /> },
                { href: 'https://github.com', icon: <FaGithub /> },
                { href: 'https://instagram.com', icon: <FaInstagram /> },
                { href: 'https://wa.me/212600000000', icon: <FaWhatsapp /> },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-[#e5e5e5] transition transform hover:scale-110"
                  aria-label="Lien réseau social"
                >
                  {icon}
                </a>
              ))}
            </div>
            {/* <CVButton /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
