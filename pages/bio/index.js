import React from "react";
import { Avatar } from "../../components/blog/Avatar"
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai"

export default function Bio() {
    return (
        <div className="pt-20 flex flex-col space-y-4">
            <Avatar size="200px" />
            <h3 >I'm a front end engineer from Goiânia, Brazil.</h3>
            <h4>Currently working at Raro Labs.</h4>
            <div className="flex">
                <h4>I have experience working with</h4> &nbsp;
                <h4>Angular,</h4>&nbsp;
                <h4>React.js,</h4>&nbsp;
                <h4>Next.js</h4>&nbsp;
                <h4>and</h4>&nbsp;
                <h4>Vue</h4>
                <h4>.</h4>&nbsp;
            </div>
            <div className="flex">
                <h4>Take a look at my</h4> &nbsp;
                <Link href="/portfolio"><a><h4><u>Portfolio</u>.</h4></a></Link>
            </div>
            <div className="flex items-center text-xl">Contact me on <a target="_blank" href="https://www.linkedin.com/in/ruslan-pascoal-561214a0/"><AiFillLinkedin className="ml-1 text-2xl" /></a></div>
        </div>
    )
}
