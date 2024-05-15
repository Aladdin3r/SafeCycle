import React from "react";
import styles from './SearchBarButton.module.css';
import Image from 'next/image';

const SearchBarButton = ({ onClick }) => {
    return (
        <div className={styles.container}>
            <button tabIndex={1} className={styles.searchbutton} onClick={onClick}>
                <div className={styles.search}>
                    <Image className={styles.searchIcon} src="./icons/search.svg" width={20} height={20} />
                    Search place
                </div>
            </button>
        </div>
    );
};

export default SearchBarButton;
