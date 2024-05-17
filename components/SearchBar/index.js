import styles from './SearchBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchBar() {
    return( 
        <>
        <div className={styles.container}>
            <Link href="">
                <button>
                    <div className={styles.search}>
                        <Image className={styles.searchIcon} src="./icons/search.svg" width={20} height={20} />
                        <input className={styles.searchInput} type="search" placeholder='Search place'></input>
                    </div>
                </button> 
            </Link>

        </div>
        </>
)}