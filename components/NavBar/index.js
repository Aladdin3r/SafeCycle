import nextConfig from '@/next.config.mjs'
import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return( 
        <>  
        <div className={`${styles.container}`}>
            <div className={styles.navigation}>
                <ul>
                    <Link href="/community" className={styles.iconlink}>
                        <li className={styles.list}>
                            <Image src="./icons/nav-community-outline.svg" width={25} height={25} />
                            Community
                        </li>
                    </Link>
                    <Link href="/hazards" className={styles.iconlink}>
                        <li className={styles.list}>
                            <Image src="./icons/nav-hazards-outline.svg" width={25} height={25} />
                            Hazards
                        </li>
                    </Link>
                    <Link href="/maps" className={styles.iconlink}>
                        <li className={styles.list}>
                            <Image src="./icons/nav-location-outline.svg" width={30} height={30} />
                            Maps
                        </li>
                    </Link>
                    <Link href="/quiz/quizHome" className={styles.iconlink}>
                        <li className={styles.list}>
                            <Image src="./icons/nav-quiz-outline.svg" width={25} height={25} />
                            Quiz
                        </li>
                    </Link>
                    <Link href="/pages/profile" className={styles.iconlink}>
                        <li className={styles.list}>
                            <Image src="./icons/nav-profile-outline.svg" width={25} height={25} />
                            Profile
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </>
    )
}
