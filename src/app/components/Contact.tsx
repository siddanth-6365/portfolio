"use client";
import React from 'react'
import Form from '@/components/Form'
import Terminal from '@/components/Terminal'
import { TerminalContextProvider } from "react-terminal";


const ContactForm = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='flex items-center justify-center w-full md:w-1/2'>
                <TerminalContextProvider>
                    <Terminal />
                </TerminalContextProvider>
            </div>
            <div className='flex items-center  w-screen md:w-1/2'>
                <Form />
            </div>

        </div>
    )
}

export default ContactForm