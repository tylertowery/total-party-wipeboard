import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Signin({ router }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signing in');
    console.log('email: ', emailRef);
  }

  const handleChange = (event) => {
    event.preventDefault();
    router.push('/signin');
    console.log('hello');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type='email' ref={emailRef} required></input>
        <label htmlFor="password">Password</label>
        <input type='password' ref={passwordRef} required></input>
        <button type="submit">Sign Up</button>
        <p>Already have an account?</p>
        <button onClick={handleChange}>Sign In</button>
      </form>
    </>
  )
};