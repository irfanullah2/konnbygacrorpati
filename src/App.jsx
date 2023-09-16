import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./componets/Start";
import Timer from "./componets/Timer";
import Trivia from './componets/Trivia'

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which country is known for its passionate cricket fans and is home to the Gaddafi Stadium in Lahore?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "Pakistan",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "England",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the name of Pakistan's national cricket team?",
      answers: [
        {
          text: "Green Army",
          correct: false,
        },
        {
          text: "Lions",
          correct: false,
        },
        {
          text: "Shaheens",
          correct: false,
        },
        {
          text: "Men in Green",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "In which year did Pakistan win its first ICC Cricket World Cup?",
      answers: [
        {
          text: "1983",
          correct: false,
        },
        {
          text: "1992",
          correct: true,
        },
        {
          text: "2003",
          correct: false,
        },
        {
          text: "2011",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who is often referred to as the 'Rawalpindi Express' and is one of Pakistan's fastest bowlers?",
      answers: [
        {
          text: "Shoaib Akhtar",
          correct: true,
        },
        {
          text: "Wasim Akram",
          correct: false,
        },
        {
          text: "Waqar Younis",
          correct: false,
        },
        {
          text: "Imran Khan",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which Pakistani cricketer holds the record for the highest individual score in Test cricket?",
      answers: [
        {
          text: "Inzamam-ul-Haq",
          correct: false,
        },
        {
          text: "Saeed Anwar",
          correct: false,
        },
        {
          text: "Younis Khan",
          correct: false,
        },
        {
          text: "Hanif Mohammad",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "What is the name of the premier domestic cricket tournament in Pakistan?",
      answers: [
        {
          text: "Pakistan Cricket League (PCL)",
          correct: false,
        },
        {
          text: "Pakistan Premier League (PPL)",
          correct: false,
        },
        {
          text: "Quaid-e-Azam Trophy",
          correct: true,
        },
        {
          text: "Pakistan Super League (PSL)",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which city is known as the 'City of Cricket' in Pakistan?",
      answers: [
        {
          text: "Karachi",
          correct: false,
        },
        {
          text: "Islamabad",
          correct: false,
        },
        {
          text: "Lahore",
          correct: true,
        },
        {
          text: "Rawalpindi",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who was the captain of the Pakistan cricket team when they won the 1992 ICC Cricket World Cup?",
      answers: [
        {
          text: "Javed Miandad",
          correct: false,
        },
        {
          text: "Inzamam-ul-Haq",
          correct: false,
        },
        {
          text: "Imran Khan",
          correct: true,
        },
        {
          text: "Wasim Akram",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the traditional cricketing rivalry between Pakistan and India known as?",
      answers: [
        {
          text: "Battle of Titans",
          correct: false,
        },
        {
          text: "Subcontinent Showdown",
          correct: false,
        },
        {
          text: "Asian Derby",
          correct: true,
        },
        {
          text: "Cricket Clash",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which Pakistan cricket legend is known for his leg-spin bowling and is often called the 'King of Spin'?",
      answers: [
        {
          text: "Wasim Akram",
          correct: false,
        },
        {
          text: "Waqar Younis",
          correct: false,
        },
        {
          text: "Imran Khan",
          correct: false,
        },
        {
          text: "Shane Warne",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "In which year did Pakistan win their second ICC Cricket World Cup?",
      answers: [
        {
          text: "2003",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
        {
          text: "2011",
          correct: false,
        },
        {
          text: "2019",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Who holds the record for the most runs scored in a single innings by a Pakistani batsman in Test cricket?",
      answers: [
        {
          text: "Saeed Anwar",
          correct: false,
        },
        {
          text: "Inzamam-ul-Haq",
          correct: false,
        },
        {
          text: "Younis Khan",
          correct: false,
        },
        {
          text: "Hanif Mohammad",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Which famous cricketer from Pakistan was known for his elegant left-handed batting style and played for Sussex in county cricket?",
      answers: [
        {
          text: "Mohammad Yousuf",
          correct: false,
        },
        {
          text: "Zaheer Abbas",
          correct: true,
        },
        {
          text: "Inzamam-ul-Haq",
          correct: false,
        },
        {
          text: "Younis Khan",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which Pakistani fast bowler is known for his reverse swing and played a pivotal role in Pakistan's 1992 World Cup victory?",
      answers: [
        {
          text: "Shoaib Akhtar",
          correct: false,
        },
        {
          text: "Wasim Akram",
          correct: true,
        },
        {
          text: "Waqar Younis",
          correct: false,
        },
        {
          text: "Imran Khan",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the highest team total scored by Pakistan in a One Day International (ODI) match?",
      answers: [
        {
          text: "392",
          correct: false,
        },
        {
          text: "405",
          correct: true,
        },
        {
          text: "421",
          correct: false,
        },
        {
          text: "437",
          correct: false,
        },
      ],
    },
  ];
  

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
