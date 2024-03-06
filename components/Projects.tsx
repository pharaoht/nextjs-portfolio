import React from 'react'
import SectionHeader from './SectionHeader'
import WebsiteCard from './WebsiteCard';

const Projects = () => {

    const title = 'Projects';

    const url = 'https://car-10tkm5rb2-pharaoh-mansons-projects.vercel.app/'

    return (
        <section id='projects' className='w-full h-fit py-20 relative bg-gray-200'>
            <SectionHeader title={title} />
            <div className='max-w-[91%] mx-auto grid md:grid-cols-3 md:gap-10'>
                <WebsiteCard 
                    siteUrl={url}
                    imageSrc='/splash.PNG'
                    subText='Car Hub - built with Next.js'
                    imgText='Go to Car Hub &rarr;'
                    altText='car hub image'
                />
            </div>
        </section>
    )

}

export default Projects