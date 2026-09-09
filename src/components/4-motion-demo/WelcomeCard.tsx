import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

function WelcomeCard() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <h2>Welcome Student</h2>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setShow((prev) => !prev)}
        >
          Submit
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {show && (
          <motion.div
            key="box"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
          >
            Hello
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default WelcomeCard;
