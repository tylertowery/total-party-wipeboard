import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setAddingMember } from '../../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import BigMemberCards from '../../components/big-member-cards';
import AddMemberForm from '../../components/add-member-form';

export default function PartyName({ router }) {
  //Redux State Store
  const parties = useSelector(state => state.partyData);
  const index = useSelector(state => state.currentPartyIndex);
  const addingMember = useSelector(state => state.addingMember);

  const dispatch = useDispatch();

  const handleClose = (event) => {
    event.preventDefault();
    dispatch(setAddingMember(false));
  }

  const handleAddMember = (event) => {
    event.preventDefault();
    dispatch(setAddingMember(true));
  }

  const party = parties[index];

  const handleLog = () => {
    console.log(party);
  }


  return (
    <div className='page'>
      {addingMember && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon
              className='icon close'
              size='xl'
              icon={faCircleXmark}
              onClick={handleClose}
            />
            {/* Render your AddMemberForm component here */}
            <AddMemberForm party={party} />
          </div>
        </div>
      )}
      <h1 className='header'>{party?.campaignName} - {party?.partyName}</h1>
      <div className='big-members'>
        {parties[index]?.members?.map((member) => {
          return <BigMemberCards key={member?.characterName} parties={parties} index={index} party={parties[index]} member={member} />
        })}
      </div>
      <div className='centered'>
        <button onClick={handleAddMember} className='create-new-member'>Create New Party Member</button>
      </div>
      <button onClick={handleLog}>Log</button>
    </div >
  )
}