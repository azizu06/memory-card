import back from "../assets/back.png";

export const Card = ({ data, flipped, playRound }) => {
  return (
    <div
      className="bg-white rounded-lg min-w-0 p-2"
      onClick={() => playRound(data.id)}
    >
      <div
        style={
          flipped
            ? {
                backgroundImage: `url(${back})`,
                backgroundSize: "cover",
              }
            : null
        }
        className={!flipped ? "p-2 bg-slate-400" : "p-8"}
      >
        {!flipped && (
          <div className="flex flex-col gap-4 p-2 items-center border">
            <img
              src={data.img}
              alt="Character"
              className="w-28 h-28 object-cover"
            />
            <p>{data.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};
