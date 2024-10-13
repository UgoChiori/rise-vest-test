---

# Rise Test Landing Page

A responsive, multi-section landing page for the Rise platform. This project showcases the company's services, providing users with an engaging and informative experience across all device sizes.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Development Approach](#development-approach)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [Contact](#contact)

## Overview

The **Rise Landing Page** project is a modern, mobile-first landing page that highlights the core values and offerings of Rise. It provides key information such as services, product features, and ways to get involved, all while ensuring a smooth and responsive user experience. The design focuses on readability, visual appeal, and ease of navigation.

## Features

- **Multi-section Layout**: Separate sections for `About`, `Products`, `Investment`, `FAQs`, `Partners`, `Testimonials`, and more.
- **Responsive Footer**: Dynamically adjusts based on screen size to ensure content remains clear on both mobile and desktop views.
- **Interactive Elements**: Clickable sections and hover animations to keep users engaged.
- **Mobile-first Design**: Optimized for mobile devices without compromising the desktop experience.
- **Clean UI and UX**: Modern layout with intuitive navigation, making it easy for users to understand and interact with the platform.

## Technologies Used

- **React**: A powerful JavaScript library for building fast and responsive user interfaces.
- **TypeScript**: Adds type safety to JavaScript, improving code quality and reducing potential bugs.
- **Tailwind CSS & Custom CSS**: Tailwind provides utility-first CSS styling, while custom CSS files (e.g., `herosection.css`, `features.css`, etc.) enhance the unique design.
- **CSS Grid & Flexbox**: For precise, responsive layouts that adapt seamlessly across devices.
- **GitHub Pages**: For hosting the landing page online.

## Installation

To run the Rise Landing Page project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/UgoChiori/rise-vest-test.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd rise-vest-test
   ```

3. **Install dependencies**:
   Ensure Node.js is installed, then run:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build the project for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
rise-vest-test/
├── public/
│   └── assets/                  
├── src/
│   ├── components/              
│   │   ├── AppPromotionSection.tsx 
│   │   ├── AssetClasses.tsx      
│   │   ├── CommunitySection.tsx  
│   │   ├── Features.tsx         
│   │   ├── Footer.tsx         
│   │   ├── Header.tsx           
│   │   ├── Hero.tsx              
│   │   ├── Partners.tsx         
│   │   ├── RegulationSection.tsx 
│   │   ├── SaveFuture.tsx       
│   │   ├── Testimonials.tsx     
│   ├── pages/
│   │   ├── index.tsx            
│   ├── styles/
│   │   ├── appromo.css           
│   │   ├── features.css          
│   │   ├── herosection.css       
│   │   ├── regulationsection.css 
│   ├── App.tsx                   # Root component
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  
└── README.md                     
```

## Development Approach

### Key Sections

1. **Header**: 
   - Contains the Rise logo and a navigation bar with links to different sections of the page.
   - On mobile, the navigation collapses into a hamburger menu for easy access.
   
2. **Hero Section**:
   - A visually appealing banner that introduces Rise and its core mission.
   - Features a bold call-to-action button that directs users to learn more or get started.
   - Custom styling is applied through `herosection.css`.

3. **App Promotion Section**:
   - A section that promotes the Rise app, showcasing its benefits and features.
   - Styled using `appromo.css`.

4. **Product and Asset Classes**:
   - Showcases the key offerings of Rise, including various asset classes for investment.
   - Styled using Tailwind CSS and custom styles in `features.css`.

5. **Community Section**:
   - Highlights the importance of the Rise community and its user base.

6. **Regulation Section**:
   - A section that focuses on Rise's regulatory compliance and user safety.
   - Styled using `regulationsection.css`.

7. **Partners**:
   - Displays the companies and platforms that Rise partners with.

8. **Testimonials**:
   - User reviews and experiences with the Rise platform, adding social proof.

9. **Footer**:
   - Contains links to social media, contact information, and other key resources.
   - Stacks neatly on mobile while keeping its four-column layout on desktop.

### Styling

- **Tailwind CSS**: Provides the flexibility to apply styles directly in JSX, reducing the need for separate CSS files. Tailwind utilities allow quick adjustments to padding, margins, colors, and layouts for both desktop and mobile.
  
- **Custom CSS**: Additional styling for certain sections is handled using CSS files like `herosection.css`, `features.css`, and `regulationsection.css` to enhance the visual appeal and maintain consistency.

- **Grid and Flexbox Layouts**: Used to maintain clean alignment across sections while ensuring responsiveness.

## Responsive Design

### Desktop View

- **Header**: Horizontal navigation bar.
- **Main Sections**: Spread out across the page with ample whitespace.
- **Footer**: Four columns, showing the logo and key links side by side.

### Mobile View

- **Header**: Converts into a hamburger menu for ease of access.
- **Main Sections**: Stack vertically for better readability.
- **Footer**: Columns stack vertically, with key information still accessible but reorganized for mobile screens.

This design ensures that no matter the screen size, users will experience an optimized layout.

### Usage

Once the development server is running, you can access the application in your browser at `http://localhost:5173`. It is also hosted at `(https://rise-vest-test.vercel.app/#)`. 
### Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request or open an issue.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.


---
