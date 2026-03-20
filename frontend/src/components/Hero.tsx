import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="section">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Divyansh Verma
      </motion.h1>

      <p>
        Engineer of Systems, AI & Interfaces
      </p>
    </div>
  );
}