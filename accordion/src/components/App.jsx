import { useState } from "react";
import Accordion from "./Accordion";
import Title from './Title.jsx';
import ContactBox from "./ContactBox.jsx";

function App() {
  const [openIndex, setOpenIndex] = useState(null);


  const accordionData = [
    {
      title: 'QUESTION NUMBER 1',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'QUESTION NUMBER 2',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'QUESTION NUMBER 3',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'QUESTION NUMBER 4',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'QUESTION NUMBER 5',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  return (

    <section className="flex items-center justify-center bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-500 font-sans tracking-wide">
      <div className="min-h-screen w-100 bg-[#f3ede3] rounded-xl shadow-xl flex flex-col items-center justify-center pt-2 pr-5 pl-5 " >
        <div><Title /></div>
        
    
        <div className="h-76 w-full mb-10 overflow-auto">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>

        <ContactBox />
      </div>
    </section>
  );

}

export default App;

