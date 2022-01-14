import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // wrapper
    <div className="absolute top-0 left-0 w-full px-8 py-4 flex items-center justify-between lg:px-[250px]">
      {/* div 1 */}
      <div className="flex items-center text-white">
        <FaDiscord className="text-3xl mr-2" />
        <h1>Discord</h1>
      </div>
      {/* div 1 */}
      <div className=" text-white md:w-7/12 lg:w-6/12 mx-auto hidden md:flex items-center justify-between ">
        <h1 className="mr-2 hover:border-b-2 border-white hover:transition-all cursor-pointer">
          Download
        </h1>
        <h1 className="mr-2 hover:border-b-2 border-white hover:transition-all cursor-pointer">
          Nitro
        </h1>
        <h1 className="mr-2 hover:border-b-2 border-white hover:transition-all cursor-pointer">
          Safety
        </h1>
        <h1 className="mr-2 hover:border-b-2 border-white hover:transition-all cursor-pointer">
          Support
        </h1>
        <h1 className="mr-2 hover:border-b-2 border-white hover:transition-all cursor-pointer">
          Blog
        </h1>
        <h1 className="mr-2 hover:border-b-2 border-white hover:transition-all cursor-pointer">
          Careers
        </h1>
      </div>
      {/* div 1 */}
      <div className="flex items-center text-white">
        <Link to="/register">
          <button className="px-4 py-2 bg-white text-black2 rounded-full md:ml-8 hover:scale-[0.97] hover:shadow-lg hover:transition-all">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
