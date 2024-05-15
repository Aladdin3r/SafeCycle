import Link from "next/link";
import styles from "./FilterButton.module.css";
import classNames from "classnames";

const FilterButton = ({ label }) => {

  return (
    <div className={styles.navigate}>
        <button>
            <div className={styles.content}>
                <Image />
                {label}
            </div>
        </button>
    </div>
  );
};

export default FilterButton;