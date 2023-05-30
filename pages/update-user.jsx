import { useRef } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase_setup/config';

export default function updateUser({ user }) {
  const displayNameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(auth.currentUser);
    updateProfile(auth.currentUser, {
      displayName: displayNameRef
    })
      .then(() => {
        console.log('username was updated');
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }
  return (
    <>
      <h4>Update User Profile</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Display Name</label>
        <input ref={displayNameRef}></input>
        <button type='submit'>Update User</button>
      </form>
    </>
  )
}