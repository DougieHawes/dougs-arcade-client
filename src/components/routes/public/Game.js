import { useParams } from "react-router-dom";

const Game = () => {
  const { title } = useParams();

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default Game;
