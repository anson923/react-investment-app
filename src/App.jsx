import Header from "./components/Header.jsx";
import InputFields from "./components/InputFields.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

function App() {
  const [userInput, setUserInput] = useState({
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
  });

  const handleUserInputChanged = (inputID, newValue) => {
      setUserInput(prevState => {
         return {...prevState,[inputID] : +newValue};
      });
  }

  return (
    <div>
      <Header/>
      <InputFields onChanged={handleUserInputChanged}/>
      <Result userInput={userInput}/>
    </div>
  )
}

export default App
