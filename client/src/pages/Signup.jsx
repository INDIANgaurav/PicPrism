import {Link} from "react-router-dom"



const Signup = () => {
  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw] ">
        <h1 className="text-2xl font-bold text-center mb-4 ">
          {" "}
          Let's Connect!
        </h1>
        <form>
          {/* username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username:{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email:{" "}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password:{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* account selection */}
          <div className="mb-4">
            <label
              htmlFor="accountType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Your Account Type:{" "}
            </label>
            <select
              name=""
              id=""
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <button className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium bg-black text-white mb-2">Signup</button>
          {/* login with account */}
          <div className="flex items-center justify-end">

          <Link to="/login" className="text-xs text-blue-700 font-bold hover:scale-110 transition-all duration-200 ease-linear ">Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
