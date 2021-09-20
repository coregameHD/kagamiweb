import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const firstDataRow = [
  {
    title: "วิชวลโนเวลคืออะไร",
    icon: "img/get_started-icon.png",
    link: "/visualnovel/preview",
    description: (
      <>
        มาทำความรู้จักกับเกมวิชวลโนเวลกันเถอะ
      </>
    ),
  },
  {
    title: "แนะนำเกมวิชวลโนเวล",
    icon: "img/user_guide-icon.png",
    link: "/visualnovel/preview",
    description: (
      <>
        แนะนำเนื้อเรื่องของเกมวิชวลโนเวลที่น่าสนใจทั้งเก่าและใหม่
      </>
    ),
  },
  {
    title: "ข่าวสารเกมวิชวลโนเวล",
    icon: "img/extend-icon.png",
    link: "https://www.facebook.com/kagamitranslation",
    description: (
      <>
        อัพเดตข่าวสารวงการวิชวลโนเวลและเอโรเกะ
      </>
    ),
  },
];

const secondDataRow = [
  {
    title: "เรียนไวยากรณ์ภาษาญี่ปุ่น",
    icon: "img/troubleshooting-icon.png",
    link: "/nihongo/grammar/index",
    description: (
      <>
        สรุปไวยากรณ์ภาษาญี่ปุ่นระดับ N1-N3 ที่ปรากฎในเกมวิชวลโนเวล
      </>
    ),
  },
  {
    title: "บล็อกส่วนตัว",
    icon: "img/contribute-icon.png",
    link: "/blog",
    description: (
      <>
        บล็อกรีวิว บอกเล่าความรู้สึกเกี่ยวกับเกมวิชวลโนเวล อนิเมะ และเรื่องจิปาถะอื่นๆ
      </>
    ),
  },
  {
    title: "เกี่ยวกับเว็บไซต์นี้",
    icon: "img/references-icon.png",
    link: "/about",
    description: (
      <>
        Kagami คืออะไร ทำเว็บไซต์นี้เพื่ออะไร และคนที่อยู่เบื้องหลังคือใคร
      </>
    ),
  },
];

function Feature({ title, link, icon, description }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link
        to={useBaseUrl(link)}
        className={
          hovered
            ? clsx("padding--lg margin-bottom--lg item shadow--tl", styles.card)
            : clsx("padding--lg margin-bottom--lg item shadow--lw", styles.card)
        }
        onMouseOver={toggleHover}
        onMouseOut={toggleHover}
      >
        <div>
          <div className={clsx(styles.titles)}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Features() {
  return (
    <>
      {firstDataRow && firstDataRow.length > 0 && (
        <section className={clsx("home-container", styles.features)}>
          <div className={clsx("row margin-horiz--lg")}>
            <div className={clsx("col col--2")}>
              <h2 className="container-h2">สำรวจเว็บไซต์นี้</h2>
            </div>
            <div className={clsx("col col--10")}>
              <div className={clsx("row")}>
                {firstDataRow.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
            <div className={clsx("col col--2")}></div>
            <div className={clsx("col col--10")}>
              <div className={clsx("row")}>
                {secondDataRow.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;