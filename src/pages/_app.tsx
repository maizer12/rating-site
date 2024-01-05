import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { HTag, Button, PTag, Tag, Rating } from '../components';
import { useState } from 'react';

function MyApp({ pageProps }: AppProps) {
  const [rating, setRating] = useState(3);

  return (
    <>
      <HTag tag="h1">465</HTag>
      <Button variable="outline" arrow={true}>
        Узнать подробнее
      </Button>
      <PTag size="md">456</PTag>
      <Tag variant="primary">Работа в Photoshop</Tag>
      <Rating value={rating} setEdit={setRating} />
    </>
  );
}
export default MyApp;
