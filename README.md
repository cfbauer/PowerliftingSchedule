# Powerlifting Schedule Calculator

A React-based web application for calculating powerlifting training weights based on the GeminiZCL 16-week program. This app helps powerlifters automatically calculate their training weights based on their goal weights and the GZCL methodology.

## Features

- **Goal Weight Input**: Enter your goal weights for Competition Squat, Sumo Deadlift, Bench Press, and Overhead Press
- **Automatic Calculations**: Weights are automatically calculated based on predefined percentages for each exercise
- **Weekly Schedule Display**: View your training schedule organized by weeks and workout days
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Supports both dark and light color schemes based on system preference

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **Enter Goal Weights**: Input your goal weights (typically your 2-3 rep max) for each of the four main lifts
2. **View Calculated Weights**: The app automatically calculates training weights based on the percentages defined in the GZCL program
3. **Follow the Schedule**: Use the displayed weights for your training sessions according to the week and day structure

## Program Structure

The app currently includes Phase 1 (Weeks 1-3) of the GeminiZCL program:

- **Week 1**: 85% for 3 reps x 5 sets
- **Week 2**: 87.5% for 2 reps x 5 sets  
- **Week 3**: 90% for 1 rep x 5 sets

Each week includes three training days:
- **Day 1**: Heavy Lower & Upper (Squat Focus)
- **Day 2**: Heavy Pull & Press (Sumo Deadlift Focus)
- **Day 3**: Upper & Lower Volume/Accessory (Bench Focus)

## Customization

The workout schedule is defined in the `workoutSchedule` object in `src/App.jsx`. You can:
- Add more weeks/phases
- Modify percentages
- Change exercise names
- Add or remove exercises

## Technologies Used

- React 18
- Vite (build tool)
- Modern JavaScript (ES6+)
- CSS3 with custom properties
- Responsive design principles

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the application.

## License

This project is licensed under the ISC License.
