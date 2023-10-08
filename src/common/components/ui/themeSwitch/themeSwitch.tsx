import { useThemeContext } from "../../../context/themeContext";
import styles from "./themeSwitch.module.scss";

export const ThemeSwitch = () => {
  const { changeAppTheme } = useThemeContext();

  return (
    // <div className={styles.toggleThemeWrapper}>
    // <span>☀️</span>
    // <div className={styles.checkBoxer}>
    // <input type="checkbox" id="switch" onChange={changeAppTheme} />
    //     <label htmlFor="switch">Toggle</label>
    //   </div>
    //   <span>🌒</span>
    // </div>

    <div className={styles.toggleThemeWrapper}>
      <span>☀️</span>
      <label className={styles.toggleTheme} htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={changeAppTheme} />
        <div className={styles.sliderRound}></div>
      </label>
      <span>🌒</span>
    </div>
  );
};
