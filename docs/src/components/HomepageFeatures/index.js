import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modern & Minimalistic',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        MatCSS was designed to be modern, minimalistic, and easy to use. We deisn our components to be as simple as possible, while still being powerful and cusomizable.
      </>
    ),
  },
  {
    title: 'Bootstrap RFS',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        MatCSS was built using Bootstrap's RFS, a powerful responsive font scaling utility made to make your website look great on all devices.
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        MatCSS is highly customizable. You can easily modify the looks with CSS variables, or even build your own MatCSS with your custom SCSS variables!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
