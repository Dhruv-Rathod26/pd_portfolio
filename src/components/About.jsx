// src/components/About.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const fullText = 'Pooja Dantani';
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Wait before starting to type again
          setIsDeleting(false);
          setTimeout(() => setTextIndex((prev) => (prev + 1) % fullText.length), 500);
        }
      }
    }, isDeleting ? 100 : 150); // Faster deleting, slower typing
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);


  return (
    <div>
      <motion.div
        className="center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
        style={{ marginBottom: '40px' }}
      >
        <motion.h1 
          style={{ 
            fontSize: '4rem', 
            fontWeight: '700', 
            margin: '0 0 16px 0',
            background: 'linear-gradient(135deg, #7aa2ff 0%, #ffd166 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            minHeight: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            style={{ marginLeft: '2px' }}
          >
            |
          </motion.span>
        </motion.h1>
        <motion.h2 
          style={{ 
            fontSize: '2rem', 
            fontWeight: '400', 
            color: '#7aa2ff',
            margin: '0 0 24px 0'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          Android Developer
        </motion.h2>
        <motion.p 
          style={{ 
            fontSize: '1.2rem', 
            color: '#b8b8cf',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          Passionate about creating innovative mobile solutions and exploring modern web technologies
        </motion.p>
      </motion.div>
      <motion.div 
        className="card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <p style={{ fontSize: '20px', lineHeight: 1.8, margin: 0, textAlign: 'center' }}>
          I'm a passionate Android Developer who transforms ideas into powerful mobile experiences. With expertise in Java, Kotlin, and modern Android development, I create apps that users love. Currently expanding my skills into ReactJS and full-stack development to build comprehensive digital solutions.
        </p>
        <p style={{ fontSize: '18px', lineHeight: 1.6, margin: '20px 0 0 0', textAlign: 'center', color: '#b8b8cf' }}>
          I believe in clean code, intuitive design, and continuous learning. Every project is an opportunity to push boundaries and deliver excellence.
        </p>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a href="#projects" className="btn">Explore My Work</a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;