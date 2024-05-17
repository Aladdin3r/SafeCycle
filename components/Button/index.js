import styles from "./Button.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";

const Button = ({ href, src, label, style, width, disabled }) => {
  const router = useRouter();
  const buttonClasses = classNames(
    styles.button,
    { [styles.buttonsecondary]: style === "secondary" }
  );

  const buttonStyle = {
    width: width,
  };

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <div className={styles.navigate}>
      <button 
        onClick={handleClick} 
        className={buttonClasses} 
        style={buttonStyle} 
        disabled={disabled}
      >
        {src && <img src={src} alt={label} className={styles.icon} />}
        {label}
      </button>
    </div>
  );
};

export default Button;
