import { useState } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import FindUser from "./components/FindUser";

function App() {
  const [page, setPage] = useState("home"); // page = "createUser" "findUser" "home"

  if (page === "home") {
    return (
      <>
        <h1>Home</h1>
        <div id="buttonDiv">
          <button class="btn first" onClick={() => setPage("findUser")}>
            Find User
          </button>
          <button class="btn first" onClick={() => setPage("createUser")}>
            Create User
          </button>
        </div>
      </>
    );
  }

  if (page === "findUser") {
    return (
      <>
        <h1>Find User</h1>
        <FindUser />
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
