import { fetchGamesMenu } from '@/services/fetchGamesMenu';
import Link from 'next/link';
import { ModeToggle } from './ui/ModeToggle';
import { Navigation } from './ui/navigation';

type Props = {};

const Header = async (props: Props) => {
  const navItems = await fetchGamesMenu();

  return (
    <header
      data-testid="header"
      className="dark:bg-background bg-zinc-100 py-4 px-6 border-b shadow-[0_1px_4px_-2px]"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href={'/'}
          className="font-bold text-2xl text-transparent  bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text"
        >
          GamesLobby
        </Link>
        <Navigation navItems={navItems} />
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;
