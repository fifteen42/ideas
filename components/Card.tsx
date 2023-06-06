// "use client";
import React from "react";

type CardProps = {
  status: "countdown" | "archive" | "ship";
  countdownNumber?: number;
  title: string;
  description: string;
  tags: string[];
};

const Card: React.FC<CardProps> = ({
  status,
  countdownNumber,
  title,
  description,
  tags,
}) => {
  const getStatusContent = () => {
    switch (status) {
      case "countdown":
        return (
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
    }
  };

  return (
    <div className="w-80 h-40 p-4 border-2 border-slate-400 shadow-md rounded-md flex items-center justify-start">  
      <div className="w-14 ml-4 ">{getStatusContent()}</div>
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
