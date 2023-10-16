import { useState, useRef } from 'react';
import Member from '../components/member';
import { db } from '../lib/firebase_setup/config';
import { writeBatch, doc, collection, addDoc, Timestamp } from 'firebase/firestore'
import { useAuthContext } from '../lib/context/AuthContext';

export default function CreateParty({ router }) {
  const [members, setMembers] = useState([]);
  const campaignNameRef = useRef();
  const partyNameRef = useRef();

  const { user } = useAuthContext();

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;

    setMembers((prevMembers) => {
      const updatedMembers = [...prevMembers];
      updatedMembers[index][name] = value;
      return updatedMembers;
    })
  }

  const handleAddMember = () => {
    setMembers(() => [...members, {
      dungeonMaster: user.email,
      campaignName: campaignNameRef.current.value,
      partyName: partyNameRef.current.value,
      playerName: '',
      characterName: '',
      characterClass: '',
      characterRace: '',
      armorClass: '',
      hitPoints: '',
      speed: '',
      hitDice: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: ''
    }]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitting party');
    const memberBatch = writeBatch(db);

    members.forEach((member, index) => {
      const { playerName, characterName, characterClass, characterRace, armorClass, hitPoints, speed, hitDice, strength, dexterity, constitution, intelligence, wisdom, charisma } = member;
      const dungeonMaster = user.email;
      const campaignName = campaignNameRef.current.value;
      const partyName = partyNameRef.current.value;
      console.log(`Player: ${playerName}, Character: ${characterName}, Class: ${characterClass}`);
      const memberRef = doc(db, 'members', `${characterName} - ${campaignName} - ${user.email}`);

      memberBatch.set(memberRef, {
        dungeonMaster,
        campaignName,
        partyName,
        playerName,
        characterName,
        characterClass,
        characterRace,
        armorClass,
        hitPoints,
        speed,
        hitDice,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma
      });
    });

    const partyCollectionRef = collection(db, 'parties');
    const currentDate = Timestamp.now();
    const partyData = {
      campaignName: campaignNameRef.current.value,
      partyName: partyNameRef.current.value,
      dungeonMaster: user.email,
      createdAt: currentDate,
      members: members.map((member) => {
        return {
          playerName: member.playerName,
          characterName: member.characterName,
          characterClass: member.characterClass,
          characterRace: member.characterRace,
          armorClass: member.armorClass,
          hitPoints: member.hitPoints,
          speed: member.speed,
          hitDice: member.hitDice,
          strength: member.strength,
          dexterity: member.dexterity,
          constitution: member.constitution,
          intelligence: member.intelligence,
          wisdom: member.wisdom,
          charisma: member.charisma
        }
      })
    }

    try {
      await addDoc(partyCollectionRef, partyData);
      await memberBatch.commit();
      console.log('Form saved to Firebase');
      setMembers([]);
      campaignNameRef.current.value = '';
      partyNameRef.current.value = '';
      router.push('/parties');
    } catch (error) {
      console.error('Error saving form to Firebase:', error);
    }
  }

  return (
    <div className='page'>
      <h1 className='header'>CREATE A PARTY</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='campaign-name'>Campaign Name</label>
        <input id='campaign-name' ref={campaignNameRef} placeholder='Awakening Grog the Tyrant'></input>
        <label htmlFor='party-name'>Party Name</label>
        <input id='party-name' ref={partyNameRef} placeholder='The Goonies'></input>
        {members.map((member, index) => {
          return <Member key={index} index={index} member={member} onInputChange={handleInputChange} />
        })}
        <button onClick={handleAddMember} type='button'>Add another member</button>
        <button type='submit'>Create Party</button>
      </form>
    </div>
  )
}