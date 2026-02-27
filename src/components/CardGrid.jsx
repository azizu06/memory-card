import { Card } from "./card";
export const CardGrid = ({ cards, flipped, playRound }) => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center px-2 py-2 sm:gap-4 md:gap-5">
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
