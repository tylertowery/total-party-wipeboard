export default function CreateParty() {
  return (
    <>
      <h1>CREATE A PARTY</h1>
      <form>
        <label>Campaign Name</label>
        <input placeholder='Awakening Grog the Tyrant'></input>
        <label>Party Name</label>
        <input placeholder='The Goonies'></input>
        <label>How many party members do you want to create?</label>
        <input type='number' min='1' max='10' placeholder='3'></input>
      </form>
    </>
  )
}