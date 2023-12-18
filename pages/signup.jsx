import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../lib/firebase_setup/config';
import { doc, collection, addDoc } from 'firebase/firestore';

export default function Signup({ router }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const displayNameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signing in');
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('this is the user now: ', user)
        return updateProfile(auth.currentUser, {
          displayName: displayNameRef.current.value
        })
          .then(() => {
            alert('Sucessfully signed in!');
            setTimeout(() => {
              router.push('/')
            }, 500);
          })
          .catch((error) => {
            alert(error.message);
          })
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  const handleChange = (event) => {
    event.preventDefault();
    router.push('/signin');
    console.log('hello');
  }

  return (
    <div className='page'>
      <h1 className='header'>Create An Account</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input type='email' ref={emailRef} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input type='password' ref={passwordRef} required></input>
        </div>
        <div className='input-group'>
          <label htmlFor='displayName'>Display Name</label>
          <input ref={displayNameRef} required></input>
        </div>
        <button type="submit">Sign Up</button>
        <p className='question'>Already have an account?</p>
        <button onClick={handleChange}>Sign In</button>
      </form>
    </div>
  )
};