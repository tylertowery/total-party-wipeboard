import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotesData, setCurrentNoteIndex } from '../store/store.js';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase_setup/config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Note({ note, router, index }) {
  const dispatch = useDispatch();
  const [noteEnter, setNoteEnter] = useState(false);
  const notes = useSelector(state => state.notesData);

  const date = new Date(note.createdAt.seconds * 1000 + note.createdAt.nanoseconds / 1000000);
  const formattedDate = date.toLocaleDateString();

  const handleClick = () => {
    console.log('clicked: ', note, index);
    dispatch(setCurrentNoteIndex(index));
    router.push(`/notes/${note.id}`);
  }

  const handleNoteEnter = () => {
    setNoteEnter(true);
  }

  const handleNoteLeave = () => {
    setNoteEnter(false);
  }

  const deleteNote = async (e) => {
    console.log('deleting note');
    e.stopPropagation();
    try {
      const noteToDelete = note.id
      const notesCollectionRef = collection(db, 'notes');
      const noteDocRef = doc(notesCollectionRef, noteToDelete);

      await deleteDoc(noteDocRef);

      const updatedNotes = notes.filter((n) => n.id !== noteToDelete);

      dispatch(setNotesData(updatedNotes));

      console.log('note deleted successfully');
    } catch (e) {
      console.error('Error deleting note: ', e)
    }
  }

  return (
    <div className='note'
      onMouseEnter={handleNoteEnter}
      onMouseLeave={handleNoteLeave}
      onClick={handleClick}
    >
      {noteEnter && (
        <FontAwesomeIcon
          className='icon trash'
          size='xl'
          onClick={deleteNote}
          icon={faTrashCan}
        />
      )}
      <div className=''>
        <p>{formattedDate}</p>
        <p>{note.campaignName}</p>
        <p>{note.partyName}</p>
      </div>
      <div className='session-note'>
        <p>{note.note}</p>
      </div>
    </div>
  )
}