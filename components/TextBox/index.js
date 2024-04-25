import styles from './TextBox.module.css';

export default function TextBox({ label, placeholder }) {
  return (
    <div className={styles.textBoxContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.textBox}>
        <input
          className={styles.textInput}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}