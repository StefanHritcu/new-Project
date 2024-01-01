import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SeeMore = () => {
  const text = "Mi dispiace farti trovare questa pagina vuota. Non ho così tanti prodotti in questo sito per farti vedere di più.";

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Delay tra l'apparizione di ciascuna lettera
        delayChildren: 0.4, // Ritardo iniziale prima dell'apparizione delle lettere
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
   <>
    <div className="mx-10 text-4xl font-extralight z-10">
      <AnimatePresence>
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </AnimatePresence>
    </div>

    <Link to="/">
        <button className="ml-24 py-2 mt-8 px-12 bg-green-500 hover:bg-green-600">
          <h1 className="text-3xl p-2">HOME</h1>
        </button>
      </Link>
   </>
  );
};

export default SeeMore;
