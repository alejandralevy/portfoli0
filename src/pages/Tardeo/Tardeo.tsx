import { useState } from 'react';
import type { Lang } from '../../types';
import { BreadcrumbBar } from '../../components/BreadcrumbBar';
import { BrowserMockup } from '../../components/BrowserMockup';
import { CodeButton } from '../../components/CodeButton';
import { FooterNav } from '../../components/FooterNav';
import { Reveal } from '../../components/Reveal/Reveal';
import {
  tardeoCopy,
  heroTags,
  threads,
  brandPrinciples,
  palette,
  paletteLabels,
  stepCards,
  techPoints,
  storybookItems,
  decoPositions,
} from '../../content/tardeo';
import { colors } from '../../tokens';
import styles from './Tardeo.module.css';

const ImageSlot = ({ label, height }: { label: string; height: string }) => (
  <div className={styles.imageSlot} style={{ height }}>
    <span className={styles.imageSlotLabel}>{label}</span>
  </div>
);

export function Tardeo() {
  const [lang, setLang] = useState<Lang>('en');
  const t = tardeoCopy[lang];

  return (
    <div
      className={styles.page}
      style={{ '--color-accent': '#E0227E' } as React.CSSProperties}
    >
      <div className={styles.inner}>
        <BreadcrumbBar projectName="Tardeo Argentino" lang={lang} onLangChange={setLang} />

        {/* ===== BRANDED FRAME ===== */}
        <div className={styles.frame}>
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
                <div className={styles.eyebrow}>{t.eyebrow}</div>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  {t.statusBadge}
                </span>
                <span className={styles.codeBadge}>{t.codeBadge}</span>
              </div>
            </Reveal>
            <Reveal delay={180}><h1 className={styles.h1}>Tardeo Argentino</h1></Reveal>
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
                  href="#"
                  label={t.viewLive}
                  variant="primary"
                  accentHover="#FF2E9D"
                />
                <CodeButton
                  href="#"
                  label={t.viewCode}
                  accentColor="rgba(224,34,126,.45)"
                  accentHover="#FF2E9D"
                  textColor="#1A0A10"
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
                        <span className={styles.threadDot} style={{ background: th.dot }} />
                        {th.tag}
                      </div>
                      <h3 className={styles.threadTitle}>{th.title}</h3>
                      <p className={styles.threadDesc}>{th.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* ===== STORY A ===== */}
            <div className={styles.sectionRule} />
            <section className={styles.storySection}>
              <Reveal>
                <div className={styles.storyKicker}>
                  <span className={styles.storyLetter}>A</span>
                  <span>{t.aKicker}</span>
                </div>
                <h2 className={styles.h2}>{t.aHead}</h2>
                <p className={styles.bodyCopy}>{t.aBody}</p>
              </Reveal>

              {/* A.1 */}
              <Reveal>
                <div className={styles.subsection}>
                  <div className={styles.subKicker}>
                    <span>A.1</span>
                    <span className={styles.subKickerLabel}>{t.a1label}</span>
                  </div>
                  <div className={styles.principlesGrid}>
                    {brandPrinciples[lang].map((p) => (
                      <div key={p.title} className={styles.principleCard}>
                        <div className={styles.principleTitle}>{p.title}</div>
                        <p className={styles.principleDesc}>{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* A.2 */}
              <Reveal>
                <div className={styles.subsection}>
                  <div className={styles.subKicker}>
                    <span>A.2</span>
                    <span className={styles.subKickerLabel}>{t.a2label}</span>
                  </div>
                  <h3 className={styles.h3}>{t.a2head}</h3>
                  <p className={styles.bodyCopy}>{t.a2body}</p>

                  <div className={styles.systemGrid}>
                    <div>
                      <div className={styles.systemLabel}>{t.paletteLabel}</div>
                      <div className={styles.paletteRow}>
                        {palette.map((swatch, i) => (
                          <div key={swatch.hex} className={styles.swatch}>
                            <span className={styles.swatchColor} style={{ background: swatch.bg }} />
                            <span className={styles.swatchHex}>{swatch.hex}</span>
                            <span className={styles.swatchName}>{paletteLabels[lang][i]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.typeColumn}>
                      <div className={styles.systemLabel}>{t.typeLabel}</div>
                      <div className={styles.typeStack}>
                        <div className={styles.typeRow}>
                          <span className={styles.typeSampleSerif}>Newsreader</span>
                          <span className={styles.typeMeta}>{t.typeHeadline}</span>
                        </div>
                        <div className={styles.typeRow}>
                          <span className={styles.typeSampleHand}>Caveat</span>
                          <span className={styles.typeMeta}>{t.typeHandwritten}</span>
                        </div>
                        <div className={styles.typeRow}>
                          <span className={styles.typeSampleSans}>Montserrat</span>
                          <span className={styles.typeMeta}>{t.typeBody}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* A.3 */}
              <Reveal>
                <div className={styles.subsection}>
                  <div className={styles.subKicker}>
                    <span>A.3</span>
                    <span className={styles.subKickerLabel}>{t.a3label}</span>
                  </div>
                  <h3 className={styles.h3}>{t.a3head}</h3>
                  <p className={styles.bodyCopy}>{t.a3body}</p>
                  <div className={styles.notePill}>
                    <span className={styles.notePillDot} />
                    <span>{t.a3note}</span>
                  </div>

                  <p className={styles.mediaLabel}>{t.wireframesLabel}</p>
                  <BrowserMockup label="tardeo · wireframes" urlBar={undefined}>
                    <ImageSlot label="Wireframes — drop interactive embed or screenshot" height="clamp(520px,62vw,760px)" />
                  </BrowserMockup>
                </div>
              </Reveal>
            </section>

            {/* ===== STORY B ===== */}
            <div className={styles.sectionRule} />
            <section className={styles.storySection}>
              <Reveal>
                <div className={styles.storyKicker}>
                  <span className={styles.storyLetter}>B</span>
                  <span>{t.bKicker}</span>
                </div>
                <h2 className={styles.h2}>{t.bHead}</h2>
                <p className={styles.bodyCopy}>{t.bBody}</p>
              </Reveal>

              <Reveal>
                <div className={styles.stepsGrid}>
                  {stepCards[lang].map((s) => (
                    <div key={s.tag} className={styles.stepCard}>
                      <div className={styles.stepMeta}>
                        <span className={styles.stepTag}>{s.tag}</span>
                        <span className={styles.stepMetric}>{s.meta}</span>
                      </div>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                      <p className={styles.stepDesc}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal>
                <p className={styles.mediaLabel}>{t.componentKitLabel}</p>
                <div className={styles.storybookMockup}>
                  <div className={styles.sbBar}>
                    <span className={styles.sbDot} style={{ background: '#FF2E9D' }} />
                    <span className={styles.sbDot} style={{ background: '#E0A23E' }} />
                    <span className={styles.sbDot} style={{ background: '#4FB06A' }} />
                    <span className={styles.sbTab}>Storybook · tardeo/ui</span>
                    <span className={styles.sbCount}>5 components</span>
                  </div>
                  <div className={styles.sbBody}>
                    <div className={styles.sbSidebar}>
                      <div className={styles.sbSidebarLabel}>tardeo / ui</div>
                      {storybookItems.map((item, i) => (
                        <div key={item} className={i === 0 ? styles.sbItemActive : styles.sbItem}>
                          <span className={styles.sbItemDot} style={{ background: i === 0 ? '#FF2E9D' : '#9A8FA0' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.sbCanvas}>
                      <div className={styles.sbCanvasLabel}>Button · variants</div>
                      <div className={styles.sbBtnRow}>
                        <span className={styles.sbBtnPrimary}>¡Voy al tardeo!</span>
                        <span className={styles.sbBtnSecondary}>Ver galería</span>
                        <span className={styles.sbBtnWhatsapp}>
                          <span className={styles.sbBtnDot} />
                          Reservar por WhatsApp
                        </span>
                      </div>
                      <div className={styles.sbDivider} />
                      <div className={styles.sbCanvasLabel}>Card + Chip</div>
                      <div className={styles.sbCardRow}>
                        <div className={styles.sbCard}>
                          <div className={styles.sbCardImg}>
                            <span className={styles.sbCardBadge}>SÁB · 17:00</span>
                          </div>
                          <div className={styles.sbCardBody}>
                            <div className={styles.sbCardTitle}>Tardeo en Palermo</div>
                            <div className={styles.sbCardSub}>Terraza · cupos limitados</div>
                          </div>
                        </div>
                        <div className={styles.sbChips}>
                          <span className={styles.sbChip}>🎶 música en vivo</span>
                          <span className={styles.sbChip}>🍻 happy hour</span>
                          <span className={styles.sbChipActive}>+34 yendo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.sbNote}>{t.storybookNote}</p>
              </Reveal>

              <Reveal>
                <p className={styles.mediaLabel}>{t.howBuiltLabel}</p>
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
            nextHref="/security-scorecard"
            nextColor={colors.projects.securityScorecard}
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
