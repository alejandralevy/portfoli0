import { useState } from 'react';
import type { Lang } from '../../types';
import { BreadcrumbBar } from '../../components/BreadcrumbBar';
import { CodeButton } from '../../components/CodeButton';
import { DrawingRule } from '../../components/DrawingRule';
import { FooterNav } from '../../components/FooterNav';
import { Reveal } from '../../components/Reveal/Reveal';
import { colors } from '../../tokens';
import {
  weCareCopy,
  skills,
  chosenPoints,
  phases,
} from '../../content/wecare';
import styles from './WeCare.module.css';

const RULE_COLOR = 'rgba(47, 107, 255, 0.3)';

export function WeCare() {
  const [lang, setLang] = useState<Lang>('en');
  const t = weCareCopy[lang];
  const points = chosenPoints[lang];
  const phaseList = phases[lang];

  return (
    <div
      className={styles.page}
      style={{ '--color-accent': colors.projects.weCare } as React.CSSProperties}
    >
      <div className={styles.inner}>
        <BreadcrumbBar projectName="WeCare" lang={lang} onLangChange={setLang} />

        <div className={styles.frame}>
          <div className={styles.frameInner}>

            {/* ===== HERO ===== */}
            <div className={styles.heroWrap}>
              <div className={styles.heroLeft}>
                <Reveal delay={80}>
                  <div className={styles.heroMeta}>
                    <span className={styles.metaLine}>{t.metaLine}</span>
                    <span className={styles.badge}>
                      <span className={styles.badgeDot} />
                      {t.badge}
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={150}><h1 className={styles.h1}>WeCare</h1></Reveal>
                <Reveal delay={240}><p className={styles.heroStatement}>{t.heroStatement}</p></Reveal>
                <Reveal delay={320}>
                  <div className={styles.pillRow}>
                    {skills.map(s => <span key={s} className={styles.pill}>{s}</span>)}
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className={styles.heroCta}>
                    <CodeButton
                      href="#"
                      label={t.viewLive}
                      variant="primary"
                      accentHover="#2F6BFF"
                    />
                  </div>
                </Reveal>
              </div>
              <div className={styles.heroRight} aria-hidden="true">
                <span className={styles.decorPlus}>+</span>
              </div>
            </div>

            <hr className={styles.heroDivider} />
            <Reveal delay={400}>
              <p className={styles.heroBio}>{t.heroBio}</p>
            </Reveal>

            {/* ===== 01 THE SOLUTION ===== */}
            <div className={styles.ruleWrap}>
              <DrawingRule style={{ '--rule-color': RULE_COLOR } as React.CSSProperties} />
            </div>
            <section className={styles.section}>
              <Reveal>
                <div className={styles.sectionLabel}>
                  <span className={styles.sectionN}>01</span>
                  <span className={styles.sectionKicker}>{t.s2kicker}</span>
                </div>
                <h2 className={styles.h2}>{t.s2head}</h2>
                <p className={styles.bodyText}>{t.s2body}</p>
              </Reveal>
              <Reveal>
                <div className={styles.chosenCard}>
                  <div className={styles.chosenHeader}>
                    <span className={styles.chosenBadge}>{t.chosenBadge}</span>
                    <span className={styles.chosenTag}>{t.chosenTitle} · {t.chosenTag}</span>
                  </div>
                  <h3 className={styles.chosenHeading}>{t.chosenTitle}</h3>
                  <p className={styles.chosenSub}>{t.chosenSub}</p>
                  <div className={styles.chosenPoints}>
                    {points.map(pt => (
                      <div key={pt} className={styles.chosenPoint}>
                        <span className={styles.chosenPlus} aria-hidden="true">+</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ===== 02 THE PROTOTYPE ===== */}
            <div className={styles.ruleWrap}>
              <DrawingRule style={{ '--rule-color': RULE_COLOR } as React.CSSProperties} />
            </div>
            <section className={styles.section}>
              <Reveal>
                <div className={styles.sectionLabel}>
                  <span className={styles.sectionN}>02</span>
                  <span className={styles.sectionKicker}>{t.s4kicker}</span>
                </div>
                <h2 className={styles.h2}>{t.s4head}</h2>
                <p className={styles.bodyText}>{t.s4body}</p>
              </Reveal>

              <Reveal>
                <div className={styles.mockupLarge}>
                  <div className={styles.mockupChrome}>
                    <span className={styles.chromeDot} data-accent />
                    <span className={styles.chromeDot} />
                    <span className={styles.chromeDot} />
                    <span className={styles.chromeUrl}>wecare.app/orders</span>
                  </div>
                  <div className={styles.mockupBody}>
                    <video
                      src="/video/wecare.mov"
                      controls
                      playsInline
                      style={{ width: '100%', height: 'clamp(260px,36vw,480px)', display: 'block', objectFit: 'cover', background: '#000' }}
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className={styles.protoCta}>
                  <CodeButton
                    href="#"
                    label={t.ctaBtn}
                    variant="primary"
                    accentHover="#2F6BFF"
                  />
                  <span className={styles.ctaNote}>
                    <span className={styles.ctaNoteDot} />
                    {t.ctaNote}
                  </span>
                </div>
              </Reveal>
            </section>

            {/* ===== 03 HOW IT'S BUILT ===== */}
            <div className={styles.ruleWrap}>
              <DrawingRule style={{ '--rule-color': RULE_COLOR } as React.CSSProperties} />
            </div>
            <section className={styles.section}>
              <Reveal>
                <div className={styles.sectionLabel}>
                  <span className={styles.sectionN}>03</span>
                  <span className={styles.sectionKicker}>{t.s5kicker}</span>
                </div>
                <h2 className={styles.h2}>{t.s5head}</h2>
                <p className={styles.bodyText}>{t.s5body}</p>
              </Reveal>
              <Reveal>
                <div className={styles.phaseGrid}>
                  {phaseList.map(phase => (
                    <div key={phase.n} className={styles.phaseCard}>
                      <div className={styles.phaseTop}>
                        <span className={styles.phaseLabel}>{phase.label}</span>
                        <span className={styles.phaseN}>{phase.n}</span>
                      </div>
                      <h3 className={styles.phaseTitle}>{phase.title}</h3>
                      <p className={styles.phaseDesc}>{phase.desc}</p>
                      <ul className={styles.phaseBullets}>
                        {phase.bullets.map(b => (
                          <li key={b} className={styles.phaseBullet}>{b}</li>
                        ))}
                      </ul>
                      <span className={styles.phaseCta}>{phase.cta}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

          </div>
        </div>

        {/* ===== KEEP EXPLORING ===== */}
        <Reveal>
          <FooterNav
            lang={lang}
            eyebrow={t.navEyebrow}
            backSub={t.backSub}
            backLabel={t.backLabel}
            backHref="/"
            nextSub={t.nextSub}
            nextLabel={t.nextLabel}
            nextHref="/tardeo-argentino"
            nextColor={colors.projects.tardeoArgentino}
          />
        </Reveal>

        {/* ===== CONTACT ===== */}
        <Reveal>
          <div className={styles.contact}>
            <div className={styles.contactLinks}>
              <a href="mailto:alelevy15@gmail.com" className={styles.contactEmail}>alelevy15@gmail.com</a>
              <a href="https://linkedin.com/in/alejandralevy" target="_blank" rel="noreferrer" className={styles.contactLink}>LinkedIn</a>
              <a href="https://github.com/alejandralevy" target="_blank" rel="noreferrer" className={styles.contactLink}>GitHub</a>
            </div>
            <span className={styles.avail}>
              <span className={styles.availDot} />
              {t.avail}
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
