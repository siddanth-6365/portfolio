import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Social() {
    return (
       <>
            <a
                href="https://github.com/siddanth-6365"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full transition-all duration-300 hover:scale-110"
            >
                <Github size={24} />
            </a>
            <a
                href="https://linkedin.com/in/siddanth-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full transition-all duration-300 hover:scale-110"
            >
                <Linkedin size={24} />
            </a>
            <a
                href="mailto:siddanth6365@gmail.com"
                className="p-3 border border-gray-300 rounded-full transition-all duration-300 hover:scale-110"
            >
                <Mail size={24} />
            </a>
            <a
                href="https://x.com/Siddanth6365"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full transition-all duration-300 hover:scale-110"
            >
                <Twitter size={24} />
            </a>

       </>
    )
}