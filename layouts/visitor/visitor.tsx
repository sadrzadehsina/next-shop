import { Fragment } from 'react';
import Header from '../../components/header/header';

const Visitor = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Visitor;
