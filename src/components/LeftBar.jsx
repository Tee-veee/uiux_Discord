import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlineShutterSpeed, MdSignalWifi4Bar } from "react-icons/md";
import {
  FaPlus,
  FaHashtag,
  FaMicrophoneAltSlash,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { AiOutlineClose, AiOutlineDown, AiFillSetting } from "react-icons/ai";

function LeftBar({ home, server }) {
  return (
    <div className="relative flex flex-col h-full bg-black3 p-4  w-[18vw] ">
      {home && (
        <>
          <input
            type="text"
            className="outline-none background-none bg-black4 text-lg text-white px-2 py-1 mb-4"
            placeholder="Find or start a conversation"
          />
          <div className="w-full">
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <BsFillPersonLinesFill className="text-4xl mr-4" />
              <h1 className="text-xl">Friends</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <MdSignalWifi4Bar className="text-4xl  mr-4" />
              <h1 className="text-xl">Stage Discovery</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <MdOutlineShutterSpeed className="text-4xl  mr-4" />
              <h1 className="text-xl">Nitro</h1>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <h1 className="text-xl text-gray2">DIRECT MESSAGES</h1>
              <div className="p-2">
                <FaPlus className="text-xl text-gray1 cursor-pointer hover:scale-[0.97] hover:shadow-lg hover:transition-all" />
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll w-full h-full p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
              <div className="mx-auto rounded-xl w-8/12 h-[40px] bg-black1"></div>
            </div>
          </div>
        </>
      )}
      {server && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl text-white font-bold">I love React.JS</h1>
            <AiOutlineClose className="text-2xl text-gray2 font-bold" />
          </div>
          <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
            <FaHashtag className="text-4xl text-gray2  mr-4" />
            <h1 className="text-xl text-gray2">rules</h1>
          </div>
          <div className="h-full  overflow-y-scroll">
            <div className="flex items-center mr-2 mb-4">
              <AiOutlineDown className="text-gray2 mr-2" />
              <h1 className="text-xl font-bold text-white">TEXT CHANNELS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">JavaScript</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">JavaScript</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">JavaScript</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">React.JS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">React.JS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">React.JS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">Next.JS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">Next.JS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">Next.JS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">Next.JS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">Tailwind.CSS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">Tailwind.CSS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">Tailwind.CSS</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">FetchAxios</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">FetchAxios</h1>
            </div>
            <div className="flex items-center mb-4 p-2 text-gray2 hover:bg-black1 hover:text-white hover:transition-all cursor-pointer">
              <FaHashtag className="text-4xl text-gray2  mr-4" />
              <h1 className="text-xl text-gray2 ">FetchAxios</h1>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 bg-black4 p-4 w-full">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="h-[60px] w-[60px] rounded-full bg-black1"></div>
                <div className="flex flex-col">
                  <h1 className="ml-2 text-xl text-white font-bold">User</h1>
                  <h1 className="ml-2 text-gray2">#7329</h1>
                </div>
              </div>
              <div className="flex">
                <FaMicrophoneAltSlash className="text-3xl mr-4 text-black1" />
                <FaHeadphonesAlt className="text-3xl mr-4 text-black1" />
                <AiFillSetting className="text-3xl mr-4 text-black1" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LeftBar;
