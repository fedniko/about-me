import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import styles from './switch.module.scss';

export default function Switch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className={styles.switch}>
      <label htmlFor={styles.toggle}>
        <input
          id="toggle"
          className=""
          type="checkbox"
          checked={currentTheme === 'light'}
          onChange={() =>
            theme === 'dark' ? setTheme('light') : setTheme('dark')
          }
        />
        <div className={styles.sunMoon}>
          <div className={styles.dots} />
        </div>
        <div className={styles.background}>
          <div className={styles.stars1} />
          <div className={styles.stars2} />
        </div>
      </label>
    </div>
  );
}
