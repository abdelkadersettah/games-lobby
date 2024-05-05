import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="dark:bg-background bg-zinc-100 py-4 px-6 shadow-[0_-1px_4px_-2px] border-t">
      <nav className="page-width-padding">
        <Link
          href={'/'}
          className="font-bold text-2xl text-transparent  bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text"
        >
          GamesLobby
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
