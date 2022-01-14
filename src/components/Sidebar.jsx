import { FaDiscord, FaReact } from "react-icons/fa";
import {
  AiOutlinePlus,
  AiFillCompass,
  AiOutlineDownload,
} from "react-icons/ai";

function Sidebar({ setServer, setHome, home, server }) {
  // SIDEBAR FOR THE DASHBOARD

  const toggleHome = () => {
    if (home) {
      return;
    } else {
      setServer(false);
      setHome(true);
    }
  };
  const toggleServer = () => {
    if (server) {
      return;
    } else {
      setHome(false);
      setServer(true);
    }
  };

  return (
    <div className="flex flex-col items-center px-2 py-8 w-[110px] h-full">
      <div
        className="w-10/12 flex items-center justify-center p-2 rounded-2xl bg-blue1 mb-4 hover:scale-[0.97] hover:shadow-xl hover:transition-all cursor-pointer"
        onClick={toggleHome}
      >
        <FaDiscord className="text-5xl text-white " />
      </div>
      <div
        className="w-10/12 flex items-center justify-center p-2 rounded-2xl bg-blue1 mb-4 hover:scale-[0.97] hover:shadow-xl hover:transition-all cursor-pointer"
        onClick={toggleServer}
      >
        <FaReact className="text-5xl text-white" />
      </div>
      <div className="w-10/12 flex items-center justify-center p-2 rounded-full bg-black1 mb-4 hover:scale-[0.97] hover:shadow-xl hover:transition-all cursor-pointer">
        <AiOutlinePlus className="text-5xl text-offGreen" />
      </div>
      <div className="w-10/12 flex items-center justify-center p-2 rounded-full bg-black1 mb-4 hover:scale-[0.97] hover:shadow-xl hover:transition-all cursor-pointer">
        <AiFillCompass className="text-5xl text-offGreen" />
      </div>
      <div className="w-10/12 flex items-center justify-center p-2 rounded-full bg-black1 mb-4 hover:scale-[0.97] hover:shadow-xl hover:transition-all cursor-pointer">
        <AiOutlineDownload className="text-5xl text-offGreen" />
      </div>
    </div>
  );
}

export default Sidebar;
