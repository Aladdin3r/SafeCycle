import Image from "next/image";
import Link from "next/link";
import styles from "./HazardIcons.module.css";

let tabIndexCounter = 2;

const tabIndex = tabIndexCounter++;
const HazardIcons = ({ imageUrl, altText, width, height, title, onClick }) => {
  return (
    <div className={styles.iconContainer} >
      <Link tabIndex={tabIndex} href="/addReport">
          <button tabIndex={-1} className={styles.iconButton}>
            <Image src={imageUrl} alt={altText} width={width} height={height} />
          </button>
      </Link>
      <p className={styles.iconTitle}>{title}</p>
    </div>
  );
};

export default HazardIcons;
