import React, { useState, useEffect } from "react";
import { MouseMask } from "../../components/ui/MouseMask";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";

const GREETING = "Welcome to Gojo-Reader!";
const GREETING_JP = "ゴジョーリーダーへようこそ!";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // 2s loading screen
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Gojo <span className="text-gray-500">|</span> Reader
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 0)"
        gradientBackgroundEnd="rgb(0, 0, 0)"
        firstColor="30, 30, 30"
        secondColor="40, 40, 40"
        thirdColor="50, 50, 50"
        fourthColor="60, 60, 60"
        fifthColor="70, 70, 70"
        pointerColor="80, 80, 80"
        blendingValue="soft-light"
      >
        <motion.section
          className="w-full min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <MouseMask 
            greeting={GREETING} 
            greetingJp={GREETING_JP} 
          />
        </motion.section>
      </BackgroundGradientAnimation>
    </>
  );
};
