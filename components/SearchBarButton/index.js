import styles from './SearchBarButton.module.css'
import Image from 'next/image'

export default function SearchBarButton() {
    return( 
        <>
        <div className={styles.container}>
            <button className={styles.searchbutton}>
                <div className={styles.search}>
                    <Image className={styles.searchIcon} src="./icons/search.svg" width={20} height={20} />
                    Search place
                </div>
            </button> 
        </div>
        </>
)}