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
        <h3 className={styles.slogan}>&quot;Augment your memory&quot;</h3>
        <a className={styles.logo} href="https://github.com/graphnote-app">
          <Image
            src="https://raw.githubusercontent.com/graphnote-app/graphnote/master/Resources/graphnote_icon.png"
            width={128}
            height={128}
          />
        </a>
        <h1>Graphnote</h1>
        <p>An open source note taking & todo app with first-class Apple Pencil Support.</p>
        <a className={styles.comingSoonLink} href="https://github.com/graphnote-app">Coming Soon</a>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
