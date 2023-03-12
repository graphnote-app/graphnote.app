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
        <p>An open source note taking & todo app with first-class Apple Pencil support.</p>
        <a className={styles.comingSoonLink} href="https://github.com/graphnote-app">Coming Soon</a>
        <div className={styles.spacer1}></div>
        <Image
          src="https://raw.githubusercontent.com/graphnote-io/graphnote/master/Resources/graphnote_screenshot_light.png" 
          width={1106}
          height={696}
        />
        <div className={styles.spacer2}></div>
        <h3>Dark mode included.</h3>
        <div className={styles.spacer2}></div>
        <Image
          src="https://raw.githubusercontent.com/graphnote-io/graphnote/master/Resources/graphnote_screenshot_dark.png" 
          width={1106}
          height={696}
        />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
