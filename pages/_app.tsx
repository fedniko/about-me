import '../styles/globals.scss';
import '../components/header.scss';
import '../components/footer.scss';
import '../components/facts/facts.scss';
import '../components/pendulum/pendulum.scss';
import '../components/skills/skills.scss';
import '../components/GTO/GTO.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import wrapper from '../store/store';

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
