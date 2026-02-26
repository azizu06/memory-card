import kingUp from "./assets/kingUp.png";
import kingSad from "./assets/kingSad.png";

export const Score = ({ cur, best, gameOver }) => {
  return (
    <div className="flex gap-4 justify-center">
      <div>
        <img
          src={gameOver ? kingSad : kingUp}
          alt="Happy King"
          className="w-7 h-7"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1>Score: {cur}</h1>
        <h1>High Score: {best}</h1>
      </div>
    </div>
  );
};
