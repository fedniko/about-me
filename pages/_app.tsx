import '../styles/globals.scss';
import '../components/header.scss';
import '../components/footer.scss';
import '../components/facts/facts.scss';
import '../components/pendulum/pendulum.scss';
import '../components/skills/skills.scss';
import '../components/GTO/GTO.scss';
import type { AppProps } from 'next/app';
import wrapper from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
