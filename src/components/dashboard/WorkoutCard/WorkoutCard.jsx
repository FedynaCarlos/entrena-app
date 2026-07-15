import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

<button
  className="start-button"
  onClick={() => navigate("/workout")}
>
  Comenzar entrenamiento
</button>