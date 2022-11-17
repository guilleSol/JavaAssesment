import "./CreateUser.css";

function postUser(event) {
    event.preventDefault();
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fName: document.getElementById("fname").value,
      lName: document.getElementById("lname").value,
      phoneNumber: document.getElementById("pnumber").value,
      email: document.getElementById("email").value,
    }),
  };
  fetch("http://localhost:8080/users", requestOptions)
    .then((response) => response.json())
}

function CreateUser() {
  return (
    <div id="createUserDiv">
      <form id="userForm" onSubmit={postUser}>
        <label className="userLabel">First name: </label>
        <input id="fname" type="text" />
        <label className="userLabel">Last name: </label>
        <input id="lname" type="text" />
        <label className="userLabel">Phone number </label>
        <input id="pnumber" type="text" />
        <label className="userLabel">Email: </label>
        <input id="email" type="text" />
        <br></br>
        <input id="createUserBtn"
          type="submit"
          value={"Create user"}
        />
      </form>
    </div>
  );
}

export default CreateUser;
