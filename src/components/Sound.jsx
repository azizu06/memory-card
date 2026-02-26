import { Volume2, VolumeOff } from "lucide-react";

export const Sound = ({ soundOn }) => {
  return (
    <div className="fixed top-4 right-4 z-[1000]">
      {soundOn ? <Volume2 /> : <VolumeOff />}
    </div>
  );
};
