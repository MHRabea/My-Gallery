import React from "react";
import { motion } from "framer-motion";

const ImageHandler = ({ clickedImg, setClickedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("enlarged-img")) {
      setClickedImg(null);
    }
  };

  return (
    <motion.div
      className="enlarged-img"
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <img src={clickedImg} alt="Enlarged" />
    </motion.div>
  );
};

export default ImageHandler;
