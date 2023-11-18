import Link from 'next/link';
import Image from 'next/Image';
import { useState, useRef } from 'react';
import { useAuthContext } from '../../lib/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase_setup/config';
import { useDispatch } from 'react-redux';
import { setPartyData, setNotesData } from '../../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({ router }) {
  const { user } = useAuthContext();
  const [dropDown, setDropDown] = useState(false);
  const userContainerRef = useRef(null);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    router.push('/');
    setDropDown(false);
    signOut(auth);
    dispatch(setPartyData([]));
    dispatch(setNotesData([]));
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
    if (auth.currentUser !== null) {
      router.push("/dice");
    } else {
      router.push("/signin");
    }
  }

  const handleNotes = () => {
    if (auth.currentUser !== null) {
      router.push("/notes");
    } else {
      router.push("/signin");
    }
  }

  const handleToggleDropDown = () => {
    setDropDown(!dropDown);
  }

  return (
    <div className='nav-bar'>
      <Image className="logo" src="/TPWLogoW.png" alt="Logo" width="120" height="120" onClick={() => { router.push("/") }} />
      <h3 className='pointer shadow' onClick={handleParties}>Parties</h3>
      <h3 className='pointer shadow' onClick={handleMonsters}>Monsters</h3>
      <h3 className='pointer shadow' onClick={handleDice}>Dice Roller</h3>
      <h3 className='pointer shadow' onClick={handleNotes}>Notes</h3>
      <div className='user-container'>
        {user ? (
          <div className='user'>
            <div className='static'>
              <h3 className='shadow' onClick={handleToggleDropDown}>
                {auth.currentUser?.displayName}
              </h3>
              <FontAwesomeIcon
                className={`icon shadow pointer ${dropDown ? 'up' : 'down'}`}
                size='xl'
                icon={dropDown ? faCaretUp : faCaretDown}
                onClick={handleToggleDropDown}
              />
            </div>
            {dropDown && (
              <div className='dropdown'>
                <h3 className='pointer shadow' onClick={handleSignOut}>
                  Sign Out
                </h3>
              </div>
            )}
          </div>
        ) : (
          <h3 className='pointer shadow' onClick={handleSignIn}>
            Sign In
          </h3>
        )}
      </div>
    </div>
  )
}