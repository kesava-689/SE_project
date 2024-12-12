import React, { useState } from "react";
import "./FAQDetailed.css";

const FAQDetailed = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    { question: "Who is Focusmate for?", answer: "Focusmate is for anyone looking to boost productivity and accountability." },
    { question: "What kind of work can I do on Focusmate?", answer: "You can do almost any kind of work—creative, professional, or personal." },
    { question: "Who am I working with?", answer: "You'll work with a like-minded member from Focusmate's global community." },
    { question: "Is Focusmate free?", answer: "Focusmate offers both free and paid plans to suit your needs." },
    { question: "What's it like working with a stranger?", answer: "It's surprisingly easy and often inspiring to work alongside someone new." },
    { question: "What if I'm feeling anxious or not ready to try it out?", answer: "You can start with shorter sessions or try scheduling with a friend first." },
    { question: "Do I need to keep the video on the whole time?", answer: "Yes, keeping the video on is part of maintaining accountability." },
    { question: "Do I need to keep the audio on the whole time?", answer: "No, you can mute the audio as long as you share goals at the start and end." },
    { question: "What if I want to use Focusmate in a quiet or shared space?", answer: "You can use Quiet Mode to focus without speaking during sessions." },
    { question: "Do I have to download another video call app?", answer: "No downloads are required. Everything works directly in your browser." },
    { question: "What equipment do I need to get started?", answer: "You just need a computer or mobile device with a webcam and microphone." },
    { question: "What if I don't have a camera?", answer: "A camera is recommended but not strictly necessary to join sessions." },
    { question: "How does Focusmate protect my privacy?", answer: "Focusmate has strict privacy policies to protect your personal information." },
    { question: "How long is a session?", answer: "Sessions are typically 25, 50, or 75 minutes long." },
    { question: "What if I don't get a partner?", answer: "Focusmate ensures you're matched with a partner whenever possible." },
    { question: "How is accountability enforced?", answer: "Accountability is built through the presence of a live partner and shared goals." },
    { question: "Can I chat with my partner?", answer: "Yes, there is a chat feature for communicating during the session." },
    { question: "Can I listen to music?", answer: "Yes, but make sure it doesn't distract your partner." },
    { question: "Do you have an app?", answer: "Focusmate works on mobile browsers, and an app is planned for the future." },
    { question: "What if I have an idea for a new feature?", answer: "You can submit feature requests directly to the Focusmate team." },
    { question: "I have more questions!", answer: "Feel free to contact Focusmate support for more help." },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="faq-detailed-container">
      <h2 className="faq-detailed-title">Explore More Questions</h2>
      {questions.map((item, index) => (
        <div
          className={`faq-detailed-item ${activeQuestion === index ? "active" : ""}`}
          key={index}
          onClick={() => toggleQuestion(index)}
        >
          <div className="faq-detailed-question">
            {item.question}
            <span className="faq-detailed-toggle-icon">
              {activeQuestion === index ? "-" : "+"}
            </span>
          </div>
          {activeQuestion === index && (
            <div className="faq-detailed-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQDetailed;
