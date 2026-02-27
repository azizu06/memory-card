import back from "../assets/back.png";

export const Card = ({ data, flipped, playRound }) => {
  return (
    <div
      className="bg-white rounded-lg w-48 h-52 p-2 [perspective:1000px]"
      onClick={() => playRound(data)}
    >
      <div
        className={`p-3 relative w-full h-full duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        <div
          style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}
          className="absolute inset-0 rounded-lg grid place-items-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
        ></div>
        <div className="absolute inset-0 grid place-items-center rounded-lg [backface-visibility:hidden] gap-5 p-2 border bg-slate-400">
          <img
            src={data.img}
            alt="Character"
            className="w-32 h-32 object-cover"
          />
          <p className="text-center leading-tight min-h-[1rem] flex items-center justify-center">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};
