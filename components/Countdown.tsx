import React from "react";

type CountdownProps = {
  countdownNumber: number;
};

const Countdown: React.FC<CountdownProps> = ({ countdownNumber }) => {
  const getWavePosition = (): number => {
    const ratio = countdownNumber / 10;
    return Math.floor(ratio * 100);
  };

  return (
    // <div
    //   className="relative w-14 h-14 rounded-full overflow-hidden"
    //   style={{
    //     backgroundColor: "transparent",
    //     borderWidth: 2,
    //     borderColor: "#2bbc8a",
    //     borderStyle: "solid",
    //   }}
    // >
    //   <span
    //     className="absolute inset-0 w-full h-full bg-gradient-to-b from-green-200 via-green-300 to-green-200 animate-wave"
    //     style={{ top: `${getWavePosition()}%` }}
    //   ></span>
    //   <span className="absolute inset-0 flex items-center justify-center">
    //     <span className="text-2xl font-bold text-fat-ideas">
    //       {countdownNumber}
    //     </span>
    //   </span>
    // </div>
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center bg-fat-ideas"
      style={{
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#2bbc8a",
        borderStyle: "solid",
      }}
    >
      <span className="text-2xl font-bold text-fat-ideas">
        {countdownNumber}
      </span>
    </div>
  );
};

export default Countdown;
