import React from "react";
import { Avatar } from "../../components/blog/Avatar";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";

export const styles = {
    width: 'fit-content',
    fontSize: '20px',
    border: '2px solid #555',
    marginTop: '20px'
}

export default function Bio() {
  return (
    <div className="py-5 pt-20 flex flex-col space-y-3">
      <Avatar size="180px" />
      <h3 className="pt-5">
        I&apos;m a front end engineer from Goiânia, Brazil.
      </h3>
      <h4 className="text-xl">Currently working at Raro Labs.</h4>
      <h4 className="text-xl">
        I have professional experience with Angular and ReactJS.
      </h4>
      <a
        className="flex items-center p-3"
        rel="noreferrer"
        style={styles}
        target="_blank"
        href="https://www.linkedin.com/in/ruslan-pascoal-561214a0/"
        role="button"
      >
        Contact me on <AiFillLinkedin className="ml-1 text-2xl" />
      </a>
    </div>
  );
}
