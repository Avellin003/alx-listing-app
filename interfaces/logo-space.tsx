import Image from "next/image";
import accept from "../../public/assets/accept.png";
import { FaSearch } from "react-icons/fa";
import Button from '../components/common/Button'

export default function logospace() {
  return (
    <div className="p-2 flex flex-row justify-evenly items-center">
      <Image src={accept} alt="Accept Logo" width={30} height={30} />
      <div className="flex flex-row space-x-6 border-1 border-gray-400 p-2 rounded-4xl">
        <div className="border-r-1 p-2">
          <p className="font-semibold text-sm">Location</p>
          <p className="text-gray-300 text-xs">Search for destination</p>
        </div>
        <div className="border-r-1 p-2">
          <p className="font-semibold text-sm">Checkin</p>
          <p className="text-gray-300 text-xs">Add date</p>
        </div>
        <div className="border-r-1 p-2">
          <p className="font-semibold text-sm">Check Out</p>
          <p className="text-gray-300 text-xs">Add date</p>
        </div>
        <div className="border-r-1 p-2">
          <p className="font-semibold text-sm">People</p>
          <p className="text-gray-300 text-xs">Add guest</p>
        </div>
        <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl">
          <FaSearch className="text-xs" />
        </button>
      </div>
      <div className="flex row">
        <Button buttontext="Sign in" className="bg-green-300" />
        <Button buttontext="Sign up" />
      </div>
    </div>
  );
}