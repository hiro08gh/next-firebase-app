import styles from "./MainLayout.module.css";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.VFC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
