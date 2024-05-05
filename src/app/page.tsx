import Games from '@/components/Games';
import Search from '@/components/ui/search';

type Props = {
  params: { slug: string; locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ params, searchParams }: Props) {
  return (
    <section>
      <h1>Welcome to the World&apos;s Game!</h1>
      <Search />
      <Games searchParams={searchParams} />
    </section>
  );
}
