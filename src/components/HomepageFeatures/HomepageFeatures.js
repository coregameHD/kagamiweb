import React from 'react';
import clsx from 'clsx';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Kagami Visual Novel',
    imageUrl: '/img/logo_kagamivisualnovel.jpg',
    urllink: 'https://facebook.com/kagamivisualnovel',
    fblink: 'facebook.com/kagamivisualnovel',
    innerlink: '/visualnovel',
    description: (
      <>
        เพจอัพเดตข่าวสารและนำเสนอข้อมูลเกม Visual Novel / Eroge (เน้นกลุ่ม Bishoujo Game)
      </>
    ),
  },
  {
    title: 'Kagami Nihongo',
    imageUrl: '/img/logo_kagaminihongo.jpg',
    urllink: 'https://facebook.com/kagaminihongo',
    fblink: 'facebook.com/kagaminihongo',
    innerlink: '/nihongo',
    description: (
      <>
        เพจสอนภาษาญี่ปุ่นเชิงลึก (ระดับ N1-N3) จากการใช้งานจริงในเกมวิชวลโนเวล/อนิเมะ
      </>
    ),
  },
  {
    title: 'Kagami Blog',
    imageUrl: '/img/logo_kagamiblog.jpeg',
    urllink: 'https://kagamiweb.com/blog',
    fblink: 'kagamiweb.com/blog',
    innerlink: '/blog',
    description: (
      <>
        บล็อกส่วนตัว เล่าบ่นก่นด่าประสาคนไอที บ่นนู่นบ่นนี่ไปทั่ว (อัพเดตตามความขยัน)
      </>
    ),
  },
];

function Feature({imageUrl, title, urllink, fblink, innerlink, description}) {
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
        <a href={urllink} target="_blank" rel="noopener noreferrer">{fblink}</a>
        <p>{description}</p>
        <a class="button button--secondary btn-innerlink" href={innerlink}>ดูเพิ่มเติม</a>
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