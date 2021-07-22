import 'tailwindcss/tailwind.css';

import Visitor from '../layouts/visitor/visitor';

function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);
  // return getLayout(<Component {...pageProps} />);

  return (
    <Visitor>
      <Component {...pageProps} />
    </Visitor>
  );
}

export default MyApp;
