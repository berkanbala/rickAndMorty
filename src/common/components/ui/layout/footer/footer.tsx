import classNames from "classnames";
import styles from "./footer.module.scss";

export default function Footer(props: Props) {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      <div>
        <span>© 2024 |Rick And Morty App|</span>
      </div>
    </div>
  );
}

interface Props {
  className: string;
}
