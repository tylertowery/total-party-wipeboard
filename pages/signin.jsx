import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase_setup/config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Signin({ router }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signing in');
    console.log(auth);

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential);
        router.push('/');
      })
      .catch((error) => {
        alert(error.message);
      })
  }

  const handleChange = (event) => {
    event.preventDefault();
    router.push('/signup');
    console.log('hello');
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