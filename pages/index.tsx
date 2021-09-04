import type { ReactElement } from "react";
import { Layout } from "../src/components/Layout";
import { Main } from "../src/components/Main";

export default function HomePage() {
  return <Main />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout requireAuth={true}>{page}</Layout>;
};
