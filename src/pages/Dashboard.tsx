import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to QRx Dashboard</h1>
      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
