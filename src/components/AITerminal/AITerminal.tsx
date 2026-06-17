import { useEffect, useRef } from 'react';
import styles from './AITerminal.module.css';

const PROMPT = 'build the RBAC settings screen in React';
const RESPONSE = '→ generated, reviewed & shipped in 2h';
const TYPE_SPEED = 48;
const HOLD_MS = 3000;
const RESET_MS = 700;

export function AITerminal() {
  const promptRef = useRef<HTMLSpanElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let idx = 0;
    let phase: 'type' | 'resp' | 'hold' = 'type';

    const step = () => {
      const p = promptRef.current;
      const r = responseRef.current;
      if (!p || !r) { timer = setTimeout(step, 400); return; }

      if (phase === 'type') {
        idx++;
        p.textContent = PROMPT.slice(0, idx);
        if (idx >= PROMPT.length) {
          phase = 'resp';
          timer = setTimeout(step, 450);
        } else {
          timer = setTimeout(step, TYPE_SPEED);
        }
      } else if (phase === 'resp') {
        r.style.opacity = '1';
        phase = 'hold';
        timer = setTimeout(step, HOLD_MS);
      } else {
        r.style.opacity = '0';
        idx = 0;
        p.textContent = '';
        phase = 'type';
        timer = setTimeout(step, RESET_MS);
      }
    };

    step();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.titleBar}>
        <span className={styles.dot} data-color="close" />
        <span className={styles.dot} data-color="min" />
        <span className={styles.dot} data-color="max" />
        <span className={styles.filename}>ship.tsx</span>
        <span className={styles.badge}>AI-assisted</span>
      </div>
      <div className={styles.body}>
        <div className={styles.lineNumbers}>
          {'1\n2\n3'}
        </div>
        <div className={styles.code}>
          <div className={styles.comment}>// from idea to production</div>
          <div className={styles.promptLine}>
            <span className={styles.arrow}>▸</span>
            {' '}
            <span ref={promptRef} />
            <span className={styles.cursor} />
          </div>
          <div ref={responseRef} className={styles.response}>
            {RESPONSE}
          </div>
        </div>
      </div>
    </div>
  );
}
