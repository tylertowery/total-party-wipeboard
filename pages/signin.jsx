import { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('signing in');
  }

  const handleChange = (event) => {
    event.preventDefault();
    router.push('/signup');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type='email' ref={emailRef} required></input>
        <label htmlFor="password">Password</label>
        <input type='password' ref={passwordRef} required></input>
        <button type="submit">Sign In</button>
        <p>Don't have an account already?</p>
        <button onClick={handleChange}>Create a New Account</button>
      </form>
    </>
  )
};