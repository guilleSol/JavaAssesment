function getUser(event) {
    event.preventDefault();
    let userId = document.getElementById("userId").value;
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:8080/users/" + userId, requestOptions)
        .then((response) => response.json())
        .then((data) => alert(data));
}

function FindUser() {
    return (
        <div>
            <form onSubmit={getUser}>
                <label>UserId: </label>
                <input id="userId" type="number" />
                <input
                    type="submit"
                    value={"Find User"}
                />
            </form>
        </div>
    );
}

export default FindUser;