import { useState } from "react";
import { useUser } from "../contexts/user/useUser";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { fullName, setFullName, setIsLoggedIn } = useUser();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  interface HandleLogInEvent extends React.FormEvent<HTMLFormElement> {}
  const handleLogIn = (e: HandleLogInEvent) => {
    e.preventDefault();
    if (fullName) {
      setIsLoggedIn(true);
      setError("");
      navigate("/todos");
    } else {
      setError("Please enter your name.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white py-10 px-20 rounded-2xl shadow-md text-center">
        <h1 className="text-xl font-semibold mb-4">Hi. What's your name?</h1>
        <form onSubmit={handleLogIn}>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-200 p-2 rounded w-full"
              placeholder="Enter your name"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yelloe-300 whitespace-nowrap"
            >
              Log in
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      </div>
    </div>
  );
};

export default Home;
