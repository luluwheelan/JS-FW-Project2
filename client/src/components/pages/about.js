import React from "react";


function About() {
  return (
    <div className="container content p-4 bg-light">
      <h1 className="text-center">About Us</h1>
      <p className="h5 pt-5">This is JavaScript Frameworks Group Two lab. </p>
      <p className="h5">
        This project is built on React framework integrated with Node and Express
        Js.
      </p>
      <br></br>
      <p className="h5">Group Two has two members:</p>
      <div className='row py-3'>
          
        <div className="col-sm-3">
          <img className='py-3' src={require('../images/Lulu.jpg')} alt='Lulu' style={{width: 180}} />
        </div>
        <div className="col-sm-9">
          <h3>Lulu Chen</h3>
          <p>
            Lulu is a second year computer programmer student from Georgian
            College. Lulu has good experence of designing, building, testing and
            maintaining web applications. In the past, she had developed a marketing website and an
            internal dashboard according to client specifications. She will work
            as a web developer in the future.
          </p>
        </div>
        
        <div className="col-sm-3">
          <img src={require('../images/Craig.jpg')} alt='Craig'  style={{width: 180}} />
        </div>
        <div className="col-sm-9">
          <h3>Craig </h3>
          <p>
            Craig is a computer programmer student from Georgian. Craig interested in Machine learning. He is currently learning Octave and MATLAB. 
			He wants to take further education in future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
