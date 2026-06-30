import { useState } from 'react';
import type { Lang } from '../../types';
import { BreadcrumbBar } from '../../components/BreadcrumbBar';
import { BrowserMockup } from '../../components/BrowserMockup';
import { DrawingRule } from '../../components/DrawingRule';
import { CodeButton } from '../../components/CodeButton';
import { FooterNav } from '../../components/FooterNav';
import { Reveal } from '../../components/Reveal/Reveal';
import { Tag } from '../../components/Tag';
import { dclCopy, p1points, p1tags, features, stack } from '../../content/decentraland';
import { colors } from '../../tokens';
import styles from './Decentraland.module.css';

const ImageSlot = ({ label, height }: { label: string; height: string }) => (
  <div className={styles.imageSlot} style={{ height }}>
    <span className={styles.imageSlotLabel}>{label}</span>
  </div>
);

export function Decentraland() {
  const [lang, setLang] = useState<Lang>('en');
  const t = dclCopy[lang];
  const points = p1points[lang];
  const featureList = features[lang].map((f, i) => ({
    ...f,
    txtOrder: i % 2 === 0 ? 0 : 1,
    imgOrder: i % 2 === 0 ? 1 : 0,
  }));

  return (
    <div
      className={styles.page}
      style={{
        '--color-accent': colors.projects.decentraland,
        '--color-accent-border': 'rgba(255, 45, 85, 0.45)',
        '--color-accent-35': 'rgba(255, 45, 85, 0.35)',
        '--color-accent-18': 'rgba(255, 45, 85, 0.18)',
      } as React.CSSProperties}
    >
      <div className={styles.inner}>
        <BreadcrumbBar projectName="Decentraland" lang={lang} onLangChange={setLang} />

        {/* ===== BRANDED CASE-STUDY FRAME ===== */}
        <div className={styles.frame}>
          {/* Decorative glows */}
          <div className={styles.glowTopRight} />
          <div className={styles.glowBottomLeft} />
          <div className={styles.glowMidLeft} />
          <div className={styles.glowMidRight} />
          <div className={styles.glowTop} />
          <div className={styles.ring}>
            <span className={styles.ringDot} />
          </div>
          <div className={styles.gridPattern} />

          <div className={styles.frameInner}>

            {/* ===== HERO ===== */}
            <Reveal delay={100}>
              <div className={styles.heroMeta}>
                <p className={styles.eyebrow}>{t.eyebrow}</p>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {t.status}
                </span>
              </div>
            </Reveal>
            <Reveal delay={180}><h1 className={styles.h1}>Decentraland</h1></Reveal>
            <Reveal delay={280}><p className={styles.heroStatement}>{t.heroStatement}</p></Reveal>
            <Reveal delay={360}>
              <div className={styles.tagRow}>
                {p1tags.map(tag => <Tag key={tag} dark>{tag}</Tag>)}
              </div>
            </Reveal>
            <Reveal delay={440}>
              <div className={styles.heroCta}>
                <CodeButton
                  href="https://decentraland.org/top-scenes"
                  label={t.viewLive}
                  variant="primary"
                  accentHover="#FF2D55"
                />
                <CodeButton
                  href="https://github.com/decentraland"
                  label={t.viewCode}
                  accentColor="rgba(255,45,85,.45)"
                  accentHover="#FF2D55"
                />
              </div>
            </Reveal>

            {/* ===== P1 — DESIGN SYSTEM + TOP SCENES ===== */}
            <div className={styles.rule}>
              <DrawingRule variant="gradient" />
            </div>
            <section className={styles.section}>
              <Reveal>
                <div className={styles.sectionHead}>
                  <div className={styles.kicker}>
                    <span className={styles.kickerN}>01</span>
                    <span>{t.p1kicker}</span>
                  </div>
                  <h2 className={styles.h2}>{t.p1head}</h2>
                  <p className={styles.bodyCopy}>{t.p1copy}</p>
                </div>
              </Reveal>

              <Reveal>
                <p className={styles.mediaLabel}>{t.dsLabel}</p>
                <div className={styles.screenshotsGrid}>
                  <BrowserMockup label="ui2 · Card">
                    <ImageSlot label="ui2 Card screenshot" height="clamp(220px, 26vw, 320px)" />
                  </BrowserMockup>
                  <BrowserMockup label="ui2 · Table">
                    <ImageSlot label="ui2 Table screenshot" height="clamp(220px, 26vw, 320px)" />
                  </BrowserMockup>
                </div>
              </Reveal>

              <Reveal>
                <p className={styles.mediaLabel} style={{ marginTop: 'clamp(28px, 3.6vw, 44px)' }}>{t.videoLabel}</p>
                <BrowserMockup urlBar="decentraland.org/top-scenes" label="Top Scenes">
                  <div className={styles.videoSlot}>
                    <ImageSlot label="Top Scenes video" height="clamp(280px, 42vw, 540px)" />
                    <div className={styles.playBtn}>
                      <span className={styles.playTriangle} />
                    </div>
                  </div>
                </BrowserMockup>
              </Reveal>

              <div className={styles.pointsGrid}>
                {points.map((pt, i) => (
                  <Reveal key={pt.n} delay={i * 80}>
                    <div className={styles.point}>
                      <span className={styles.pointN}>{pt.n}</span>
                      <div>
                        <p className={styles.pointTitle}>{pt.title}</p>
                        <p className={styles.pointDesc}>{pt.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className={styles.repoRow}>
                  <CodeButton href="https://github.com/decentraland/ui2" label="decentraland/ui2" accentColor="rgba(255,45,85,.45)" accentHover="#FF2D55" />
                  <CodeButton href="https://github.com/decentraland/top-scenes" label="decentraland/top-scenes" accentColor="rgba(255,45,85,.45)" accentHover="#FF2D55" />
                </div>
              </Reveal>
            </section>

            {/* ===== P2 — CREATOR HUB ===== */}
            <div className={styles.rule}>
              <DrawingRule variant="gradient" />
            </div>
            <section className={styles.section}>
              <Reveal>
                <div className={styles.sectionHead}>
                  <div className={styles.kicker}>
                    <span className={styles.kickerN}>02</span>
                    <span>{t.p2kicker}</span>
                  </div>
                  <h2 className={styles.h2}>{t.p2head}</h2>
                  <p className={styles.bodyCopy}>{t.p2copy}</p>
                  <p className={styles.featNote}>
                    <span className={styles.featNoteDot} />
                    {t.featNote}
                  </p>
                </div>
              </Reveal>

              <div className={styles.featuresCol}>
                {featureList.map((f, i) => (
                  <Reveal key={f.n} delay={i * 60}>
                    <div className={styles.featureRow}>
                      <div className={styles.featureTxt} style={{ order: f.txtOrder }}>
                        <span className={styles.featureN}>{f.n}</span>
                        <div>
                          <h3 className={styles.h3}>{f.title}</h3>
                          <p className={styles.featureDesc}>{f.desc}</p>
                          <div className={styles.featureTags}>
                            {f.tags.map(tg => <Tag key={tg} dark>{tg}</Tag>)}
                          </div>
                        </div>
                      </div>
                      <div style={{ order: f.imgOrder }}>
                        <BrowserMockup label="creator-hub">
                          <ImageSlot label="Creator Hub screenshot" height="clamp(220px, 26vw, 340px)" />
                        </BrowserMockup>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className={styles.repoRow}>
                  <CodeButton href="https://github.com/decentraland/creator-hub" label="decentraland/creator-hub" accentColor="rgba(255,45,85,.45)" accentHover="#FF2D55" />
                </div>
              </Reveal>
            </section>

            {/* ===== STACK ===== */}
            <div className={styles.rule}>
              <DrawingRule variant="gradient" />
            </div>
            <Reveal>
              <section className={styles.stackSection}>
                <p className={styles.stackEyebrow}>{t.stackEyebrow}</p>
                <div className={styles.stackTags}>
                  {stack.map(s => <Tag key={s} dark>{s}</Tag>)}
                </div>
              </section>
            </Reveal>

          </div>
        </div>

        {/* ===== FOOTER NAV ===== */}
        <Reveal>
          <FooterNav
            lang={lang}
            eyebrow={t.navEyebrow}
            backSub={t.backSub}
            backLabel={t.backHome}
            backHref="/"
            nextSub={t.nextSub}
            nextLabel={t.nextProj}
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
