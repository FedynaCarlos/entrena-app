import exercises from "../../data/exercises";
import ExerciseCard from "../../components/exercises/ExerciseCard/ExerciseCard";

function Workout() {
  return (
    <main>
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