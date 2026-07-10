import "./ExerciseCard.css";

function ExerciseCard({ exercise }) {
  return (
    <article className="exercise-card">
      <h2>{exercise.name}</h2>

      <p>
        <strong>Series:</strong> {exercise.sets}
      </p>

      <p>
        <strong>Repeticiones:</strong> {exercise.reps}
      </p>

      <p>
        <strong>Descanso:</strong> {exercise.rest}
      </p>
    </article>
  );
}

export default ExerciseCard;