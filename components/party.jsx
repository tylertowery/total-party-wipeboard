import MemberCards from './member-cards';
import MemberCarousel from './member-carousel';
import { setCurrentPartyIndex } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase_setup/config';
import { removeParty } from '../store/store.js';

export default function Party({ party, router, index }) {
  const dispatch = useDispatch();
  const [partyEnter, setPartyEnter] = useState(false);
  const parties = useSelector(state => state.partyData);

  const date = new Date(party.createdAt.seconds * 1000 + party.createdAt.nanoseconds / 1000000);
  const formattedDate = date.toLocaleDateString();

  const memberSlides = party ? party.members : [];

  const handleClick = () => {
    console.log('clicked: ', index);
    dispatch(setCurrentPartyIndex(index));
    router.push(`/parties/${party.campaignName}`)
  }

  const handlePropagation = (event) => {
    event.stopPropagation();
  }

  const handlePartyEnter = () => {
    setPartyEnter(true);
  }

  const handlePartyLeave = () => {
    setPartyEnter(false);
  }

  const deleteParty = (e) => {
    e.stopPropagation();
    console.log('delete');
    console.log(party);
    const docToDelete = party.id;
    const docRef = doc(db, 'parties', docToDelete);

    deleteDoc(docRef)
      .then(() => {
        console.log('deleted successfully');
        dispatch(removeParty(index));
      })
      .catch((e) => {
        console.error('Error removing document: ', e);
      });
  }

  return (
    <div onClick={handleClick} onMouseEnter={handlePartyEnter} onMouseLeave={handlePartyLeave} className='party'>
      {partyEnter && (
        <FontAwesomeIcon
          className='icon trash'
          size='xl'
          onClick={deleteParty}
          icon={faTrashCan}
        />
      )}
      <div className="campaign-info">
        <img></img>
      </div>
      <div className='party-info'>
        <p>{formattedDate}</p>
        <p>{party.campaignName}</p>
        <p>{party.partyName}</p>
      </div>
      <div onClick={handlePropagation} className='members'>
        <MemberCarousel key={party.campaignName} members={memberSlides} />
      </div>
    </div>
  )
}