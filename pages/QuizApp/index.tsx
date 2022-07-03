import { Button, List, Radio, RadioGroup, Toast } from "@douyinfe/semi-ui";
import React, { useRef, useState } from "react";
import styles from "./index.module.css";
const quizData = [
  {
    question: "How old are you?",
    a: "10",
    b: "20",
    c: "30",
    d: "40",
    correct: "c",
  },
  {
    question: "What is the most used Programming language?",
    a: "C",
    b: "Java",
    c: "Python",
    d: "Javascript",
    correct: "a",
  },
  {
    question: "Who is the President of US?",
    a: "David",
    b: "Donald",
    c: "Bill",
    d: "George",
    correct: "b",
  },
];
const QuizApp = () => {
  const quizNum = useRef(0);
  const score = useRef(0);
  const [quiz, setQuiz] = useState<{
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    correct: string;
  }>(quizData[quizNum.current]);
  const [answer, setAnswer] = useState();
  return (
    <div className={styles.page}>
      <div className={styles.quizContainer}>
        <div className={styles.quizHeader}>
          <h2 className={styles.questionText}>{quiz.question}</h2>
          <RadioGroup>
            <List
              dataSource={[
                { question: quiz.a },
                { question: quiz.b },
                { question: quiz.c },
                { question: quiz.d },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Radio value={item.question}>{item.question}</Radio>
                </List.Item>
              )}
            />
          </RadioGroup>
        </div>
        <Button
          onClick={() => {
            // const key = quiz.correct;
            // // @ts-ignore
            // if (quiz[key] === "a232131") {
            //   score.current += 1;
            // }
            // quizNum.current += 1;
            // if (quizNum.current < quizData.length) {
            //   setQuiz(quizData[quizNum.current]);
            // } else {
            //   alert(`获得Score: ${score.current}`);
            // }
          }}
          className={styles.button}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default QuizApp;
