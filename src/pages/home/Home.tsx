import React, { useState, useEffect } from "react";
import { MouseMask } from "./MouseMask";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { useTranslation } from "react-i18next";

const GREETING = "Welcome to Gojo-Reader!";
const GREETING_JP = "ゴジョーリーダーへようこそ!";

export const Home = () => {
  const { t } = useTranslation();
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

      <MouseMask greeting={t(GREETING)} greetingJp={GREETING_JP} />
    </>
  );
};
