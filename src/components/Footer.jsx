// src/components/Footer.jsx
import { motion } from "framer-motion";
import React from "react";

/**
 * Professional Footer with SVG brand icons and framer-motion interactions.
 * - Email uses a "mailto:" link (opens mail client)
 * - GitHub & LinkedIn open in new tabs with rel="noopener noreferrer"
 *
 * Replace URLs as needed.
 */

const ICON_SIZE = 28; // px

const Footer = () => {
  return (
    <footer
      className="site-footer"
      style={{
        padding: "40px 0",
        textAlign: "center",
        background:
          "linear-gradient(180deg, rgba(7,10,25,0.95) 0%, rgba(12,14,30,0.92) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>
        <div
          className="socials"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 28,
            marginBottom: 18,
            alignItems: "center",
          }}
        >
          {/* Email */}
          <motion.a
            href="mailto:poojadantani3110@gmail.com"
            aria-label="Send email to Pooja Dantani"
            title="Email"
            whileHover={{ y: -6, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: ICON_SIZE + 12,
              height: ICON_SIZE + 12,
              borderRadius: 10,
              background: "transparent",
              textDecoration: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width={ICON_SIZE}
              height={ICON_SIZE}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M3 7.5C3 6.11929 4.11929 5 5.5 5H18.5C19.8807 5 21 6.11929 21 7.5V16.5C21 17.8807 19.8807 19 18.5 19H5.5C4.11929 19 3 17.8807 3 16.5V7.5Z"
                stroke="#D1D5DB"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="rgba(255,255,255,0.02)"
              />
              <path
                d="M21 7.5L12 13L3 7.5"
                stroke="#D1D5DB"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          {/* GitHub */}
          {/* <motion.a
            href="https://github.com/Dhruv-Rathod26"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            title="GitHub"
            whileHover={{ y: -6, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: ICON_SIZE + 12,
              height: ICON_SIZE + 12,
              borderRadius: 10,
              background: "transparent",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width={ICON_SIZE}
              height={ICON_SIZE}
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="#E6EDF9"
                d="M12 .5C5.375.5.5 5.375.5 12c0 4.875 3.162 9 7.547 10.447.552.101.753-.24.753-.533 0-.263-.01-1.138-.015-2.065-3.07.667-3.72-1.487-3.72-1.487-.503-1.276-1.228-1.617-1.228-1.617-.999-.682.076-.668.076-.668 1.105.078 1.686 1.135 1.686 1.135.982 1.682 2.576 1.197 3.205.916.099-.711.384-1.197.699-1.473-2.449-.28-5.019-1.225-5.019-5.453 0-1.204.43-2.188 1.135-2.96-.114-.278-.493-1.401.108-2.92 0 0 .926-.297 3.032 1.135a10.51 10.51 0 0 1 2.761-.372c.936.004 1.88.126 2.761.372 2.106-1.432 3.03-1.135 3.03-1.135.603 1.52.224 2.643.11 2.92.708.772 1.134 1.756 1.134 2.96 0 4.238-2.575 5.168-5.028 5.444.394.34.744 1.026.744 2.067 0 1.493-.014 2.694-.014 3.059 0 .295.198.64.76.531C20.84 21 24 16.874 24 12 24 5.375 18.625.5 12 .5z"
              />
            </svg>
          </motion.a> */}

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/pooja-dantani-003215320/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LinkedIn profile"
            title="LinkedIn"
            whileHover={{ y: -6, scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: ICON_SIZE + 12,
              height: ICON_SIZE + 12,
              borderRadius: 10,
              background: "transparent",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width={ICON_SIZE}
              height={ICON_SIZE}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="3" fill="rgba(10,102,194,0.12)" />
              <path
                d="M6.5 9H9V19H6.5V9Z"
                stroke="#EAF5FF"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M7.75 6.5C7.75 7.19036 7.19036 7.75 6.5 7.75C5.80964 7.75 5.25 7.19036 5.25 6.5C5.25 5.80964 5.80964 5.25 6.5 5.25C7.19036 5.25 7.75 5.80964 7.75 6.5Z"
                fill="#EAF5FF"
              />
              <path
                d="M10.75 13.5C10.75 11.8 12.2 11.4 13.25 11.2C14.3 11 16 10.8 16 13.05V19H13.5V13.9C13.5 12.3 13 11.9 12.5 11.9C11.9 11.9 11.5 12.5 11.5 13.9V19H9V9.5H11.5V10.8C12 9.8 12.9 9 14.5 9C17 9 17 11 17 13.5V19H14.5V13.9C14.5 12.3 14 11.9 13.5 11.9C12.9 11.9 12.5 12.5 12.5 13.9V19H10.75V13.5Z"
                fill="rgba(234,245,255,0.98)"
              />
            </svg>
          </motion.a>
        </div>

        <motion.p
          className="muted"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: 14,
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} <strong>Pooja Dantani</strong>. All rights reserved.
        </motion.p>

        {/* keyboard focus style (visible for keyboard nav) */}
        <style>{`
          .socials a:focus {
            outline: 3px solid rgba(122,162,255,0.18);
            outline-offset: 4px;
            border-radius: 10px;
          }
          @media (max-width:640px) {
            .socials { gap: 20px; }
          }
        `}</style>
      </div>
    </footer>
  );
};

export default Footer;
