import { Volume2, VolumeOff } from "lucide-react";

export const Sound = ({ sound, setSound }) => {
  return (
    <div className="fixed top-4 right-4 border z-[1000]">
      <button
        className="p-3 rounded-full"
        onClick={() => setSound((prev) => !prev)}
      >
        {sound ? <Volume2 size={32} /> : <VolumeOff size={32} />}
      </button>
    </div>
  );
};
