import React, { useState, useEffect } from 'react'

// Define the workout schedule data based on your table structure
const workoutSchedule = {
  'Phase 1: Accumulation & Strength Base (Weeks 1-8)': [
    {
      week: 'Week 1',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squatuat Focus)',
        exercises: [
          { name: 'Squat', percentage: 85, trainingMax: 1, sets: '3 reps x 5 sets +' },
          { name: 'LP/SSB Squat', percentage: 65, trainingMax: 1, sets: '6 reps x 4 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 85, trainingMax: 2, sets: '3 reps x 5 sets +' },
          { name: 'OHP', percentage: 65, trainingMax: 4, sets: '6 reps x 4 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 85, trainingMax: 3, sets: '3 reps x 5 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 65, trainingMax: 3, sets: '6 reps x 4 sets' },
          { name: 'Comp Squat', percentage: 60, trainingMax: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 2',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squatuat Focus)',
        exercises: [
          { name: 'Squat', percentage: 87.5, trainingMax: 1, sets: '2 reps x 5 sets +' },
          { name: 'LP/SSB Squat', percentage: 70, trainingMax: 1, sets: '5 reps x 5 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 87.5, trainingMax: 2, sets: '2 reps x 5 sets +' },
          { name: 'OHP', percentage: 70, trainingMax: 4, sets: '5 reps x 5 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 87.5, trainingMax: 3, sets: '2 reps x 5 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 70, trainingMax: 3, sets: '5 reps x 5 sets' },
          { name: 'Comp Squat', percentage: 65, trainingMax: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 3',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squatuat Focus)',
        exercises: [
          { name: 'Squat', percentage: 90, trainingMax: 1, sets: '1 rep x 5 sets +' },
          { name: 'LP/SSB Squat', percentage: 75, trainingMax: 1, sets: '4 reps x 5 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 90, trainingMax: 2, sets: '1 rep x 5 sets +' },
          { name: 'OHP', percentage: 75, trainingMax: 4, sets: '4 reps x 5 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 90, trainingMax: 3, sets: '1 rep x 5 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 75, trainingMax: 3, sets: '4 reps x 5 sets' },
          { name: 'Comp Squat', percentage: 70, trainingMax: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      }
    }
  ]
}

function App() {
  const [trainingMaxs, setTrainingMaxs] = useState({
    1: 280, // Competition Squatuat
    2: 315, // Sumo Deadlift
    3: 210, // Bench Press
    4: 135  // Overhead Press
  })

  const handletrainingMaxChange = (trainingMax, value) => {
    setTrainingMaxs(prev => ({
      ...prev,
      [trainingMax]: parseFloat(value) || 0
    }))
  }

  const calculateWeight = (percentage, trainingMax) => {
    if (!percentage || !trainingMax || !trainingMaxs[trainingMax]) {
      return '-'
    }
    return (trainingMaxs[trainingMax] * (percentage / 100)).toFixed(1)
  }

  const WeekCard = ({ weekData }) => (
    <div className="week-card">
      <h3 className="week-title">{weekData.week}</h3>
      
      {/* Day 1 */}
      <div className="day-section">
        <h4>
          {weekData.day1.title}
        </h4>
        <table className="workout-table">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Sets/Reps</th>
              <th>Weight (lbs)</th>
            </tr>
          </thead>
          <tbody>
            {weekData.day1.exercises.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.sets}</td>
                <td className="calculated-weight">
                  {calculateWeight(exercise.percentage, exercise.trainingMax)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Day 2 */}
      <div className="day-section">
        <h4>
          {weekData.day2.title}
        </h4>
        <table className="workout-table">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Sets/Reps</th>
              <th>Weight (lbs)</th>
            </tr>
          </thead>
          <tbody>
            {weekData.day2.exercises.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.sets}</td>
                <td className="calculated-weight">
                  {calculateWeight(exercise.percentage, exercise.trainingMax)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Day 3 */}
      <div className="day-section">
        <h4>
          {weekData.day3.title}
        </h4>
        <table className="workout-table">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Sets/Reps</th>
              <th>Weight (lbs)</th>
            </tr>
          </thead>
          <tbody>
            {weekData.day3.exercises.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.sets}</td>
                <td className="calculated-weight">
                  {calculateWeight(exercise.percentage, exercise.trainingMax)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="container">
      <h1>
        GeminiZCL Powerlifting Calculator
      </h1>

      {/* Base Number Inputs */}
      <div className="input-grid">
        <div className="input-group">
          <label htmlFor="base1">Competition Squat (Training Max):</label>
          <input
            type="number"
            id="base1"
            value={trainingMaxs[1]}
            onChange={(e) => handletrainingMaxChange(1, e.target.value)}
            placeholder="280"
          />
        </div>
        <div className="input-group">
          <label htmlFor="base2">Sumo Deadlift (Training Max):</label>
          <input
            type="number"
            id="base2"
            value={trainingMaxs[2]}
            onChange={(e) => handletrainingMaxChange(2, e.target.value)}
            placeholder="315"
          />
        </div>
        <div className="input-group">
          <label htmlFor="base3">Bench Press (Training Max):</label>
          <input
            type="number"
            id="base3"
            value={trainingMaxs[3]}
            onChange={(e) => handletrainingMaxChange(3, e.target.value)}
            placeholder="210"
          />
        </div>
        <div className="input-group">
          <label htmlFor="base4">Overhead Press (Training Max):</label>
          <input
            type="number"
            id="base4"
            value={trainingMaxs[4]}
            onChange={(e) => handletrainingMaxChange(4, e.target.value)}
            placeholder="135"
          />
        </div>
      </div>

      {/* Schedule Display */}
      {Object.entries(workoutSchedule).map(([phaseName, weeks]) => (
        <div key={phaseName} style={{ marginTop: '3rem' }}>
          <h2>
            {phaseName}
          </h2>
          <div className="schedule-grid">
            {weeks.map((week, index) => (
              <WeekCard key={index} weekData={week} />
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}

export default App
