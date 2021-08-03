import Logo from '../logo/logo';
import Link from 'next/link';
import { Button } from 'react-component-library';

const Header = () => {
  return (
    <header className="body-font text-gray-600">
      <div className="container flex flex-col flex-wrap items-center mx-auto p-5 md:flex-row">
        <Link href="/products" className="flex items-center mb-4 md:mb-0">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="flex flex-wrap md:ml-auto"></div>
        <Button type="primary">Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
