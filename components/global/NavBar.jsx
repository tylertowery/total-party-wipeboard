import Link from 'next/link';
import Image from 'next/Image';
import { useAuthContext } from '../../lib/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase_setup/config';
import { useDispatch } from 'react-redux';
import { setPartyData } from '../../store/store';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function NavBar({ router }) {
  const { user } = useAuthContext();

  const dispatch = useDispatch();

  const handleSignOut = () => {
    router.push('/');
    signOut(auth);
    dispatch(setPartyData([]));
  }

  const handleSignIn = () => {
    router.push('/signin');
  }

  const handleParties = () => {
    if (auth.currentUser !== null) {
      router.push("/parties");
    } else {
      router.push("/signin");
    }
  }

  const handleMonsters = () => {
    if (auth.currentUser !== null) {
      router.push("/monsters");
    } else {
      router.push("/signin");
    }
  }

  const handleDice = () => {
    router.push("/dice");
  }

  const handleSessions = () => {
    if (auth.currentUser !== null) {
      router.push("/sessions");
    } else {
      router.push("/signin");
    }
  }

  return (
    <div className='nav-bar'>
      <Image className="logo" src="/TPWLogo2.png" alt="Logo" width="120" height="120" onClick={() => { router.push("/") }} />
      <h3 className='pointer shadow' onClick={handleParties}>Parties</h3>
      <h3 className='pointer shadow' onClick={handleMonsters}>Monsters</h3>
      <h3 className='pointer shadow' onClick={handleDice}>Dice Roller</h3>
      <h3 className='pointer shadow' onClick={handleSessions}>Sessions</h3>
      <div className='user-container'>
        {user ?
          <div>
            <h3 className='shadow'>{auth.currentUser?.displayName}</h3>
            <h3 className='pointer shadow' onClick={handleSignOut}>Sign Out</h3>
          </div>
          : <h3 className='pointer shadow' onClick={handleSignIn}>Sign In</h3>}
      </div>
    </div>
  )
}