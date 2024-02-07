import React from 'react'
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';

const Contact = () => {

  return (
    <div id='contact' className='w-full h-fit py-10 relative bg-gray-100'>
        <div className='max-w-[1400px] mx-auto w-[91%]'>
            <div className='mb-10'>
                <SectionHeader title='Contact Me' />
            </div>
            <ContactForm />
        </div>
    </div>
  )
}

export default Contact;