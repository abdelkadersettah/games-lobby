'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

type Props = {};
const ProviderFilters = [
  {
    name: 'All',
    id: 'all',
  },
  {
    name: 'New',
    id: 'new',
  },
  {
    name: 'Latest',
    id: 'latest',
  },
  {
    name: 'Popular',
    id: 'popular',
  },
  {
    name: 'Recommended',
    id: 'recommended',
  },
];
function Search({}: Props) {
  const searchParams = useSearchParams()!;
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params?.delete('search');
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  function handleSubmit() {
    router.push(pathname + '?' + createQueryString('search', searchValue), {
      scroll: false,
    });
  }
  function handleDeleteSearch() {
    setSearchValue('');
    router.push(pathname, {
      scroll: false,
    });
    router.refresh();
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(pathname + '?' + createQueryString('search', searchValue), {
          scroll: false,
        });
      }}
      className="flex justify-end"
    >
      <div className="relative border border-border rounded-lg my-4 max-w-80">
        <input
          type="text"
          placeholder="Search..."
          className=" p-4 rounded-lg"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e?.target?.value)}
        />
        <FaSearch
          onClick={handleSubmit}
          className="absolute right-3 cursor-pointer p-2 box-content top-[50%] translate-y-[-50%]"
        />
        {searchValue && (
          <IoClose
            onClick={handleDeleteSearch}
            className="absolute right-8 text-3xl cursor-pointer p-2 box-content top-[50%] translate-y-[-50%]"
          />
        )}
      </div>
    </form>
  );
}

export default Search;
