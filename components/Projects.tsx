import React from 'react'
import SectionHeader from './SectionHeader'
import WebsiteCard from './WebsiteCard';

const Projects = () => {

    const title = 'Projects';

    const url = 'https://car-hub-three-red.vercel.app/';
    const url2 = 'https://nextjs-flight-tickets.vercel.app/';
    const url3 = 'https://bug-tracker-production-0885.up.railway.app/';
    const url4 = 'https://bug-tracker-frontend-kappa.vercel.app/';

    return (
        <section id='projects' className='w-full h-fit py-20 relative bg-gray-100'>
            <SectionHeader title={title} />
            <div className='max-w-[91%] mx-auto grid md:grid-cols-3 md:gap-10'>
                <WebsiteCard 
                    siteUrl={url}
                    imageSrc='/splash.PNG'
                    subText='Car Hub - built with Next.js'
                    imgText='Go to Car Hub &rarr;'
                    altText='car hub image'
                />
                <WebsiteCard 
                    siteUrl={url2}
                    imageSrc='/travelsite.PNG'
                    subText='Search for flights - built with Next.js'
                    imgText='Go to Flight Search &rarr;'
                    altText='bug tracker image'
                />
                <WebsiteCard
                    siteUrl={url3}
                    imageSrc='/backend.png'
                    subText='Bug Tracker API - built with Node.js'
                    imgText='Go to Bug Tracker &rarr;'
                    altText='bug tracker image'
                />
                <WebsiteCard
                    siteUrl={url4}
                    imageSrc='/adminHub.png'
                    subText='Bug Tracker UI - built with Next.js'
                    imgText='Go to Bug Tracker UI &rarr;'
                    altText='bug tracker ui image'
                />
            </div>
        </section>
    )

}

export default Projects