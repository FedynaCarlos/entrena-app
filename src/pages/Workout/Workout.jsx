import exercises from "../../data/exercises";
import ExerciseCard from "../../components/exercises/ExerciseCard/ExerciseCard";
import { useState } from "react";
function Workout() {
  const [completedExercises, setCompletedExercises] = useState([]);
  return (
    <main className="workout-page">
      <h1>Entrenamiento de hoy</h1>

      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
        />
      ))}
    </main>
  );
}

export default Workout;