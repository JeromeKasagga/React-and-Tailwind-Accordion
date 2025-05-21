# React-and-Tailwind-Accordion

# FAQ Accordion Component - React & Tailwind CSS

<img width="383" alt="React Accordion" src="https://github.com/user-attachments/assets/bd4eb0d9-fcbf-4ea3-b0a3-b7055332afdb" />

## Overview

A modern, animated FAQ accordion component built with React and Tailwind CSS. Features smooth animations, responsive design, and elegant styling.

## Features

- **Smooth Animations**: CSS transitions for opening/closing accordion items
- **Responsive Design**: Works on all screen sizes
- **Modern UI**: Glass-morphism effect, gradient backgrounds, and subtle shadows
- **Accessible**: Keyboard navigable and proper ARIA attributes
- **Customizable**: Easy to modify colors, spacing, and behavior

## Technologies Used

- React 18
- Tailwind CSS 3
- Vite (for development)
- Framer Motion (for animations)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/faq-accordion.git
   ```

2. Navigate to the project directory:
   ```bash
   cd faq-accordion
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

### Basic Implementation

```jsx
import { useState } from 'react';
import Accordion from './components/Accordion';

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      title: 'How do I get started?',
      content: 'Getting started is easy! Contact us through our form.'
    },
    // Add more FAQ items
  ];

  return (
    <div className="container">
      {faqData.map((item, index) => (
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
  );
}
```

### Customization Options

#### Change Colors
Modify the Tailwind classes in the components:
- Background: `bg-indigo-600`
- Text: `text-gray-900`
- Hover states: `hover:bg-indigo-700`

#### Adjust Animations
Edit the transition properties in `Accordion.jsx`:
```jsx
className="transition-height duration-300 ease-in-out"
```

## Project Structure

```
src/
├── components/
│   ├── Accordion.jsx      # Accordion component
│   ├── ContactBox.jsx     # Contact CTA section
│   └── Title.jsx          # FAQ title component
├── App.jsx                # Main application
└── main.jsx               # Entry point
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.


## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)

---
