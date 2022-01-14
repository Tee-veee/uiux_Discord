import {
  BsFillPersonLinesFill,
  BsBellFill,
  BsFillPinAngleFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { FaHashtag, FaUserFriends, FaDesktop, FaSearch } from "react-icons/fa";

function Dashhead({ home, server }) {
  return (
    <>
      {home && (
        <div className="flex h-[6vh] p-4 items-center w-full">
          <div className="flex items-center mr-12 w-">
            <BsFillPersonLinesFill className="text-3xl text-gray2 mr-4" />
            <h1 className="font-bold text-white">Friends</h1>
          </div>
          <div>
            <h1 className="text-gray1 text-sm mr-10 cursor-pointer">Online</h1>
          </div>
          <div>
            <h1 className="text-gray1 text-sm mr-10 cursor-pointer">All</h1>
          </div>
          <div>
            <h1 className="text-gray1 text-sm mr-10 cursor-pointer">Pending</h1>
          </div>
          <div>
            <h1 className="text-gray1 text-sm mr-10 cursor-pointer">Blocked</h1>
          </div>
          <div className="">
            <button className="px-2 py-1 bg-green rounded-lg hover:scale-[0.97] hover:shadow-xl hover:transition-all cursor-pointer">
              <h1 className="text-white font-bold">Add Friend</h1>
            </button>
          </div>
        </div>
      )}
      {server && (
        <div className="flex h-[6vh] p-4 items-center justify-between  w-full">
          <div className="flex items-center">
            <FaHashtag className="text-2xl text-gray2 mr-2 cursor-pointer" />
            <h1 className="text-lg font-bold text-white">JavaScript</h1>
          </div>
          <div className="flex items-center ">
            <BsBellFill className="text-2xl text-gray2 mr-4 cursor-pointer" />
            <BsFillPinAngleFill className="text-2xl text-gray2 mr-4 cursor-pointer" />
            <FaUserFriends className="text-2xl text-gray2 mr-4 cursor-pointer" />
            <div className="relative mr-8 ml-4">
              <input
                type="text"
                className="bg-black4 text-white text-lg  px-2 py-1 outline-none border-none"
                placeholder="Search"
              />
              <FaSearch className="absolute text-black1 top-2 right-2 cursor-pointer" />
            </div>
            <FaDesktop className="text-2xl text-gray2 mr-4 cursor-pointer" />
            <BsFillQuestionCircleFill className="text-2xl text-gray2 mr-4 cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
}

export default Dashhead;
// {server && (
//   <>
//     <div className="flex items-center">
//       <FaHashtag className="text-3xl text-gray2 mr-4" />
//       <h1 className="text-lg text-white font-bold">JavaScript</h1>
//     </div>
//   </>
// )}
