import "./App.css";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentsView from "./component/student/StudentsView";
import { NavBar } from "./component/common/NavBar";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/editStudent";
import ProfileStudent from "./component/student/ProfileStudent";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentsView />}></Route>
          <Route exact path="/add-students" element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-students/:id"
            element={<EditStudent />}
          ></Route>
          <Route
            exact
            path="/view-students/:id"
            element={<ProfileStudent />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
