import Link from 'next/link';
// import { useSession } from 'next-auth/react'

export default function Home() {
  // const { data: session } = useSession();

  // console.log('session: ', session)

  return (
    <>
      <h1>WELCOME TO TOTAL PARTY WIPEBOARD</h1>
      <p>This is the resource for DM's with multiple campaigns and party members to keep track of</p>
      <div>
        <p>Click here to create a new party</p>
      </div>
      <div>
        <p>Click here to check out the monster encyclopedia</p>
      </div>
    </>
  );
};