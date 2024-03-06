import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WebSiteCardType {
    siteUrl: string;
    imageSrc: string;
    subText: string;
    imgText: string;
    altText: string;
}

const WebsiteCard = ( { siteUrl, imageSrc, subText, imgText, altText}: WebSiteCardType ) => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
        <Link href={siteUrl} target="_blank" rel="noopener noreferrer">
            <div className='relative group'>
                <Image src={imageSrc} alt={altText} width={300} height={200} className='shadow-md rounded-md transition-all group-hover:filter group-hover:brightness-75' />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                    <p className='text-white font-semibold text-center bg-black bg-opacity-75 px-4 py-2 rounded-md'>{imgText}</p>
                </div>
            </div>
        </Link>
        <p >
            {subText}
        </p>
    </div>
  )
}

export default WebsiteCard