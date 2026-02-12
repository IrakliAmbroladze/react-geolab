export default function Home({ userName = null }) {
  return (
    <div className="w-full h-full bg-stone-300 center text-7xl font-bold">
      Hello {userName || "there"}!
    </div>
  );
}
