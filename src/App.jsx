import { useState, useEffect } from "react";
import menuSfx from "./assets/menu.ogg";
import thumbsSfx from "./assets/thumbsUp.mp3";
import sadSfx from "./assets/sad.mp3";
import arena from "./assets/arena.png";

import { CardGrid } from "./components/CardGrid";

export const App = () => {
  const [sound, setSound] = useState(false);
  const [flip, setFlip] = useState(false);

  return <div></div>;
};
