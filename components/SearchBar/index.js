import styles from './SearchBar.module.css'
import Image from 'next/image'

export default function SearchBar() {
    return( 
        <>
        <div className={styles.container}>
            <form>
                <div className={styles.search}>
                    <Image className={styles.searchIcon} src="./icons/search.svg" width={20} height={20} />
                    <input className={styles.searchInput} type="search" placeholder='Search place'></input>
                </div>
            </form> 
        </div>
        </>
)}