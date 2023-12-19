import '../styles/global.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import NavBar from '../components/global/NavBar';
import Footer from '../components/global/Footer';
import { useRouter } from 'next/router';
import { AuthContextProvider } from '../lib/context/AuthContext';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({
  subsets: ['latin']
});

export default function App({ Component, ...rest }) {
  const router = useRouter();

  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <div>
          <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
          </Head>
          <main className={inter.className}>
            <NavBar router={router} />
            <div className='spacer-top' />
            <Component {...props.pageProps} router={router} />
            <div className='spacer-bottom' />
            <Footer router={router} />
          </main>
        </div>
      </AuthContextProvider>
    </Provider>
  )
};
