import MemberCards from './member-cards';
import MemberCarousel from './member-carousel';
import { setCurrentIndex } from '../store/store';
import { useDispatch } from 'react-redux';

export default function Party({ party, router, index }) {
  const dispatch = useDispatch();

  const date = party?.createdAt?.toDate();
  const formattedDate = date ? date.toLocaleDateString('en-US') : 'N/A';

  const memberSlides = party ? party.members : [];

  const handleClick = () => {
    console.log('clicked: ', index);
    dispatch(setCurrentIndex(index));
    router.push(`/parties/${party.campaignName}`)
  }

  const handlePropagation = (event) => {
    event.stopPropagation();
  }

  return (
    <div onClick={handleClick} className='party'>
      <div className="campaign-info">
        <img></img>
      </div>
      <div className='party-info'>
        <p>{party.campaignName}</p>
        <p>{party.partyName}</p>
        <p>{formattedDate}</p>
      </div>
      <div onClick={handlePropagation} className='members'>
        <MemberCarousel members={memberSlides} />
      </div>
    </div>
  )
}