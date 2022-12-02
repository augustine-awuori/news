import React, { useState } from "react";
import Profile from "../components/Profile";

export default function ProfilePage() {
  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState("");

  const addAccount = () => {
    if (name) setAccounts([name, ...accounts]);
    setName("");
  };

  const handleDelete = (name) => {
    setAccounts(accounts.filter((a) => a !== name));
  };

  return (
    <div className="home-page profile-page">
      <body>
        <h1>Profiles</h1>
        <section className="accounts">
          {accounts.map((account, index) => (
            <Profile key={index} name={account} onClick={handleDelete} />
          ))}
        </section>
        <input
          className="search-input input"
          type="text"
          value={name}
          onChange={(text) => setName(text.target.value)}
          placeholder="Enter name"
        />
        <button onClick={addAccount}>Create Profile</button>
        <script src="CreateAccount.js"></script>
      </body>
    </div>
  );
}
