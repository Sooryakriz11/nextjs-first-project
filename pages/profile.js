import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Profile() {
  return (  
    <div className={styles.container}>
      <Head>
        <title>Coder.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>
          Profile{" "}
          <a href="https://instagram.com/_coder.dev" target="blank">
            Coder.Dev
          </a>
        </h1>
        <p className={styles.code}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          nemo! Quas illo ipsa eligendi iure non obcaecati magni enim modi
          aliquam nisi veritatis quibusdam possimus dolorum vitae, ad voluptate
          alias.
        </p>
      </main>
    </div>
  );
}
