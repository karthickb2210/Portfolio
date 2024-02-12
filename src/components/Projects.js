import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Project = [
  {
    name: 'Intergrated Information system',
    description:'--> It is a webite build for the proper recognise of courses that are provided by the Indian universities in a single webpage and the technology used in this projects are HTML,CSS, javascript and Bootstrap5.',
    // link :'Proofs',
  },
  {
    name: 'PortFolio Site',
    description:'--> It is a portfolio site that was created by me using the skill i obtained by learning React. It basically showcases the skills and personl details and profile links of myself.',
    // link :'Proofs',
  },
  {
    name: 'Balu-weeder-services',
    description:'--> To make a business go online I created a full fledged e-commerce site that will showcase the products and details of the products that are available in thier production line. ',
    // link :'Proofs',
  }
]
const Projects = () => {
  return (
  <section className='section' id='Projects'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* txt */}
      <div className='flex-1 lg:bg-services lg:bg-bottom
      bg-no-repeat mix-blend-lighten mb-5 lg:mb-0'>
      <h2 className='h2 text-accent mb-6'>My Projects</h2>
      <h3 className='h3 max-w-[455px] mb-16'>
        Take a look at my GIT
      </h3>
      <button className='btn btn-sm'>GIT HUB</button>
      </div>
      <div className='flex-1'>
        {/* projects */}
        <div>
          {Project.map((service,index)=>{
           const{name,description } = service;
            return( 
              <div class="card">
              <div class="image"></div>
              <div class="card-info">
                <span>{name}</span>
                <p>{description}</p>
              </div>
              <a class="button" href="#">Folow</a>
            </div>
            );
          })}
        </div>
      </div>
       
    </div>

    </div>
  </section>
  );
};

export default Projects;
