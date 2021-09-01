import Logo from '../logo/logo';
import Link from 'next/link';
import { Button } from 'react-component-library';
import { signIn, signOut, useSession } from 'next-auth/client';

const LoadingOrButton = ({ session, loading }) => {
  if (loading) return <span>loading</span>;

  if (session)
    return (
      <Button type="error" onClick={signOut}>
        Sign Out
      </Button>
    );

  return (
    <Button type="success" onClick={signIn}>
      Sign In
    </Button>
  );
};

const Header = () => {
  const [session, loading] = useSession();

  return (
    <header className="body-font text-gray-600">
      <div className="container flex flex-col flex-wrap items-center mx-auto p-5 md:flex-row">
        <Link href="/products" className="flex items-center mb-4 md:mb-0">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="flex flex-wrap pr-2 md:ml-auto">
          {session.user.email && <span>{session.user.email}</span>}
        </div>
        <LoadingOrButton session={session} loading={loading} />
      </div>
    </header>
  );
};

export default Header;
