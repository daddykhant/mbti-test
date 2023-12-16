import { NavLink } from "react-router-dom";
import welcomeVector from "../assets";

const Welcome = () => {
  return (
    <div
      className="container w-[100vw] h-[100vh] p-4 flex flex-col items-center justify-center "
      style={{ fontFamily: "Poppins" }}
    >
      <h1 className=" text-4xl font-bold mb-4">MBTI Personality Test</h1>
      <p className=" text-center">
        Your Personal Compass in the Realm of Personality. Join Us as We
        Navigate the Intriguing Terrain of Your Characteristics, Preferences,
        and Potentials. The Adventure Begins Now!
      </p>
      <img
        src={welcomeVector}
        alt="welcome vector"
        className="w-[70%] h-[70%]"
      />

      <NavLink to="/test">
        <button className=" w-[90vw] py-3 rounded-lg bg-blue-500 text-white font-bold text-lg">
          Start to Test
        </button>
      </NavLink>
    </div>
  );
};

export default Welcome;
