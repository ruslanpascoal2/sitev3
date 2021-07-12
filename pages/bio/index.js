import React from "react";
import { Avatar } from "../../components/blog/Avatar"
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai"

export default function Bio() {
    return (
        <div className="py-5 flex flex-col space-y-3">
            <Avatar size="150px" />
            <h3 >I&apos;m a front end engineer from Goiânia, Brazil.</h3>
            <h4 className="text-xl">Currently working at Raro Labs.</h4>
            <h4 className="text-xl">I have experience working with Angular, React.js, Next.js and Vue.</h4>
            <div className="flex">
            <span className="text-xl">Take a look at my&nbsp;</span> 
                <Link href="/portfolio"><a><span className="text-xl"><u>Portfolio</u>.</span></a></Link>
            </div>
            <div className="flex items-center text-xl">Contact me on <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ruslan-pascoal-561214a0/"><AiFillLinkedin className="ml-1 text-2xl" /></a></div>
        </div>
    )
}
