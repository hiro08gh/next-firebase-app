import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCurrentUser } from "../../hooks/auth/useAuth";

import styles from "./Layout.module.css";

type Props = {
  requireAuth: boolean;
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ requireAuth, children }) => {
  const [user, loading] = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (requireAuth ? !user : user) {
      router.push(requireAuth ? "/signin" : "/");
    }
  }, [requireAuth, router, user, loading]);

  if (loading) {
    return null;
  }

  return <div className={styles.container}>{children}</div>;
};
