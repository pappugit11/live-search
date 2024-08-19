import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const students = ["Pappu", "Papai", "Asis", "Tanmoy", "Amit", "Tukai"];
  const [studentsData, setStudentsData] = useState(students);
  const [inputData, setInputData] = useState("");

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    const updatedData = students.filter((item) =>
      item.toLocaleLowerCase().includes(inputData)
    );
    setStudentsData(updatedData);
  }, [inputData]);

  return (
    <>
      <input type="text" value={inputData} onChange={handleInput} />

      <ul className="student_list">
        {studentsData.map((items, ind) => {
          return <li key={ind}>{items}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
