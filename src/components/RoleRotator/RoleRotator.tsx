import { useEffect, useRef, useState } from 'react';
import styles from './RoleRotator.module.css';

interface RoleRotatorProps {
  prefix: string;
  roles: string[];
  suffix: string;
}

const INTERVAL_MS = 2400;
const FADE_MS = 220;

export function RoleRotator({ prefix, roles, suffix }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, FADE_MS);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className={styles.wrapper}>
      <span>{prefix} </span>
      <span
        ref={wordRef}
        className={styles.role}
        style={{ opacity: visible ? 1 : 0 }}
      >
        {roles[index]}
      </span>
      <span className={styles.caret} />
      <br />
      <span>{suffix}</span>
    </div>
  );
}
