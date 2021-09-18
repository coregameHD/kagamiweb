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
          เกมวิชวลโนเวลและเอโรเกะเป็นสื่อเฉพาะกลุ่มที่น้อยคนจะได้รู้จักและสัมผัส 
          คงจะดีไม่น้อยถ้ามีคนรู้จักและสนใจมากขึ้น
        </p>
        <p>
          ด้วยเหตุนี้ เราจึงพยายามเผยแพร่เกมวิชวลโนเวลและเอโรเกะ
          ให้เป็นที่รู้จักมากขึ้นผ่านบทความแนะนำเกม เกร็ดความรู้ภาษาญี่ปุ่น
          และสื่ออื่นๆ ที่น่าตื่นตาตื่นใจ
        </p>
      </>
    ),
  },
  {
    title: "What we believe?",
    description: (
      <>
        <p>เราอยากให้คุณรู้จักเกมเอโรเกะมากกว่าคำว่าเกมลามก</p>

        <p>เราเชื่อเช่นนั้น และอยากให้คุณได้สัมผัสไปด้วยกัน
          มาทำความรู้จักกับเกมวิชวลโนเวลและเอโรเกะกันเถอะ!</p>
      </>
    ),
  },
  {
    title: "Our mission",
    description: (
      <>
        <p>
        เชื่อมโยงผู้คนด้วยเกมวิชวลโนเวลและภาษาญี่ปุ่น
        </p>

        <ol>
          <li>จัดทำแหล่งข้อมูลเกี่ยวกับเกมวิชวลโนเวลที่เป็นประโยชน์กับทุกคน</li>
          <li>สร้างชุมชนและพื้นที่เปิดกว้างสำหรับสนทนาพูดคุย แลกเปลี่ยนความคิดเห็น</li>
          <li>สนับสนุนวงการและผู้สรรสร้างผลงานทุกท่าน</li>
        </ol>
      </>
    ),
  },
  {
    title: "Who are we?",
    description: (
      <>
        <p>
        ใช้นามแฝงบนโลกอินเทอร์เน็ตว่า <b>coregameHD </b>  
        เป็นโปรแกรมเมอร์ที่ชื่นชอบภาษาญี่ปุ่นและเกมวิชวลโนเวลเป็นชีวิตจิตใจ
        </p>

        <p>
        ถ้าอยากรู้จักผมมากกว่านี้ อ่านเพิ่มเติมได้ที่บทความ{" "}
          <a href="blog/why-i-learn-japanese">เหตุผลที่ผมเรียนภาษาญี่ปุ่น และเกมที่เปลี่ยนชีวิตผมไปตลอดกาล</a>{" "}
        </p>
      </>
    ),
  },
  {
    title: "Stay Connected!",
    description: (
      <>
      <p>
        คุณสามารถติดตามได้ผ่านทางช่องทางต่อไปนี้
        </p>
        <ol>
          <li>
            <a href="https://www.facebook.com/kagamitranslation">เพจ Kagami Translation</a>
          </li>
          <li>
            <a href="https://www.facebook.com/kagaminihongo">เพจ Kagami Nihongo</a>
          </li>
          <li>
            <a href="https://www.facebook.com/kagamiblog">เพจ Kagami Blog</a>
          </li>
          <li>
            <a href="https://www.facebook.com/groups/VisualNovelDiscussionTH">สนทนาประสาคนเล่นเกม Visual Novel</a>
          </li>
          <li>
            <a href="https://www.kagamiweb.com">เว็บไซต์ KagamiWeb.com</a>
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Contact us",
    description: (
      <>
        <p>แอดมินเพจมีเพียงแค่ผมคนเดียวเท่านั้น สามารถติดต่อผมได้ในช่องทางต่อไปนี้</p>
        <ul>
          <li>
            <a href="https://m.me/kagamitranslation">Inbox เพจเฟซบุ๊ค</a>
          </li>
          <li>
            <a href="https://twitter.com/coregameHD">DM Twitter</a>
          </li>
        </ul>
        <p>
          Both English and Japanese is welcome.
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
        title={`About KagamiWeb.com`}
        description={`เกี่ยวกับเว็บไซต์ KagamiWeb.com`}
      >
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <p className="hero__title">{siteConfig.title}</p>
            <p className="hero__subtitle"><b>{siteConfig.tagline}</b></p>
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