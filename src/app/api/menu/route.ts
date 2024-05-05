import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`${process.env.DB_URI}/en/config`);
    const result = await response.json();
    return NextResponse.json({ data: result?.gamesOfTheMonth, status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error('Something goes wrong');
  }
}
