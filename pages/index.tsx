import type { ReactElement } from "react";
import { MainLayout } from "../src/components/MainLayout";
import { Main } from '../src/components/Main';

import styles from "../styles/Home.module.css";

export default function HomePage() {

  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
