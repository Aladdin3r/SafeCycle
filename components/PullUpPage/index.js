import React, { useState, useRef } from "react";
import styles from "./PullUpPage.module.css";
import Image from "next/image";


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
        
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleCloseClick = () => {
        setIsExpanded(false); // Close the component when close button is clicked
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
                        <h4 className={styles.title}>Directions</h4>
                    </div>
                    <div className={styles.icons}>
                        <Image src="/icons/wheelchair.png" width={49} height={34}/>
                        <Image src="/icons/walking.png" width={49} height={34}/>
                        <Image src="/icons/bike.png" width={49} height={34}/>
                    </div>
                    <br/>
                    <Image src="/images/direction-switch.png" width={393} height={88}/>
                    <br/>
                    <br/>
                    <Image src="/images/time.png" width={370} height={90}/>
                    <br/>
                    <br/>
                    <Image src="/images/set-time.png" width={183} height={47}/> &nbsp; 
                    <Image src="/images/start.png" width={183} height={47}/>
                </div>
            </div>
        </div>
    );
};

export default PullUpPage;
