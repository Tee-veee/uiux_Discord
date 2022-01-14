import discCartoon from "../assets/discord-cartoon.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="h-screen w-100vw relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${discCartoon})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full md:w-[40vw] md:h-[50vh] max-w-[650px] mx-auto bg-black2 lg:mt-20 p-4 flex flex-col text-white lg:rounded-lg">
        <h1 className="mx-auto text-3xl font-semibold py-8">
          CREATE AN ACCOUNT
        </h1>
        <form>
          <div className="mb-6">
            <label className="text-md mb-1 text-gray2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="text-xl text-white w-full bg-black1 outline-none border-none p-2"
            />
          </div>
          <div className="mb-6">
            <label className="text-md mb-1 text-gray2" htmlFor="username">
              Username
            </label>
            <input
              type="email"
              className="text-md text-white w-full bg-black1 outline-none border-none p-2"
            />
          </div>
          <div className="mb-8">
            <label className="text-md mb-1 text-gray2" htmlFor="password">
              Password
            </label>
            <input
              type="email"
              className="text-xl text-white w-full bg-black1 outline-none border-none p-2"
            />
          </div>
          <div className="flex flex-col">
            <Link to="/login">
              <button className="w-full bg-blue1 hover:scale-[0.97] hover:shadow-lg hover:transition-all">
                <p className="text-xl font-bold p-3 text-white ">CONTINUE</p>
              </button>
            </Link>
            <Link to="/login">
              <h1 className="text-teal1 mt-2 cursor-pointer">
                Already have an account?
              </h1>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
