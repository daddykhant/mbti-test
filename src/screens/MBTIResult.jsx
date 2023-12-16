import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

const MBTIResult = () => {
  const [suggestion, setSuggestion] = useState([]);

  const location = useLocation();
  const mbtiResult = location.state?.mbtiResult;
  const allSuggestions = {
    ENFP: "You are an enthusiastic and creative individual!",
    ENTP: "You are an innovative and curious thinker!",
    ENFJ: "You are a compassionate and inspiring leader!",
    ENTJ: "You are a strategic and assertive visionary!",
    INFP: "You are a dreamer with a strong sense of values!",
    INTP: "You are a logical and analytical problem solver!",
    INFJ: "You are a compassionate and insightful counselor!",
    INTJ: "You are a strategic and analytical thinker!",
    ESFP: "You are a spontaneous and playful performer!",
    ESTP: "You are an energetic and action-oriented doer!",
    ESFJ: "You are a sociable and caring team player!",
    ESTJ: "You are a organized and decisive leader!",
    ISFP: "You are an artistic and sensitive soul!",
    ISTP: "You are a practical and independent thinker!",
    ISFJ: "You are a nurturing and responsible caregiver!",
    ISTJ: "You are a reliable and systematic organizer!",
  };
  const matchedSuggestion = allSuggestions[mbtiResult] || "";
  useEffect(() => {
    setSuggestion(matchedSuggestion);
  }, [matchedSuggestion]);

  return (
    <div
      className=" w-[100vw] h-[100vh] bg-blue-400 flex flex-col items-center py-[150px]  "
      style={{ fontFamily: "Poppins" }}
    >
      <span className="text-2xl pt-[50px] ">Your MBTI Result : </span>
      <div className=" relative mt-[50px]">
        <div className="absolute translate-x-2 translate-y-2 text-4xl bg-white text-blue-500 font-bold text-center px-[60px] py-[30px] rounded-2xl shadow-2xl">
          {mbtiResult}
        </div>
        <div className="  w-[200px] h-[100px] border-2 border-blue-700 rounded-2xl  "></div>
      </div>

      <h2 className=" mt-[100px] mb-[50px] text-xl text-center bg-white px-[50px] py-[50px] rounded-2xl shadow-2xl ">
        {suggestion}
      </h2>
      <NavLink to="/test">
        <button className=" w-[50vw] py-3 rounded-lg bg-blue-500 text-white font-bold text-lg">
          back
        </button>
      </NavLink>
      {/* Rest of your code */}
    </div>
  );
};

export default MBTIResult;
