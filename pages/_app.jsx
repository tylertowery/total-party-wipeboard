import '../styles/global.css';
import NavBar from '../components/global/NavBar';
import Footer from '../components/global/Footer';
import { useRouter } from 'next/router';
import { AuthContextProvider } from '../lib/context/AuthContext';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <NavBar router={router} />
      <Component {...pageProps} router={router} />
      <Footer router={router} />
    </AuthContextProvider>
  )
};
