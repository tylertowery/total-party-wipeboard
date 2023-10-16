import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setAddingMember } from '../../store/store';
import BigMemberCards from '../../components/big-member-cards';
import AddMemberForm from '../../components/add-member-form';

export default function PartyName({ router }) {
  //Redux State Store
  const parties = useSelector(state => state.partyData);
  const index = useSelector(state => state.currentIndex);
  const addingMember = useSelector(state => state.addingMember);

  const dispatch = useDispatch();

  const handleLog = () => {
    console.log('parties: ', parties[index]);
  }

  const handleClose = (event) => {
    event.preventDefault();
    dispatch(setAddingMember(false));
  }

  const handleAddMember = (event) => {
    event.preventDefault();
    dispatch(setAddingMember(true));
  }

  const party = parties[index];

  return (
    <div>
      {addingMember && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Render your AddMemberForm component here */}
            <AddMemberForm party={party} handleClose={handleClose} />
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
      <h1 className='header' onClick={handleLog}>{party?.campaignName} - {party?.partyName}</h1>
      <div className='big-members'>
        {party.members.map((member) => {
          return <BigMemberCards key={party?.partyName} member={member} />
        })}
      </div>
      <div className='centered'>
        <button onClick={handleAddMember} className='add-member'>Create New Party Member</button>
      </div>
    </div >
  )
}