import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function useScroll() {
    const [element, view] = useInView({threshold: 0.5})
    const controls = useAnimation()

    useEffect(() => {
        if (view) {
            controls.start("show")
        } else {
            controls.start("hidden")
        }
    }, [view])
    return [element, controls]
}