import { useState, useEffect, useRef } from "react";
import menuSfx from "./assets/menu.ogg";
import sadSfx from "./assets/sad.mp3";
import laughSfx from "./assets/laugh.mp3";
import happySfx from "./assets/happy.mp3";
import flipSfx from "./assets/flip.mp3";
import shuffleSfx from "./assets/shuffle.mp3";
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
  const [win, setWin] = useState(0);
  const [flip, setFlip] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const picked = useRef(new Set());
  const gameRunning = useRef(false);
  const sounds = useRef({});

  useEffect(() => {
    fetch("/cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
    const sfxFiles = {
      menu: menuSfx,
      sad: sadSfx,
      laugh: laughSfx,
      happy: happySfx,
      flip: flipSfx,
      shuffle: shuffleSfx,
    };
    for (const s in sfxFiles) {
      sounds.current[s] = new Audio(sfxFiles[s]);
      sounds.current[s].volume = 0.5;
    }
  }, []);

  useEffect(() => {
    setSelected(shuffle(cards).slice(0, 12));
  }, [cards]);

  useEffect(() => {
    if (!sound) return;
    const sfx = sounds.current["menu"];
    sfx.loop = true;
    sfx.play().catch(() => {});
    return () => {
      sfx.pause();
      sfx.currentTime = 0;
    };
  }, [sound]);

  const playSfx = (audio) => {
    if (!sound) return;
    const sfx = sounds.current[audio];
    if (!sfx) return;
    sfx.currentTime = 0;
    sfx.play().catch(() => {});
  };

  const playRound = (card) => {
    if (gameRunning.current) return;
    if (picked.current.has(card.id)) {
      setBest(Math.max(best, score));
      setScore(0);
      setWin(-1);
      playSfx("sad");
      picked.current.clear();
      setSelected(shuffle(cards).slice(0, 12));
    } else {
      gameRunning.current = true;
      setScore((s) => s + 1);
      if (score === 12) {
        setWin(1);
        playSfx("laugh");
        picked.current.clear();
        setSelected(shuffle(cards).slice(0, 12));
      } else {
        picked.current.add(card.id);
        playSfx("happy");
        shuffle(selected);
      }
      gameRunning.current = false;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-center w-full flex flex-col"
      style={{ backgroundImage: `url(${arena})` }}
    >
      <Sound sound={sound} setSound={setSound} />
      <div className=" min-h-screen flex flex-1 flex-col border-red-700 border-[6px] gap-12 w-full items-center">
        <Score cur={score} best={best} win={win} setWin={setWin} />
        <CardGrid playRound={playRound} flipped={flip} cards={selected} />
      </div>
    </div>
  );
};
