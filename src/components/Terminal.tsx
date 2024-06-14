"use client";
import React, { useState } from 'react';
// @ts-ignore
import Terminal from 'react-console-emulator'
import {commandsAnswers} from "@/data"

export default function App() {

  const commands = {
    whoami: {
      fn: () => commandsAnswers.whoami,
      description: 'Prints my name and current role'
    },
    about: {
      fn: () => commandsAnswers.about,
      description: 'Displays a brief summary about me'
    },
    education: {
      fn: () => commandsAnswers.education,
      description: 'Shows my educational background'
    },
    socials: {
      fn: () => commandsAnswers.socials,
      description: 'Lists my social media profiles'
    },
    skills: {
      fn: () => commandsAnswers.skills,
      description: 'Presents my technical skills and expertise'
    },
    experience: {
      fn: () => commandsAnswers.experience,
      description: 'Lists my work experience'
    },
    email: {
      fn: () => commandsAnswers.email,
      description: 'Reveals my email address for contact'
    }
  };
  return (
    <div className="p-4 ml-0 md:ml-12 h-[500px] w-full mb-8">
      <h1 className="ml-4 mb-2 text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        ~ terminal
      </h1>
      <p className="ml-4 text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2">
      Welcome! For a list of available commands, type `help`
        </p>

      <div className="text-sm overflow-auto max-h-[400px]">
        <Terminal
          commands={commands}
          promptLabel={'~$'}
          contentStyle={{ color: '#FF8E00' }} 
          promptLabelStyle={{ color: '#FFFFFF' }} // Prompt label colour
          inputTextStyle={{ color: 'red' }} // Prompt text colour
        />
      </div>
    </div>
  );
}
