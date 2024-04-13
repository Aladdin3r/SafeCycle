import styles from './Answer.module.css';

export default function Answer({ name, text }) {
    return (
        <div className={styles.answerBox}>
            <input type="radio" name={name} className={styles.radioButton} />
            <label className={styles.label}>{text}</label>
        </div>
    );
}