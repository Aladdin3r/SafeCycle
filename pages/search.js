import styles from "@/styles/Home.module.css"
import SearchBarButton from "@/components/SearchBar";
import TextButton from "@/components/SearchBar"
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Search() {
    return(
        <>
        <main>
            <div className={styles.container}>
                <SearchBarButton />
                <TextButton />
                <NavBar tabindex={-1}/>
            </div>
        </main>
        </>
    )
}