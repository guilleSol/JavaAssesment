import { useState } from "react";
import "./FindUser.css";
import UserDetails from "./UserDetails";

// function getUser(event) {
//     event.preventDefault();
//     let userId = document.getElementById("userId").value;
//     // Simple POST request with a JSON body using fetch
//     const requestOptions = {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//     };
//     fetch("http://localhost:8080/users/" + userId, requestOptions)
//         .then((response) => response.bodyUsed ? response.data : null)
//         .then((data) => setUserData(data));
// }

function FindUser() {

    const [userData, setUserData] = useState();

    let getUser = (event) =>{
        event.preventDefault();
        let userId = document.getElementById("userId").value;
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        fetch("http://localhost:8080/users/" + userId, requestOptions)
            .then((response) => response.json())
            .then((data) => setUserData(data), (data) => setUserData(null) );
    }
    
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
            <UserDetails userData = {userData}/>
        </div>
    );
}

export default FindUser;