import { useState } from "react";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";
import Header from "./Components/Header";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {isValidInput ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than 0 !</p>
      )}
    </>
  );
}

export default App;
