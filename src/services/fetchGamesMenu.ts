import { GamesMenu } from '@/models/fetch/type';

export async function fetchGamesMenu(): Promise<Array<GamesMenu>> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/menu`);
    if (!response.ok) return [];
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    throw new Error('Something goes wrong');
  }
}
