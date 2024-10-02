import React from "react";
import { useParams } from "react-router-dom";


export default function User(){
    const {userid}=useParams()
    return (
        <div className="bg-red-400 text-lg font-bold">User : {userid} </div>
    )
}
