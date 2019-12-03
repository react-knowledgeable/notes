import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const imageUrl = useBaseUrl('img/logo.svg');
  const {siteConfig = {}} = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <img
          className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
          src={imageUrl}
        />
      </main>
    </Layout>
  );
}

export default Home;
