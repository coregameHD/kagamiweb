import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures/HomepageFeatures';
import ExploreContent from "../components/ExploreContent/ExploreContent";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className="hero__title">Kagami</p>
        <p className="hero__subtitle"><b>{siteConfig.tagline}</b></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/visualnovel">
            Visual Novel
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/nihongo">
            Nihongo
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Kagami - ${siteConfig.tagline}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <hr></hr>
        <ExploreContent />
      </main>
    </Layout>
  );
}