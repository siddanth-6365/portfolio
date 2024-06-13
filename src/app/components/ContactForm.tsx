import React from 'react'
import Form from '@/components/Form'
import Globe from '@/components/Globe'


const ContactForm = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
                <Globe />
            </div>
            <div className='flex items-center  w-screen md:w-1/2'>
            <Form />
            </div>
           
        </div>
    )
}

export default ContactForm