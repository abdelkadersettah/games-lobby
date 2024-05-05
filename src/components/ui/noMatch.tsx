import { FaSearch } from 'react-icons/fa';

type Props = {};

function NoMatchFound({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <FaSearch className="text-6xl text-primary" />
      <p className="text-4xl">No game available</p>
    </div>
  );
}

export default NoMatchFound;
