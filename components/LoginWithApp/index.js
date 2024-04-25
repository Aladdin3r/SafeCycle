import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ href, label, disabled }) => {
  return (
    <div className={styles.navigate}>
      <Link href={href}>
        <button className={styles.button} disabled={disabled}>
          {label}
        </button>
      </Link>
    </div>
  );
};

export default Log;
