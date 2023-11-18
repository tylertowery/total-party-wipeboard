import { useSelector } from 'react-redux';

export default function NoteName() {
  const notes = useSelector(state => state.notesData);
  const index = useSelector(state => state.currentNoteIndex);

  const note = notes[index];

  const date = new Date(note?.createdAt.seconds * 1000 + note?.createdAt.nanoseconds / 1000000);
  const formattedDate = date.toLocaleDateString();

  return (
    <div className='page'>
      <h1 className='header'>{note?.campaignName} Note</h1>
      <h2 className='header'>{formattedDate}</h2>
      <p className='note'>{note?.note}</p>
    </div>
  )
}