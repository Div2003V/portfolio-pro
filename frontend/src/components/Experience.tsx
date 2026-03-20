import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="section">
      <h2>Experience</h2>

      <motion.div
        className="card"
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 200 }
        }}
      >
        <video 
          className="video-bg"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source src="/videos/ai.mp4" />
        </video>

        <h3>Revino</h3>
        <p>AI Automation / DevOps / Full Stack Intern</p>
      </motion.div>

      <motion.div
        className="card"
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 200 }
        }}
      >
        <h3>CodeC Technologies</h3>
        <p>Full Stack Development Intern</p>
      </motion.div>

      <motion.div
        className="card"
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 200 }
        }}
      >
        <h3>Arc of Code</h3>
        <p>Freelance DSA Content Writer</p>
      </motion.div>
    </div>
  );
}