import Head from "next/head";
import styles from "@/styles/Onboarding.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("./animation");
    }, 1250);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>SafeCycle</title>
        <meta name="description" content="SafeCycle is your ultimate pedestrian safety and navigation app. 
        Find the best and most recent routes and navigate your day without hazards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon3.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className="onboardlogo">
            <Image src="/icons/logo.svg" width={67} height={117} />
          </div>
        </div>
        
      </main>
    </>
  );
}
