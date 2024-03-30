import React from "react";
import '../Global.css'
import myimage from '../assets/amin.jpg'


const NAME= "Amina Abdirahman"
function Banner(){

     return(
        <div className="body">
<div className="body1">
<h5>My name is</h5><h1><span>{NAME}</span> </h1>
<h2>and i am Web Developer & Designer</h2>

<button> Fallow me</button>
</div>
<div className="body2">
    <img src={myimage} alt="" />
    </div> 

</div>
     )
}

export default Banner;
