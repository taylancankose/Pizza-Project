import React from "react";
import { motion } from "framer-motion";

function Pill({ active, item, handleSelect }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      value={item.title}
      className={`flex mb-6 items-center justify-center md:w-48 md:p-4 mx-5 md:rounded-full w-52 h-16 rounded-full
      ${active === item.title ? "bg-myDarkGray" : "bg-white"}`}
      key={item.id}
      name={item.title}
      onClick={() => handleSelect(item.title)}
      data-cy={item.title}
    >
      <img src={item.imgSrc} className="mr-4" name={item.title} />
      <p
        className={`font-medium font-barlow ${
          active === item.title ? "text-white" : "text-myDarkGray"
        }`}
      >
        {item.title}
      </p>
    </motion.button>
  );
}

export default Pill;
