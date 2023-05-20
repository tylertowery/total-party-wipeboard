import Member from './member';

export default function Party({ party }) {
  return (
    <>
      <div className="campaign-info">
        <img></img>
        <p>Campaign Name</p>
      </div>
      <div className="party-info">
        <p>Party Name</p>
        <p>Date Created</p>
        <p>Date Last Played</p>
      </div>
      <div>
        {party.members.map((member) => {
          return <Member member={member} />
        })}
      </div>
    </>
  )
}