import Student from "./component/Student";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Student
        name="Rahul"
        rollNo="101"
        course="BCA"
        college="ABC College"
      />
    </div>
  );
}

export default App;