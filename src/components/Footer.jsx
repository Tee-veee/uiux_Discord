import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Flag from "../assets/flag.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="p-10 lg:p-20 bg-black2 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="flex flex-col w-3/12">
          <h1 className="text-5xl text-blue1 mb-4">IMAGINE A PLACE</h1>
          <div className="flex items-center text-white mb-4">
            <img src={Flag} className="mr-4" alt="US FLAG" />
            <h1>English, USA</h1>
          </div>
          <div className="flex items-center text-white text-2xl mb-4">
            <FaFacebook className="mr-2 cursor-pointer" />
            <FaYoutube className="mr-2 cursor-pointer" />
            <FaInstagram className="mr-2 cursor-pointer" />
            <FaTwitter className="mr-2 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col w-4/12 text-white">
          <h1 className="text-blue1 mb-2 cursor-pointer">Product</h1>
          <h1 className="mb-2 cursor-pointer">Download</h1>
          <h1 className="mb-2 cursor-pointer">Nitro</h1>
          <h1 className="mb-2 cursor-pointer">Status</h1>
        </div>
        <div className="flex flex-col w-2/12 text-white">
          <h1 className="text-blue1 mb-2 cursor-pointer">Company</h1>
          <h1 className="mb-2 cursor-pointer">About</h1>
          <h1 className="mb-2 cursor-pointer">Jobs</h1>
          <h1 className="mb-2 cursor-pointer">Branding</h1>
          <h1 className="mb-2 cursor-pointer">Newsroom</h1>
        </div>
        <div className="flex flex-col w-2/12 text-white">
          <h1 className="text-blue1 mb-2 cursor-pointer">Resources</h1>
          <h1 className="mb-2 cursor-pointer">Collages</h1>
          <h1 className="mb-2 cursor-pointer">Support</h1>
          <h1 className="mb-2 cursor-pointer">Safety</h1>
          <h1 className="mb-2 cursor-pointer">Blog</h1>
          <h1 className="mb-2 cursor-pointer">Feedback</h1>
          <h1 className="mb-2 cursor-pointer">Developers</h1>
          <h1 className="mb-2 cursor-pointer">StreamKit</h1>
        </div>
        <div className="flex flex-col w-2/12 text-white">
          <h1 className="text-blue1 mb-2 cursor-pointer">Policies</h1>
          <h1 className="mb-2 cursor-pointer">Terms</h1>
          <h1 className="mb-2 cursor-pointer">Privacy</h1>
          <h1 className="mb-2 cursor-pointer">Guidelines</h1>
          <h1 className="mb-2 cursor-pointer">Acknowledgments</h1>
          <h1 className="mb-2 cursor-pointer">Licences</h1>
          <h1 className="mb-2 cursor-pointer">Moderation</h1>
        </div>
      </div>
      <div className="border-t-2 border-b-2 border-blue1 mt-6 mb-6"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-white">
          <FaDiscord className="text-3xl mr-2" />
          <h1>Discord</h1>
        </div>
        <div className="flex items-center text-white mt-4">
          <Link to="/register">
            <button className="px-4 py-2 bg-white text-black2 rounded-full md:ml-8 hover:scale-[0.97] hover:shadow-lg hover:transition-all">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
