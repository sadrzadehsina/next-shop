import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';
import Visitor from '../layouts/visitor/visitor';

function MyApp({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout || ((page) => page);
  // return getLayout(<Component {...pageProps} />);

  return (
    <Visitor>
      <Component {...pageProps} />
    </Visitor>
  );
}

export default MyApp;
