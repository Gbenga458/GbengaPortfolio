import React from "react";

function Portfolio() {
 const projects = [
     {
        name: 'Shopping Cart',
        description: 'A shopping cart that can add and remove product, it can also automatically calculate the price of selected items aswell as deduct the price of removed item ',
        github: 'https://gbenga458.github.io/React-Cart/',
        image: '1',
        uses: 'MERN Stack'
     },
     {
        name: 'Grocery Bud',
        description: 'in This app, you can enter any product you want and it will be added to your grocery store, you can edit as well as remove',
        github: ' https://gbenga458.github.io/Grocery-React-Project/',
        image: '2',
        uses: 'MERN stack'
     },
     {
        name: 'MENU search bar for supermarket',
        description: "This App enables customers to view and segregate their preferred item with price",
        github: 'https://gbenga458.github.io/Menu-React-App/',
        image: '3',
        uses: 'MERN'
     },
     {
        name: 'Color Flipper',
        description: 'I built this project for fun, it enables users flip to their preferred color with generated code',
        github: 'https://gbenga458.github.io/color-flipper/',
        image: '4',
        uses: 'Javascript'
     },
     {
        name: 'Technical documentation page',
        description: 'The website is use for landing page, it make it easier for user to navigate to the pages of their choices',
        github: ' https://gbenga458.github.io/Technical-documentation-page/',
        image: '5',
        uses: 'HTML and CSS'
     },
     {
        name: 'Product Landing Page',
        description: 'This product landing page is a web page designed to promote or sell a thrombone',
        github: 'https://gbenga458.github.io/product-landing-page1/',
        image: '6',
        uses: 'HTML and CSS'
     },
 ];

 return (
     <div>
    {projects.map((project) => {
        return(
                <div className="br col-12 mb-2 bg-dark text-light p-3">
                  <div className="flex-row">
                    <div className="left col-8">
                        <h3 className="portfolio-item-title text-light ">{project.name}</h3>
                        <h5 className="portfolio-languages pt-3">
                            Built With: {project.uses}
                        </h5>
                        <p>{project.description}</p>
                        <div className="br bg-primary width-min p-1">
                        
                        <a href={project.github} rel="noreferrer noopener" target="_blank" title="Open GitHub Repo">
                            <img className="icon" src={require('../../assets/github.png')} alt="github link"/>
                        </a>
                        </div>
                    </div>
                    <div className="right">
                        <img className="image" src={require(`../../assets/images/${project.image}.png`)} alt={project.name} key={project.name}/>
                    </div>
                  </div>
                </div>
        );
    })
    
    }
 </div>);
}

export default Portfolio;