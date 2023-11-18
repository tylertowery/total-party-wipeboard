import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setCreatingNote } from '../../store/store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CreateNote from '../../components/create-note';
import Note from '../../components/note';

export default function Sessions({ router }) {
  const parties = useSelector(state => state.partyData);
  const notes = useSelector(state => state.notesData);
  const creatingNote = useSelector(state => state.creatingNote);

  const dispatch = useDispatch();

  const [selectedCampaign, setSelectedCampaign] = useState('');

  const handleNewNote = () => {
    dispatch(setCreatingNote(true));
  }

  const handleClose = (event) => {
    event.preventDefault();
    dispatch(setCreatingNote(false));
  }

  const filteredNotes = notes.filter((note) => {
    return selectedCampaign === '' || note.partyId === selectedCampaign;
  });

  return (
    <div className='page'>
      {creatingNote && (
        <div className='modal-overlay' onClick={handleClose}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon
              className='icon close'
              size='xl'
              icon={faCircleXmark}
              onClick={handleClose}
            />
            <CreateNote />
          </div>
        </div>
      )}
      <h1 className='header'>Session Notes</h1>
      <div className='session-notes'>
        <div className='double'>
          <select
            className='select-party'
            value={selectedCampaign}
            onChange={(e) => setSelectedCampaign(e.target.value)}
          >
            <option value=''>Sort By: All Campaigns</option>
            {parties.map((party, index) => (
              <option key={index} value={party.id}>
                {party.campaignName}
              </option>
            ))}
          </select>
          <button className='create-note-button' onClick={handleNewNote}>Create New Note</button>
        </div>
        <div>
          {filteredNotes.length === 0
            ? <h2 className='note-header'>No Notes To Display</h2>
            : filteredNotes.map((note, index) => {
              return <Note note={note} key={index} index={index} router={router} />
            })}
        </div>
      </div>
    </div>
  )
}