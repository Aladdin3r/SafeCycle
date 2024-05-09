import Head from "next/head";
import styles from "@/styles/Onboarding.module.css";
import Image from "next/image";
import Button from "@/components/Button";
import TextBox from "@/components/TextBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>SafeCycle</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon3.png" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.container}>
            <div className={styles.loginTitle}>
                <h1>Login</h1>
            </div>
            <div className={styles.emailUsername}>
                <TextBox label="Email / Username" placeholder="Enter your email or username"/>
            </div>
            <div className={styles.password}>
                <TextBox label="Password" placeholder="Enter your password"/>
            </div>
            <div className={styles.loginButton}>
                <Button 
                    href="./maps"
                    label="Log in"
                />
            </div>
            <div className={styles.orWith}>
                <span>Or login with</span>
                <div className={styles.logins}>
                  <Button
                    href="./maps"
                    src="/icons/google.webp"
                    label="Login with Google"
                    style="secondary"
                  />
                  <Button
                    href="./maps"
                    src="/icons/apple.png"
                    label="Login with Apple"
                    style="secondary"
                  />
                  <Button
                    href="./maps"
                    src="/icons/facebook.webp"
                    label="Login with Facebook"
                    style="secondary"
                  />
              </div>
            </div>
        </div>
      </main>
    </>
  );
}
