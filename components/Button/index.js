import Link from "next/link";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = ({ href, src, label , style}) => {
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

// import Link from "next/link";
// import styles from "./Button.module.css";
// import classNames from "classnames";

// const Button = ({ href, src, label, style, disabled }) => {
//   const buttonClasses = classNames(
//     styles.button,
//     { [styles.buttonsecondary]: style === "secondary" },
//     { [styles.disabled]: disabled }
//   );

//   return (
//     <div className={styles.navigate}>
//       <Link href={href}>
//         <button className={buttonClasses} disabled={disabled}>
//           {src && <img src={src} alt={label} className={styles.icon} />}
//           {label}
//         </button>
//       </Link>
//     </div>
//   );
// };


// import Link from "next/link";
// import styles from "./Button.module.css";
// import classNames from "classnames";

// const Button = ({ href, src, label, disabled , style}) => {
//   const buttonClasses = classNames(
//     styles.button,
//     { [styles.buttonsecondary]: style === "secondary" }
//   );

//   const buttonContent = href ? (
//     <Link href={href}>
//       <a className={buttonClasses}>
//         {src && <img src={src} alt={label} className={styles.icon} />}
//         {label}
//       </a>
//     </Link>
//   ) : (
//     <button className={buttonClasses} disabled={disabled}>
//       {src && <img src={src} alt={label} className={styles.icon} />}
//       {label}
//     </button>
//   );

//   return <div className={styles.navigate}>{buttonContent}</div>;
// };

// export default Button;
