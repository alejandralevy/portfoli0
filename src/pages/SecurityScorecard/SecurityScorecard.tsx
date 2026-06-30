import { useState } from 'react';
import type { Lang } from '../../types';
import { BreadcrumbBar } from '../../components/BreadcrumbBar';
import { BrowserMockup } from '../../components/BrowserMockup';
import { CodeButton } from '../../components/CodeButton';
import { FooterNav } from '../../components/FooterNav';
import { Reveal } from '../../components/Reveal/Reveal';
import {
  sscCopy,
  heroTags,
  decoPositions,
  problems,
  threads,
  decisions,
  steps,
  techPoints,
} from '../../content/securityscorecard';
import { colors } from '../../tokens';
import styles from './SecurityScorecard.module.css';

const ImageSlot = ({ label, height }: { label: string; height: string }) => (
  <div className={styles.imageSlot} style={{ height }}>
    <span className={styles.imageSlotLabel}>{label}</span>
  </div>
);

export function SecurityScorecard() {
  const [lang, setLang] = useState<Lang>('en');
  const t = sscCopy[lang];

  return (
    <div
      className={styles.page}
      style={{
        '--color-accent': '#5C45E0',
        '--color-accent-border': 'rgba(92,69,224,.45)',
        '--color-accent-18': 'rgba(92,69,224,.18)',
      } as React.CSSProperties}
    >
      <div className={styles.inner}>
        <BreadcrumbBar projectName="SecurityScorecard" lang={lang} onLangChange={setLang} />

        {/* ===== BRANDED FRAME ===== */}
        <div className={styles.frame}>
          {/* Decorative overlays */}
          <div className={styles.dotGrid} />
          <div className={styles.decoContainer}>
            {decoPositions.map((top) => (
              <span key={top}>
                <span className={styles.crossMark} style={{ top, left: '-5px' }}>+</span>
                <span className={styles.crossMark} style={{ top, right: '-5px' }}>+</span>
              </span>
            ))}
          </div>

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
            <Reveal delay={180}><h1 className={styles.h1}>SecurityScorecard</h1></Reveal>
            <Reveal delay={260}><p className={styles.heroStatement}>{t.heroStatement}</p></Reveal>
            <Reveal delay={340}>
              <div className={styles.tagRow}>
                {heroTags.map((tag) => (
                  <span key={tag} className={styles.heroTag}>{tag}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={420}>
              <div className={styles.heroCta}>
                <CodeButton
                  href="https://securityscorecard.com"
                  label={t.liveSite}
                  variant="primary"
                  accentHover="#5C45E0"
                />
              </div>
            </Reveal>

            {/* ===== INTRO ===== */}
            <Reveal delay={80}>
              <div className={styles.introBorder}>
                <div className={styles.introGrid}>
                  <p className={styles.introCopy}>{t.introCopy1}</p>
                  <p className={styles.introCopy}>{t.introCopy2}</p>
                </div>
                <div className={styles.threadsGrid}>
                  {threads[lang].map((th) => (
                    <div key={th.tag} className={styles.threadCard}>
                      <div className={styles.threadTag}>
                        <span className={styles.threadDot} />
                        {th.tag}
                      </div>
                      <h3 className={styles.threadTitle}>{th.title}</h3>
                      <p className={styles.threadDesc}>{th.desc}</p>
                    </div>
                  ))}
                </div>
                <p className={styles.introNote}>
                  <span className={styles.introNoteDot} />
                  {t.introNote}
                </p>
              </div>
            </Reveal>

            {/* ===== STORY A — QUESTIONNAIRES ===== */}
            <div className={styles.sectionRule} />
            <section className={styles.storySection}>
              <Reveal>
                <div className={styles.storyKicker}>
                  <span className={styles.storyLetter}>A</span>
                  <span>{t.aKicker}</span>
                </div>
                <h2 className={styles.h2}>{t.aHead}</h2>
                <a
                  href="https://securityscorecard.com/solutions/use-cases/questionnaires/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sectionLink}
                >
                  <span className={styles.sectionLinkDot} />
                  {t.qLandingLabel} ↗
                </a>
              </Reveal>

              {/* A.1 — The problem */}
              <Reveal>
                <div className={styles.subsection}>
                  <div className={styles.subKicker}>
                    <span>A.1</span>
                    <span className={styles.subKickerLabel}>{t.a1label}</span>
                  </div>
                  <h3 className={styles.h3}>{t.a1head}</h3>
                  <p className={styles.bodyCopy}>{t.a1copy}</p>

                  <div className={styles.problemsList}>
                    {problems[lang].map((pr) => (
                      <div key={pr} className={styles.problemItem}>
                        <span className={styles.problemX}>✕</span>
                        <span className={styles.problemText}>{pr}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 'clamp(20px,2.4vw,28px)' }}>
                    <BrowserMockup label={`atlas.io · ${t.beforeTag}`}>
                      <ImageSlot label={t.a1drop} height="clamp(260px,38vw,460px)" />
                    </BrowserMockup>
                  </div>
                </div>
              </Reveal>

              {/* A.2 — Migration */}
              <Reveal>
                <div className={styles.subsection}>
                  <div className={styles.subKicker}>
                    <span>A.2</span>
                    <span className={styles.subKickerLabel}>{t.a2label}</span>
                  </div>
                  <h3 className={styles.h3}>{t.a2head}</h3>
                  <p className={styles.bodyCopy}>{t.a2copy}</p>

                  <div className={styles.migrationDiagram}>
                    <div className={styles.migrationFrom}>
                      <div className={styles.migrationLabel}>{t.fromLabel}</div>
                      <div className={styles.migrationName}>atlas.io</div>
                      <div className={styles.migrationDesc}>{t.fromDesc}</div>
                    </div>
                    <div className={styles.migrationArrow}>→</div>
                    <div className={styles.migrationTo}>
                      <div className={styles.migrationLabel}>{t.toLabel}</div>
                      <div className={styles.migrationName}>securityscorecard.io</div>
                      <div className={styles.migrationDesc}>{t.toDesc}</div>
                    </div>
                  </div>

                  <div className={styles.decisionsLabel}>{t.decisionsLabel}</div>
                  <div className={styles.decisionsList}>
                    {decisions[lang].map((d) => (
                      <div key={d.tag} className={styles.decisionItem}>
                        <span className={styles.decisionTag}>{d.tag}</span>
                        <div>
                          <span className={styles.decisionText}>{d.text}</span>
                          {d.todo && <span className={styles.todoTag}>{t.fillIn}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* A.3 — Shipping + leading */}
              <Reveal>
                <div className={styles.subsection}>
                  <div className={styles.subKicker}>
                    <span>A.3</span>
                    <span className={styles.subKickerLabel}>{t.a3label}</span>
                  </div>
                  <h3 className={styles.h3}>{t.a3head}</h3>
                  <p className={styles.bodyCopy}>{t.a3copy}</p>
                  <div className={styles.notePill}>
                    <span className={styles.notePillDot} />
                    <span className={styles.notePillText}>{t.a3note}</span>
                  </div>

                  <p className={styles.mediaLabel}>{t.videoLabel}</p>
                  <BrowserMockup urlBar={`securityscorecard.io/questionnaires · ${t.afterTag}`} label="After">
                    <div className={styles.videoSlot}>
                      <ImageSlot label={t.videoDrop} height="clamp(280px,42vw,540px)" />
                      <div className={styles.playBtn}>
                        <div className={styles.playCircle}>
                          <span className={styles.playTriangle} />
                        </div>
                      </div>
                    </div>
                  </BrowserMockup>
                </div>
              </Reveal>
            </section>

            {/* ===== STORY B — RBAC ===== */}
            <div className={styles.sectionRule} />
            <section className={styles.storySection}>
              <Reveal>
                <div className={styles.storyKicker}>
                  <span className={styles.storyLetter}>B</span>
                  <span>{t.bKicker}</span>
                </div>
                <h2 className={styles.h2}>{t.bHead}</h2>
                <div className={styles.northStar}>
                  <span className={styles.northStarLabel}>{t.northStarLabel}</span>
                  <span className={styles.northStarText}>{t.northStar}</span>
                </div>
                <div>
                  <a
                    href="https://securityscorecard.com/blog/how-does-role-based-access-control-rbac-improve-organizational-security/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sectionLink}
                    style={{ marginTop: '14px' }}
                  >
                    <span className={styles.sectionLinkDot} />
                    {t.rbacBlogLabel} ↗
                  </a>
                </div>
              </Reveal>

              <Reveal>
                <div className={styles.stepsGrid}>
                  {steps[lang].map((s) => (
                    <div key={s.tag} className={styles.stepCard}>
                      <div className={styles.stepMeta}>
                        <span className={styles.stepTag}>{s.tag}</span>
                        <span className={styles.stepMetric}>{s.metric}</span>
                      </div>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                      <p className={styles.stepDesc}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <p className={styles.mediaLabel}>{t.wfLabel}</p>
                <BrowserMockup label="RBAC · three phases">
                  <ImageSlot label={t.wfDrop} height="clamp(460px,58vw,720px)" />
                </BrowserMockup>
              </Reveal>

              <Reveal>
                <p className={styles.mediaLabel} style={{ marginTop: 'clamp(26px,3vw,38px)' }}>{t.techLabel}</p>
                <div className={styles.techGrid}>
                  {techPoints[lang].map((tp) => (
                    <div key={tp} className={styles.techPoint}>
                      <span className={styles.techBullet}>▸</span>
                      <span className={styles.techText}>{tp}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ===== CLOSE ===== */}
            <div className={styles.sectionRule} />
            <Reveal>
              <div className={styles.closeSection}>
                <div className={styles.closeKicker}>{t.closeKicker}</div>
                <p className={styles.closeStatement}>{t.closeStatement}</p>
              </div>
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
            nextHref="/we-care"
            nextColor={colors.projects.weCare}
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
