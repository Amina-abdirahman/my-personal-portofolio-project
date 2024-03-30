import React from "react";
import '../Global.css'
import myimage from '../assets/web.jpg'
import my from '../assets/graph.jpg'
import image from '../assets/vedio edit.jpg'


function Projects(){
    return(
        <div id="Projects" className="Projects"> 
              
             <h1 >
                My Projects
             </h1>
            <div className="Projectdivs" >
              <div className="Projectdiv1">
                <img src={myimage} alt="" />
              <h3>Web Developing</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
              <h5>View</h5>
              </div>
              <div className="Projectdiv2">
                <img src={my} alt="" />
                <h3>Graphic Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
              <h5>View</h5>
              </div>
              <div className="Projectdiv3">
                <img src={image} alt="" />
                <h3>Vedio Editing</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
              <h5>View</h5>

              
              
              </div>
            </div>

        </div>
    )

}

export default Projects;