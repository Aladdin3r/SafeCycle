import Image from "next/image";
import styles from "./HazardIcons.module.css";
import Link from "next/link";

const HazardIcons = ({ imageUrl, altText, width, height, title, page }) => {
  return (
    <div className={styles.iconContainer}>
      <Link href={page} >
        <button className={styles.iconButton}>
          <Image src={imageUrl} alt={altText} width={width} height={height} />
        </button>
        <p className={styles.iconTitle}>{title}</p>
      </Link>
    </div>
  );
};

export default HazardIcons;
