import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const Hero = () => {
  return (
    <section className="bg-primary text-white text-center p-5">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p className="lead">I'm a Full Stack Developer passionate about creating interactive applications and experiences on the web.</p>
        <a href="#projects" className="btn btn-secondary btn-lg">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
