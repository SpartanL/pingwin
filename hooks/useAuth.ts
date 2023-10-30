import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { firebaseapp } from "../FirebaseConfig";

const auth = getAuth(firebaseapp);

export function useAuth() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}