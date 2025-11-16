// src/components/Languages.jsx
import { motion } from 'framer-motion';

const languages = [
  { lang: 'English', level: 'Intermediate' },
  { lang: 'Hindi', level: 'Fluent' },
  { lang: 'Gujarati', level: 'Fluent' },
];

const Languages = () => {
  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Languages
      </motion.h2>
      <div className="flex lang-row">
        {languages.map((lang, index) => (
          <motion.div 
            key={index}
            className="card center"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <h3 className="font-semibold">{lang.lang}</h3>
            <p>{lang.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Languages;