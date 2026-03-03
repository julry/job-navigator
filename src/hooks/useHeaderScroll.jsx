import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react"

export const useHeaderScroll = (wrapperRef) => {
    const { scrollY, } = useScroll({ container: wrapperRef });
    const [isFixed, setIsFixed] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const maxScroll = window?.innerWidth < 800 ? 550 : 800;

        setIsFixed(latest > maxScroll);
    });

    return {
        isFixed
    }
}