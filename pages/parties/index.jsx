import Link from 'next/link';
import { useAuthContext } from '../../lib/context/AuthContext';
import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase_setup/config';
import { useSelector, useDispatch } from 'react-redux';
import { setPartyData } from '../../store/store';
import Party from '../../components/party';

export default function Parties({ router }) {
  const dispatch = useDispatch();

  const { user } = useAuthContext();

  const parties = useSelector(state => state.partyData);

  const handleClick = () => {
    console.log(user);
  }

  return (
    <div className="page">
      <h1 className='header'>PARTIES</h1>
      <div className='parties'>
        {parties.map((party, index) => {
          return <Party key={party.partyName} party={party} router={router} index={index} />
        })}
      </div>
      <div className='create-party'>
        <button className='create-party-button' onClick={() => { router.push('/create-party') }}>Create a new party</button>
      </div>
    </div>
  )
};