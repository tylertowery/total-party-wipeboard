import { useRef } from 'react';
import Link from 'next/link';

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <form>
        <label>Email</label>
        <input type='email' ref={emailRef} required></input>
        <label>Password</label>
        <input type='password' ref={passwordRef} required></input>
        <label>Confirm Password</label>
        <input type='password' ref={passwordConfirmRef} required></input>
        <button type='submit'>Sign Up</button>
      </form>
      <Link href='/signup'>Don't have an account already?</Link>
    </>
  )
};