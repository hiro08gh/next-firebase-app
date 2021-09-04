import { useState } from "react";
import { useCurrentUser, useAuth } from "../../hooks/auth/useAuth";

export const SignIn: React.VFC = () => {
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
    <div className="App">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
      <button onClick={() => signUpWithEmailAndPassword(email, password)}>Register</button>
    </div>
  );
};
