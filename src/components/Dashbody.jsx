import wumpus from "../assets/wumpus.png";
import { BsPlusCircleFill } from "react-icons/bs";
import { GiPresent } from "react-icons/gi";
import { MdGif, MdOutlineEmojiEmotions } from "react-icons/md";
import aniWumpus from "../assets/Wumpus_wave.gif";

function Dashbody({ home, server }) {
  return (
    <>
      {home && (
        <>
          <div className="flex items-center justify-center  w-9/12">
            <img src={wumpus} alt="" className="mt-20" />
          </div>
          <div className="w-3/12 border-l-2 border-black1 p-4">
            <div className="flex w-full mt-10 ">
              <h1 className="text-4xl font-bold text-white">Active Now</h1>
            </div>
            <div className="p-4">
              <h1 className="text-3xl font-bold text-center text-white">
                It's quiet for now..
              </h1>
              <p className="text-xl text-gray2 text-center mt-4">
                When a friend starts an activity--like playing a game or hanging
                out on voice--we'll show it here!
              </p>
            </div>
          </div>
        </>
      )}
      {server && (
        <>
          <div className="flex flex-col items-start justify-end w-9/12">
            <div className="mb-4 p-4 ml-4 w-4/12">
              <img src={aniWumpus} alt="" />
            </div>
            <button className="mb-12 p-4 ml-4 w-4/12 bg-blue1 hover:scale-[0.97] hover:shadow-lg hover:transition-all">
              <h1 className="text-lg font-bold text-white">Wave To</h1>
            </button>
            <div className="p-4 w-full">
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full text-lg py-4 pl-10 outline-none border-none bg-black1 rounded-lg text-white"
                  placeholder="Message #undefined"
                />
                <BsPlusCircleFill className="absolute top-[18px] left-2 text-gray2 text-2xl" />
                <GiPresent className="absolute top-[18px] right-[72px] text-gray2 text-2xl" />
                <MdGif className="absolute top-[16px] right-[38px] text-gray2 text-3xl" />
                <MdOutlineEmojiEmotions className="absolute top-[19px] right-[8px] text-gray2 text-2xl" />
              </div>
            </div>
          </div>
          <div className="w-3/12 border-l-2 border-black1 p-4 h-fit">
            <div className="flex flex-col w-10/12 h-[91vh]  overflow-y-scroll">
              <h1 className="text-2xl font-bold text-gray2 mt-10 mb-2">
                Online
              </h1>
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
          </div>
        </>
      )}
    </>
  );
}

export default Dashbody;
