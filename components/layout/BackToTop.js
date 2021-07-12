import React from "react";
import { FaArrowAltCircleUp} from "react-icons/fa";

export default function BackToTop() {
    return(
        <div onClick={toTop} style={{position: 'fixed', bottom: '40px', right: '40px'}}>
            <button>
                <FaArrowAltCircleUp className="text-4xl" />
            </button>
        </div>
    )
}

export function toTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
}