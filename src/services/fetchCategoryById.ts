import { GamesMenu } from '@/models/fetch/type';
import { notFound } from 'next/navigation';

export async function fetchCategoryById(id: string): Promise<GamesMenu> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/menu/${id}`
    );
    if (!response.ok) notFound();
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    throw new Error('Something goes wrong');
  }
}
