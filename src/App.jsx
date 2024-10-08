import { useState } from "react";
import Form from "./components/Form";
import DisplayResult from "./components/DisplayResult";

export default function App() {
  const [searchResult, setSearchResult] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleReset = () => {
    setSearchResult({});
    setRepositories([]);
    setShowResult(false);
  };

  return (
    <div className="container">
      <Form
        setSearchResult={setSearchResult}
        setRepositories={setRepositories}
        setShowResult={setShowResult}
      />

      {showResult && (
        <div className="result_container">
          <DisplayResult
            searchResult={searchResult}
            repositories={repositories}
          />
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
