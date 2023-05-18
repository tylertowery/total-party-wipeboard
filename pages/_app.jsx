import '../styles/global.css';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <SessionProvider>
      <NavBar />
      <Component {...pageProps} />
      <p>footer</p>
    </SessionProvider>
  )
};
