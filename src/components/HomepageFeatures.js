import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    title: 'Kagami Translation',
    imageUrl: '/img/logo_kagamitranslation.jpeg',
    description: (
      <>
        เพจอัพเดตข่าวสารและนำเสนอข้อมูลเกม Visual Novel / Eroge (เน้นกลุ่ม Bishoujo Game)
      </>
    ),
  },
  {
    title: 'Kagami Nihongo',
    imageUrl: '/img/logo_kagaminihongo.jpeg',
    description: (
      <>
        เพจสอนภาษาญี่ปุ่นเชิงลึก (ระดับ N1-N3) จากการใช้งานจริงในเกมวิชวลโนเวล/อนิเมะ
      </>
    ),
  },
  {
    title: 'Kagami Blog',
    imageUrl: '/img/logo_kagamiblog.jpeg',
    description: (
      <>
        บล็อกส่วนตัว เล่าบ่นก่นด่าประสาคนไอที บ่นนู่นบ่นนี่ไปทั่ว (อัพเดตตามความขยัน)
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
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
