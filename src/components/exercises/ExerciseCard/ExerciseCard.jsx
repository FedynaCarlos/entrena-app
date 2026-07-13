import "./ExerciseCard.css";

function ExerciseCard({ exercise }) {
  return (
    <article className="exercise-card">
      <h2>{exercise.name}</h2>

      <div className="exercise-info">
        <p>🏋️ Series: {exercise.sets}</p>

        <p>🔁 Repeticiones: {exercise.reps}</p>

        <p>⏱ Descanso: {exercise.rest}</p>
      </div>

      <button className="exercise-button">
        ▶ Comenzar ejercicio
      </button>
    </article>
  );
}

export default ExerciseCard;