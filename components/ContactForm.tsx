"use client"
import React, { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import emailjs from '@emailjs/browser';

const sercvid = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const emailKey = process.env.NEXT_PUBLIC_EMAIL_KEY;

const ContactForm = () => {

    const form = useRef<HTMLFormElement | null>(null);

    const { pending } = useFormStatus();

    const sendEmail = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        console.log(sercvid)
        e.preventDefault();

        emailjs
        .sendForm(
            sercvid || '',
            templateId || '',
            form.current!,
            emailKey || ''
        )
        .then((result) => {
            console.log(result.text);
            form.current?.reset();
        })
        .catch((error) => {
            console.log(error.text);
            alert('error')
        });
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='grid md:grid-cols-2 gap-10 mb-4'>
                <label htmlFor='name' className='sr-only'>
                    Name
                </label>
                <input 
                    type='text' 
                    required
                    name='name'
                    id='name'
                    placeholder='Name'
                    className='block w-full h-[45px] p-[5px] text-xl border-gray-500 mb-6 border-b focus:outline-yellow-500 text-gray-700 bg-gray-100'
                />
                <label htmlFor='email' className='sr-only'>
                    Email
                </label>
                <input 
                    type='email' 
                    required
                    name='email'
                    id='email'
                    placeholder='Email'
                    className='block w-full h-[45px] p-[5px] text-xl border-gray-500 mb-6 border-b focus:outline-yellow-500 text-gray-700 bg-gray-100'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='message' className='sr-only'>
                    Message
                </label>
                <textarea name='message' id='message' rows={6} placeholder='Your Message' className='block w-full h-auto p-[5px] text-xl border-gray-500 mb-6 border-b focus:outline-yellow-500 text-gray-700 bg-gray-100'></textarea>
            </div>
            <button type="submit" className='bg-yellow-500 py-2 px-4 rounded-md font-bold' aria-label='Submit' disabled={pending}>Submit</button>
        </form>
    )
}

export default ContactForm