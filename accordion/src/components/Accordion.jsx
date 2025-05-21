// Contains accordion logic
import { useState } from "react";


function Accordion({ title, content, index, openIndex, setOpenIndex }) {
    const isOpen = index === openIndex;
    const handleClick = () => {
        if (isOpen) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    }

    return (
        <>
            <div className="w-full flex flex-col mb-3 top-0 ">
                <div onClick={handleClick} className="bg-white flex flex-row items-center justify-between pl-2 pt-3 pb-3 font-serif  rounded-lg " >
                    <h3>{title}</h3>
                    <span className="rounded-xl w-5 h-5 border-1 border-black-400 mr-2 flex items-center justify-center ">{isOpen ? '-' : '+'}</span>
                </div>
                <div className="">
                    {isOpen && <p className="bg-[#a38768] text-black rounded-b-md">{content}</p>}</div>
            </div>
        </>
    );
}

export default Accordion;