import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <header className={classnames('hero', styles.heroBanner)}>
          <div className="container">
            <img
              className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
              src={withBaseUrl('img/logo.svg')}
            />
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={classnames(
                  'button button--primary button--lg',
                  styles.getStarted,
                )}
                to={withBaseUrl('event-flow')}>
                Read RK&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
        </header>
        <div className={classnames('container', styles.callout)}>
          <h2 className={styles.calloutHeading}>Why RK notes?</h2>
          <div className="row">
            <div className="col">
              <h3>To skip meetings</h3>
              <p>
                RK organizers are very busy. It is very hard for us to find
                dedicated times to meet. The notes are there to keep everyone on
                the same page.
              </p>
            </div>
            <div className="col">
              <h3>To run RK without a brain</h3>
              <p>
                Anybody can pick up a checklist and produce the basics of an RK
                event. The form of events is not the spirit of RK. We want to
                make RK special because of its community and its content.
              </p>
            </div>
            <div className="col">
              <h3>To document RK</h3>
              <p>RK has many virtues that we like to share.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
