export default function Home() {
  return (
    <div>
      <div className="bg-black h-4 w-full"></div>
      <header>
        <nav className="flex justify-center items-center gap-x-20 bg-yellow-400 h-96 w-full">
          <div className="flex justify-center items-center bg-red-400 h-72 w-1/4 text-6xl">BOX-1</div>
          <div className="flex justify-center items-center bg-blue-400 h-72 w-1/4 text-6xl">BOX-2</div>
          <div className="flex justify-center items-center bg-orange-400 h-72 w-1/4 text-6xl">BOX-3</div>
        </nav>
      </header>
      <div className="bg-black h-4 w-full"></div>
      <footer>
        <div className="flex justify-center items-center gap-x-20 bg-yellow-400 h-96 w-full">
          <div className="flex justify-center items-center bg-purple-400 h-72 w-2/5 text-6xl">BOX-1</div>
          <div className="flex justify-center items-center bg-teal-400 h-72 w-2/5 text-6xl">BOX-2</div>
        </div>
      </footer>
      <div className="bg-black h-4 w-full"></div>
    </div>
  );
}
