// src/App.jsx
import { useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SpaceScene from './components/SpaceScene';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const sections = [
    { Component: About, id: 'about' },
    { Component: Experience, id: 'experience' },
    { Component: Projects, id: 'projects' },
    // { Component: Education, id: 'education' },
    { Component: Skills, id: 'skills' },
  ];

  const particlesInit = async (engine) => {
    await loadStarsPreset(engine);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={{
                preset: 'stars',
                background: { color: { value: '#0a0a23' } },
                particles: {
                  number: { value: 120 },
                  move: { speed: 0.5 },
                },
              }}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
            <SpaceScene />
            <Header />
            {sections.map(({ Component, id }) => (
              <Section key={id} id={id}>
                <Component />
              </Section>
            ))}
            <Section id="contact-us">
              <ContactUs />
            </Section>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  useEffect(() => {
    // Initialize EmailJS when component mounts
    if (window.emailjs) {
      window.emailjs.init({
        publicKey: "fdu42facq4IFC5UF_",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email to you (the owner)
      await window.emailjs.send(
        "service_f08p4hi", // Your Service ID
        "template_np94enj", // Your Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          message: formData.message,
          name: formData.name, // For From Name field
          email: formData.email, // For Reply To field
        }
      );

      // Auto-reply: You can either:
      // Option 1: Use EmailJS built-in auto-reply (configure in EmailJS dashboard > Template > Auto-Reply tab)
      // Option 2: Send programmatically by creating a second template and uncommenting below:
      
      // await window.emailjs.send(
      //   "service_f08p4hi", // Your Service ID
      //   "template_auto_reply_id", // Create a new template for auto-reply and use its ID here
      //   {
      //     to_name: formData.name,
      //     to_email: formData.email,
      //     reply_to: "poojadantani3110@gmail.com",
      //   }
      // );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact Us
      </motion.h2>
      <motion.p 
        className="section-subtle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Get in touch with me for opportunities or collaborations
      </motion.p>
      <motion.form
        onSubmit={handleSubmit}
        className="card"
        style={{ maxWidth: '500px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut", type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -8, scale: 1.03, rotateX: 3 }}
      >
        <motion.input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="What is your name" 
          className="contact-input" 
          required
          style={{ width: '90%', marginBottom: '12px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        <motion.input 
          type="text" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Contact number" 
          className="contact-input" 
          style={{ width: '90%', marginBottom: '12px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        <motion.input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email" 
          className="contact-input" 
          required
          style={{ width: '90%', marginBottom: '12px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        <motion.textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What is your message" 
          className="contact-input" 
          required
          style={{ width: '90%', marginBottom: '18px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', height: '120px', resize: 'vertical', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        
        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              color: '#4ade80', 
              textAlign: 'center', 
              marginBottom: '12px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ✓ Message sent successfully! I'll get back to you soon.
          </motion.p>
        )}
        
        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              color: '#f87171', 
              textAlign: 'center', 
              marginBottom: '12px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ✗ Failed to send message. Please try again.
          </motion.p>
        )}

        <motion.button 
          type="submit"
          className="btn" 
          disabled={isSubmitting}
          style={{ 
            width: '90%', 
            padding: '16px', 
            fontSize: '18px', 
            fontWeight: '600', 
            textAlign: 'center', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 150 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={!isSubmitting ? { scale: 1.08, y: -3, rotateY: 5 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </motion.button>
      </motion.form>
    </div>
  );
};

const Section = ({ children, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className="section"
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.section>
  );
};

export default App;