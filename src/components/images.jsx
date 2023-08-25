import React from "react";
import useDataBase from "../firebase/database";
import { motion } from "framer-motion";

const Images = ({ setClickedImg }) => {
  const { data } = useDataBase("images");
  return (
    <div className="img-grid container">
      {data &&
        data.map((item) => (
          <motion.div className="imgs" key={item.id} layout>
            <motion.img
              layout
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="img w-100 shadow-1-strong rounded mb-4"
              src={item.url}
              alt={item.name}
              onClick={() => setClickedImg(item.url)}
            />
            <div className="img-text">
              <h2 className="img-name">{item.name}</h2>
            </div>
          </motion.div>
        ))}
    </div>
  );
};
export default Images;
