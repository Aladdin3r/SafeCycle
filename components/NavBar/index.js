import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react';

export default function NavBar() {
    const router = useRouter();

    const isActive = (href) => {
        return router.pathname === href;
    };

    return(  
        <>  
            <div className={`${styles.container}`}>
                <div className={styles.navigation}>
                    <ul>
                        <NavItem href="/community" active={isActive("/community")} iconInactive="./icons/nav-community-outline.svg" iconActive="./icons/nav-community.svg" text="Community" />
                        <NavItem href="/hazards" active={isActive("/hazards")} iconInactive="./icons/nav-hazards-outline.svg" iconActive="./icons/nav-hazards.svg" text="Hazards" />
                        <NavItem href="/maps" active={isActive("/maps")} iconInactive="./icons/nav-location-outline.svg" iconActive="./icons/nav-location.svg" text="Maps" />
                        <NavItem href="/quizHome" active={isActive("/quizHome")} iconInactive="./icons/nav-quiz-outline.svg" iconActive="./icons/nav-quiz.svg" text="Quiz" />
                        <NavItem href="/profile" active={isActive("/profile")} iconInactive="./icons/nav-profile-outline.svg" iconActive="./icons/nav-profile.svg" text="Profile" />
                    </ul>
                </div>
            </div>
        </>
    )
}

function NavItem({ href, active, iconInactive, iconActive, text }) {
    return (
        <Link href={href} replace className={styles.iconlink} >
            <li className={`${styles.navigation} ${active ? styles.active : ''}`}>
                <Image src={active ? iconActive : iconInactive} width={25} height={25} />
                {text}
            </li>
        </Link>
    );
}
