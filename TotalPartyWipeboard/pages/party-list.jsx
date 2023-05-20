import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Party from '../components/party';

export default function Parties() {
  const router = useRouter();
  // placeholder parties state
  const [parties, setParties] = useState([{ campaignPic: 'url', campgainName: 'campaign', members: [1, 2, 3] }, { members: [4] }]);

  const handleClick = () => {
    console.log(parties[0]);
  }

  return (
    <>
      <h1 onClick={handleClick}>PARTIES</h1>
      <div>
        {parties.map((party) => {
          return <Party key={party} party={party} />
        })}
      </div>
    </>
  )
};