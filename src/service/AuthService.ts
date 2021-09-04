import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, Auth, UserCredential } from "firebase/auth";
import { firebaseApp } from '../libs/firebaseApp';

export class AuthService {
  private auth: Auth;

  constructor() {
    this.auth = getAuth(firebaseApp);
  }

  public signUpWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    try {
      const results = await createUserWithEmailAndPassword(this.auth, email, password);
      return results;
    } catch (error) {
      throw error;
    }
  }

  public signInWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
    try {
      const results = await signInWithEmailAndPassword(this.auth, email, password);
      return results;
    } catch (error) {
      throw error;
    }
  }

  public signOut = async (): Promise<void> => {
    await signOut(this.auth)
  };
}
