import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_563ck2m',
        'template_f3hfbhx',
        form.current,
        'M7vuX5P4HONvCOLaf'
      )
      .then(() => {
        form.current.reset();
        setLoading(false);

        toast.success('Message envoyé avec succès !', {
          duration: 2500,
          position: 'bottom-right',
          closeButton: false, 
        });

        setTimeout(() => navigate('/'), 2600);
      })
      .catch(() => {
        toast.error("Une erreur s'est produite, réessayez.", {
          duration: 3000,
          position: 'bottom-right',
          closeButton: false,
        });
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 min-h-screen bg-primary text-white flex items-center justify-center"
    >
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-xl p-8 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 space-y-5"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-center text-secondary drop-shadow-lg">
          Contactez-moi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            className="bg-white/20 text-white placeholder-white/70 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            className="bg-white/20 text-white placeholder-white/70 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white/20 text-white placeholder-white/70 px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          className="bg-white/20 text-white placeholder-white/70 px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-secondary"
        />

        <input
          type="text"
          name="subject"
          placeholder="Objet"
          className="bg-white/20 text-white placeholder-white/70 px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-secondary"
        />

        <textarea
          name="message"
          placeholder="Votre message"
          className="bg-white/20 text-white placeholder-white/70 px-4 py-3 rounded-xl w-full h-32 focus:outline-none focus:ring-2 focus:ring-secondary"
          required
        ></textarea>

        <motion.button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-secondary text-white font-semibold text-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? 'Envoi...' : 'Envoyer'}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
