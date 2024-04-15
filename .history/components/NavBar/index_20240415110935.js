import nextConfig from '@/next.config.mjs'
import styles from './NavBar.module.css'
import Image from 'next/image'

export default function NavBar() {
    return(
        <div className={styles.Container}>
            <div className={styles.navigation}>
                <form>
                    <div className={styles.search}>
                        <Image className={styles.searchIcon} src="./icons/search.svg" width={20} height={20} />
                        <input className={styles.searchInput} type="search" placeholder='Search location'></input>
                    </div>
                </form>
                <ul>
                    <li className={styles.list}>
                        
                        <a>Search</a>
                    </li>
                    <li className={styles.list}>
                        <a>Community</a>
                    </li>
                    <li className={styles.list}>
                        <a>Hazards</a>
                    </li>
                    <li className={styles.list}>
                        <a>Profile</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}