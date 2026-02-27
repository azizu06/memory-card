import { Card } from "./card";
export const CardGrid = ({ cards, flipped, playRound }) => {
  return (
    <div className="grid gap-6 border-orange-500 border-[6px] grid-cols-4 grid-rows-3 justify-items-center justify-center ">
      {cards.map((card) => (
        <Card
          key={card.id}
          data={card}
          flipped={flipped}
          playRound={playRound}
        />
      ))}
    </div>
  );
};
