import { Fragment } from 'react';
import { Container } from 'react-component-library';
import Header from '../../components/header/header';

const Visitor = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Visitor;
