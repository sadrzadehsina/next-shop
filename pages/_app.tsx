import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';
import Visitor from '../layouts/visitor/visitor';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Visitor>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Visitor>
  );
}

export default MyApp;
