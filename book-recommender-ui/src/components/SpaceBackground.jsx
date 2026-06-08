export default function SpaceBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background-generated.png')",
      }}
    />
  );
}