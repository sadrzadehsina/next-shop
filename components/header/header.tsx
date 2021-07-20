import Logo from '../logo/logo';
import PrimaryButton from '../button/primary-button';

const Header = () => {
  return (
    <header class="body-font text-gray-600">
      <div class="container flex flex-col flex-wrap items-center mx-auto p-5 md:flex-row">
        <a class="flex items-center mb-4 md:mb-0">
          <Logo />
        </a>
        <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
