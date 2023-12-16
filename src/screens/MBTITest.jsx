import { useState, useEffect } from "react";
// import MBTIResult from "./MBTIResult";
import { useNavigate } from "react-router-dom";
const questions = {
  openness: [
    "I enjoy trying new things, even if they are unconventional.",
    "I often seek out new experiences and adventures.",
    "I am curious about different cultures and ways of life.",
    "I enjoy contemplating abstract and complex ideas.",
    "I am open to challenging my beliefs and values.",
  ],
  conscientiousness: [
    "I am well-organized and pay attention to details.",
    "I am diligent and work hard to achieve my goals.",
    "I am responsible and take my commitments seriously.",
    "I plan my tasks carefully and stick to my plans.",
    "I am persistent and don't give up easily.",
  ],
  agreeableness: [
    "I am considerate and kind to others.",
    "I am empathetic and can easily understand others' feelings.",
    "I enjoy cooperating with others to achieve common goals.",
    "I avoid conflicts and try to maintain harmony in relationships.",
    "I am willing to help others, even if it inconveniences me.",
  ],
  neuroticism: [
    "I am often anxious or easily stressed.",
    "I tend to worry about future events.",
    "I experience mood swings and emotional ups and downs.",
    "I am sensitive to criticism and take things personally.",
    "I often find it difficult to relax and unwind.",
  ],
};

const MBTITest = () => {
  const [answers, setAnswers] = useState({});
  const [mbtiResult, setMbtiResult] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (trait, questionIndex, value) => {
    setAnswers({
      ...answers,
      [trait]: { ...answers[trait], [questionIndex]: value },
    });
  };

  const calculateMbtiResult = () => {
    const mbtiResult = {
      E: 0,
      I: 0,
      N: 0,
      S: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };
    console.log(answers.neuroticism);
    mbtiResult.E += answers.neuroticism ? answers.neuroticism[0] : 0;
    mbtiResult.I += answers.neuroticism ? -answers.neuroticism[0] : 0;

    mbtiResult.N += answers.openness ? answers.openness[0] : 0;
    mbtiResult.S += answers.openness ? -answers.openness[0] : 0;

    mbtiResult.F += answers.agreeableness ? answers.agreeableness[0] : 0;
    mbtiResult.T += answers.agreeableness ? -answers.agreeableness[0] : 0;

    mbtiResult.J += answers.conscientiousness
      ? answers.conscientiousness[0]
      : 0;
    mbtiResult.P += answers.conscientiousness
      ? -answers.conscientiousness[0]
      : 0;

    const dominantEorI = mbtiResult.E > mbtiResult.I ? "E" : "I";
    const dominantNorS = mbtiResult.N > mbtiResult.S ? "N" : "S";
    const dominantTorF = mbtiResult.T > mbtiResult.F ? "T" : "F";
    const dominantJorP = mbtiResult.J > mbtiResult.P ? "J" : "P";

    setMbtiResult(
      `${dominantEorI}${dominantNorS}${dominantTorF}${dominantJorP}`
    );
  };

  const handleSubmit = (e) => {
    calculateMbtiResult();
    e.preventDefault();
  };
  useEffect(() => {
    if (mbtiResult !== null) {
      navigate("/result", { state: { mbtiResult } });
    }
  }, [mbtiResult, navigate]);
  return (
    <form action="POST" onSubmit={handleSubmit} className="bg-blue-400">
      <div className="container md:px-2   " style={{ fontFamily: "Poppins" }}>
        <h1 className=" text-4xl px-5 py-3 font-bold">MBTI Personality Test</h1>
        <h3 className="  pl-5">
          Select the option that best describes your usual behavior.
        </h3>

        {/* rendering trait  */}
        {Object.keys(questions).map((trait) => (
          <div key={trait}>
            {/* <h2>{trait.charAt(0).toUpperCase() + trait.slice(1)}</h2> */}

            {/* loop rendering of each trait.  */}
            {questions[trait].map((question, index) => (
              <div
                key={index}
                className="  flex  flex-col  m-4 rounded-2xl bg-white shadow-xl "
              >
                <p className=" text-gray-800 py-4 text-lg font-bold px-10  ">
                  {question}
                </p>
                <div className=" w-full   flex justify-around  items-center container border-t-2 border-gray-200">
                  <label className=" flex w-[40vw] py-2 px   items-center text-green-700 font-bold   ">
                    <input
                      className=" mr-2   "
                      type="radio"
                      //not to same each question value
                      name={`q_${trait}_${index}`}
                      value={1}
                      onChange={() => handleAnswer(trait, index, 1)}
                      required
                    />
                    Agree
                  </label>

                  <label className=" flex items-center text-red-700 font-bold ">
                    <input
                      className=" mr-2 "
                      type="radio"
                      name={`q_${trait}_${index}`}
                      value={-1}
                      onChange={() => handleAnswer(trait, index, -1)}
                      required
                    />
                    Disagree
                  </label>
                </div>
              </div>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className=" py-2 px-5  rounded-xl ml-4 mb-6  shadow-2xl font-bold bg-yellow-200 text-gray-800 "
        >
          Submit
        </button>

        {/* {mbtiResult && <MBTIResult mbtiResult={mbtiResult} />} */}
      </div>
    </form>
  );
};

export default MBTITest;
