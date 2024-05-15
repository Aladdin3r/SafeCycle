import React, { useState, useRef } from "react";
import styles from "./PullUpPage.module.css";
import Image from "next/image";
import SearchBar from "../SearchBar";

const PullUpPage = ({ isVisible, toggleVisibility }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [startTop, setStartTop] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false); // New state for tracking expansion
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
        setIsExpanded(false); // Ensure that clicking close also collapses the component
        toggleVisibility();
    };

    const handleHeaderClick = () => {
        setIsExpanded(!isExpanded); // Toggle the expanded state when header is clicked
        if (isExpanded) {
            handleCloseClick(); // If expanded, close the component
        }
    };

    return (
        <div
            className={`${styles.pullcontainer} ${isVisible ? styles.show : ''} ${isExpanded ? styles.expanded : ''}`} // Add expanded class when isExpanded is true
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
                <div className={styles.header} onClick={handleHeaderClick}> {/* Use handleHeaderClick for toggling expansion and closing */}
                    <div className={styles.drag}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.body}>
                    <div>
                        <SearchBar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PullUpPage;
