import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import NavLink
import "./Autcss.css";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [Name, setName] = useState("");
  const [Bgroup, setBgroup] = useState("");
  const [Ph_No, setPh_No] = useState("");
  const [Address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("http://localhost:4000/app/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
          UserName: username,
          Name: Name,
          bgroup: Bgroup,
          Ph_No: Ph_No,
          Address: Address,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 400) {
          // Handle specific error messages for duplicate username or email
          if (errorData.msg === "UserName already exists") {
            setError("Username already exists");
          } else if (errorData.msg === "User already exists") {
            setError("Email already exists");
          } else {
            setError(
              "Signup failed or Incorrect credentials. Please try again."
            );
          }
        } else {
          console.error("Error during signup :", response.statusText);
        }

        setIsLoading(false);
        return;
      }

      const data = await response.json();
      console.log(data); // Adjust as needed
      setIsLoading(false);
      navigate("/app/WelcomeHome");
    } catch (error) {
      console.error("Error during signup :", error);
    }
  };

  return (
    <div className="App App-header">
      <div className="registerstyle.register">
        <h1>Create your account</h1>
        <label htmlFor="email" className="text_head">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="eg@gits.com"
          className="inputfield"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="text_head">
          Bgroup:
        </label>
        <select
          id="Bgroup"
          className="inputfield"
          value={Bgroup}
          onChange={(e) => setBgroup(e.target.value)}
        >
          <option value="">Select Blood Group</option>
          <option value="B+">B +ve</option>
          <option value="B-">B -ve</option>
          <option value="A+">A +ve</option>
          <option value="AB-">AB -ve</option>
          <option value="O+">O +ve</option>
          <option value="O-">O -ve</option>
        </select>

        <label htmlFor="username" className="text_head">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter user Name"
          className="inputfield"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="text_head">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter a password"
          className="inputfield"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="Name" className="text_head">
          Name:
        </label>
        <input
          type="text"
          id="Name"
          className="inputfield"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="Ph_No" className="text_head">
          Ph_No:
        </label>
        <input
          type="tel"
          id="Ph_No"
          pattern="[0-9]{10}"
          maxLength="10"
          placeholder="Enter a 10-digit phone number"
          className="inputfield"
          value={Ph_No}
          onChange={(e) => setPh_No(e.target.value)}
        />
        <label htmlFor="Address" className="text_head">
          Address:
        </label>
        <input
          type="text"
          id="Address"
          className="inputfield"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        type="button"
        className=" button-5"
        onClick={handleSignup}
        disabled={isLoading}
      >
        {isLoading ? "Signing up..." : "Signup"}
      </button>
      {error && (
        <div
          className=" button-5"
          style={{ color: "red", backgroundColor: "#282c34" }}
        >
          {error}
        </div>
      )}
      <Link to="../app/Login">Already registered? Login</Link>
    </div>
  );
};

export default UserSignup;
