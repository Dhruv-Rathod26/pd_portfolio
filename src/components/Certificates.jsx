// src/components/Certificates.jsx
import { motion } from 'framer-motion';

const Certificates = () => {
  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Certificates
      </motion.h2>
      <motion.p 
        className="section-subtle center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Recognitions and completed programs
      </motion.p>
      <motion.div 
        className="card center"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -5, scale: 1.05 }}
      >
        <span style={{ fontSize: '18px', fontWeight: '600' }}>
          SAP Course Certificate
        </span>
      </motion.div>
    </div>
  );
};

export default Certificates;