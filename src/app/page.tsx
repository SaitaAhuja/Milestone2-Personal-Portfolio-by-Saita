import Head from "next/head";
import styles from "../styles/portfolio.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Saita Ahuja | Portfolio</title>
        <meta name="description" content="Saita Ahuja's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Hello, I'm Saita Ahuja</h1>
          <p className={styles.heroSubtitle}>A passionate web developer.</p>
        </section>

        <section className={styles.projects}>
          <h2>My Projects</h2>
          {/* You can add more details about your projects here */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
