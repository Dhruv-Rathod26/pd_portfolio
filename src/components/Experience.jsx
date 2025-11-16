// src/components/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Android Developer',
    company: 'Chitri Enlargesoft It Hub Pvt Ltd, Surat, Gujarat',
    duration: 'May 2025 - Sep 2025',
    points: [
      'Designed and developed multiple Android applications such as E-commerce, Social Media, and Event Management apps.',
      'Built and integrated custom PHP APIs with MySQL databases to handle backend operations like user authentication, product data, and orders.',
      'Designed and optimized UI/UX layouts for mobile applications using Material Design principles.',
      'Worked with REST API integration, JSON parsing, and Volley/Retrofit for data communication.',
    ],
  },
  {
    title: 'Android Application Developer Intern',
    company: 'Vetron Consultancy Services, Vesu, Surat, Gujarat',
    duration: 'Jan 2025 - April 2025',
    points: [
      'Gaining hands-on experience in Android application development using Java and Android Studio.',
      'Learning and implementing API integrations, Firebase services, and database management for live projects.',
      'Assisting in designing and developing user-friendly UI/UX layouts following Material Design standards.',
    ],
  },
];

const Experience = () => {
  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Work Experience
      </motion.h2>
      <motion.p 
        className="section-subtle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Roles, contributions, and impact
      </motion.p>
      <div style={{ display: 'grid', gap: '40px' }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="muted">{exp.company} | {exp.duration}</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;