import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { HTag, Button } from '../components';

function MyApp({ pageProps }: AppProps) {
  return (
    <>
      <HTag tag="h1">465</HTag>
      <Button variable="outline">Узнать подробнее</Button>
    </>
  );
}
export default MyApp;
