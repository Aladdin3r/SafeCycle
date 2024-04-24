import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'
import Quiz from "./quiz/[qPage]";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <>
      <Head>
        <title>SafeCycle</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div>
        <NavBar />
        <Link href="/quiz/questionOne">

          <button>Take Quiz</button>
      
        </Link>
        <Quiz/>
        </div>

      </main>
    </>
  );
}
