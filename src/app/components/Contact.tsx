"use client";
import React from 'react';
import Form from '@/components/Form';
import { Mail, Phone, MapPin } from 'lucide-react';
import Social from '@/components/social';

export default function ContactForm() {
    const contactInfo = [
        {
            icon: <Mail size={24} className="text-gray-300" />,
            label: 'Email',
            value: 'siddanth6365@gmail.com',
            href: 'mailto:siddanth6365@gmail.com',
        },
        {
            icon: <Phone size={24} className="text-gray-300" />,
            label: 'Phone',
            value: '+91 9032806365',
            href: 'tel:+919032806365',
        },
        {
            icon: <MapPin size={24} className="text-gray-300" />,
            label: 'Location',
            value: 'India',
            href: null,
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 px-6 transition-colors"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-neutral-100 mb-6">
                        Let&apos;s Work Together
                    </h2>
                    <div className="w-20 h-1 bg-gray-600 mx-auto mb-8"></div>
                    {/* <p className="text-xl text-gray-600 dark:text-neutral-300 max-w-2xl mx-auto">
                        I&apos;m always interested in new opportunities and exciting projects.
                        Let&apos;s discuss how we can work together.
                    </p> */}
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Details + Socials */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 mb-8">
                            Get In Touch
                        </h3>

                        <div className="space-y-6 mb-10">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex items-center">
                                    <div className="mr-4">{info.icon}</div>
                                    <div>
                                        <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-lg text-gray-900 dark:text-neutral-100 hover:text-blue-600 transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg text-gray-900 dark:text-neutral-100">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}

                        <div className='flex gap-2'>
                            <Social />

                        </div>

                        <div className="mt-10 p-6 bg-black dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">
                                Available!
                            </h4>
                            <p className="text-gray-200 dark:text-gray-200 text-sm">
                                I&apos;m currently available for freelance projects and new opportunities.
                                Let&apos;s discuss your next project!
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="">
                        <Form />
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-10 pt-4 border-t border-gray-200 dark:border-neutral-700 text-center">
                    <p className="text-gray-600 dark:text-neutral-400">
                        thanks for visiting my portfolio!
                    </p>
                </div>
            </div>
        </section>
    );
}
