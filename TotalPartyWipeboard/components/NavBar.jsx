import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { data: session } = useSession();

  console.log('session: ', session);

  const router = useRouter();

  return (
    <div className='nav-bar'>
      <h4 onClick={() => { router.push("/") }} > Total Party Wipeboard</h4 >
      <h4 onClick={() => { router.push("/party-list") }}>Parties</h4>
      <h4 onClick={() => { router.push("/monsters") }}>Monsters</h4>
      {session ? <h4 onClick={() => signOut()}>Logout</h4> : <h4 onClick={() => { router.push("/signin") }}>Sign In</h4>}
    </div>
  )
}