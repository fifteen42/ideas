// "use client";
import React from "react";
import Countdown from "./Countdown";
import UpdateButton from "./UpdateButton";

type CardProps = {
  id: string;
  status: "countdown" | "archive" | "ship" | "ready";
  countdownNumber?: number;
  title: string;
  description: string;
  tags: string[];
  onUpdateSuccess: () => void;
};

const Card: React.FC<CardProps> = ({
  id,
  status,
  countdownNumber,
  title,
  description,
  tags,
  onUpdateSuccess,
}) => {
  const getStatusContent = () => {
    switch (status) {
      case "countdown":
        return <Countdown countdownNumber={countdownNumber || 10}></Countdown>;
      case "archive":
        return (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center bg-gray-400"
            style={{
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: "#808080",
              borderStyle: "solid",
            }}
          >
            📦
          </div>
        );
      case "ship":
        return (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: "#f2c57c",
              borderStyle: "solid",
            }}
          >
            🚀
          </div>
        );
      case "ready":
        return (
          <UpdateButton
            ideaId={id}
            onUpdateSuccess={onUpdateSuccess}
          ></UpdateButton>
        );
    }
  };

  return (
    <div className="w-80 h-40 p-4 border-2 border-slate-400 shadow-md rounded-md flex items-center justify-start">
      <div className="w-14 ml- ">{getStatusContent()}</div>
      <div className="w-full flex flex-col justify-between ml-3 items-start">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="space-x-2 space-y-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
            >
              {/* add spaces behind tags and bold tags */}#{tag}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
