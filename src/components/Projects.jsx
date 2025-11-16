import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Balaji Industries",
    description:
      "Industrial management app with inventory, employee, and production tracking.",
    details: "Real-time analytics and automated reports for smooth operations.",
    moreDetails: {
      functionality: "Comprehensive industrial management solution that streamlines operations through automated tracking and analytics. The app enables real-time monitoring of inventory levels, employee productivity, and production metrics. Features automated report generation and data visualization for informed decision-making.",
      features: ["Real-time inventory tracking with low-stock alerts", "Employee attendance and performance monitoring", "Production line analytics and efficiency metrics", "Automated daily/weekly/monthly reports", "Dashboard with key performance indicators"],
    },
    image: "/public/balaji.jpg",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Junction",
    description:
      "Social app connecting users by shared interests and local events.",
    details: "Modern UI, chat, and location-based event discovery.",
    moreDetails: {
      functionality: "Social networking platform that connects people through shared interests and local events. Users can discover nearby events, join communities, and interact through real-time messaging. The app uses location-based services to suggest relevant events and matches users with similar interests.",
      features: ["Browse and filter events by category and location", "Real-time group and private messaging", "GPS-based event recommendations", "Interest-based user matching algorithm", "Personalized social feed with event updates"],
    },
    image: "/public/junction.jpg",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Roadmode",
    description:
      "Smart travel app with live traffic and route optimization.",
    details: "Weather integration and personalized travel suggestions.",
    moreDetails: {
      functionality: "Intelligent travel companion that provides real-time traffic information and optimal route suggestions. Integrates weather data to help users plan trips effectively. Offers personalized travel recommendations based on user preferences and historical data.",
      features: ["Live traffic monitoring with alternative routes", "AI-powered route optimization", "7-day weather forecast integration", "Personalized travel time suggestions", "Offline map downloads for areas without connectivity"],
    },
    image: "/public/roadmode.jpg",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Flicksy",
    description:
      "Movie finder app with AI-powered film recommendations.",
    details: "Personalized watchlists and social sharing for film lovers.",
    moreDetails: {
      functionality: "Movie discovery platform powered by AI that learns user preferences to provide personalized film recommendations. Users can create custom watchlists, read and write reviews, and share their favorite movies with friends. Includes trailer previews and detailed movie information.",
      features: ["Machine learning-based movie recommendations", "Create and organize multiple watchlists", "Share movies and reviews on social media", "Community-driven movie ratings and reviews", "Integrated movie trailers and cast information"],
    },
    image: "/public/flicksy.jpg",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Notes",
    description:
      "Beautiful note app with cloud sync and tag-based organization.",
    details: "Collaborative and cross-platform note management.",
    moreDetails: {
      functionality: "Feature-rich note-taking application with seamless cloud synchronization across all devices. Supports collaborative editing where multiple users can work on notes simultaneously. Advanced organization through tags, folders, and search functionality.",
      features: ["Automatic cloud sync across all devices", "Tag-based organization and smart folders", "Real-time collaborative editing", "Rich text editor with formatting options", "Works on Android, iOS, and Web platforms"],
    },
    image: "/public/notes.jpg",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Dental Care",
    description:
      "Dental clinic app for patient management and scheduling.",
    details: "Appointment reminders and billing integration.",
    moreDetails: {
      functionality: "Complete dental clinic management system for handling patient records, appointments, and billing. Automates appointment reminders to reduce no-shows. Maintains comprehensive treatment history for each patient with digital records and billing integration.",
      features: ["Digital patient records with medical history", "Calendar-based appointment scheduling", "Automated billing and invoice generation", "SMS and email reminder notifications", "Complete treatment history tracking"],
    },
    image: "/public/dental.jpg",
    liveUrl: "#",
  },
  {
    id: 7,
    title: "Sales Tracker",
    description:
      "CRM app for sales pipeline and performance analytics.",
    details: "Forecasting and customer insights for business growth.",
    moreDetails: {
      functionality: "Advanced CRM system for managing sales pipelines and tracking performance metrics. Provides data-driven insights through interactive charts and analytics. Features predictive forecasting to help businesses plan and optimize their sales strategies.",
      features: ["Visual sales pipeline with drag-and-drop stages", "Real-time performance analytics dashboard", "AI-powered sales forecasting", "Customer behavior insights and trends", "Interactive charts and data visualization"],
    },
    image: "/public/sales.jpg",
    liveUrl: "#",
  },
  {
    id: 8,
    title: "iTouch Restaurant",
    description:
      "Restaurant system for table booking and order tracking.",
    details: "Menu management, online orders, and customer feedback.",
    moreDetails: {
      functionality: "Complete restaurant management solution for table reservations, online ordering, and customer engagement. Restaurant owners can manage menus, track orders in real-time, and collect customer feedback. Customers can book tables, place orders, and track their delivery status.",
      features: ["Real-time table availability and booking", "Online food ordering with payment integration", "Dynamic menu management for restaurants", "Live order tracking from kitchen to delivery", "Customer review and rating system"],
    },
    image: "/public/itouch.jpg",
    liveUrl: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Handle touch/click for mobile devices
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleShare = async (e) => {
    e.stopPropagation();

    const shareData = {
      title: project.title,
      text: project.description,
      url: project.liveUrl || window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      style={{
        position: "relative",
        perspective: "1000px",
        height: "340px",
        cursor: "pointer",
        zIndex: isFlipped ? 10 : 1,
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
      onTouchStart={(e) => {
        // Prevent double-tap zoom on mobile
        e.preventDefault();
        setIsFlipped(!isFlipped);
      }}
      animate={{
        opacity: 1,
        y: isFlipped ? -10 : 0,
        scale: isFlipped ? 1.05 : 1,
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
        y: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          borderRadius: "18px",
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {/* Front Face */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "18px",
            overflow: "hidden",
            background: "#111",
            boxShadow: "0 6px 24px rgba(0, 0, 0, 0.25)",
          }}
        >
      {/* Share button (top-right corner) - Commented out until live links are available */}
      {/* 
      <motion.button
        onClick={handleShare}
        onMouseEnter={(e) => e.stopPropagation()}
        onMouseLeave={(e) => e.stopPropagation()}
        aria-label={`Share ${project.title}`}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          zIndex: 6,
          border: "none",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(6px)",
          color: "#fff",
          padding: "8px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </motion.button>
      */}

      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.85,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* Static Light Effect (top-right corner) */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.12), transparent 60%)",
          pointerEvents: "none",
          zIndex: 2,
          borderRadius: "50%",
        }}
      />

      {/* Text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          zIndex: 3,
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "8px",
            fontFamily: "Orbitron, sans-serif",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "#ccc",
            fontSize: "14px",
            lineHeight: 1.5,
            marginBottom: "6px",
          }}
        >
          {project.description}
        </p>

        <p
          style={{
            color: "#999",
            fontSize: "13px",
            lineHeight: 1.4,
            fontStyle: "italic",
          }}
        >
          {project.details}
        </p>

        {/* Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "14px",
          }}
        >
         
        </div>
      </div>
        </div>

        {/* Back Face - More Details */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "18px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            boxShadow: "0 6px 24px rgba(122, 162, 255, 0.3)",
            transform: "rotateY(180deg)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid rgba(122, 162, 255, 0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <h3
              style={{
                color: "#7aa2ff",
                fontSize: "22px",
                fontWeight: 700,
                marginBottom: "20px",
                fontFamily: "Orbitron, sans-serif",
                textAlign: "center",
              }}
            >
              {project.title}
            </h3>

            {/* Functionality Description */}
            <p
              style={{
                color: "#b8b8cf",
                fontSize: "14px",
                lineHeight: 1.7,
                margin: 0,
                textAlign: "left",
              }}
            >
              {project.moreDetails?.functionality || project.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        style={{
          textAlign: "center",
          fontSize: "34px",
          color: "#fff",
          marginBottom: "10px",
          fontFamily: "Orbitron, sans-serif",
        }}
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        style={{
          textAlign: "center",
          color: "#aaa",
          fontSize: "15px",
        }}
      >
        Highlights from my Android & Web development journey
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
          marginTop: "50px",
          maxWidth: "1100px",
          marginInline: "auto",
          padding: "0 20px",
          position: "relative",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
