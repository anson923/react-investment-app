export default function InputField({labelName, onValueChanged, ...props}){
  const handleValueChanged = (event) => {
    const value = event.target.value === '' ? -1 : event.target.value;
    onValueChanged(value);
    console.log("FIELD IS: " + value);
  }
  return (
    <div>
      <label {...props}>{labelName}</label>
      <input type="number" onChange={handleValueChanged}/>
    </div>
  )
}