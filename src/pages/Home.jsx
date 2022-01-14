import discHero from "../assets/discord-hero.jpg";
import discSection1 from "../assets/section-1.svg";
import discSection2 from "../assets/section-2.svg";
import discSection3 from "../assets/section-3.svg";
import discSection4 from "../assets/section-4.svg";
import { AiOutlineDownload } from "react-icons/ai";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div
        className="h-screen w-100vw relative"
        style={{
          backgroundImage: `url(${discHero})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <HeroSection />
      </div>
      <div className="bg-beige h-[20vh]"></div>
      {/* SECTION 1 */}
      <div className="w-full lg:px-[250px] flex flex-col lg:flex-row pb-20 bg-beige ">
        <div className="flex flex-col items-center justify-center w-full lg:w-8/12">
          <img src={discSection1} className="w-[800px]" />
        </div>
        <div className="w-full lg:w-4/12 flex flex-col p-10">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
            Create on invite-only place where you belong
          </h1>
          <p className="text-xl">
            Discord servers are organised into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat
          </p>
        </div>
      </div>
      <div className="mb-10 relative">
        <div class="custom-shape-divider-top-1642089932">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      {/* SECTION 2 */}
      <div className="w-full lg:px-[250px] flex flex-col lg:flex-row pt-20 pb-20">
        <div className="w-full lg:w-4/12 flex flex-col p-10">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
            Where hanging out is easy
          </h1>
          <p className="text-xl">
            Grab a seat in a voice channel when you're free. Friends in your
            server can see you're around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-8/12">
          <img src={discSection2} className="w-[800px]" />
        </div>
      </div>
      <div className="mt-10 mb-10"></div>
      {/* SECTION 3 */}
      <div className="mb-10 relative">
        <div class="custom-shape-divider-bottom-1642090182">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-full lg:px-[250px] flex flex-col lg:flex-row pb-20 pt-20 bg-beige">
        <div className="flex flex-col items-center justify-cente w-full lg:w-8/12">
          <img src={discSection3} className="w-[800px]" />
        </div>
        <div className="w-full lg:w-4/12 flex flex-col p-10">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
            From few to fandom
          </h1>
          <p className="text-xl">
            Get any community running with moderation tools and custom member
            access. Give member special powers, set up private channels, and
            more.
          </p>
        </div>
      </div>
      {/* SECTION 4 */}
      <div className="w-full lg:px-[250px] flex flex-col pb-20 pt-20">
        <div className="flex flex-col items-center justify-cente w-10/12 mx-auto">
          <h1 className=" text-3xl md:text-4xl lg:text-6xl font-bold mb-8">
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p className="text-xl">
            Low latency voice and video feels like you're in the same room. Wave
            hell over video, watch friends stream their games, or gather up and
            have a dreawing session with screen share
          </p>
        </div>
        <div className="w-full">
          <img src={discSection4} alt="" className="mx-auto" />
        </div>
      </div>
      {/* SECTION 5 */}
      <div className="w-full lg:px-[250px] flex flex-col pb-20">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold mb-8 mx-auto">
          READY TO STAY YOUR JOURNEY
        </h1>
        <button className="mx-auto w-full lg:w-2/12 bg-blue1 text-white px-4 py-2 rounded-full flex items-center justify-center hover:scale-[0.97] hover:shadow-lg hover:transition-all">
          <AiOutlineDownload className="text-4xl mr-2" />
          <p className="text-xl">Download for Mac</p>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
