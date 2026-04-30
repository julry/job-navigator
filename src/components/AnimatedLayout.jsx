import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

export function AnimatedLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  const isHome = location.pathname === "/";

  return (
    <AnimatePresence mode="sync" initial={false}>
        <motion.div
            key={location.pathname}
            initial={isHome ? false : { y: "100vh" }}
            animate={{ y: 0 }}
            exit={isHome ? { y: 0 } : { y: "100vh" }}
            transition={{ duration: 0.35 }}
            style={{
                position: isHome ? "relative" : "absolute",
                inset: 0,
                zIndex: isHome ? 1 : 10,
                height: "100%",
                overflowY: "auto",
            }}
            >
            {outlet}
            </motion.div>
    </AnimatePresence>
  );
}