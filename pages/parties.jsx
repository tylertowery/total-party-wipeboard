import Link from 'next/link';
import { useAuthContext } from '../lib/context/AuthContext';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../lib/firebase_setup/config';
import Party from '../components/party';

export default function Parties({ router }) {
  // placeholder parties state
  const [parties, setParties] = useState([]);

  const { user } = useAuthContext();

  const handleClick = () => {
    console.log(user);
  }

  useEffect(() => {
    const userEmail = user.email;

    const fetchParties = async (userEmail) => {
      const partiesCollectionRef = collection(db, 'parties');
      const partiesQuery = query(partiesCollectionRef, where('dungeonMaster', '==', userEmail));

      try {
        const partiesSnapshot = await getDocs(partiesQuery)

        if (!partiesSnapshot.empty) {
          const partiesData = partiesSnapshot.docs.map((doc) => doc.data());
          setParties(partiesData);
        } else {
          console.log('no parties');
        }
      } catch (error) {
        alert(error.message);
      }
    }


    fetchParties(userEmail);
  }, [])

  return (
    <>
      <h1 className='header'>PARTIES</h1>
      <div>
        {parties.map((party) => {
          return <Party key={party.partyName} party={party} />
        })}
      </div>
      <div>
        <p onClick={() => { router.push('/create-party') }}>Create a new party</p>
      </div>
    </>
  )
};