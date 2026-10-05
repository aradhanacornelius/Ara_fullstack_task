import Student from "./component/Student";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Student
        name="Rahul"
        subject="Java"
      />
    </div>
  );
}

export default App;