import nextConfig from '@/next.config.mjs'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    
    const title= "Title";

    return( 
        <>  
            <div className={`${styles.container}`}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
