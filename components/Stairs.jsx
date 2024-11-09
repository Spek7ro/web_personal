import { motion } from "framer-motion";
// import { init } from "next/dist/compiled/webpack/webpack";

// Variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6; // Number of steps
  return totalSteps - index; // Calculate the reversed index
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion.divs, each representing a step of the stairs 
      Each div will have the same animatio defined by the stairsAnimation object
      The delay for each div is calculated dynamically based on it's reversed index
    */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative "
          />
        );
      })}
    </>
  );
};

export default Stairs;
