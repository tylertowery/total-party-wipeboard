import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useAuthContext } from '../../lib/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase_setup/config';

export default function NavBar({ router }) {
  const { user } = useAuthContext();

  const handleSignOut = () => {
    signOut(auth);
  }

  const handleSignIn = () => {
    router.push('/signin');
  }

  return (
    <div className='nav-bar'>
      <h4 onClick={() => { router.push("/") }} > Total Party Wipeboard</h4 >
      <h4 onClick={() => { router.push("/parties") }}>Parties</h4>
      <h4 onClick={() => { router.push("/admin") }}>Admin</h4>
      {user ? <h4 onClick={handleSignOut}>{auth.currentUser.displayName}</h4> : <h4 onClick={handleSignIn}>Sign In</h4>}
      <button onClick={() => console.log(user)}>user</button>
    </div>
  )
}