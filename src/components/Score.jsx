import sad from "../assets/sad.webp";
import happy from "../assets/happy.webp";
import laugh from "../assets/laugh.webp";

export const Score = ({ cur, best, win }) => {
  let pic;
  if (win > 0) {
    pic = laugh;
  } else if (win < 0) {
    pic = sad;
  } else {
    pic = happy;
  }
  return (
    <div className="flex gap-4 w-full border justify-center h-fit pt-10">
      <div className="flex border items-center">
        <img src={pic} alt="Happy King" className="w-25 h-20 border items" />
      </div>
      <div className="flex flex-col gap-1 border justify-center bg-red-500 p-4">
        <h1>Score: {cur}</h1>
        <h1>High Score: {best}</h1>
      </div>
    </div>
  );
};
