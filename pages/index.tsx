import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Building Emails with React</title>
        <meta name="description" content="Building emails with React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Building Emails With React</h1>

        <p className={styles.description}>
          Attempting to render compiled MJML template...
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Basic Template</h3>
            <iframe
              id="basic_example"
              src="/templates/1.basic.html"
              className={styles.template}
            />
          </div>
          <div className={styles.card}>
            <h3>Custom Component</h3>
            <iframe
              id="custom_component"
              src="/templates/2.custom-component.html"
              className={styles.template}
            />
          </div>
          <div className={styles.card}>
            <h3>Full Template</h3>
            <iframe
              id="full_template"
              src="/templates/3.full-template.html"
              className={styles.template}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
