import { useState, useEffect } from "react";
import menuSfx from "./assets/menu.ogg";
import thumbsSfx from "./assets/thumbsUp.mp3";
import sadSfx from "./assets/sad.mp3";
import arena from "./assets/arena.png";
import { Score } from "./components/Score";
import { CardGrid } from "./components/CardGrid";
import { Sound } from "./components/Sound";

const shuffle = (cards) => {
  const copy = [...cards];
  for (let i = copy.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const App = () => {
  const [sound, setSound] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [flip, setFlip] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/cards.json")
      .then((res) => res.json())
      .then((data) => setCards(shuffle(data).slice(0, 12)));
  }, []);

  return (
    <div
      className={`min-h-screen bg-cover bg-no-repeat bg-center bg-[url(${arena})]`}
    >
      <Sound />
      <div className="grid grid-rows-2 border min-h-screen gap-8">
        <Score />
        <CardGrid />
      </div>
    </div>
  );
};
