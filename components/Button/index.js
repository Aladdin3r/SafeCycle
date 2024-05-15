import Link from "next/link";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ href, src, label, style, width }) => {
  const buttonClasses = classNames(
    styles.button,
    { [styles.buttonsecondary]: style === "secondary" }
  );

  const buttonStyle = {
    width: width,
  };

  return (
    <div className={styles.navigate}>
      <Link href={href}>
        <button tabIndex={-1} className={buttonClasses} style={buttonStyle}>
          {src && <img src={src} alt={label} className={styles.icon} />}
          {label}
        </button>
      </Link>
    </div>
  );
};

export default Button;