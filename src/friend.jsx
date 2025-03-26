import { use } from "react"

export default function Friend({bondu}){

    console.log(bondu)
    const {name, email } = bondu;

    return (
        <div className="usersCard">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}