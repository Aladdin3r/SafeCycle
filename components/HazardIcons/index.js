import Image from "next/image";
import Link from "next/link";
import styles from "./HazardIcons.module.css";

const HazardIcons = ({ imageUrl, altText, width, height, title }) => {
  return (
    <div className={styles.iconContainer}>
      <Link href="/addReport">
          <button className={styles.iconButton}>
            <Image src={imageUrl} alt={altText} width={width} height={height} />
          </button>
      </Link>
      <p className={styles.iconTitle}>{title}</p>
    </div>
  );
};

export default HazardIcons;
