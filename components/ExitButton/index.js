import styles from "./ExitButton.module.css"
import Image from "next/image"

export default function ExitButton() {
    return(
        <>
            <div className={styles.container}>
                <Image src="/icons/close-outline.svg" alt="close" width={40} height={40} />
            </div>
        </>
    )
}