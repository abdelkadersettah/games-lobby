import { GamesMenu } from '@/models/fetch/type';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: { id: string };
};

export async function GET(request: NextRequest, { params }: Params) {
  console.log(params);

  try {
    const id = params.id;
    const response = await fetch(`${process.env.DB_URI}/en/config`);
    const result = await response.json();
    const data = (result.gamesOfTheMonth as Array<GamesMenu>).filter(
      (item) => item.slug === params.id
    );
    if (data.length === 0) return notFound();
    return NextResponse.json({ data: data[0], status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error('Something goes wrong');
  }
}
