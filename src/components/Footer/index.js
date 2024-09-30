import React from "react";


function Footer() {
    return (
        <footer className="container text-center py-3">
           <p>Links to my social media</p>
         <div className="socials">
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/Gbenga458" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/github-logo.png')} alt="github link" />
          </a>
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://www.linkedin.com/in/gbenga-busayo/" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/linkedin.png')} alt="linked in link" />
          </a>
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://stackoverflow.com/users/20600274/gbenga" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/stack-overflow.png')} alt="stack overflow link" />
          </a>
         </div> 
          <h3 className="text-dark ">&copy; 2024 by Ologbonsaiye Gbenga Busayo </h3>
        </footer>
    );
}

export default Footer;