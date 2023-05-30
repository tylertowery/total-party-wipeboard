import { useAuthContext } from '../lib/context/AuthContext';

export default function Admin({ router }) {
  const { user } = useAuthContext();

  let loggedIn = user ? true : false;

  return (
    <>
      {loggedIn ? <h1 onClick={() => console.log(user)}>Only logged in users can see this page</h1> : <h1>Not logged in</h1>}
      <button onClick={() => console.log('state of user: ', loggedIn)}>Check if logged in</button>
    </>
  )
}