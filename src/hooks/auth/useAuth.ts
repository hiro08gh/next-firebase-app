import { useState, useEffect, useCallback } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { firebaseApp } from '../../libs/firebaseApp';
import { useLoadingValue } from '../useLoadingValue';
import { AuthService } from '../../service/AuthService';

// initializing the repository
const FirebaseAuth = new AuthService();

// Get current user
export const useCurrentUser = () => {
	const auth = getAuth(firebaseApp)
  const { error, loading, setError, setValue, value } = useLoadingValue<
    User | null,
		any
  >(() => auth.currentUser);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, setValue, setError);

    return () => {
      listener();
    };
  }, [auth, setValue, setError]);

  return [value, loading, error];
};

// Authentication logic. 
export const useAuth = () => {
	const [error, setError] = useState();
	const signUpWithEmailAndPassword = useCallback(async(email, password) => {
		try {
			await FirebaseAuth.signUpWithEmailAndPassword(email, password);
		} catch (err) {
			setError(err)
		}
	}, [])

	const signInWithEmailAndPassword = useCallback(async(email, password) => {
		try {
			await FirebaseAuth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			setError(err)
		}
	}, [])

	const signOut = useCallback(async() => {
		try {
			await FirebaseAuth.signOut();
		} catch (err) {
			setError(err)
		}
	}, [])

	return { signInWithEmailAndPassword, signUpWithEmailAndPassword, signOut, error };
}