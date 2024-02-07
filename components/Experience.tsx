import React from 'react'
import SectionHeader from './SectionHeader';
import Card from './ProjectCard';


const experienceDetails = [
  { 
    position: 'Software Engineer I', 
    company: 'Ultima Genomics', 
    dates: '2022-2024',
    desc:'Integrated API endpoints following REST protocols; Experience with Front End and Back End development; Develop interactive, responsive, reusable UI components utilizing React; Utilized Flask, Django during employment'
  },
  { 
    position: 'Junior Software Developer', 
    company: 'TIAG', 
    dates: '2019-2022', 
    desc:'Agile workflow environment; 3 weeks sprints utilizing React, Azure, and ASP.Net stack;  Fortify Scan POC;  Learned and implemented custom hooks and reusable, scalable UI components using React; Implemented API endpoints for server-client data exchange'
  },
  {
    position: 'Artillery Mechanic (Sergeant E-5)', 
    company: 'United States Marine Corps', 
    dates:'2015-2019', 
    desc: 'Message will go here'
  }
]

const Experience = () => {

  const title = 'Experience';

  const renderCards = () => (
    experienceDetails.map((itm, idx) => {

      return (
        <div key={itm.company}> 
          <Card position={itm.position} company={itm.company} dates={itm.dates} desc={itm.desc} />
        </div>
      )
    })
  )

  return (
        <section id='experience' className='w-full h-fit py-20 relative bg-gray-200'>
            <SectionHeader title={title} />
            <div className='max-w-[91%] mx-auto grid md:grid-cols-2 md:gap-10'>
              {
                renderCards()
              }
            </div>
        </section>
  )
};

export default Experience;


