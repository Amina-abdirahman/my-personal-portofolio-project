import React from "react";
import '../Global.css'
import myimage from '../assets/girl.jpeg'


function Bio(){
    return(
        <div id="Bio" className="Bio">
        
          <div className="biodiv1">
    <img src={myimage} alt="" />
          </div>
          <div className="biodiv2">
          <h1> About  me</h1>
          <h2>Web Developer & Designer</h2>
          <p>
            I am passionate web developer and designer with a creative mind and love for building beautiful websites,
            and i built projects.

            </p>
        </div>


        </div>
    )
}

export  default Bio;
