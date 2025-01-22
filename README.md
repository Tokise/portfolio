# Modern Portfolio Website

A modern and responsive portfolio website built with React, Vite, and Emotion. Features smooth animations, a clean design, and an intuitive user interface.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ✨ Smooth animations using Framer Motion
- 🎯 Interactive UI elements
- 📝 Contact form
- 🌓 Optimized performance

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
```

2. Navigate to the project directory:
```bash
cd my-portfolio
```

3. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

You can deploy this portfolio to various platforms:

### Vercel
1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy

### Netlify
1. Push your code to GitHub
2. Import your repository on Netlify
3. Deploy

## Customization

### Adding Your Information
1. Update the content in each section component
2. Replace project images in the `public` directory
3. Update social media links in the Contact section
4. Modify the skills data in the Skills section

### Styling
- Global styles are in `src/App.jsx`
- Component-specific styles are in their respective files
- Color scheme can be modified by updating the color variables

## Project Structure

```
my-portfolio/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Sidebar.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Projects.jsx
│   │       ├── Skills.jsx
│   │       └── Contact.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Technologies Used

- React
- Vite
- Emotion (Styled Components)
- Framer Motion
- Font Awesome

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/my-portfolio](https://github.com/yourusername/my-portfolio)
