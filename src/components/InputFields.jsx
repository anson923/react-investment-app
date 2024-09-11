import InputField from "./InputField.jsx";

export default function InputFields({onChanged}){
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField onValueChanged={(value) => onChanged("initialInvestment", value) } labelName="initial investment"/>
        <InputField onValueChanged={(value) => onChanged("annualInvestment", value) } labelName="annual investment"/>
      </div>
      <br/>
      <div className="input-group">
        <InputField onValueChanged={(value) => onChanged("expectedReturn", value) } labelName="expected return"/>
        <InputField onValueChanged={(value) => onChanged("duration", value) } labelName="duration"/>
      </div>
    </section>
  )
}