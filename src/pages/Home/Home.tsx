import { useState } from 'react';
import type { Lang } from '../../types';
import { Header } from '../../sections/Header';
import { Masthead } from '../../sections/Masthead';
import { DrawingRule } from '../../components/DrawingRule';
import { Bio } from '../../sections/Bio';
import { ProjectList } from '../../sections/ProjectList';
import { WhatIDo } from '../../sections/WhatIDo';
import { AISection } from '../../sections/AISection';
import { OffTheClock } from '../../sections/OffTheClock';
import { Footer } from '../../sections/Footer';
import styles from './Home.module.css';

export function Home() {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <Header lang={lang} onLangChange={setLang} />
        <DrawingRule />
        <Masthead />
        <Bio lang={lang} />
        <ProjectList lang={lang} />
        <WhatIDo lang={lang} />
        <AISection lang={lang} />
        <OffTheClock lang={lang} />
        <Footer lang={lang} />
      </div>
    </div>
  );
}
