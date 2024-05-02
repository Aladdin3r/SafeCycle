import Link from "next/link";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ href, src, label, disabled , style}) => {
  const buttonClasses = classNames(
    styles.button,
    { [styles.buttonsecondary]: style === "secondary" }
  );

  return (
    <div className={styles.navigate}>
      <Link href={href}>
        <button className={buttonClasses}>
          {src && <img src={src} alt={label} className={styles.icon} />}
          {label}
        </button>
      </Link>
    </div>
  );
};

export default Button;
