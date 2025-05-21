import { useState, useRef, useEffect } from "react";

function Accordion({ title, content, index, openIndex, setOpenIndex }) {
  const isOpen = index === openIndex;
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const handleClick = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-200 ${
          isOpen ? 'bg-indigo-50' : 'hover:bg-gray-50'
        }`}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <span className={`ml-4 h-6 w-6 flex items-center justify-center rounded-full transition-all duration-300 ${
          isOpen ? 'bg-indigo-600 rotate-180' : 'bg-gray-200'
        }`}>
          <svg
            className={`w-4 h-4 text-${isOpen ? 'white' : 'gray-600'} transition-transform duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="transition-height duration-300 ease-in-out overflow-hidden"
      >
        <div className="p-5 pt-0 text-gray-600">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;