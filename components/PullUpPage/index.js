import React, { useState, useRef } from "react";
import styles from "./PullUpPage.module.css";
import Image from "next/image";

const PullUpPage = ({ isVisible, toggleVisibility }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [startTop, setStartTop] = useState(0);
    const pullContainerRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.clientY);
        setStartTop(pullContainerRef.current.getBoundingClientRect().top);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const deltaY = e.clientY - startY;
            const maxTop = window.innerHeight * 0.45; 
            const newTop = Math.min(
                Math.max(0, startTop + deltaY), 
                maxTop 
            );
            pullContainerRef.current.style.top = `${newTop}px`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleCloseClick = () => {
        toggleVisibility(); // Invoke the toggleVisibility function to hide the PullUpPage
    };

    return (
        <div
            className={`${styles.pullcontainer} ${isVisible ? styles.show : ''}`}
            ref={pullContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className={styles.close} onClick={handleCloseClick}>
                <Image src="/icons/close.png" width={80} height={80} alt="Close" />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.drag}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.body}>
                    <h3>text random ghadkjfl;dkasfjdghs adfaiosd;fjad kllakdsjf aa</h3>
                </div>
            </div>
        </div>
    );
};

export default PullUpPage;
