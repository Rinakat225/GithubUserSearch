/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({
  setSearchResult,
  setRepositories,
  setShowResult,
}) {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!userName.trim()) {
      setIsLoading(false);
      return;
    }

    try {
      const userNameResponse = await fetch(
        `https://api.github.com/users/${userName}`
      );
      const userData = await userNameResponse.json();

      if (userNameResponse.ok) {
        setSearchResult(userData);
        setShowResult(true);

        const repositoryResponse = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );
        const repositoryData = await repositoryResponse.json();
        console.log(repositoryData);

        if (repositoryResponse.ok) {
          setRepositories(repositoryData);
        } else {
          console.error("Unable to fetch repository");
        }
      } else {
        console.error("Unable to fetch user");
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setUserName("");
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitUsername}>
        <input
          className="input"
          type="text"
          placeholder="type the username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="btn">Search</button>
      </form>
      {isLoading && <p className="loader">Loading...</p>}
    </>
  );
}
