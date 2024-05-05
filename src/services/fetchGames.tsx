import { GamesDto } from '@/models/fetch/type';

export async function fetchGames(
  pageNumber = 1,
  search?: string,
  pageSize = 8
): Promise<GamesDto> {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_APP_URL
      }/api/games?pageSize=${pageSize}&pageNumber=${pageNumber}&search=${
        search ?? ''
      }`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error('Something goes wrong');
  }
}
