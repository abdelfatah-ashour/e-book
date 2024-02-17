import filled from "../assets/svg/Star.svg";
import outline from "../assets/svg/StarOutlineRounded.svg";

export default function Stars({
  stars,
  counts,
}: {
  stars: number;
  counts: number;
}) {
  return (
    <div className="flex flex-nowrap gap-1 items-center">
      <div className="flex flex-nowrap gap-1">
        <img src={stars >= 1 ? filled : outline} className="w-6 h-6" />
        <img src={stars >= 2 ? filled : outline} className="w-6 h-6" />
        <img src={stars >= 3 ? filled : outline} className="w-6 h-6" />
        <img src={stars >= 4 ? filled : outline} className="w-6 h-6" />
        <img src={stars >= 5 ? filled : outline} className="w-6 h-6" />
      </div>
      <span>{counts}</span>
    </div>
  );
}
