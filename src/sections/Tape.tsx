import StartIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Robust",
  "Search Optimized",
  "Fast",
  "Usable",
  "Reliable",
  "Efficient",
  "Dynamic",
  "Concurrent",
  "Modular",
  "High Availability",
  "Extensible",
  "Data-Driven",
  "Asynchronous",
  "Innovative",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:44s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, idx) => (
                  <div key={idx} className="inline-flex items-center gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StartIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
