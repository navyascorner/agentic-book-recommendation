import { useState } from "react";
import { Send } from "lucide-react";
import SpaceBackground from "../components/SpaceBackground";
import ChatBubble from "../components/ChatBubble";

const QUESTIONS = [
  "What are some books you absolutely love?",
  "What did you like about them?",
  "What are you in the mood for right now?",
  "Anything you want to avoid?",
  "And finally, anything else I should know?",
];

export default function OnboardingChat() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState([]);

  const [messages, setMessages] = useState([
    {
      role: "agent",
      text: "Hey explorer 👋 I’m your Cosmic Librarian. Let’s find your next great read.",
    },
    {
      role: "agent",
      text: QUESTIONS[0],
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userAnswer = input.trim();
    const nextQuestionIndex = questionIndex + 1;

    const updatedAnswers = [
      ...answers,
      {
        question: QUESTIONS[questionIndex],
        answer: userAnswer,
      },
    ];

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        text: userAnswer,
      },
    ];

    if (nextQuestionIndex < QUESTIONS.length) {
      updatedMessages.push({
        role: "agent",
        text: QUESTIONS[nextQuestionIndex],
      });

      setQuestionIndex(nextQuestionIndex);
    } else {
      updatedMessages.push({
        role: "agent",
        text: "Amazing. I’m building your reader profile now ✨",
      });

      updatedMessages.push({
        role: "agent",
        text: "Next step: I’ll use your answers to generate recommendations.",
      });

      console.log("Collected answers:", updatedAnswers);
    }

    setAnswers(updatedAnswers);
    setMessages(updatedMessages);
    setInput("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050711] text-white">
      <SpaceBackground />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-8">
        <header className="mb-6 rounded-3xl border border-purple-400/30 bg-black/80 p-6 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-wide">
                Cosmic Librarian ✨
              </h1>

              <p className="mt-1 text-slate-300">
                Your personal guide to extraordinary stories.
              </p>
            </div>

            <button className="rounded-full border border-purple-400/50 px-5 py-2 text-sm text-purple-200 transition hover:bg-purple-500/10">
              New Session
            </button>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs text-slate-400">
              <span>Onboarding</span>
              <span>
                Question {Math.min(questionIndex + 1, QUESTIONS.length)} of{" "}
                {QUESTIONS.length}
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-purple-500 transition-all"
                style={{
                  width: `${((questionIndex + 1) / QUESTIONS.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </header>

        <section className="flex-1 rounded-3xl border border-purple-400/30 bg-black/80 p-6 shadow-2xl backdrop-blur-sm">
          <div className="h-[58vh] overflow-y-auto pr-2">
            {messages.map((message, index) => (
              <ChatBubble key={index} role={message.role}>
                {message.text}
              </ChatBubble>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-5 flex items-center gap-3 rounded-3xl border border-purple-400/40 bg-slate-950/90 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer here..."
              className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
            />

            <button
              type="submit"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 shadow-lg shadow-purple-500/30 transition hover:scale-105 hover:bg-purple-500"
            >
              <Send size={20} />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}