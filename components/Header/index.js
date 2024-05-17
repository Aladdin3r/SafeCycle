import styles from './Header.module.css';
import { useRouter } from 'next/router';

export default function Header({ title, showBackButton }) {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div className={styles.container}>
            {showBackButton && (
                <button onClick={goBack} tabIndex={1} className={styles.backButton}>
                    <img src="/icons/back-button.svg" className={styles.backIcon} alt="Back" />
                </button>
            )}
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}
