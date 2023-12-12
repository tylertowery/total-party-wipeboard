import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { setPartyData, setNotesData } from '../store/store.js';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase_setup/config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../lib/firebase_setup/config.js';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';

export default function Signin({ router }) {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignIn = async () => {
    event.preventDefault();
    console.log('signing in');
    console.log(auth);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);

      const userEmail = userCredential.user.email;
      const partiesCollectionRef = collection(db, 'parties');
      const partiesQuery = query(partiesCollectionRef, where('dungeonMaster', '==', userEmail), orderBy('createdAt', 'desc'));

      const partiesSnapshot = await getDocs(partiesQuery);

      if (!partiesSnapshot.empty) {
        const partiesData = partiesSnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        dispatch(setPartyData(partiesData));

        const notesCollectionRef = collection(db, 'notes');
        const notesQuery = query(notesCollectionRef, where('user', '==', userEmail), orderBy('createdAt', 'desc'));

        const notesSnapshot = await getDocs(notesQuery);

        if (!notesSnapshot.empty) {
          const notesData = notesSnapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data };
          });
          dispatch(setNotesData(notesData));
        }
      } else {
        console.log('no parties');
      }

      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signing in');
    handleSignIn();
  }

  const handleChange = (event) => {
    event.preventDefault();
    router.push('/signup');
  }

  return (
    <div className="page">
      <h1 className='header'>Sign In</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input type='email' ref={emailRef} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input type='password' ref={passwordRef} required></input>
        </div>
        <button type="submit">Sign In</button>
        <p>Don't have an account already?</p>
        <button onClick={handleChange}>Create a New Account</button>
      </form>
    </div>
  )
};