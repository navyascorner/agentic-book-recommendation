import SpaceBackground from "../components/SpaceBackground";

export default function LandingPage({ onStart }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050711] text-white">
      <SpaceBackground />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-3xl rounded-[2rem] border border-purple-400/30 bg-black/80 p-10 text-center shadow-2xl backdrop-blur-sm">
          <div className="mb-6 text-5xl">🚀</div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight">
            Cosmic Librarian
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-slate-300">
            Your personal AI guide to strange worlds, beautiful stories, and
            your next favorite book.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onStart}
              className="rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:scale-105 hover:bg-purple-500"
            >
              First time here?
            </button>

            <button
              disabled
              className="cursor-not-allowed rounded-full border border-slate-600 px-8 py-4 text-lg font-semibold text-slate-500"
            >
              Login coming soon
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}