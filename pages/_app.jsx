import '../styles/global.css';
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
        <main className={inter.className}>
          <NavBar router={router} />
          <div className='spacer-top' />
          <Component {...props.pageProps} router={router} />
          <div className='spacer-bottom' />
          <Footer router={router} />
        </main>
      </AuthContextProvider>
    </Provider>
  )
};
