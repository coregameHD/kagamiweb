import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./about.module.css";

const features = [
  {
    title: "What we do?",
    description: (
      <>
        <p>
          Kagami จัดทำขึ้นเพื่อเผยแพร่เกมวิชวลโนเวล/เอโรเกะ 
          รวมถึงเป็นพื้นที่เปิดกว้างเพื่อพูดคุยสนทนาเกี่ยวกับเกมวิชวลโนเวล 
          และภาษาญี่ปุ่น ประกอบด้วย
        </p>

        <p>
          Kagami is created by visual novel lover, for visual novel lover.
        </p>
      </>
    ),
  },
  {
    title: "What we believe?",
    description: (
      <>
        <p>การอยู่ร่วมกัน, ยอมรับความหลากหลาย, ร่วมสร้างบทสนทนาที่ดี</p>

        <p>
          We believe in visual novel and eroge.
        </p>
      </>
    ),
  },
  {
    title: "Our mission",
    description: (
      <>
        <p>
          เราอยากเชื่อมโยงผู้คนเข้าด้วยกันด้วยเอโรเกะและวิชวลโนเวล
        </p>

        <p>
          Linked people together with visual novel and Japanese.
        </p>
      </>
    ),
  },
  {
    title: "Who are we?",
    description: (
      <>
        <p>
        ใช้นามแฝงบนโลกอินเทอร์เน็ตว่า <b>coregameHD</b> ชอบเกมวิชวลโนเวลมากเป็นพิเศษ
        </p>

        <p>
          อ่านประวัติเพิ่มเติมเกี่ยวกับผมได้ที่{" "}
          <a href="blog/why-i-learn-japanese">เหตุผลที่ผมเรียนภาษาญี่ปุ่น และเกมที่เปลี่ยนชีวิตผมไปตลอดกาล</a>{" "}
        </p>

        <p>
        My name is coregameHD. I love visual novel.
        </p>
      </>
    ),
  },
  {
    title: "Stay Connected!",
    description: (
      <>
        <ol>
          <li>
            <a href="https://www.facebook.com/kagamitranslation">Kagami Translation</a>
            <p>Visual Novel / Eroge news and update site.</p>
          </li>
          <li>
            <a href="https://www.facebook.com/kagaminihongo">Kagami Nihongo</a>
            <p>Learn Japanese from Anime and VN (for upper-intermediate level) JLPT N1-N3.</p>
          </li>
          <li>
            <a href="https://www.facebook.com/kagamiblog">Kagami Blog</a>
            <p>Personal Blog from n00b programmer.</p>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/VisualNovelDiscussionTH">สนทนาประสาคนเล่นเกม Visual Novel</a>
            <p>Community for discussing visual novel, eroge, galge for Thai people.</p>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Contact us",
    description: (
      <>
        <p>คุณสามารถติดต่อเจ้าของเพจได้ในช่องทางต่อไปนี้:<br></br>
        You can contact us from:</p>
        <ul>
          <li>
            <a href="https://github.com/DefinitelyTyped">Facebook Inbox</a>
          </li>
          <li>
            <a href="https://github.com/TypeStrong/ts-loader">DM me at Twitter</a>
          </li>
          <li>
            <a href="https://github.com/TypeStrong/fork-ts-checker-webpack-plugin">
              email me
            </a>
          </li>
        </ul>
        <p>
          I also wrote the{" "}
          <a href="https://blog.johnnyreilly.com/2019/10/08/definitely-typed-movie">
            history of Definitely Typed
          </a>
        </p>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h2>{title}</h2>
      {description}
    </div>
  );
}

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <>
      <Layout
        title={`About ${siteConfig.title}`}
        description={`What is ${siteConfig.title}`}
      >
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <p className="hero__title">{siteConfig.title}</p>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </header>
        <main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </Layout>
    </>
  );
}

export default About;