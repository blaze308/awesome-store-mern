import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your API here, sending formData
      const response = await fetch("http://localhost:4000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Registration successful!");
        setError("");
      } else {
        const data = await response.json();
        setError(data);
        setSuccess("");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="bg-slate-300 p-8 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white-600">Username:</label>
          <input
            className="w-full border rounded-md py-2 px-3 text-white-700"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-600">Email:</label>
          <input
            className="w-full border rounded-md py-2 px-3 text-white-700"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white-600">Password:</label>
          <input
            className="w-full border rounded-md py-2 px-3 text-white-700"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white-600">Confirm Password:</label>
          <input
            className="w-full border rounded-md py-2 px-3 text-white-700"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
}

export default RegistrationForm;
