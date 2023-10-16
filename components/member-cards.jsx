export default function MemberCards({ member }) {
  const capitalize = (word) => {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  }

  return (
    <div className='member-card'>
      <p>{member.playerName}</p>
      <p>{member.characterName}</p>
      <p>Level 1</p>
      <p>{capitalize(member.characterClass)}</p>
    </div>
  )
}