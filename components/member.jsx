export default function Member({ member, index, onInputChange }) {
  const hanldeLog = (event) => {
    console.log('this is the index: ', index);
  }

  return (
    <>
      <h2 onClick={hanldeLog}>Character {index + 1}</h2>
      <label htmlFor={`player-name-${index}`}>Player Name</label>
      <input
        id={`player-name-${index}`}
        name='playerName'
        value={member.playerName}
        onChange={(event) => onInputChange(event, index)}
        placeholder='Jack Johnson'
      />
      <label htmlFor={`character-name-${index}`}>Character Name</label>
      <input
        id={`character-name-${index}`}
        name='characterName'
        value={member.characterName}
        onChange={(event) => onInputChange(event, index)}
        placeholder='Grog the Man'
      />
      <label htmlFor={`character-class-${index}`}>Character Class</label>
      <select
        name='characterClass'
        id={`character-class-${index}`}
        value={member.characterClass}
        onChange={(event) => onInputChange(event, index)}
      >
        <option value=''>--Select--</option>
        <option value='alchemist'>Alchemist</option>
        <option value='barbarian'>Barbarian</option>
        <option value='bard'>Bard</option>
        <option value='champion'>Champion</option>
        <option value='cleric'>Cleric</option>
        <option value='druid'>Druid</option>
        <option value='fighter'>Fighter</option>
        <option value='gunslinger'>Gunslinger</option>
        <option value='inventor'>Inventor</option>
        <option value='investigator'>Investigator</option>
        <option value='magus'>Magus</option>
        <option value='monk'>Monk</option>
        <option value='oracle'>Oracle</option>
        <option value='psychic'>Psychic</option>
        <option value='ranger'>Ranger</option>
        <option value='rogue'>Rogue</option>
        <option value='sorcerer'>Sorcerer</option>
        <option value='summoner'>Summoner</option>
        <option value='swashbuckler'>Swashbuckler</option>
        <option value='thaumaturge'>Thaumaturge</option>
        <option value='witch'>Witch</option>
        <option value='wizard'>Wizard</option>
      </select>
    </>
  )
}