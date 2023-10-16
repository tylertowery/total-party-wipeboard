export default function BigMemberCards({ member }) {
  const capitalize = (word) => {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  }

  return (
    <div className='big-card'>
      <h2 className='kinda-header'>{member.characterName}</h2>
      <div className='big-member-card'>
        <div className='split'>
          <div className='left'>
            <p>Player: {member.playerName}</p>
            <p>Level: </p>
            <p>Class: {capitalize(member.characterClass)}</p>
            <p>Race: {capitalize(member.characterRace)}</p>
          </div>
          <div className='right'>
            <p>AC: {member.armorClass}</p>
            <p>HP: {member.hitPoints}</p>
            <p>Speed: {member.speed}</p>
            <p>Hit Dice: {member.hitDice}</p>
          </div>
        </div>
        <div className='split'>
          <div className='left'>
            <p>STR: {member.strength}</p>
            <p>DEX: {member.dexterity}</p>
            <p>CON: {member.constitution}</p>
          </div>
          <div className='right'>
            <p>INT: {member.intelligence}</p>
            <p>WIS: {member.wisdom}</p>
            <p>CHA: {member.charisma}</p>
          </div>
        </div>
      </div>
    </div>
  )
}