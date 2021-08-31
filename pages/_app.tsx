import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';
import Visitor from '../layouts/visitor/visitor';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Visitor>
      <Component {...pageProps} />
    </Visitor>
  );
}

export default MyApp;
