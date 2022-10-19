import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MODGLO.skin</title>
        <meta name='description' content='Beautiful skin by Maya Gulline.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to…
          <br /> MODGLO.skin
        </h1>
      </main>

      <footer className={styles.footer}>by Mike Gulline</footer>
    </div>
  );
};

export default Home;
