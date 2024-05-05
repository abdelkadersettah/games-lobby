import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('search');
  console.log(query);
  console.log(searchParams);
  try {
    const response = await fetch(`${process.env.DB_URI}/en/games/tiles`);
    const result = await response.json();
    return NextResponse.json({ data: result?.gamesOfTheMonth, status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error('Something goes wrong');
  }
}
