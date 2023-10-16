import Link from 'next/link';
import { useAuthContext } from '../../lib/context/AuthContext';
import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase_setup/config';
import { useSelector, useDispatch } from 'react-redux';
import { setPartyData } from '../../store/store';
import Party from '../../components/party';

export default function Parties({ router }) {
  // placeholder parties state
  // const [parties, setParties] = useState([]);
  const dispatch = useDispatch();

  const { user } = useAuthContext();

  const parties = useSelector(state => state.partyData);

  console.log('Rendering Parties component: ', parties);

  const handleClick = () => {
    console.log(user);
  }

  useEffect(() => {
    if (user?.email !== null) {
      const userEmail = user?.email;

      const fetchParties = async (userEmail) => {
        const partiesCollectionRef = collection(db, 'parties');
        const partiesQuery = query(partiesCollectionRef, where('dungeonMaster', '==', userEmail), orderBy('createdAt', 'desc'));

        try {
          const partiesSnapshot = await getDocs(partiesQuery)

          if (!partiesSnapshot.empty) {
            const partiesData = partiesSnapshot.docs.map((doc) => doc.data());
            dispatch(setPartyData(partiesData));
          } else {
            console.log('no parties');
          }
        } catch (error) {
          alert(error.message);
        }
      }
      fetchParties(userEmail);
    }
  }, [])

  return (
    <div className="page">
      <h1 className='header'>PARTIES</h1>
      <div className='parties'>
        {parties.map((party, index) => {
          return <Party key={party.partyName} party={party} router={router} index={index} />
        })}
      </div>
      <div>
        <p onClick={() => { router.push('/create-party') }}>Create a new party</p>
      </div>
    </div>
  )
};