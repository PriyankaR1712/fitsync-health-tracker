import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HealthChart from "../components/HealthChart";
import {
  Flame,
  Droplets,
  Footprints,
} from "lucide-react";

function Dashboard() {

  const navigate = useNavigate();

  const [healthData, setHealthData] = useState([]);

  const [calories, setCalories] = useState("");
  const [waterIntake, setWaterIntake] = useState("");
  const [steps, setSteps] = useState("");
  const [sleepHours, setSleepHours] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

    const fetchHealthData = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/health"
        );

        setHealthData(response.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchHealthData();

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  const handleAddHealthData = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/health/add",
        {
          calories,
          waterIntake,
          steps,
          sleepHours,
        }
      );

      alert("Health data added");

      window.location.reload();

    } catch (error) {

      console.log(error);

      alert("Failed to add data");

    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          FitSync Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

      {/* Dashboard Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Calories Card */}
  <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-3xl shadow-xl hover:scale-105 transition">

    <div className="flex items-center justify-between">

      <div>
        <h2 className="text-xl font-semibold">
          Calories
        </h2>

        <p className="text-5xl mt-4 font-bold">
          {healthData[healthData.length - 1]?.calories}
        </p>
      </div>

      <Flame size={50} />
    </div>

  </div>

  {/* Water Card */}
  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-xl hover:scale-105 transition">

    <div className="flex items-center justify-between">

      <div>
        <h2 className="text-xl font-semibold">
          Water Intake
        </h2>

        <p className="text-5xl mt-4 font-bold">
          {healthData[healthData.length - 1]?.waterIntake}L
        </p>
      </div>

      <Droplets size={50} />
    </div>

  </div>

  {/* Steps Card */}
  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-3xl shadow-xl hover:scale-105 transition">

    <div className="flex items-center justify-between">

      <div>
        <h2 className="text-xl font-semibold">
          Steps
        </h2>

        <p className="text-5xl mt-4 font-bold">
          {healthData[healthData.length - 1]?.steps}
        </p>
      </div>

      <Footprints size={50} />
    </div>

  </div>

</div>

      {/* Add Health Data Form */}
      <div className="mt-12 bg-gray-900 p-8 rounded-2xl max-w-2xl">

        <h2 className="text-2xl font-bold mb-6">
          Add Health Data
        </h2>

        <form
          onSubmit={handleAddHealthData}
          className="space-y-5"
        >

          <input
            type="number"
            placeholder="Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <input
            type="number"
            placeholder="Water Intake (Litres)"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <input
            type="number"
            placeholder="Steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <input
            type="number"
            placeholder="Sleep Hours"
            value={sleepHours}
            onChange={(e) => setSleepHours(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
          >
            Add Data
          </button>

        </form>
        <HealthChart data={healthData} />

      </div>

    </div>
  );
}

export default Dashboard;