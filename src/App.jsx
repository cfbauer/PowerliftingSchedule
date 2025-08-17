import React, { useState, useEffect } from 'react'

// Define the workout schedule data based on your table structure
const workoutSchedule = {
  'Phase 1: Accumulation & Strength Base (Weeks 1-8)': [
    {
      week: 'Week 1',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squatuat Focus)',
        exercises: [
          { name: 'Squat', percentage: 85, baseNumber: 1, sets: '3 reps x 5 sets +' },
          { name: 'LP/SSB Squat', percentage: 65, baseNumber: 1, sets: '6 reps x 4 sets' },
          { name: 'Cable Rows', percentage: null, baseNumber: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 85, baseNumber: 2, sets: '3 reps x 5 sets +' },
          { name: 'OHP', percentage: 65, baseNumber: 4, sets: '6 reps x 4 sets' },
          { name: 'Pull-ups', percentage: null, baseNumber: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 85, baseNumber: 3, sets: '3 reps x 5 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 65, baseNumber: 3, sets: '6 reps x 4 sets' },
          { name: 'Comp Squat', percentage: 60, baseNumber: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 2',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squatuat Focus)',
        exercises: [
          { name: 'Squat', percentage: 87.5, baseNumber: 1, sets: '2 reps x 5 sets +' },
          { name: 'LP/SSB Squat', percentage: 70, baseNumber: 1, sets: '5 reps x 5 sets' },
          { name: 'Cable Rows', percentage: null, baseNumber: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 87.5, baseNumber: 2, sets: '2 reps x 5 sets +' },
          { name: 'OHP', percentage: 70, baseNumber: 4, sets: '5 reps x 5 sets' },
          { name: 'Pull-ups', percentage: null, baseNumber: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 87.5, baseNumber: 3, sets: '2 reps x 5 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 70, baseNumber: 3, sets: '5 reps x 5 sets' },
          { name: 'Comp Squat', percentage: 65, baseNumber: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 3',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squatuat Focus)',
        exercises: [
          { name: 'Squat', percentage: 90, baseNumber: 1, sets: '1 rep x 5 sets +' },
          { name: 'LP/SSB Squat', percentage: 75, baseNumber: 1, sets: '4 reps x 5 sets' },
          { name: 'Cable Rows', percentage: null, baseNumber: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 90, baseNumber: 2, sets: '1 rep x 5 sets +' },
          { name: 'OHP', percentage: 75, baseNumber: 4, sets: '4 reps x 5 sets' },
          { name: 'Pull-ups', percentage: null, baseNumber: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 90, baseNumber: 3, sets: '1 rep x 5 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 75, baseNumber: 3, sets: '4 reps x 5 sets' },
          { name: 'Comp Squat', percentage: 70, baseNumber: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, baseNumber: null, sets: '3 x 12-15 reps' }
        ]
      }
    }
  ]
}

function App() {
  const [baseNumbers, setBaseNumbers] = useState({
    1: 280, // Competition Squatuat
    2: 315, // Sumo Deadlift
    3: 210, // Bench Press
    4: 135  // Overhead Press
  })

  const handleBaseNumberChange = (baseNumber, value) => {
    setBaseNumbers(prev => ({
      ...prev,
      [baseNumber]: parseFloat(value) || 0
    }))
  }

  const calculateWeight = (percentage, baseNumber) => {
    if (!percentage || !baseNumber || !baseNumbers[baseNumber]) {
      return '-'
    }
    return (baseNumbers[baseNumber] * (percentage / 100)).toFixed(1)
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
                  {calculateWeight(exercise.percentage, exercise.baseNumber)}
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
                  {calculateWeight(exercise.percentage, exercise.baseNumber)}
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
                  {calculateWeight(exercise.percentage, exercise.baseNumber)}
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
        GeminiZCL 16 Week Powerlifting Calculator
      </h1>

      {/* Base Number Inputs */}
      <div className="input-grid">
        <div className="input-group">
          <label htmlFor="base1">Competition Squatuat (Goal Weight):</label>
          <input
            type="number"
            id="base1"
            value={baseNumbers[1]}
            onChange={(e) => handleBaseNumberChange(1, e.target.value)}
            placeholder="280"
          />
        </div>
        <div className="input-group">
          <label htmlFor="base2">Sumo Deadlift (Goal Weight):</label>
          <input
            type="number"
            id="base2"
            value={baseNumbers[2]}
            onChange={(e) => handleBaseNumberChange(2, e.target.value)}
            placeholder="315"
          />
        </div>
        <div className="input-group">
          <label htmlFor="base3">Bench Press (Goal Weight):</label>
          <input
            type="number"
            id="base3"
            value={baseNumbers[3]}
            onChange={(e) => handleBaseNumberChange(3, e.target.value)}
            placeholder="210"
          />
        </div>
        <div className="input-group">
          <label htmlFor="base4">Overhead Press (Goal Weight):</label>
          <input
            type="number"
            id="base4"
            value={baseNumbers[4]}
            onChange={(e) => handleBaseNumberChange(4, e.target.value)}
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

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
        <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
          <strong>Note:</strong> Percentages are based on your Goal Weight (GW). 
          The "+" indicates an AMRAP (As Many Reps As Possible) on the final set. 
          For T3 exercises without percentages, use appropriate weight for the rep range.
        </p>
      </div>
    </div>
  )
}

export default App
