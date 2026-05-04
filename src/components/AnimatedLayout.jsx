import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100%;
  overflow: hidden auto;
  inset: 0;
`;

export function AnimatedLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  const isHome = location.pathname === "/";

  return (
    <AnimatePresence mode="sync" initial={false}>
        <Wrapper
            key={location.pathname}
            initial={isHome ? false : { y: "100vh" }}
            animate={{ y: 0 }}
            exit={isHome ? { y: 0 } : { y: "100vh" }}
            transition={{ duration: 0.35 }}
            style={{
                position: isHome ? "relative" : "absolute",
                zIndex: isHome ? 1 : 10,
            }}
            >
            {outlet}
            </Wrapper>
    </AnimatePresence>
  );
}