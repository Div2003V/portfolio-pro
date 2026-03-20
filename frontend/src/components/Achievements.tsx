import { motion } from "framer-motion";

export default function Achievements() {
  const data = [
    "🥈 2nd Position — MAIT Hacks 2023",
    "Participated in multiple hackathons",
    "YouTube Creator since Feb 2021"
  ];

  return (
    <div className="section">
      <h2>Achievements</h2>
      {data.map((item, i) => (
        <motion.div key={i} whileHover={{ scale: 1.05 }} className="card">
          {item}
        </motion.div>
      ))}
    </div>
  );
}