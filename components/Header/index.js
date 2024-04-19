import styles from './Header.module.css';

export default function Header({ title }) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

