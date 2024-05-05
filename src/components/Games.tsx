'use client';
import { GameItem, GamesDto } from '@/models/fetch/type';
import { fetchGames } from '@/services/fetchGames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Loader from './ui/Loader';
import { Card, CardFooter, CardHeader, CardTitle } from './ui/card';
import NoMatchFound from './ui/noMatch';
import { Pagination } from './ui/pagination';

function GameCard({ gameItem }: { gameItem: GameItem }) {
  return (
    <Card
      className="max-w-80 w-full rounded-lg shadow-lg grid grid-cols-1 min-h-[420px]"
      key={gameItem.id}
    >
      <Image
        src={gameItem.image.original.src}
        width={400}
        height={300}
        alt={`${gameItem.gameText} logo`}
        className="w-full max-h-72 rounded-lg object-cover"
      />
      <CardHeader className="text-left  p-4">
        <CardTitle className="text-base font-semibold">
          {gameItem.gameText}
        </CardTitle>
      </CardHeader>
      <CardFooter className="px-4">
        <p>Provider: {gameItem.provider}</p>
      </CardFooter>
    </Card>
  );
}
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
function Games({ searchParams }: Props) {
  const [loading, setLoading] = useState(false);
  const [gameData, setGameData] = useState<GamesDto>({
    count: 0,
    items: [],
    nextPage: null,
    previousPage: null,
  });
  const [paginationData, setPaginationData] = useState({
    pageNumber: 1,
    totalRecords: 0,
    pageSize: 8,
  });
  function handleFetchGames(pageNumber = 1) {
    const searchQuery = searchParams?.search ?? '';
    fetchGames(pageNumber, searchQuery as string).then((res) => {
      setGameData(res);
      setPaginationData((prev) => ({
        ...prev,
        pageNumber: pageNumber,
        totalRecords: res.count,
      }));
    });
    setLoading(false);
  }
  useEffect(() => {
    handleFetchGames();
  }, [searchParams?.search]);

  if (loading) return <Loader />;
  if (gameData?.items.length === 0) return <NoMatchFound />;
  return (
    <section className="my-4">
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6  ">
        {gameData?.items.map((game) => (
          <li key={game.id}>
            <GameCard gameItem={game} />
          </li>
        ))}
      </ul>
      <Pagination
        paginationData={{
          pageNumber: paginationData.pageNumber,
          pageSize: paginationData.pageSize,
          totalRecords: paginationData.totalRecords,
        }}
        gotoPage={(pageNumber) => handleFetchGames(pageNumber)}
      />
    </section>
  );
}

export default Games;
