import {useLayoutEffect, useRef} from "react";

import useWindowStore from "#store/window.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import {WindowsControls} from "#components/index.js";

const WindowWrapper = (Component, windowKey, headerName) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;

            if (!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(el, {opacity: 0, scale: 0.1, y: 400}, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power3.out"
            });
        }, [isOpen])

        useGSAP(() => {
            const el = ref.current;

            if (!el) return;

            const [instance] = Draggable.create(el, {onPress: focusWindow(windowKey)})

            return () => {
                instance.kill();
            }

        }, [])

        useLayoutEffect(() => {
            const el = ref.current;

            if (!el) return;

            el.style.display = isOpen ? "block" : "none"
        }, [isOpen]);

        return (
            <section id={windowKey} ref={ref} style={{zIndex}} className="absolute">
                <div id="window-header">
                    <WindowsControls targetWindow={windowKey} />
                    <h2>{headerName}</h2>
                </div>
                <Component {...props}/>
            </section>
        )
    }

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped;
}
export default WindowWrapper
