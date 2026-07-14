import "./ExerciseCard.css";

function ExerciseCard({ exercise, completed, onToggle }) {
    console.log(completedExercises);
    return (
        <article
            className={
                completed ? "exercise-card completed" : "exercise-card"
            }
        >
            <h2>{exercise.name}</h2>

            <div className="exercise-info">
                <p>🏋️ Series: {exercise.sets}</p>
                <p>🔁 Repeticiones: {exercise.reps}</p>
                <p>⏱ Descanso: {exercise.rest}</p>
            </div>

            <button
                className="exercise-button"
                onClick={onToggle}
            >
                {completed
                    ? "✅ Completado"
                    : "▶ Comenzar ejercicio"}
            </button>
        </article>
    );
}

export default ExerciseCard;