import sad from "../assets/sad.webp";
import happy from "../assets/happy.webp";
import laugh from "../assets/laugh.webp";

export const Score = ({ cur, best, win }) => {
  const state =
    win > 0
      ? {
          pic: laugh,
          label: "Round won",
        }
      : win < 0
        ? {
            pic: sad,
            label: "Missed pick",
          }
        : {
            pic: happy,
            label: "Ready",
          };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-400/65 bg-gradient-to-b from-amber-500/70 via-amber-400/70 to-amber-600/68 px-3 py-3 shadow-[0_16px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:px-5 sm:py-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-amber-900/18" />
      <div className="relative z-10 grid grid-cols-[auto,1fr,1fr] items-center gap-3 sm:gap-4">
        <div className="flex items-center justify-center">
          <img
            src={state.pic}
            alt={state.label}
            className="h-16 w-16 rounded-xl border border-amber-700/35 bg-white/95 object-contain p-1 shadow-md ring-2 ring-amber-900/20 sm:h-20 sm:w-20"
          />
        </div>

        <div className="rounded-xl border border-amber-200/45 bg-gradient-to-b from-amber-100/95 to-amber-200/95 px-3 py-2 text-center shadow-sm sm:py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
            Score
          </p>
          <p className="text-3xl font-black leading-none text-slate-900 sm:text-4xl">{cur}</p>
        </div>
        <div className="rounded-xl border border-amber-200/45 bg-gradient-to-b from-amber-100/95 to-amber-200/95 px-3 py-2 text-center shadow-sm sm:py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
            Best
          </p>
          <p className="text-3xl font-black leading-none text-slate-900 sm:text-4xl">{best}</p>
        </div>
      </div>
    </div>
  );
};
