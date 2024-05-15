import Head from "next/head";
import styles from "@/styles/Onboarding.module.css";
import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>SafeCycle - Welcome</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon3.png" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.container}>
            <div className={styles.welcomeTitle}>
                <h1>Welcome to SafeCycle!</h1>
            </div>
            <div className={styles.welcomePicture}>
                <Image src="/images/welcome.jpeg" width={395} height={329}/>
            </div>
            <div className={styles.welcomeButton}>
                <Button 
                    href="./login"
                    label="Get Started !"
                    width="372px"
                />
            </div>
        </div>
      </main>
    </>
  );
}
