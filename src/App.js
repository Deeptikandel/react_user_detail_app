import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import useFetchData from "./Hooks/useFetchData";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "./component/userCard";
import UserDetails from "./component/userDetails";
import "./App.css";


function App() {
  const { users, error } = useFetchData();

  return (


    <Router>
      {error ? (
        <p>{error}</p> 
      ) : (
      <div className="wrapper" >
      <Routes>

          <Route exact path="/" element={<UserCard users={users} />}>

          </Route>
          <Route path="/users/:id" element={<UserDetails users={users} />}>

          </Route>

      </Routes>
        </div>)}
    </Router>

  );
}

export default App;