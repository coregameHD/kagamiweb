import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    title: 'Kagami Translation',
    imageUrl: '/img/logo_kagamitranslation.jpeg',
    link: 'https://facebook.com/kagamitranslation',
    description: (
      <>
        เพจอัพเดตข่าวสารและนำเสนอข้อมูลเกม Visual Novel / Eroge (เน้นกลุ่ม Bishoujo Game)
      </>
    ),
  },
  {
    title: 'Kagami Nihongo',
    imageUrl: '/img/logo_kagaminihongo.jpeg',
    link: 'https://facebook.com/kagaminihongo',
    description: (
      <>
        เพจสอนภาษาญี่ปุ่นเชิงลึก (ระดับ N1-N3) จากการใช้งานจริงในเกมวิชวลโนเวล/อนิเมะ
      </>
    ),
  },
  {
    title: 'Kagami Blog',
    imageUrl: '/img/logo_kagamiblog.jpeg',
    link: 'https://facebook.com/kagamiblog',
    description: (
      <>
        บล็อกส่วนตัว เล่าบ่นก่นด่าประสาคนไอที บ่นนู่นบ่นนี่ไปทั่ว (อัพเดตตามความขยัน)
      </>
    ),
  },
];

function Feature({imageUrl, title, link, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
          <a href={link}><img className={styles.featureImage} src={imgUrl} alt={title} /></a>
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <a href={link}>{link}</a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
