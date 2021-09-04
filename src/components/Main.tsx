import { useState } from "react";
import { useCurrentUser, useAuth } from "../hooks/auth/useAuth";

export const Main: React.VFC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut } = useAuth();
  const [user, loading, error] = useCurrentUser();

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div>
      <p>Current User: {user?.email}</p>
      <button onClick={() => signOut()}>ログアウト</button>
    </div>
  );
};
