import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Page({ children }) {
  return (
    <>
      <Head>
        <title>Wander Garden</title>
        <meta name="description" content="Your travel history in beautiful and private way." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
