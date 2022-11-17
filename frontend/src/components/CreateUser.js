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
    <div>
      <form onSubmit={postUser}>
        <label>First name: </label>
        <input id="fname" type="text" />
        <label>Last name: </label>
        <input id="lname" type="text" />
        <label>Phone number </label>
        <input id="pnumber" type="text" />
        <label>Email: </label>
        <input id="email" type="text" />
        <input
          type="submit"
          value={"Create user"}
        />
      </form>
    </div>
  );
}

export default CreateUser;
