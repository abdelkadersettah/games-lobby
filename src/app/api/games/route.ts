import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  //   https://casino.api.pikakasino.com/v1/pika/en/games/tiles?pageNumber=1&search&pageSize=10
  const search = searchParams.get('search');
  const pageNumber = searchParams.get('pageNumber');
  const pageSize = searchParams.get('pageSize');
  try {
    const response = await fetch(
      `${process.env.DB_URI}/en/games/tiles?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    const result = await response.json();
    const nextPage = result?.nextPage
      ? new URL(result?.nextPage).searchParams.get('pageNumber')
      : null;
    const previousPage = result?.previousPage
      ? new URL(result?.previousPage).searchParams.get('pageNumber')
      : null;
    return NextResponse.json({
      items: result.items,
      count: result.count,
      previousPage,
      nextPage,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Something goes wrong');
  }
}
