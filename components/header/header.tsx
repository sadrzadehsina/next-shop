import Logo from '../logo/logo';
import PrimaryButton from '../button/primary-button';

const Header = () => {
  return (
    <header className="body-font text-gray-600">
      <div className="container flex flex-col flex-wrap items-center mx-auto p-5 md:flex-row">
        <a className="flex items-center mb-4 md:mb-0">
          <Logo />
        </a>
        <div className="flex flex-wrap md:ml-auto"></div>
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
