import { useState } from "react";

function UserDetails(props){
    const [userData, setUserData] = useState();

    if(props.userData === undefined){
        return("");
    }
    if(props.userData === null){
        return(
            <div>User does not exist</div>
        );
    }
    return(
        <div>User exists</div>
    );
}

export default UserDetails;