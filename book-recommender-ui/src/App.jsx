import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import OnboardingChat from "./pages/OnboardingChat";

export default function App() {
  const [page, setPage] = useState("landing");

  return (
    <>
      {page === "landing" && (
        <LandingPage onStart={() => setPage("onboarding")} />
      )}

      {page === "onboarding" && <OnboardingChat />}
    </>
  );
}