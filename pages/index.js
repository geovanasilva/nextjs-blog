import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Hello world 👩🏽‍💻</h1>
        <hr />
        <p>I'm a Software Engineer focused on Front-end engineering and:</p>
        <ul>
          <li>⚛️ I love Javascript and React</li>
          <li>
            🌱 I’m currently learning learning Vue.js, Angular and some advanced
            frontend topics
          </li>
          <li>
            💜 I really enjoy getting involved in voluntary causes that I
            identify with and mainly working with developer communities, at this
            moment I'm a community manager at:{" "}
            <a href="https://twitter.com/compiladoras">@compiladoras</a>,
            <a href="https://twitter.com/womenthatreact">@womenthatreact</a>,
            and{" "}
            <a href="https://twitter.com/mulheresnatecbs">@mulheresnatecbs</a>,
            they're all focused on support women in technology 💃
          </li>
        </ul>
      </section>
    </Layout>
  );
}
