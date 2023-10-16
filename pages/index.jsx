import Link from 'next/link';
// import { useSession } from 'next-auth/react'

export default function Home({ router }) {

  const handleCreate = () => {
    router.push('/signup');
  }

  return (
    <div className="page">
      <h1 className="welcome-header">WELCOME TO TOTAL PARTY WIPEBOARD</h1>
      <p className="adventure-title">Embark on your epic adventures with confidence and organization! Total Party Wipeboard is your all-in-one solution for tracking and managing your Dungeons & Dragons parties. Whether you're a Dungeon Master orchestrating thrilling campaigns or a player charting your hero's journey, we've got you covered.</p>
      <div className="features">
        <h3 class='header'>Key Features:</h3>
        <ul>
          <li><strong>Party Management:</strong> Create, customize, and manage your D&D parties with ease. Keep track of your party's members, their characters, and vital statistics.</li>
          <li><strong>Member Profiles:</strong> Dive deep into character details. Record character sheets, stats, and equipment, all in one place.</li>
          <li><strong>Inventory Management:</strong> Keep tabs on your party's inventory. Track items, gold, and loot effortlessly.</li>
          <li><strong>Dice Roller:</strong> Roll the dice digitally for quick and fair outcomes. Never lose a dice under the couch again!</li>
          <li><strong>Session Logs:</strong> Chronicle your sessions. Record events, decisions, and memorable moments to revisit later.</li>
        </ul>
      </div>
      <div className='adventure-title'>
        <p>Join the growing community of Dungeon Masters and adventurers who trust Total Party Wipeboard to enhance their D&D experience. Whether you're a seasoned player or just starting your journey, our tools are here to make your campaigns legendary.</p>
        <br />
        <p>Your quest awaits. Let's roll initiative and create unforgettable tales together!</p>
      </div>
      <div className='create-container'>
        <div className='create-link' onClick={handleCreate}>Click Here To Create An Account Now</div>
      </div>
    </div>
  );
};