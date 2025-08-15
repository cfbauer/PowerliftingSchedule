<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Powerlifting Schedule Calculator

This is a React application that calculates powerlifting weights based on the GZCL (GeminiZCL) 16-week program. The app allows users to input their goal weights for different lifts and automatically calculates the training weights for each exercise based on predefined percentages.

## Key Features
- Input fields for 4 base numbers (goal weights): Competition Squat, Sumo Deadlift, Bench Press, and Overhead Press
- Automatic weight calculation based on percentages for each exercise
- Display of weekly workout schedules in a structured table format
- Responsive design with dark/light theme support

## Technical Stack
- React 18 with functional components and hooks
- Vite for build tooling and development server
- Vanilla CSS with custom styling (no external UI libraries)
- Modern JavaScript (ES6+)

## Code Style Guidelines
- Use functional components with React hooks
- Prefer const for immutable values, let for mutable variables
- Use arrow functions for inline functions
- Implement responsive design patterns
- Keep components modular and reusable
- Use semantic HTML elements
- Follow accessibility best practices

## Project Structure
- `src/App.jsx` - Main application component with workout schedule logic
- `src/main.jsx` - React entry point
- `src/index.css` - Global styles and component-specific CSS
- `index.html` - HTML template
- `vite.config.js` - Vite configuration

When working on this project, focus on maintaining clean, readable code that follows React best practices and ensures the weight calculations are accurate and user-friendly.
