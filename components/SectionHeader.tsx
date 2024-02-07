import React from 'react'

interface SectionHeaderProps {
  title?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className='flex justify-center'>
      <span className='bg-yellow-500 px-2 text-[25px] font-extrabold border uppercase rounded-md mb-5'>
        {title}
      </span>
    </div>
  );
};

export default SectionHeader;
