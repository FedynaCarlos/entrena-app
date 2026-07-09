import "./WorkoutCard.css";
import { Link } from "react-router-dom";
import workout from "../../../data/workout";

function WorkoutCard() {
  return (
    <section className="workout-card">
      <h2>Entrenamiento de hoy</h2>

      <h3>{workout.title}</h3>

      <p>⏱ {workout.duration}</p>

      <p>🏋 {workout.exercises} ejercicios</p>

      <Link to="/workout">
        <button>Comenzar</button>
      </Link>
    </section>
  );
}

export default WorkoutCard;