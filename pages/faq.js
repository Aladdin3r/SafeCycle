import styles from "@/styles/Faq.module.css";
import FaqCard from "@/components/FaqCard";
import Head from "next/head";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function faq() {
    return(
        <>
            <Head>
            <title>SafeCycle – FAQ</title>
            <meta name="description" content="Hazards Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon3.png" /> 
            </Head>
            <main className={`${styles.main}`}>
                <div className={styles.container}>
                 <Header title="FAQ" showBackButton={true}/>
                        <div> 
                        <FaqCard 
                            text={"yeah"} 
                            />
                            <div className={`${styles.selectorRectangle}`}> 
                            <div className={`${styles.selectorRectangleText}`}> 
                            <FaqCard 
                            text={"yeah"}/></div></div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Saved</div></div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Saved</div></div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Saved</div></div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Saved</div></div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}>Saved</div></div>
                        </div>  
                </div>
            </main>
        </>
    )
}