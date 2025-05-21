import { useState } from "react";
import Accordion from "./Accordion";
import Title from './Title.jsx';
import ContactBox from "./ContactBox.jsx";

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: 'How do I get started with your services?',
      content: 'Getting started is easy! Simply contact us through the form below or give us a call. We\'ll schedule a consultation to understand your needs and provide a tailored solution.'
    },
    {
      title: 'What payment methods do you accept?',
      content: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All transactions are securely processed.'
    },
    {
      title: 'Can I cancel or reschedule my appointment?',
      content: 'Yes, you can cancel or reschedule up to 24 hours before your appointment without any charges. Late cancellations may incur a small fee.'
    },
    {
      title: 'Do you offer any discounts or packages?',
      content: 'We offer seasonal promotions and package deals for recurring services. Sign up for our newsletter to stay informed about special offers.'
    },
    {
      title: 'How can I track my project progress?',
      content: 'We provide a client portal where you can track progress in real-time, communicate with your project manager, and access all relevant documents.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 font-sans tracking-wide p-4">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl flex flex-col items-center p-8 md:p-10">
        <Title />
        
        <div className="w-full mb-10 space-y-4">
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