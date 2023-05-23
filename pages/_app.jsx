import '../styles/global.css';
import NavBar from '../components/global/NavBar';
import Footer from '../components/global/Footer';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <SessionProvider>
      <NavBar />
      <Component {...pageProps} router={router} />
      <Footer />
    </SessionProvider>
  )
};
