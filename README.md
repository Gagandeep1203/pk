# Bandy and Moot - Creative Services Website

A modern, responsive photography and creative services website built with React and Vite, featuring beautiful animations, glassmorphism effects, and a cohesive purple gradient theme.

## Features

- **Modern Design**: Purple gradient theme with glassmorphism effects
- **Animated Gallery**: Scroll-triggered animations with scattered image layout
- **Contact Form**: EmailJS integration for booking requests
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Scroll Progress**: Vertical progress indicator with checkpoints
- **Interactive Elements**: Hover effects and smooth animations throughout

## Pages

- **Home**: Hero section with animated background
- **About Us**: Company information with reveal animations
- **Services**: Service offerings with interactive cards
- **Gallery**: Animated image collage with scroll-triggered effects
- **Blogs**: Blog section with modern styling
- **Our Clients**: Client showcase
- **Our Partners**: Partner information
- **Career**: Career opportunities
- **Book Now**: Contact form with EmailJS integration

## Technologies Used

- React 19
- Vite
- EmailJS for contact forms
- CSS3 with modern features (backdrop-filter, grid, flexbox)
- Custom hooks for scroll animations

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your EmailJS credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Run development server: `npm run dev`
5. Build for production: `npm run build`

## Environment Variables

Make sure to set up your EmailJS credentials in the `.env` file:
- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID  
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

## Customization

The website uses a consistent purple gradient theme (`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`) throughout all pages. You can customize colors, animations, and content by editing the respective CSS and JSX files.

## License

This project is private and proprietary.