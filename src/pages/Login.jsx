import discCartoon from "../assets/discord-cartoon.png";
import qrCode from "../assets/qr-code.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="h-screen w-100vw relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${discCartoon})`,
        backgroundSize: "cover",
      }}
    >
      <div className=" h-full w-full md:w-[70vw] md:h-[50vh] max-w-[1100px] mx-auto bg-black2 lg:mt-20 p-4 flex flex-col text-white lg:rounded-lg">
        <div className="flex h-full">
          <div className="w-full md:w-6/12 h-full">
            <h1 className="mx-auto text-3xl font-semibold pt-8">
              Welcome back!
            </h1>
            <h3 className="text-gray2 mb-6">
              We're so excited to see you again!
            </h3>
            {/* INPUT FORM */}
            <form>
              {/* EMAIL */}
              <div className="mb-6">
                <label className="text-md mb-1 text-gray2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="text-xl text-white w-full bg-black1 outline-none border-none p-2"
                />
              </div>
              {/* PASSWORD */}
              <div className="mb-2">
                <label className="text-md mb-1 text-gray2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="text-xl text-white w-full bg-black1 outline-none border-none p-2"
                />
              </div>
              {/* FOOTER */}
              <h1 className="text-teal1 mt-2 cursor-pointer mb-12">
                Forgot your password?
              </h1>
              <div className="flex flex-col">
                <Link to="/dashboard/">
                  <button className="w-full bg-blue1 hover:scale-[0.97] hover:shadow-lg hover:transition-all mb-2">
                    <p className="text-xl font-bold p-3 text-white ">
                      CONTINUE
                    </p>
                  </button>
                </Link>
                <h1 className="text-gray2">
                  Need an account?{" "}
                  <Link to="/register">
                    <span className="text-teal1 mt-2 cursor-pointer">
                      Register
                    </span>
                  </Link>
                </h1>
              </div>
            </form>
          </div>
          {/* QR CODE SECTION */}
          <div className="hidden md:flex w-6/12 h-full">
            <div className="p-8 flex flex-col">
              <div className="w-9/12 mx-auto ">
                <img
                  src={qrCode}
                  alt=""
                  className="md:h-[200px] lg:h-[250px] mx-auto bg-white p-2"
                />
              </div>
              <h1 className="mx-auto mt-8 text-3xl font-semibold mb-2">
                Log in with QR Code
              </h1>
              <p className="mx-auto text-xl">
                Scan this with the{" "}
                <span className="text-2xl font-bold text-gray2">
                  Discord mobile app
                </span>{" "}
                to log in instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
