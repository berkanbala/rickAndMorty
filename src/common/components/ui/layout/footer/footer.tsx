import classNames from "classnames";
import styles from "./footer.module.scss";

export const Footer = (props: Props) => {
  const { className } = props;

  return (
    <div className={classNames(className, styles.container)}>
      &copy; {new Date().getFullYear()} <span> |Rick And Morty App| </span>
    </div>
  );
};

interface Props {
  className: string;
}
