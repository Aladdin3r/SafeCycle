import styles from './TextButton.module.css'
import Image from 'next/image'

export default function TextButton() {
    return(
        <div className={styles.container}>
            <div className={styles.icons}>
                <Image />
            </div>
            <div className={styles.address}>
                <p>McDonald’s - Brentwood</p>
                <h3>4501 Lougheed Hwy. P2501, Burnaby, BC V5C 3Z6</h3>
            </div>
        </div>
    )
}