// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// const skills = [
//   { name: 'Android', src: '/public/android-original.svg' },
//   { name: 'Java', src: '/public/java-original.svg' },
//   { name: 'Kotlin', src: '/public/kotlin-original.svg' },
//   { name: 'React', src: '/public/react-original.svg' },
//   { name: 'HTML5', src: '/public/html5-original.svg' },
//   { name: 'CSS3', src: '/public/css3-original.svg' },
//   { name: 'JavaScript', src: '/public/javascript-original.svg' },
//   { name: 'PHP', src: '/public/php-original.svg' },
//   { name: 'MySQL', src: '/public/mysql-original.svg' },
//   { name: 'SQLite', src: '/public/sqlite-original.svg' },
//   { name: 'Android Studio', src: '/public/androidstudio-original.svg' },
//   { name: 'Git', src: '/public/git-original.svg' },
//   { name: 'Postman', src: '/public/getpostman-icon.svg' },
// ];

const skills = [
  { name: 'Android', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Kotlin', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'SQLite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  { name: 'Android Studio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
];

const Skills = () => {
  // activeIndex controls "hover" state for mouse, touch, and keyboard focus
  const [activeIndex, setActiveIndex] = useState(null);

  // Small helper to detect touch device so we can slightly adjust interactions if needed
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouch(('ontouchstart' in window) || navigator.maxTouchPoints > 0);
    }
  }, []);

  // Handlers
  const handlePointerEnter = (idx) => setActiveIndex(idx);
  const handlePointerLeave = () => setActiveIndex(null);

  // On touch, toggle the active index on tap (so first tap shows animation, second tap could open / be used)
  const handleTouchStart = (e, idx) => {
    // prevent synthetic mouse events and double-tap zoom (optional)
    e.stopPropagation();
    // toggle active:
    setActiveIndex((cur) => (cur === idx ? null : idx));
  };

  // Click works the same as touch — useful if you want tap-to-toggle
  const handleClick = (e, idx) => {
    // If you have a click action (open modal / go to details), handle it here.
    // For just animation, toggle similar to touch:
    e.stopPropagation();
    setActiveIndex((cur) => (cur === idx ? null : idx));
  };

  // Keyboard support
  const handleFocus = (idx) => setActiveIndex(idx);
  const handleBlur = () => setActiveIndex(null);

  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Key Skills
      </motion.h2>
      <motion.p 
        className="section-subtle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Tools and technologies I work with
      </motion.p>

      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '18px',
          position: 'relative',
        }}
      >
        {skills.map((skill, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={skill.name}
              // make each item focusable so keyboard users get the same behavior
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              className="skill-item center"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              // Mouse events for desktop
              onMouseEnter={() => handlePointerEnter(index)}
              onMouseLeave={handlePointerLeave}
              // Touch/click events for mobile
              onTouchStart={(e) => handleTouchStart(e, index)}
              onClick={(e) => handleClick(e, index)}
              // Keyboard
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              style={{
                padding: '20px',
                borderRadius: '15px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                position: 'relative',
                userSelect: 'none',
                touchAction: 'manipulation', // helps on some mobile browsers
              }}
              // Animate using 'animate' prop so both hover and touch use same final state
              animate={{
                scale: isActive ? 1.12 : 1,
                y: isActive ? -10 : 0,
                rotate: isActive ? 5 : 0,
                boxShadow: isActive ? '0 20px 40px rgba(122,162,255,0.28)' : '0 6px 18px rgba(0,0,0,0.06)',
                backgroundColor: isActive ? 'rgba(122,162,255,0.08)' : 'transparent',
              }}
            >
              <motion.img
                src={skill.src}
                alt={skill.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  filter: 'brightness(1)',
                  display: 'block',
                  marginInline: 'auto',
                }}
                // image-level hover is still fine on desktop, but we mirror with animate so mobile works
                animate={{
                  filter: isActive ? 'brightness(1.2) drop-shadow(0 8px 16px rgba(122,162,255,0.38))' : 'brightness(1)',
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Tooltip / label - shown when active (hover/touch/focus) */}
              <motion.div
                aria-hidden={!isActive}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 6 }}
                transition={{ duration: 0.18 }}
                style={{
                  position: 'absolute',
                  bottom: '-28px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 500,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {skill.name}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
