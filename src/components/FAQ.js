import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "Who is Focusmate for?",
      answer:
        "Focusmate is for anyone looking to increase productivity and stay accountable. Whether you're a student, professional, or creative, Focusmate helps you accomplish your goals.",
    },
    {
      question: "What kind of work can I do on Focusmate?",
      answer:
        "Focusmate is perfect for all types of tasks—from writing, coding, and studying to household chores and creative projects. Any activity that benefits from focus and accountability is ideal.",
    },
    {
      question: "What is body doubling?",
      answer:
        "Body doubling is a productivity technique where having someone present while you work helps keep you focused and on task. Focusmate offers virtual body doubling sessions to support your workflow.",
    },
    {
      question: "Who am I working with?",
      answer:
        "You'll be matched with a member of Focusmate's global community of supportive, like-minded individuals who are also working towards their own goals.",
    },
    {
      question: "Do I have to download another video call app?",
      answer:
        "No, you don't need to download anything else! Focusmate's video calls work directly in your browser, making the experience seamless.",
    },
    {
      question: "Is Focusmate free?",
      answer:
        "Focusmate offers both free and paid plans. The free plan includes three sessions per week, while the paid plan provides unlimited sessions and additional features.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div
            className={`faq-item ${activeQuestion === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-toggle-icon">
                {activeQuestion === index ? "-" : "+"}
              </span>
            </div>
            {activeQuestion === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <a href="/detailed-faq" className="faq-main-link">
        Explore more questions
      </a>
    </div>
  );
};

export default FAQ;
