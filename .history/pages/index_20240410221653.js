import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Quiz from "./quiz.js";
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>SafeCycle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
      {/* <Link href="/quiz">
    
          <button>Take Quiz</button>
      
        </Link> */}
        <Quiz/>
      </main>
    </>
  );
}
