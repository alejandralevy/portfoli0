import { RoleRotator } from "../../components/RoleRotator";
import type { Lang } from "../../types";
import { copy } from "../../content";
import styles from "./Bio.module.css";

interface BioProps {
  lang: Lang;
}

export function Bio({ lang }: BioProps) {
  const t = copy[lang];

  return (
    <div className={styles.wrapper}>
      <RoleRotator prefix={t.l1} roles={t.roles} suffix={t.l3} />
      <div className={styles.grid}>
        <p className={styles.bio}>{t.bio1}</p>
        <div>
          <p className={styles.bio}>{t.bio2}</p>
        </div>
      </div>
    </div>
  );
}
