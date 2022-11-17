import { useState } from "react";
import "./App.css";
// import "./components/FindUser";
// import "./components/CreateUser";
import CreateUser from "./components/CreateUser";
import FindUser from "./components/FindUser";

function App() {
  const [page, setPage] = useState("home"); // page = "createUser" "findUser" "home"

  if (page === "home") {
    return (
      <>
        <h1>Home</h1>
        <button onClick={() => setPage("findUser")}>Find User</button>
        <button onClick={() => setPage("createUser")}>Create User</button>
      </>
    );
  }

  if (page === "findUser") {
    return (
      <>
        <h1>Find User</h1>
        <FindUser/>
      </>
    );
  }

  if (page === "createUser") {
    return (
      <>
        <h1>Create user</h1>
        <CreateUser />
      </>
    );
  }
}

export default App;
