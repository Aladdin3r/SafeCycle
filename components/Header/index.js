import styles from "@/styles/Header.module.css";

export default function Header() {
    const title = "title";

    return (
        <div className={styles.container}>
            <div>
                <h1>{title}</h1>
            </div>
        </div>
    )
}