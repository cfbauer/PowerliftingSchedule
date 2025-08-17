import React, { useState, useEffect } from 'react'

// Define the workout schedule data based on your table structure
const workoutSchedule = {
  'Phase 1: Accumulation & Strength Base (Weeks 1-8)': [
    {
      week: 'Week 1',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
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
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
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
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
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
    },
    {
      week: 'Week 4 (Deload)',
      day1: {
        title: 'Day 1: Deload',
        exercises: [
          { name: 'Squat', percentage: 70, trainingMax: 1, sets: '3 reps x 3 sets' },
          { name: 'LP/SSB Squat', percentage: 50, trainingMax: 1, sets: '8 reps x 3 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '2 x 10-12 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Deload',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 70, trainingMax: 2, sets: '3 reps x 3 sets' },
          { name: 'OHP', percentage: 50, trainingMax: 4, sets: '8 reps x 3 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '2 sets x low reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Deload',
        exercises: [
          { name: 'BP', percentage: 70, trainingMax: 3, sets: '3 reps x 3 sets' },
          { name: 'Mach/DB Inc Press', percentage: 50, trainingMax: 3, sets: '8 reps x 3 sets' },
          { name: 'Comp Squat', percentage: 50, trainingMax: 1, sets: '5 reps x 2 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' }
        ]
      }
    },
    {
      week: 'Week 5',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
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
      week: 'Week 6',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
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
      week: 'Week 7',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
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
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 8 (Deload)',
      day1: {
        title: 'Day 1: Deload',
        exercises: [
          { name: 'Squat', percentage: 70, trainingMax: 1, sets: '3 reps x 3 sets' },
          { name: 'LP/SSB Squat', percentage: 50, trainingMax: 1, sets: '8 reps x 3 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '2 x 10-12 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Deload',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 70, trainingMax: 2, sets: '3 reps x 3 sets' },
          { name: 'OHP', percentage: 50, trainingMax: 4, sets: '8 reps x 3 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '2 sets x low reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Deload',
        exercises: [
          { name: 'BP', percentage: 70, trainingMax: 3, sets: '3 reps x 3 sets' },
          { name: 'Mach/DB Inc Press', percentage: 50, trainingMax: 3, sets: '8 reps x 3 sets' },
          { name: 'Comp Squat', percentage: 50, trainingMax: 1, sets: '5 reps x 2 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '2 x 15-20 reps' }
        ]
      }
    }
  ],
  'Phase 2: Pre-Peak Intensification (Weeks 9-12)': [
    {
      week: 'Week 9',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
        exercises: [
          { name: 'Squat', percentage: 92.5, trainingMax: 1, sets: '1 rep x 4 sets +' },
          { name: 'LP/SSB Squat', percentage: 80, trainingMax: 1, sets: '3 reps x 5 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 92.5, trainingMax: 2, sets: '1 rep x 4 sets +' },
          { name: 'OHP', percentage: 80, trainingMax: 4, sets: '3 reps x 5 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 92.5, trainingMax: 3, sets: '1 rep x 4 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 80, trainingMax: 3, sets: '3 reps x 5 sets' },
          { name: 'Comp Squat', percentage: 75, trainingMax: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 10',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
        exercises: [
          { name: 'Squat', percentage: 95, trainingMax: 1, sets: '1 rep x 3 sets +' },
          { name: 'LP/SSB Squat', percentage: 82.5, trainingMax: 1, sets: '2 reps x 6 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 95, trainingMax: 2, sets: '1 rep x 3 sets +' },
          { name: 'OHP', percentage: 82.5, trainingMax: 4, sets: '2 reps x 6 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 95, trainingMax: 3, sets: '1 rep x 3 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 82.5, trainingMax: 3, sets: '2 reps x 6 sets' },
          { name: 'Comp Squat', percentage: 80, trainingMax: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 11',
      day1: {
        title: 'Day 1: Heavy Lower & Upper (Squat Focus)',
        exercises: [
          { name: 'Squat', percentage: 97.5, trainingMax: 1, sets: '1 rep x 2 sets +' },
          { name: 'LP/SSB Squat', percentage: 85, trainingMax: 1, sets: '2 reps x 5 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '3 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Hamstring Curls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Heavy Pull & Press (Sumo Deadlift Focus)',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 97.5, trainingMax: 2, sets: '1 rep x 2 sets +' },
          { name: 'OHP', percentage: 85, trainingMax: 4, sets: '2 reps x 5 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '3 sets x max reps' },
          { name: 'Face Pulls', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Triceps Pushdowns', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Upper & Lower Volume/Accessory (Bench Focus)',
        exercises: [
          { name: 'BP', percentage: 97.5, trainingMax: 3, sets: '1 rep x 2 sets +' },
          { name: 'Mach/DB Inc Press', percentage: 85, trainingMax: 3, sets: '2 reps x 5 sets' },
          { name: 'Comp Squat', percentage: 82.5, trainingMax: 1, sets: '5 reps x 3 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' },
          { name: 'Lateral Raises', percentage: null, trainingMax: null, sets: '3 x 12-15 reps' }
        ]
      }
    },
    {
      week: 'Week 12 (Deload)',
      day1: {
        title: 'Day 1: Deload/Taper',
        exercises: [
          { name: 'Squat', percentage: 75, trainingMax: 1, sets: '2 reps x 2 sets' },
          { name: 'LP/SSB Squat', percentage: 55, trainingMax: 1, sets: '6 reps x 2 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '2 x 8-10 reps' },
          { name: 'Leg Extensions', percentage: null, trainingMax: null, sets: '2 x 12-15 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Deload/Taper',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 75, trainingMax: 2, sets: '2 reps x 2 sets' },
          { name: 'OHP', percentage: 55, trainingMax: 4, sets: '6 reps x 2 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '2 sets x low reps' }
        ]
      },
      day3: {
        title: 'Day 3: Deload/Taper',
        exercises: [
          { name: 'BP', percentage: 75, trainingMax: 3, sets: '2 reps x 2 sets' },
          { name: 'Mach/DB Inc Press', percentage: 55, trainingMax: 3, sets: '6 reps x 2 sets' },
          { name: 'Pec Fly', percentage: null, trainingMax: null, sets: '2 x 12-15 reps' }
        ]
      }
    }
  ],
  'Phase 3: Peaking, Tapering & Testing (Weeks 13-16)': [
    {
      week: 'Week 13',
      day1: {
        title: 'Day 1: Squat AMRAP',
        exercises: [
          { name: 'Squat', percentage: 100, trainingMax: 1, sets: 'Warm up to 1+ AMRAP' },
          { name: 'Squat (Back-off)', percentage: 85, trainingMax: 1, sets: '2-3 reps x 2 sets' },
          { name: 'Cable Rows', percentage: null, trainingMax: null, sets: '1 x 8-10 reps' }
        ]
      },
      day2: {
        title: 'Day 2: Bench AMRAP',
        exercises: [
          { name: 'BP', percentage: 100, trainingMax: 3, sets: 'Warm up to 1+ AMRAP' },
          { name: 'BP (Back-off)', percentage: 85, trainingMax: 3, sets: '2-3 reps x 2 sets' },
          { name: 'Pull-ups', percentage: null, trainingMax: null, sets: '1 x 8-10 reps' }
        ]
      },
      day3: {
        title: 'Day 3: Sumo Deadlift AMRAP',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 100, trainingMax: 2, sets: 'Warm up to 1+ AMRAP' },
          { name: 'Sumo Deadlift (Back-off)', percentage: 85, trainingMax: 2, sets: '2-3 reps x 2 sets' }
        ]
      }
    },
    {
      week: 'Week 14 (Taper)',
      day1: {
        title: 'Day 1: Light Taper',
        exercises: [
          { name: 'Squat', percentage: 70, trainingMax: 1, sets: '1 rep x 2 sets' }
        ]
      },
      day2: {
        title: 'Day 2: Light Taper',
        exercises: [
          { name: 'BP', percentage: 70, trainingMax: 3, sets: '1 rep x 2 sets' }
        ]
      },
      day3: {
        title: 'Day 3: Light Taper',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 70, trainingMax: 2, sets: '1 rep x 2 sets' }
        ]
      }
    },
    {
      week: 'Week 15 (Test Week)',
      day1: {
        title: 'Day 1: Test Squat 1RM',
        exercises: [
          { name: 'Squat', percentage: 100, trainingMax: 1, sets: 'Work up to 1RM' }
        ]
      },
      day2: {
        title: 'Day 2: Test Bench Press 1RM',
        exercises: [
          { name: 'Bench Press', percentage: 100, trainingMax: 3, sets: 'Work up to 1RM' }
        ]
      },
      day3: {
        title: 'Day 3: Test Sumo Deadlift 1RM',
        exercises: [
          { name: 'Sumo Deadlift', percentage: 100, trainingMax: 2, sets: 'Work up to 1RM' }
        ]
      }
    }
  ]
}

function App() {
  const [trainingMaxs, setTrainingMaxs] = useState({
    1: 280, // Competition Squat
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
    // Note: Week 13 back-off sets have a special calculation not implemented here.
    // It's based on the AMRAP set's weight, not the training max.
    // A note is added in the UI instead.
    return (trainingMaxs[trainingMax] * (percentage / 100)).toFixed(1)
  }

  const DayCard = ({ day }) => (
    <div className="day-section">
      <h4>{day.title}</h4>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets/Reps</th>
            <th>Weight (lbs)</th>
          </tr>
        </thead>
        <tbody>
          {day.exercises.map((exercise, index) => (
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
  );

  const WeekCard = ({ weekData }) => {
    // Dynamically find all 'day' properties in the week object
    const days = Object.keys(weekData).filter(key => key.startsWith('day')).sort();

    return (
      <div className="week-card">
        <h3 className="week-title">{weekData.week}</h3>
        {days.map(dayKey => (
          <DayCard key={dayKey} day={weekData[dayKey]} />
        ))}
        {weekData.week === 'Week 13' && (
          <p className="week-note">
            <strong>Note:</strong> Back-off set weights are 85% of the top AMRAP set weight achieved that day, not the training max.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>
        GeminiZCL Powerlifting Calculator
      </h1>

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
        <div key={phaseName} className="phase-section">
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
