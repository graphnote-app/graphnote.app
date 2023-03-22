import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Graphnote</title>
        <meta name="description" content="Graphnote website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.spacer2}></div>
        <h1 className={styles.slogan}>Augment your memory</h1>
        <a className={styles.logo} href="https://github.com/graphnote-app">
          <Image
            src="https://raw.githubusercontent.com/graphnote-io/graphnote/master/Resources/graphnote_icon.png"
            width={128}
            height={128}
          />
        </a>
        <h1>Graphnote</h1>
        <p style={{maxWidth: 900}}>Center your world around relationships. Use a flat file structure with relationships (Labels & Links) to group together Documents.</p>
        <a className={styles.comingSoonLink} href="https://github.com/graphnote-app/graphnote">Coming Soon</a>
        <div className={styles.spacer1}></div>
        <Image
          src="https://raw.githubusercontent.com/graphnote-io/graphnote/master/Resources/graphnote_screenshot.png" 
          width={1145}
          height={739}
        />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
