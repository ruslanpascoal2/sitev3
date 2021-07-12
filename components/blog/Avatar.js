import React from "react";

export const Avatar = ({size}) => {
    if(!size) size = '30px';
    return (
        <div style={{...avatarStyle, height: size, width: size}} className="m-1 mr-2  relative flex justify-center items-center rounded-full bg-light j2-500 text-xl text-white uppercase" ></div>
    )
}

export const avatarStyle  = {
    backgroundImage: `url('/caae01c1-833e-4d7c-bbce-cf9594ce5be7.jfif')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}
