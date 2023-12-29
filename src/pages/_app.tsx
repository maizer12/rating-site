import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { HTag, Button, PTag } from '../components';

function MyApp({ pageProps }: AppProps) {
  return (
    <>
      <HTag tag="h1">465</HTag>
      <Button variable="outline" arrow={true}>
        Узнать подробнее
      </Button>
      <PTag size="md">456</PTag>
    </>
  );
}
export default MyApp;
