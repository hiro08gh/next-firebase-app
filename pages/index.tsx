import type { ReactElement } from "react";
import { MainLayout } from "../src/components/Layout/MainLayout";
import { Main } from "../src/components/Main";

export default function HomePage() {
  return <Main />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
