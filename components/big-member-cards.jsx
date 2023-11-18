import { useState } from 'react';
import { doc, collection, query, where, getDocs, deleteDoc, writeBatch } from 'firebase/firestore';
import { arrayRemove } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setPartyData } from '../store/store';
import { auth, db } from '../lib/firebase_setup/config';
import { useAuthContext } from '../lib/context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function BigMemberCards({ parties, index, party, member }) {
  const [memberEnter, setMemberEnter] = useState(false);
  const { user } = useAuthContext();
  const dispatch = useDispatch();

  const capitalize = (word) => {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  }

  const handleClick = () => {
    console.log(parties);
  }

  const handleMemberEnter = () => {
    setMemberEnter(true);
  }

  const handleMemberLeave = () => {
    setMemberEnter(false);
  }

  const deleteMember = async () => {
    console.log('deleting: ', member.characterName)
    console.log(party.campaignName);
    console.log(user.email);
    const membersCollection = collection(db, 'members');
    const memberToDelete = doc(
      membersCollection,
      `${member.characterName} - ${party.campaignName} - ${user.email}`
    );

    const partiesCollection = collection(db, 'parties');
    const partyQuery = query(
      partiesCollection,
      where('dungeonMaster', '==', user.email),
      where('campaignName', '==', party.campaignName)
    );

    const partyQuerySnapshot = await getDocs(partyQuery);

    if (!partyQuerySnapshot.empty) {
      try {
        const partyDoc = partyQuerySnapshot.docs[0];

        const batch = writeBatch(db);
        batch.delete(memberToDelete);
        batch.update(partyDoc.ref, {
          members: arrayRemove(member),
        });

        await batch.commit();

        const currentPartyData = partyDoc.data();
        const updatedMembers = currentPartyData.members.filter(
          (m) => m.characterName !== member.characterName
        );

        let updatedParty = [...parties];
        updatedParty[index].members = updatedMembers;
        dispatch(setPartyData(updatedParty))
      } catch (e) {
        console.error('Error during deletion: ', e);
      }
    } else {
      console.log('party not found');
    }
  }

  return (
    <div className='big-card' onMouseEnter={handleMemberEnter} onMouseLeave={handleMemberLeave}>
      {memberEnter && (
        <FontAwesomeIcon
          className='icon trash'
          size='xl'
          onClick={deleteMember}
          icon={faTrashCan}
        />
      )}
      <h2 className='kinda-header'>{member.characterName}</h2>
      <div className='big-member-card'>
        <div className='split'>
          <div className='left'>
            <p onClick={handleClick}>Player: {member.playerName}</p>
            <p>Level: </p>
            <p>Class: {capitalize(member.characterClass)}</p>
            <p>Race: {capitalize(member.characterRace)}</p>
          </div>
          <div className='right'>
            <p>AC: {member.armorClass}</p>
            <p>HP: {member.hitPoints}</p>
            <p>Speed: {member.speed}</p>
            <p>Hit Dice: {member.hitDice}</p>
          </div>
        </div>
        <div className='split'>
          <div className='left'>
            <p>STR: {member.strength}</p>
            <p>DEX: {member.dexterity}</p>
            <p>CON: {member.constitution}</p>
          </div>
          <div className='right'>
            <p>INT: {member.intelligence}</p>
            <p>WIS: {member.wisdom}</p>
            <p>CHA: {member.charisma}</p>
          </div>
        </div>
      </div>
    </div>
  )
}