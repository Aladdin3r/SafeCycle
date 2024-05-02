import styles from './Header.module.css';
import { useRouter } from 'next/router';

export default function Header({ title, showBackButton }) {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div className={styles.container}>
            <div className={styles.back}>
                {showBackButton && (
                    <button onClick={goBack} className={styles.backButton}>
                        <img src="/icons/back-button.svg" className={styles.backIcon}/>
                    </button>
                )}
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}
