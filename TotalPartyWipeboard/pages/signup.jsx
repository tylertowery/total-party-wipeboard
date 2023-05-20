import { useRef } from 'react';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = () => {
    console.log('submitted for signup');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='email' ref={emailRef} required></input>
        <label>Password</label>
        <input type='password' ref={passwordRef} required></input>
        <label>Confirm Password</label>
        <input type='password' ref={passwordConfirmRef} required></input>
        <button type='submit'>Sign Up</button>
      </form>
    </>
  )
}