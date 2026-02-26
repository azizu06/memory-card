import { useState } from "react";
import back from "./assets/back.png";

export const Card = ({ isFlipped, card }) => {
  return (
    <div className="bg-white border">
      <div className={isFlipped ? `bg-[url(${back})] p-4` : "p-4 bg-slate-400"}>
        <div className="flex flex-col gap-4 p-2">
          <img src={card.img} alt="Character" className="w-4 h-6" />
          <p>{card.name}</p>
        </div>
      </div>
    </div>
  );
};
