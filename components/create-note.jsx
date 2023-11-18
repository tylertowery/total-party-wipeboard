import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setCreatingNote, setNotesData } from '../store/store.js';
import { useAuthContext } from '../lib/context/AuthContext.js'
import { db } from '../lib/firebase_setup/config';
import { writeBatch, doc, collection, addDoc, Timestamp } from 'firebase/firestore'


export default function CreateNote() {
  const parties = useSelector(state => state.partyData);
  const creatingNote = useSelector(state => state.creatingNote);
  const notes = useSelector(state => state.notesData);

  const { user } = useAuthContext();
  const dispatch = useDispatch();

  const [noteText, setNoteText] = useState('');
  const [selectedParty, setSelectedParty] = useState('');

  const handlePartySelect = (event) => {
    setSelectedParty(event.target.value);
  }

  const handleNoteChange = (event) => {
    setNoteText(event.target.value);
  }

  const handleNoteSubmit = async (event) => {
    event.preventDefault();
    console.log('creating new note');

    try {
      if (selectedParty && noteText) {
        const notesCollection = collection(db, 'notes');
        const currentDate = Timestamp.now()

        const selectedPartyData = parties.find((party) => party.id === selectedParty)

        if (selectedPartyData) {
          const newNote = {
            campaignName: selectedPartyData.campaignName,
            partyName: selectedPartyData.partyName,
            partyId: selectedParty,
            note: noteText,
            createdAt: currentDate,
            user: user.email,
          }

          await addDoc(notesCollection, newNote);

          const updatedNotes = [newNote, ...notes];
          dispatch(setNotesData(updatedNotes));

          setSelectedParty('');
          setNoteText('');

          dispatch(setCreatingNote(false));

          console.log('Created note successfully');
        } else {
          console.log('Selected party not found in parties array');
        }
      } else {
        console.log('Select a party and add a note!')
      }
    } catch (error) {
      console.error('Error creating note: ', error);
    }
  };

  return (
    <form className='modal-form' onSubmit={handleNoteSubmit}>
      <h1 className='header'>Create New Note</h1>
      <div className='create-note'>
        <div className='party-double'>
          <select className='select-party' required onChange={handlePartySelect}>
            <option value=''>Select a Party</option>
            {parties.map((party, index) => (
              <option key={index} value={party.id}>
                {party.campaignName} - {party.partyName}
              </option>
            ))}
          </select>
          <button
            type='submit'
            className='create-note-button'
          >
            Create New Note
          </button>

        </div>
        <label className='note-label' htmlFor="note-text">Note Text:</label>
        <textarea
          className="note-text"
          value={noteText}
          required
          onChange={handleNoteChange}
        />
      </div>
    </form>
  )
}