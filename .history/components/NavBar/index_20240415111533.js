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
                        <Image src="./icons/searchgreen.svg" width={20} height={20} />
                        <a>Search</a>
                    </li>
                    <li className={styles.list}>
                        <Image src="./icons/community.svg" width={20} height={20} />
                        <a>Community</a>
                    </li>
                    <li className={styles.list}>
                        <Image src="./icons/hazard.svg" width={20} height={20} />
                        <a>Hazards</a>
                    </li>
                    <li className={styles.list}>
                        <Image src="./icons/.svg" width={20} height={20} />
                        <a>Profile</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}