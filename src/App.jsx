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
  for (let i = copy.length - 1; i > 0; i--) {
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
  const shuffleTimer = useRef(null);
  const resetTimer = useRef(null);

  const clearTimers = () => {
    if (shuffleTimer.current) {
      clearTimeout(shuffleTimer.current);
      shuffleTimer.current = null;
    }
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }
  };

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
      const vol = s === "flip" || s === "shuffle" ? 1 : 0.25;
      sounds.current[s].volume = vol;
    }
    return () => {
      clearTimers();
    };
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

  const handleFlip = (type) => {
    clearTimers();
    if (type === "newGame") {
      shuffleTimer.current = setTimeout(() => {
        setSelected(shuffle(cards).slice(0, 12));
        shuffleTimer.current = null;
      }, 500);
      resetTimer.current = setTimeout(() => {
        setWin(0);
        setFlip(false);
        gameRunning.current = false;
        resetTimer.current = null;
      }, 1500);
      return;
    }
    shuffleTimer.current = setTimeout(() => {
      setSelected((prev) => shuffle(prev));
      shuffleTimer.current = null;
    }, 500);
    resetTimer.current = setTimeout(() => {
      setFlip(false);
      gameRunning.current = false;
      resetTimer.current = null;
    }, 750);
  };

  const playRound = (card) => {
    if (gameRunning.current) return;
    gameRunning.current = true;
    if (picked.current.has(card.id)) {
      setBest((prev) => Math.max(prev, score));
      setScore(0);
      setWin(-1);
      setFlip(true);
      playSfx("sad");
      playSfx("shuffle");
      picked.current.clear();
      handleFlip("newGame");
      return;
    }
    const nextScore = score + 1;
    setScore(nextScore);
    if (nextScore === 12) {
      setWin(1);
      setFlip(true);
      playSfx("laugh");
      playSfx("shuffle");
      picked.current.clear();
      handleFlip("newGame");
      return;
    }
    picked.current.add(card.id);
    setFlip(true);
    playSfx("happy");
    playSfx("flip");
    handleFlip("flip");
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${arena})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.15),rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.17))]" />
      <Sound sound={sound} setSound={setSound} />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[92rem] flex-col px-3 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Score cur={score} best={best} win={win} />
          <main className="mt-4 rounded-3xl border border-amber-300/50 bg-gradient-to-b from-amber-200/35 via-amber-100/25 to-amber-200/30 p-3 sm:p-4 md:p-6 backdrop-blur-md shadow-[0_24px_40px_rgba(0,0,0,0.32)]">
            <CardGrid playRound={playRound} flipped={flip} cards={selected} />
          </main>
        </div>
      </div>
    </div>
  );
};
