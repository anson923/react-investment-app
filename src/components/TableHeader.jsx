export default function TableHeader({arrayOfCellsName}){
  return (
    <thead>
      <tr>
        {arrayOfCellsName.map(cellName => <th key={cellName}>{cellName}</th>)}
      </tr>
    </thead>
  );
}