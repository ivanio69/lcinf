import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mikhneev Ivan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h1>Hi. My name is Ivan Mikhneev</h1>
          <br />
          <p>
            I am an <b>audio and lightning engineer </b>for live performances,{" "}
            <b>lead guitarist </b>in a metal band called &quot;bez mamy&quot;,
            and I am a <b>full-stack web developer </b>and <b>web designer.</b>
          </p>
        </div>
        <div className={styles.socials}>
          <ul>
            <li
              onClick={() => {
                window.location.href = "https://instagram.com/ivan_bezmamy";
              }}
              className={styles.instagram}
            >
              <h4>Instgram</h4>
            </li>
            <li
              onClick={() => {
                window.location.href = "https://t.me/ivanio69";
              }}
              className={styles.telegram}
            >
              <h4>Telegram</h4>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
