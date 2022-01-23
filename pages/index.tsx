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
        <div className={styles.logo}>
          <Image
            src="https://raw.githubusercontent.com/graphnote-io/graphnote/master/graphnote.png"
            width={128}
            height={128}
          />
        </div>
        <h1>Graphnote</h1>
        <p>Coming Soon</p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
