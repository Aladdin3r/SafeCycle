import nextConfig from '@/next.config.mjs'
import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return( 
        <>
                   
        <div className={`${styles.container} ${styles.navigation}`}>
           
            <div className={styles.navigation}>
                
                <ul>
                    <Link href="/pages/community" className={styles.communitylink}>
                        <li className={styles.list}>
                            <Image src="./icons/community.svg" width={20} height={20} />
                            Community
                        </li>
                    </Link>
                    <Link href="/pages/hazards" className={styles.hazardslink}>
                        <li className={styles.list}>
                            <Image src="./icons/hazard.svg" width={20} height={20} />
                            Hazards
                        </li>
                    </Link>
                    <Link href="/quiz/quizHome" className={styles.quizlink}>
                        <li className={styles.list}>
                            <Image src="./icons/quiz.svg" width={20} height={20} />
                            Quiz
                        </li>
                    </Link>
                    <Link href="/pages/profile" className={styles.profilelink}>
                        <li className={styles.list}>
                            <Image src="./icons/hazard.svg" width={20} height={20} />
                            Profile
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </>
    )
}
