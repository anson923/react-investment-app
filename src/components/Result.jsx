import {calculateInvestmentResults, formatter} from '../util/investment.js';
import TableHeader from "./TableHeader.jsx";

export default function Result({userInput}){
  if (userInput.initialInvestment <= 0 || userInput.annualInvestment <= 0 || userInput.expectedReturn <= 0 || userInput.duration <= 0) {
    return <div className="center">Please enter values greater than 0 for all inputs.</div>;
  }
  const annualResults = [...calculateInvestmentResults(userInput).map(item => ({...item}))];
  let totalInterest = 0;
  let totalCapital = userInput.initialInvestment;

  return (
    <table id="result">
      <TableHeader arrayOfCellsName={["Year", "Investment Value", "Interest (Year)", "Total Interest", "Invested Capital"]}/>

      <tbody>
        {annualResults && annualResults.map((annualResult) => {
          console.log(annualResult);
          totalInterest += annualResult.interest;
          totalCapital += annualResult.annualInvestment;
          return (<tr>
            <th key={annualResult.year + "year"}>{annualResult.year}</th>
            <th key={annualResult.year + "valueEndOfYear"}>{formatter.format(annualResult.valueEndOfYear)}</th>
            <th key={annualResult.year + "interest"}>{formatter.format(annualResult.interest)}</th>
            <th key={annualResult.year + "totalInterest"}>{formatter.format(totalInterest)}</th>
            <th key={annualResult.year + "investedCapital"}>{formatter.format(totalCapital)}</th>
          </tr>);
        })}
      </tbody>
    </table>
  )
}