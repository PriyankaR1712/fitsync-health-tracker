import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          FitSync
        </h1>

        <div className="space-x-6">
          <Link to="/login" className="hover:text-cyan-400">
            Login
          </Link>

          <Link to="/register" className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Track Your Health.
          <span className="text-cyan-400"> Transform Your Life.</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Monitor calories, water intake, sleep, workouts,
          and daily wellness all in one smart platform.
        </p>

        <div className="mt-8 flex gap-4">
          <Link to="/register" className="bg-cyan-500 px-6 py-3 rounded-xl text-lg hover:bg-cyan-600">
            Get Started
          </Link>

          <Link to="/login" className="border border-gray-700 px-6 py-3 rounded-xl text-lg hover:border-cyan-400">
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;