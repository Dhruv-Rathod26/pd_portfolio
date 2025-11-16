import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects',  'skills', 'contact-us'];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { rootMargin: '-30% 0px -30% 0px', threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <header className="site-header">
      {/* Embedded styles for the 3D nebula-butterfly logo */}
      <style>{`
        .site-header { 
          position: sticky; 
          top: 0; 
          z-index: 60; 
          backdrop-filter: blur(12px);
          background: rgba(10, 10, 35, 0.75);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 16px 24px; }
        .nav { display: flex; align-items: center; justify-content: space-between; }
        .nav-links { display: flex; gap: 24px; list-style: none; margin: 0; padding: 0; }
        .nav-link { 
          color: var(--muted); 
          text-decoration: none; 
          font-weight: 600; 
          padding: 8px 14px; 
          border-radius: 8px; 
          font-size: 15px;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover { 
          color: var(--primary); 
          background: rgba(122, 162, 255, 0.08);
        }
        .nav-link.active { 
          color: var(--primary); 
          background: rgba(122, 162, 255, 0.12);
          box-shadow: 0 4px 18px rgba(122,162,255,0.15);
        }

        /* Nebula-Butterfly 3D Logo */
        .nebula-wrap { 
          display: flex; 
          align-items: center; 
          gap: 5px; 
        }
        .nebula-logo { width: 56px; height: 56px; position: relative; perspective: 900px; }
        /* the 3D card that rotates/tilts */
        .nebula-card {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-style: preserve-3d;
          position: relative;
          box-shadow: 0 8px 28px rgba(8,10,20,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
        }

        /* layered nebula background (multiple radial gradients for depth) */
        .nebula-bg {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          transform: translateZ(-30px) scale(1.06);
          background:
            radial-gradient(40% 40% at 20% 25%, rgba(122,162,255,0.28) 0%, transparent 18%),
            radial-gradient(50% 50% at 75% 30%, rgba(255,209,102,0.18) 0%, transparent 20%),
            radial-gradient(60% 50% at 50% 70%, rgba(138,43,226,0.2) 0%, transparent 22%),
            radial-gradient(20% 20% at 30% 50%, rgba(255,255,255,0.04) 0%, transparent 6%);
          filter: blur(6px) saturate(120%);
        }

        /* subtle swirling layer to simulate gaseous motion */
        .nebula-swirl {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          transform: translateZ(-18px) scale(1.02);
          background: radial-gradient(circle at 40% 40%, rgba(255,255,255,0.04), transparent 20%);
          mix-blend-mode: screen;
          opacity: 0.9;
          animation: swirl 8s linear infinite;
        }

        @keyframes swirl {
          from { transform: rotate(0deg) translateZ(-18px) scale(1.02); }
          to { transform: rotate(360deg) translateZ(-18px) scale(1.02); }
        }

        /* butterfly (frontmost, appears as if embedded in nebula cloud) */
        .butterfly {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateZ(12px) scale(1.02);
          z-index: 4;
          font-size: 22px;
          filter: drop-shadow(0 8px 18px rgba(122,162,255,0.22)) drop-shadow(0 0 18px rgba(255,209,102,0.14));
        }

        /* small particle field to create depth (different z layers) */
        .particle { position: absolute; width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.85); opacity: 0.9; }
        .p1{ left: 10%; top: 18%; transform: translateZ(-22px) scale(0.7); }
        .p2{ left: 78%; top: 14%; transform: translateZ(-6px) scale(1.1); }
        .p3{ left: 60%; top: 72%; transform: translateZ(-12px) scale(0.9); }
        .p4{ left: 30%; top: 76%; transform: translateZ(-2px) scale(1.0); }
        .p5{ left: 44%; top: 42%; transform: translateZ(-28px) scale(0.6); }

        /* subtle glow ring */
        .glow-ring { position: absolute; inset: -6px; border-radius: 50%; z-index: 1; pointer-events: none; background: radial-gradient(circle, rgba(122,162,255,0.08) 0%, transparent 40%); }

        /* 3D tilt interaction is gentle by default; also add a slow breathe rotation */
        .nebula-card.animate-rotate { animation: slowRotate 12s linear infinite; }
        @keyframes slowRotate { from { transform: rotateY(0deg) rotateX(0deg); } to { transform: rotateY(360deg) rotateX(0deg); } }

        /* text/name styling */
        .brand-name { 
          font-size: 26px; 
          font-weight: 700; 
          color: var(--text); 
          font-family: 'Orbitron', sans-serif; 
          background: linear-gradient(135deg, #7aa2ff 0%, #ffd166 50%, #7aa2ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.8px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nebula-wrap:hover .brand-name {
          background-position: 100% center;
          transform: translateX(2px);
        }

        /* make header responsive */
        @media (max-width: 640px) { 
          .nebula-logo { width: 44px; height: 44px; } 
          .brand-name { font-size: 20px; }
          .nav-links { gap: 12px; }
          .nav-link { font-size: 14px; padding: 5px 6px; }
        }
      `}</style>

      <div className="container">
        <nav className="nav">
          <motion.div
            className="nebula-wrap"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 3D nebula + butterfly logo */}
            <div className="nebula-logo" aria-hidden>
              <motion.div
                
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                }}
                // small gentle hover tilt to give 3D feeling but nothing drastic
                whileHover={{ rotateY: 6, rotateX: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 90, damping: 12 }}
              >
                

                {/* particles at different depths */}
               

                <div className="glow-ring" />

                {/* front butterfly, appears as if inside the nebula cloud */}
                <div className="butterfly">🌖</div>
              </motion.div>
            </div>

            <motion.span 
              className="brand-name" 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Pooja
            </motion.span>
          </motion.div>

          <ul className="nav-links">
            {['about', 'experience', 'projects',  'skills', 'contact-us'].map((item) => (
              <motion.li key={item} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${active === item ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item === 'contact-us' ? 'Contact Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
