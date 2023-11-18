export default function Member({ member, index, onInputChange }) {
  const hanldeLog = (event) => {
    console.log('this is the index: ', index);
  }

  return (
    <div className='create-member-form'>
      <h2 onClick={hanldeLog} className='character-header'>Character {index + 1}</h2>
      <div className='double'>
        <div className='input-group player-character-name'>
          <label htmlFor={`player-name-${index}`}>Player Name</label>
          <input
            id={`player-name-${index}`}
            name='playerName'
            value={member.playerName}
            onChange={(event) => onInputChange(event, index)}
            placeholder='Jack Johnson'
            required
          />
        </div>
        <div className='input-group player-character-name'>
          <label htmlFor={`character-name-${index}`}>Character Name</label>
          <input
            id={`character-name-${index}`}
            name='characterName'
            value={member.characterName}
            onChange={(event) => onInputChange(event, index)}
            placeholder='Grog the Man'
            required
          />
        </div>
      </div>
      <div className='double'>
        <div className='input-group class-race'>
          <label htmlFor={`character-class-${index}`}>Character Class</label>
          <select
            id={`character-class-${index}`}
            name='characterClass'
            value={member.characterClass}
            onChange={(event) => onInputChange(event, index)}
            required
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
        </div>
        <div className='input-group class-race'>
          <label htmlFor={`character-race-${index}`}>Character Race</label>
          <select
            id={`character-race-${index}`}
            name='characterRace'
            value={member.characterRace}
            onChange={(event) => onInputChange(event, index)}
            required
          >
            <option value=''>--Select--</option>
            <option value='dragonborn'>Dragonborn</option>
            <option value='dwarf'>Dwarf</option>
            <option value='elf'>Elf</option>
            <option value='gnome'>Gnome</option>
            <option value='half-elf'>Half-Elf</option>
            <option value='halfling'>Halfling</option>
            <option value='half-orc'>Half-Orc</option>
            <option value='human'>Human</option>
            <option value='tiefling'>Tiefling</option>
          </select>
        </div>
      </div>
      <div className='quad'>
        <div className='input-group stats '>
          <label htmlFor={`armor-class-${index}`}>Armor Class</label>
          <input
            id={`armor-class-${index}`}
            name='armorClass'
            type='number'
            min='0'
            max='20'
            value={member.armorClass}
            onChange={(event) => onInputChange(event, index)}
            placeholder='0'
            required
          />
        </div>
        <div className='input-group stats'>
          <label htmlFor={`hit-points-${index}`}>Hit Points</label>
          <input
            id={`hit-points-${index}`}
            name='hitPoints'
            type='number'
            min='5'
            max='20'
            value={member.hitPoints}
            onChange={(event) => onInputChange(event, index)}
            placeholder='10'
            required
          />
        </div>
        <div className='input-group stats'>
          <label htmlFor={`speed-${index}`}>Speed</label>
          <input
            id={`speed-${index}`}
            name='speed'
            type='number'
            min='20'
            max='60'
            step='5'
            value={member.speed}
            onChange={(event) => onInputChange(event, index)}
            placeholder='20'
            required
          />
        </div>
        <div className='input-group stats'>
          <label htmlFor={`hit-dice-${index}`}>Hit Dice</label>
          <input
            id={`hit-dice-${index}`}
            name='hitDice'
            value={member.hitDice}
            onChange={(event) => onInputChange(event, index)}
            placeholder='5d6'
            required
          />
        </div>
      </div>
      <div className='triple'>
        <div className='input-group skills'>
          <label htmlFor={`strength-${index}`}>Strength</label>
          <input
            id={`strength-${index}`}
            name='strength'
            type='number'
            min='0'
            max='20'
            value={member.strength}
            onChange={(event) => onInputChange(event, index)}
            placeholder='10'
            required
          />
        </div>
        <div className='input-group skills'>
          <label htmlFor={`dexterity-${index}`}>Dexterity</label>
          <input
            id={`dexterity-${index}`}
            name='dexterity'
            type='number'
            min='0'
            max='20'
            value={member.dexterity}
            onChange={(event) => onInputChange(event, index)}
            placeholder='10'
            required
          />
        </div>
        <div className='input-group skills'>
          <label htmlFor={`constitution-${index}`}>Constitution</label>
          <input
            id={`constitution-${index}`}
            name='constitution'
            type='number'
            min='0'
            max='20'
            value={member.constitution}
            onChange={(event) => onInputChange(event, index)}
            placeholder='10'
            required
          />
        </div>
      </div>
      <div className='triple'>
        <div className='input-group skills'>
          <label htmlFor={`intelligence-${index}`}>Intelligence</label>
          <input
            id={`intelligence-${index}`}
            name='intelligence'
            type='number'
            min='0'
            max='20'
            value={member.intelligence}
            onChange={(event) => onInputChange(event, index)}
            placeholder='10'
            required
          />
        </div>
        <div className='input-group skills'>
          <label htmlFor={`wisdom-${index}`}>Wisdom</label>
          <input
            id={`wisdom-${index}`}
            name='wisdom'
            type='number'
            min='0'
            max='20'
            value={member.wisdom}
            onChange={(event) => onInputChange(event, index)}
            placeholder='10'
            required
          />
        </div>
        <div className='input-group skills'>
          <label htmlFor={`charisma-${index}`}>Charisma</label>
          <input
            id={`charisma-${index}`}
            name='charisma'
            type='number'
            min='0'
            max='20'
            value={member.charisma}
            onChange={(event) => onInputChange(event, index)}
            placeholder='10'
            required
          />
        </div>
      </div>
    </div>
  )
}