import back from "../assets/back.png";

export const Card = ({ data, flipped, playRound }) => {
  return (
    <div
      className="group relative h-[14rem] w-[10.5rem] cursor-pointer rounded-2xl bg-white/10 p-2 shadow-[0_8px_22px_rgba(0,0,0,0.35)] transition-all duration-200 will-change-transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_14px_28px_rgba(0,0,0,0.35)] active:scale-95 [perspective:1200px] sm:h-[15.2rem] sm:w-[11.25rem] md:h-[15.75rem] md:w-[12rem] lg:w-[12.5rem] lg:h-[16.5rem]"
      onClick={() => playRound(data)}
    >
      <div
        className={`relative h-full w-full rounded-xl [transform-style:preserve-3d] p-2 duration-500 transition-transform ease-in-out ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 rounded-xl grid place-items-center [backface-visibility:hidden] [transform:rotateY(180deg)] border border-slate-200/50 bg-slate-800/80 shadow-inner"
        ></div>
        <div className="absolute inset-0 rounded-xl border border-amber-300/60 bg-gradient-to-b from-amber-200/95 via-amber-100/95 to-amber-200/95 p-3 shadow-inner [backface-visibility:hidden] grid place-items-center gap-3">
          <img
            src={data.img}
            alt="Character"
            className="h-[7.4rem] w-[7.4rem] sm:h-[8rem] sm:w-[8rem] md:h-[8.5rem] md:w-[8.5rem] rounded-lg object-cover shadow-lg ring-1 ring-amber-900/40"
          />
          <p className="min-h-[2.25rem] w-full px-1 text-center text-[0.77rem] leading-tight font-semibold text-slate-900 sm:text-sm flex items-center justify-center">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};
