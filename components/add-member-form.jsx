import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import { FieldValue } from 'firebase/compat/firestore';
import { auth, db } from '../lib/firebase_setup/config';
import { writeBatch, addDoc, doc, collection, query, where, getDocs, updateDoc, arrayUnion } from 'firebase/firestore';
import { setAddingMember, setPartyData } from '../store/store';
import { useAuthContext } from '../lib/context/AuthContext';

export default function AddMemberForm({ party }) {
  const [member, setMember] = useState({
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
  });

  const { user } = useAuthContext();
  const parties = useSelector(state => state.partyData);
  const index = useSelector(state => state.currentIndex);
  const dispatch = useDispatch();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let partyDoc;

    const newMember = {
      playerName: member.playerName,
      characterName: member.characterName,
      characterRace: member.characterRace,
      characterClass: member.characterClass,
      armorClass: member.armorClass,
      hitPoints: member.hitPoints,
      speed: member.speed,
      hitDice: member.hitDice,
      strength: member.strength,
      dexterity: member.dexterity,
      constitution: member.constitution,
      intelligence: member.intelligence,
      wisdom: member.wisdom,
      charisma: member.charisma,
    };

    // Reference to the 'members' collection
    const membersCollection = collection(db, 'members');

    // Reference to the new member document
    const newMemberRef = doc(
      membersCollection,
      `${newMember.characterName} - ${party.campaignName} - ${user.email}`
    );

    // Create a batch for batched writes
    const batch = writeBatch(db);

    try {
      // Set the new member data in the 'members' collection
      batch.set(newMemberRef, newMember);

      // Reference to the 'parties' collection
      const partiesCollection = collection(db, 'parties');

      // Query to find the party
      const partyQuery = query(
        partiesCollection,
        where('dungeonMaster', '==', user.email),
        where('campaignName', '==', party.campaignName)
      );

      const partyQuerySnapshot = await getDocs(partyQuery);

      if (!partyQuerySnapshot.empty) {
        partyDoc = partyQuerySnapshot.docs[0];
        // Update the party's 'members' field using arrayUnion
        batch.update(partyDoc.ref, {
          members: arrayUnion(newMember),
        });
      }

      // Commit the batched writes
      await batch.commit();

      console.log('we are in the then bro');
      const currentPartyData = partyDoc.data();
      const updatedMembers = [...currentPartyData.members, newMember];
      // need to set the party data by changing just the current party's member array
      let updatedParty = [...parties];
      console.log('before change: ', parties)
      updatedParty[index].members = updatedMembers;
      console.log('after change: ', updatedParty);
      dispatch(setPartyData(updatedParty));

      // Clear the form
      setMember({
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
        charisma: '',
      });

      // Dispatch actions if necessary
      dispatch(setAddingMember(false));
    } catch (error) {
      console.error('Error adding member to party or members collection: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='modal-form'>
      <h2 className='header'>Add New Member</h2>
      <div className='add-member-form'>
        <div className='double'>
          <div className='input-group player-character-name'>
            <label htmlFor='player-name'>Player Name: </label>
            <input
              id='player-name'
              name='playerName'
              value={member.playerName}
              onChange={(event) => handleInputChange(event)}
              placeholder='Tanner'
              required
            />
          </div>
          <div className='input-group player-character-name'>
            <label htmlFor='character-name'>Character Name: </label>
            <input
              id='character-name'
              name='characterName'
              value={member.characterName}
              onChange={(event) => handleInputChange(event)}
              placeholder='Pip'
              required
            />
          </div>
        </div>
        <div className='double'>
          <div className='input-group class-race'>
            <label htmlFor='character-class'>Character Class: </label>
            <select
              id='character-class'
              name='characterClass'
              value={member.characterClass}
              onChange={(event) => handleInputChange(event)}
              required
            >
              <option value=''>--Select--</option>
              <option value='alchemist'>Alchemist</option>
              <option value='barbarian'>Barbarian</option>
              <option value='bard'>Bard</option>
              <option value='champion'>Champion</option>
              <option value='cleric'>Cleric</option>
              <option value='druid'>Druid</option>
              <option value='fighter'>Fighter</option>
              <option value='gunslinger'>Gunslinger</option>
              <option value='inventor'>Inventor</option>
              <option value='investigator'>Investigator</option>
              <option value='magus'>Magus</option>
              <option value='monk'>Monk</option>
              <option value='oracle'>Oracle</option>
              <option value='psychic'>Psychic</option>
              <option value='ranger'>Ranger</option>
              <option value='rogue'>Rogue</option>
              <option value='sorcerer'>Sorcerer</option>
              <option value='summoner'>Summoner</option>
              <option value='swashbuckler'>Swashbuckler</option>
              <option value='thaumaturge'>Thaumaturge</option>
              <option value='witch'>Witch</option>
              <option value='wizard'>Wizard</option>
            </select>
          </div>
          <div className='input-group class-race'>
            <label htmlFor='character-race'>Character Race: </label>
            <select
              id='character-race'
              name='characterRace'
              value={member.characterRace}
              onChange={(event) => handleInputChange(event)}
              required
            >
              <option value=''>--Select--</option>
              <option value='dragonborn'>Dragonborn</option>
              <option value='dwarf'>Dwarf</option>
              <option value='elf'>Elf</option>
              <option value='gnome'>Gnome</option>
              <option value='half-elf'>Half-Elf</option>
              <option value='halfling'>Halfling</option>
              <option value='half-orc'>Half-Orc</option>
              <option value='human'>Human</option>
              <option value='tiefling'>Tiefling</option>
            </select>
          </div>
        </div>
        <div className='quad'>
          <div className='input-group stats'>
            <label htmlFor='armor-class'>Armor Class: </label>
            <input
              id='armor-class'
              name='armorClass'
              type='number'
              min='0'
              max='20'
              value={member.armorClass}
              onChange={(event) => handleInputChange(event)}
              placeholder='0'
              required
            />
          </div>
          <div className='input-group stats'>
            <label htmlFor='hit-points'>Hit Points: </label>
            <input
              id='hit-points'
              name='hitPoints'
              type='number'
              min='5'
              max='20'
              value={member.hitPoints}
              onChange={(event) => handleInputChange(event)}
              placeholder='10'
              required
            />
          </div>
          <div className='input-group stats'>
            <label htmlFor='speed'>Speed : </label>
            <input
              id='speed'
              name='speed'
              type='number'
              min='20'
              max='60'
              step='5'
              value={member.speed}
              onChange={(event) => handleInputChange(event)}
              placeholder='30'
              required
            />
          </div>
          <div className='input-group stats'>
            <label htmlFor='hit-dice'>Hit Dice: </label>
            <input
              id='hit-dice'
              name='hitDice'
              value={member.hitDice}
              onChange={(event) => handleInputChange(event)}
              placeholder='5d6'
              required
            />
          </div>
        </div>
        <div className='triple'>
          <div className='input-group skills'>
            <label htmlFor='strength'>Strength: </label>
            <input
              id='strength'
              name='strength'
              type='number'
              min='0'
              max='20'
              value={member.strength}
              onChange={(event) => handleInputChange(event)}
              placeholder='10'
              required
            />
          </div>
          <div className='input-group skills'>
            <label htmlFor='dexterity'>Dexterity: </label>
            <input
              id='dexterity'
              name='dexterity'
              type='number'
              min='0'
              max='20'
              value={member.dexterity}
              onChange={(event) => handleInputChange(event)}
              placeholder='10'
              required
            />
          </div>
          <div className='input-group skills'>
            <label htmlFor='constitution'>Constitution: </label>
            <input
              id='constitution'
              name='constitution'
              type='number'
              min='0'
              max='20'
              value={member.constitution}
              onChange={(event) => handleInputChange(event)}
              placeholder='10'
              required
            />
          </div>
        </div>
        <div className='triple'>
          <div className='input-group skills'>
            <label htmlFor='intelligence'>Intelligence: </label>
            <input
              id='intelligence'
              name='intelligence'
              type='number'
              min='0'
              max='20'
              value={member.intelligence}
              onChange={(event) => handleInputChange(event)}
              placeholder='10'
              required
            />
          </div>
          <div className='input-group skills'>
            <label htmlFor='wisdom'>Wisdom: </label>
            <input
              id='wisdom'
              name='wisdom'
              type='number'
              min='0'
              max='20'
              value={member.wisdom}
              onChange={(event) => handleInputChange(event)}
              placeholder='10'
              required
            />
          </div>
          <div className='input-group skills'>
            <label htmlFor='charisma'>Charisma: </label>
            <input
              id='charisma'
              name='charisma'
              type='number'
              min='0'
              max='20'
              value={member.charisma}
              onChange={(event) => handleInputChange(event)}
              placeholder='10'
              required
            />
          </div>
        </div>
        <div className='adding-member'>
          <button type='submit' className='add-member-button'>Add Member</button>
        </div>
      </div>
    </form>
  )
}