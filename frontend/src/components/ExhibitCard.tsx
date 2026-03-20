import { motion } from "framer-motion";

export default function ExhibitCard({ title, desc, video }: any) {
  return (
    <motion.div
      className="card"
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 200 }
      }}
    >
      {video && (
        <video className="video-bg" autoPlay loop muted>
          <source src={video} />
        </video>
      )}

      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}