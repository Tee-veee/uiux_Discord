import { AiOutlineDownload } from "react-icons/ai";

function HeroSection() {
  return (
    <div className="mx-4 lg:mx-[250px] mx-auto h-fit flex items-center flex-col pt-[300px]">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-8">
        IMAGINE A PLACE...
      </h1>
      <div className="flex w-10/12 lg:w-9/12">
        <p className="text-xl text-white mb-8">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful fo friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around w-11/12 ">
        <button className="px-4 py-2 bg-white rounded-full flex items-center justify-center w-full lg:w-5/12 mb-4 md:mb-0 hover:scale-[0.97] hover:shadow-lg hover:transition-all">
          <AiOutlineDownload className="text-4xl mr-2" />
          <p className="text-xl">Download for Mac</p>
        </button>
        <button className="px-4 py-3 bg-black2 rounded-full flex items-center justify-center w-full lg:w-5/12 mb-4 md:mb-0 hover:scale-[0.97] hover:shadow-lg hover:transition-all">
          <p className="text-xl text-white">Open Discord in browser</p>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
