import React from "react";
import styles from "./PullUpPage.module.css"

const PullPage = () => {
    return(
        <>
            <div className={styles.pullcontainer}>
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
        </>
    )
}

export default PullPage;