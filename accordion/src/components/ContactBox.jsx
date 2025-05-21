function ContactBox() {
    return (
      <div className="w-full max-w-md text-center">
        <p className="text-gray-500 mb-6 text-sm font-medium tracking-wider">DIDN'T FIND YOUR ANSWER?</p>
        <button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider">
          Contact Us
        </button>
        <p className="mt-4 text-gray-400 text-sm">We typically respond within 24 hours</p>
      </div>
    );
  }
  
  export default ContactBox;