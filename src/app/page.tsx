"use client";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Modal from "../../components/Modal";

export default function Home() {
  // modal open/close
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);

  type CardData = {
    status: "countdown" | "archive" | "ship";
    countdownNumber?: number;
    title: string;
    description: string;
    tags: string[];
  };

  const cardsData: CardData[] = [
    {
      status: "countdown",
      countdownNumber: 5,
      title: "Card Title 1",
      description: "This is a card description. It can be multiline.",
      tags: ["tag1", "tag2", "tag3"],
    },
    {
      status: "countdown",
      countdownNumber: 3,
      title: "Card Title 2",
      description: "Another card description. This is also multiline.",
      tags: ["tag4", "tag5"],
    },
    {
      status: "archive",
      title: "Card Title 3",
      description: "This card is archived.",
      tags: ["tag6"],
    },
    {
      status: "ship",
      title: "Card Title 4",
      description: "This card is shipped.",
      tags: ["tag1", "tag7", "tag8"],
    },
    {
      status: "countdown",
      countdownNumber: 7,
      title: "Card Title 5",
      description: "This card has a countdown of 7.",
      tags: ["tag2", "tag8"],
    },
    {
      status: "archive",
      title: "Card Title 6",
      description:
        "Another archived card.Another archived card. Another archived card.Another archived card.",
      tags: ["tag9", "tag10"],
    },
    {
      status: "ship",
      title: "Card Title 7",
      description: "This card is also shipped.",
      tags: ["tag5", "tag10"],
    },
    {
      status: "countdown",
      countdownNumber: 1,
      title: "Card Title 8",
      description: "This card has a countdown of 1.",
      tags: ["tag4", "tag7"],
    },
    {
      status: "archive",
      title: "Card Title 9",
      description: "This is the last card, and it is archived.",
      tags: ["tag1", "tag6", "tag8"],
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24">
      <header className="flex items-center justify-center mb-4">
        <h1 className="text-5xl font-bold text-center text-fat-ideas mr-4">
          Fat Ideas
        </h1>
        {/* <button
          className="bg-fat-ideas text-white px-4 py-2 rounded text-4xl"
          onClick={handleToggle}
        >
          New
        </button> */}
      </header>
      <Modal open={open}>
        <div className="card w-80 h-96 p-6 bg-white shadow-lg rounded-lg relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={handleToggle}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <input
            type="text"
            className="input mb-4 mt-4"
            placeholder="Idea Title"
          />
          <textarea
            className="textarea mb-4"
            placeholder="Description"
            rows={4}
          ></textarea>
          <input type="text" className="input mb-4" placeholder="#tags" />
          <button className="btn text-white yexy bg-fat-ideas hover:bg-fat-ideas mt-8">
            Create
          </button>
        </div>
      </Modal>

      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 mt-12">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            status={card.status}
            countdownNumber={card.countdownNumber}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </div>

      {/* <div className="w-80 h-32 p-4 border-2 border-slate-400 shadow-md rounded-md flex items-center justify-start mt-9" >
        <div className="w-14 ml-4 ">
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
              9
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start ml-3">
            <h3 className="font-semibold">{"试试呗"}</h3>
            <p className="text-sm text-gray-600 w-48 line-clamp-2">{"试试呗,试试呗,试试呗,试试呗,试试呗,试试呗,试试呗,试试呗"}</p>
            <div className="space-x-2 space-y-2 mt-2">
              {["试试","就","试试"].map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
                >
                  #{tag}{" "}
                </span>
              ))}
          </div>
        </div>
      </div> */}
      <button
        className="fixed bottom-4 right-4 bg-fat-ideas text-white rounded-full w-14 h-14 flex items-center justify-center"
        onClick={handleToggle}
      >
        <svg
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12h14"></path>
        </svg>
      </button>
    </main>
  );
}
