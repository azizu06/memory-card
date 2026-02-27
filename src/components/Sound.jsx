import { Volume2, VolumeOff } from "lucide-react";

export const Sound = ({ sound, setSound }) => {
  return (
    <div className="fixed right-4 top-4 z-[1000]">
      <button
        className="group relative grid h-12 w-12 place-items-center rounded-full border border-amber-200/45 bg-black/45 p-2 text-amber-100 shadow-lg backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-black/70 hover:text-white active:scale-95"
        aria-label={sound ? "Mute music" : "Enable music"}
        onClick={() => setSound((prev) => !prev)}
      >
        {sound ? <Volume2 size={24} strokeWidth={2.25} /> : <VolumeOff size={24} strokeWidth={2.25} />}
        <span className="pointer-events-none absolute -inset-0.5 -z-10 rounded-full bg-amber-300/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    </div>
  );
};
