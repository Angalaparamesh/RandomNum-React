import { useState } from "react";

function RandomNum()
{
    var[randomNum,RandomNumber] = useState(Math.floor(Math.random() * 100))
    
    function generate()
    {
        RandomNumber(Math.floor(Math.random() * 100));
    }
    return(
        <div class="container"><h1>{randomNum}</h1>
        <button onClick = {generate} class="btn">Random Number</button></div>
    )
}


export default RandomNum