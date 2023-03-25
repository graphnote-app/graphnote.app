import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Email} from '../components/Email'
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
        <p style={{maxWidth: 800, lineHeight: "2em"}}>Center your world around relationships. A flat graph file structure with relationships (<span style={{borderRadius: "4px", padding: "4px", backgroundColor: "rgba(128, 128, 128, 0.25)", color: "#FFC962", fontWeight: "bold"}}>labels</span> & <span style={{borderRadius: "4px", padding: "4px", backgroundColor: "rgba(128, 128, 128, 0.25)", color: "#5E81FF", fontWeight: "bold"}}>links</span>), to group together <span style={{borderRadius: "4px", padding: "4px", backgroundColor: "rgba(128, 128, 128, 0.25)", color: "#E173E2", fontWeight: "bold"}}>documents</span></p>
        
        <div className={styles.spacer1}></div>
        <Image
          src="https://raw.githubusercontent.com/graphnote-io/graphnote/master/Resources/graphnote_screenshot.png" 
          width={1145}
          height={739}
        />
        <a className={styles.comingSoonLink} href="https://github.com/graphnote-app/graphnote">Open Source</a>
        <div className={styles.spacer1}></div>
        <h3 className={styles.emailHeader}>Be notified by email when the beta is launched</h3>
        <Email />
        <div className={styles.spacer1}></div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
