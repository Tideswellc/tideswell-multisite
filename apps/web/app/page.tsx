'use client';
import { useMemo } from 'react';
import siteMap from '../lib/siteMap';
import deals from '../mock/deals.json';
import styles from './styles.module.css';

function pickSite() {
  const url = new URL(window.location.href);
  const param = url.searchParams.get('site') || process.env.NEXT_PUBLIC_DEFAULT_SITE || 'soccerdealsdaily';
  return siteMap[param] ?? siteMap['soccerdealsdaily'];
}

export default function HomePage() {
  const site = useMemo(() => pickSite(), []);
  const siteDeals = (deals as any[]).filter(d => d.siteKey === site.key);

  return (
    <div className={styles.container} style={{ background: site.colors.background, color: site.colors.text }}>
      <header className={styles.header} style={{ borderColor: site.colors.accent }}>
        <div className={styles.logo} style={{ color: site.colors.primary }}>{site.logoText}</div>
        <div className={styles.tagline}>{site.tagline}</div>
      </header>

      <main className={styles.main}>
        <h2 style={{ color: site.colors.primary }}>Top Deals</h2>
        <div className={styles.grid}>
          {siteDeals.map(d => (
            <a className={styles.card} href={d.url} key={d.id} target="_blank" rel="noreferrer" style={{ borderColor: site.colors.accent }}>
              <img className={styles.image} src={d.image} alt={d.title} />
              <div className={styles.cardBody}>
                <div className={styles.title}>{d.title}</div>
                <div className={styles.meta}>
                  <span>{d.merchant}</span>
                  <span>${d.price.toFixed(2)}</span>
                </div>
                {d.originalPrice && (
                  <div className={styles.discount}>
                    <span className={styles.strike}>${d.originalPrice.toFixed(2)}</span>
                    <span className={styles.badge}>-{d.discountPct}%</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer} style={{ borderColor: site.colors.accent }}>
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </div>
  );
}
