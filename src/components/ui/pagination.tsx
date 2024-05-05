'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';

interface Props {
  paginationData: {
    pageNumber: number;
    totalRecords: number;
    pageSize: number;
  };
  gotoPage?: (pageNumber: number) => void | undefined;
  showRecords?: boolean;
  maxPageButton?: 7 | 5;
}

export const Pagination = ({
  paginationData,
  gotoPage,
  showRecords = true,
  maxPageButton = 7,
}: Props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageNumbers = [];
  const totalPages = Math.ceil(
    paginationData.totalRecords / paginationData.pageSize
  );

  const maxPageNumberToShow = maxPageButton === 7 ? 2 : 1;
  let leftSide = pageNumber - maxPageNumberToShow;
  if (leftSide <= 1) leftSide = 2;
  let rightSide = pageNumber + maxPageNumberToShow;
  if (paginationData) {
    if (rightSide >= totalPages) rightSide = totalPages - 1;
  }

  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      gotoPage?.(pageNumber);
    }
  }, [pageNumber]);
  const paginate = (id: number) => {
    setPageNumber(id);
    window.scrollTo(0, 0);
  };
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }

    window.scrollTo(0, 0);
  };
  const handleNextPage = () => {
    if (paginationData)
      if (pageNumber < totalPages) {
        setPageNumber(pageNumber + 1);
      }
    // make the page scroll to the top
    window.scrollTo(0, 0);
  };
  const handleLastPagePage = () => {
    if (paginationData) setPageNumber(totalPages);

    // make the page scroll to the top
    window.scrollTo(0, 0);
  };
  const handleFirstPagePage = () => {
    if (paginationData) setPageNumber(1);

    // make the page scroll to the top
    window.scrollTo(0, 0);
  };
  for (let number = leftSide; number <= rightSide; number++) {
    pageNumbers.push(
      <li
        key={number}
        className={cn(
          'border border-border h-10 cursor-pointer flex items-center px-2',
          pageNumber === number && 'bg-primary text-white'
        )}
        onClick={() => paginate(number)}
      >
        {number}
      </li>
    );
  }
  useEffect(() => {
    paginationData?.pageNumber && paginate(paginationData?.pageNumber);
  }, [paginationData?.pageNumber]);

  return (
    <div className={'flex flex-col my-6 justify-center items-center '}>
      {!!paginationData?.totalRecords && (
        <ul className="flex items-center  gap-2 mb-6">
          <li className="">
            <Button
              variant={'outline'}
              disabled={pageNumber === 1}
              onClick={handlePrevPage}
            >
              Prev
            </Button>
          </li>
          <li
            className={cn(
              'border border-border h-10 cursor-pointer flex items-center px-2',
              pageNumber === 1 && 'bg-primary text-white'
            )}
            onClick={handleFirstPagePage}
          >
            1
          </li>
          {pageNumber - 3 > 1 && <li className="flex gap-1">...</li>}
          {pageNumbers.length > 0 && pageNumbers}
          {paginationData && pageNumber + 3 < totalPages ? (
            <li className="flex gap-1">...</li>
          ) : null}

          {totalPages !== 1 &&
            (paginationData && totalPages > 0 ? (
              <li
                className={cn(
                  'border border-border h-10 cursor-pointer flex items-center px-2',
                  pageNumber === totalPages && 'bg-primary text-white'
                )}
                onClick={handleLastPagePage}
              >
                {totalPages}
              </li>
            ) : null)}
          <li className="">
            <Button
              variant={'outline'}
              disabled={pageNumber === 1}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </li>
        </ul>
      )}
      {showRecords && (
        <div className="">
          Total Records: <b>{paginationData?.totalRecords ?? 0}</b>, Total Page:{' '}
          <b>{totalPages ?? 0}</b>
        </div>
      )}
    </div>
  );
};
