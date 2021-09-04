import type { ReactElement } from "react";
import { Layout } from "../src/components/Layout";
import { SignIn } from "../src/components/SignIn";

export default function SignInPage() {
  return <SignIn />;
}

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout requireAuth={false}>{page}</Layout>;
};
