import { useState } from "react";
import exercises from "../../data/exercises";
import ExerciseCard from "../../components/exercises/ExerciseCard/ExerciseCard";
import "./Workout.css";
function Workout() {
    const [completedExercises, setCompletedExercises] = useState([]);

    function handleComplete(id) {
        console.log("Click en:", id);
        setCompletedExercises((prev) => {
            if (prev.includes(id)) {
                return prev.filter((exerciseId) => exerciseId !== id);
            }

            return [...prev, id];
        });
    }

    return (
        <main className="workout-page">
            <h1>Entrenamiento de hoy</h1>
            <h2 style={{ color: "red", textAlign: "center" }}>
                TEST {completedExercises.length} / {exercises.length}
            </h2>
            {exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    completed={completedExercises.includes(exercise.id)}
                    onToggle={() => handleComplete(exercise.id)}
                />
            ))}
        </main>
    );
}

export default Workout;