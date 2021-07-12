import React from "react";
import { TiArrowUpThick} from "react-icons/ti";

export default function BackToTop() {
    return(
            <button onClick={toTop} style={{position: 'fixed', bottom: '40px', right: '40px', boxShadow: '2px 0px 15px rgba(0,0,0,0.8)'}}  
            className="bg-dark rounded-full p-2 dark:bg-light ">
                <TiArrowUpThick className="text-2xl text-light dark:text-dark" />
            </button>
    )
}

export function toTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
}