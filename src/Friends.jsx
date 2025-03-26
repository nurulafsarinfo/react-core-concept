import {use} from "react";
import Friend from "./friend";

export default function Friends({friendsPromise}){

    const friends = use(friendsPromise);
    console.log(friends)
    return(
        <div className="usersCard">
            <h3>Friends:  {friends.length}</h3>

            {
                friends.map(Fri => <Friend key={Fri.id} bondu={Fri}></Friend>) 
            }
        </div>
    )
}