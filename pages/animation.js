import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import styles from "@/styles/Onboarding.module.css"

export default function Animation() {
    const animationContainer = useRef(null);
    const router = useRouter();
    let animationInstance = null;

    useEffect(() => {
        animationInstance = Lottie.loadAnimation({
            container: animationContainer.current, 
            renderer: 'svg',
            loop: true,
            autoplay: true, 
            path: './animation.json'
        });

        return () => {
            animationInstance.destroy(); 
        };
    }, []); 

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("./welcome");
        }, 2250);

        return () => clearTimeout(timer); 
    }, [router]);

    return (
        <div>
            <div ref={animationContainer} className={styles.animation}></div>
        </div>
    );
}
