import MemberCards from './member-cards';

export default function Party({ party }) {
  return (
    <div className='party'>
      <div className="campaign-info">
        <img></img>
        <p>{party.campaignName}</p>
      </div>
      <div className='party-info'>
        <p>{party.partyName}</p>
        <p>{party.createdAt}</p>
      </div>
      <div className='members'>
        {party.members.map((member) => {
          return <MemberCards key={member.characterName} member={member} />
        })}
      </div>
    </div>
  )
}