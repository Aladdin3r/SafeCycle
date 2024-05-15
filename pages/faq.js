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
                            <div >
                        <FaqCard 
                            answer={"How accurate is the estimated walking time?"}
                            comments={[
                                { comment: '(Answer)' },
                            ]}
                            />
                            </div>
                        <FaqCard 
                            answer={"Can I use the app offline for walking directions?"}
                            comments={[
                                { comment: '(Answer)' },                           
                            ]}
                            />
                        <FaqCard 
                            answer={"How does the app determine the best biking route?"}
                            comments={[
                                { comment: '(Answer)' },                           
                            ]}
                            />
                        <FaqCard 
                            answer={"Can I customize my walking route to avoid certain areas?"}
                            comments={[
                                { comment: '(Answer)' },                           
                            ]}
                            />
                        <FaqCard 
                            answer={"Can I get turn-by-turn voice navigation while biking?"}
                            comments={[
                                { comment: '(Answer)' },                           
                            ]}
                            />
                        <FaqCard 
                            answer={"Does the app offer elevation information for biking routes?"}
                            comments={[
                                { comment: 'Yes, our app provides elevation information for biking routes. We understand that cyclists often want to know about elevation changes along their route to better prepare for uphill climbs or downhill descents. With our app, you can view elevation profiles for your chosen biking route, allowing you to plan your ride more effectively and anticipate any challenging terrain. Whether you are a casual cyclist or a seasoned rider, having access to elevation data ensures a smoother and more enjoyable biking experience.' },                           
                            ]}
                            />                                                                                                        
                            {/* <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}></div>saved</div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}></div>saved</div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}></div>saved</div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}></div>saved</div>
                            <div className={`${styles.selectorRectangle}`}> <div className={`${styles.selectorRectangleText}`}></div>saved</div> */}
                        </div>  
                </div>
            </main>
        </>
    )
}