import nextConfig from '@/next.config.mjs'
import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return(
        <div className={`${styles.container} ${styles.navigation}`}>
            <div className={styles.navigation}>
                <form>
                    <div className={styles.search}>
                        <Image className={styles.searchIcon} src="./icons/search.svg" width={20} height={20} />
                        <input className={styles.searchInput} type="search" placeholder='Search place'></input>
                    </div>
                </form>
                <ul>
                    
                    <li className={styles.list}>
                        <Image src="./icons/community.svg" width={20} height={20} />
                        <a>Community</a>
                    </li>
                    <Link href="/quiz/questionOne">
                    <li className={styles.list}>
                            <Image src="./icons/quiz.svg" width={20} height={20} />
                        <a>Quiz</a>
                    </li>
                    </Link>
                    <li className={styles.list}>
                        <Image src="./icons/hazard.svg" width={20} height={20} />
                        <a>Hazards</a>
                    </li>
                    <li className={styles.list}>
                        <Image src="./icons/profile.svg" width={20} height={20} />
                        <a>Profile</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}