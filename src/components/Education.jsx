// src/components/Education.jsx
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'B.E. Computer Engineering',
    institution: 'GIDC Degree Engineering College, Navsari (GTU)',
    duration: 'Oct 2021 – April 2025',
    score: 'CGPA: 8.85',
  },
  {
    degree: 'HSC Qualification (GSEB)',
    institution: 'AB School, Navsari',
    duration: 'July 2020 - May 2021',
    score: '90%',
  },
  {
    degree: 'SSC Qualification (GSEB)',
    institution: 'AB School, Navsari',
    duration: 'July 2018 - March 2019',
    score: '93.33%',
  },
];

const Education = () => {
  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Education
      </motion.h2>
      <motion.p 
        className="section-subtle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Academic background and achievements
      </motion.p>
      <div className="grid cols-3 grid">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            className="card center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">{edu.degree}</h3>
            <p className="muted">{edu.institution}</p>
            <p className="muted">{edu.duration}</p>
            <p className="mt-2">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;