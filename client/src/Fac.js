import React, { useState } from 'react'
import axios from "axios";
function Fac() {
    const [final , setFinal] = useState("");
    const [dt,setDt] = useState({number : ""});
    const OnSubmitFun =async (e) => {
        e.preventDefault();
        try {
            // console.log(dt);
            if(dt.number <0) dt.number = Math.abs(dt.number);
           const {data} = await axios.post("/fac",dt)
           setFinal(`Factorial of ${dt.number} : ${data.fac}`);
        //    console.log(data);
        } catch (error) {
            // console.log(error);
            setFinal("404 Error")
        }
    }
    return (
        <div>
            <h1>{final}</h1>
            <form onSubmit={OnSubmitFun}>
                <input
                    type="number"
                    name="number"
                    value={dt.number}
                    placeholder="Find Factorial of a No."
                    onChange={(e) => setDt({...dt,number : e.target.value})}
                    required
                />
                <input type="submit" name="submit" />
            </form>
        </div>
    )
}

export default Fac
