import Image from "next/image";
import styles from "./HazardIcons.module.css";

const HazardIcons = ({ imageUrl, altText, width, height, title, onClick }) => {
  return (
    <div className={styles.iconContainer}>
      <button className={styles.iconButton} onClick={onClick}>
        <Image src={imageUrl} alt={altText} width={width} height={height} />
      </button>
      <p className={styles.iconTitle}>{title}</p>
    </div>
  );
};

export default HazardIcons;
