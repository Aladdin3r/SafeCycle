import nextConfig from '@/next.config.mjs'
import styles from './PullUp.module.css'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../NavBar'

export default function NavBar() {
    return( 
        <>  
        <div className={`${styles.container}`}>
            <div className={styles.PullUp}>
               
            </div>
            <NavBar />
        </div>
    </>
    )
}
