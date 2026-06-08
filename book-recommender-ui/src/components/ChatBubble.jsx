export default function ChatBubble({ role, children }) {
  const isUser = role === "user";

  return (
    <div className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="mr-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl">
          🤖
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-lg ${
          isUser
            ? "rounded-br-sm bg-purple-700 text-white"
            : "rounded-bl-sm bg-slate-900/90 text-slate-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}