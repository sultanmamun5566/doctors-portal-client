import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.int";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signOut, updateProfile, signInWithPopup, onAuthStateChanged } from "firebase/auth";



initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
          const newUser = { email, displayName: name };
          setUser(newUser);
          //saveUser to the database
          saveUser(email, name,'POST');
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
            
          });
           
          })
          .catch((error) => {
              setAuthError(error.message)
          })
            .finally(()=> setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination = location?.state?.from || '/';
      history(destination);
    setAuthError('');
  })
  .catch((error) => {
   
    setAuthError(error.message)
  })
  .finally(()=> setIsLoading(false));
  }
  
  const signInWithGoogle = () => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      saveUser(user.email,user.displayName,'PUT')
      setAuthError('');
    }).catch((error) => {
      setAuthError(error.message)
    
    })
    .finally(()=> setIsLoading(false));
    
  }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
              setUser({})
          }
          setIsLoading(false);
      });
        return () => unsubscribe;
    },[])

    const logout = () => {
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
  // Sign-out successful.
        }).catch((error) => {
  // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

  const saveUser = (email, displayName,method) => {
    const user = { email, displayName };
    fetch('https://limitless-chamber-05433.herokuapp.com/users',{
      method: method,
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
  }

    return {
        user,
        isLoading,
      registerUser,
        signInWithGoogle,
        logout,
        loginUser,
        authError
    }
}
export default useFirebase;