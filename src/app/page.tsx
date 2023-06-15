"use client";
import { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import axios from "axios";
import { serverUrl } from "@/config/server";

export default function Home() {
  // modal open/close
  const [open, setOpen] = useState(false);
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [ideaTags, setIdeaTags] = useState("");
  const handleToggle = () => setOpen((prev) => !prev);
  const [isLoading, setIsLoading] = useState(false);

  type CardData = {
    id?: string;
    status: "countdown" | "archive" | "ship" | "ready";
    countdownNumber?: number;
    title: string;
    description: string;
    tags: string[];
  };

  const [cardsData, setCardsData] = useState<CardData[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${serverUrl}/ideas`);
      const data = response.data;

      const modifiedData = data.map((item: any) => {
        if (item.status === "countdown") {
          const createdAtDate: number = new Date(
            item.createdAt._seconds * 1000
          ).getTime();
          const currentDate: number = new Date().getTime();
          const timeDiff = Math.floor(
            (currentDate - createdAtDate) / (1000 * 60 * 60 * 24)
          );
          const remainingDays = 10 - timeDiff;

          if (remainingDays <= 0) {
            item.status = "ready";
          }

          item.days = remainingDays;
        }

        return item;
      });

      const transformedData: CardData[] = modifiedData.map((item: any) => {
        return {
          id: item.id,
          status: item.status,
          countdownNumber: item.countdownNumber,
          title: item.title,
          description: item.description,
          tags: item.tags,
        };
      });

      setCardsData(transformedData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCreateIdea = async () => {
    try {
      setIsLoading(true);

      const ideaData = {
        title: ideaTitle,
        description: ideaDescription,
        tags: ideaTags.split(/[,，]\s*/).map((tag) => tag.trim()),
      };

      await axios.post(`${serverUrl}/idea`, ideaData);

      // 清空输入框和关闭模态框
      setIdeaTitle("");
      setIdeaDescription("");
      setIdeaTags("");

      // 重新获取数据
      setTimeout(async () => {
        await fetchData();
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24">
      <header className="flex items-center justify-center mb-4">
        <h1 className="text-5xl font-bold text-center text-fat-ideas mr-4">
          Fat Ideas
        </h1>
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
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
          />
          <textarea
            className="textarea mb-4"
            placeholder="Description"
            rows={4}
            value={ideaDescription}
            onChange={(e) => setIdeaDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            className="input mb-4"
            placeholder="#tags: comma separated"
            value={ideaTags}
            onChange={(e) => setIdeaTags(e.target.value)}
          />
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <button
              className="btn text-white yexy bg-fat-ideas hover:bg-fat-ideas mt-8"
              onClick={handleCreateIdea}
            >
              Create
            </button>
          )}
        </div>
      </Modal>

      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-3 mt-12">
        {cardsData.map((card, index) => (
          <Card
            onUpdateSuccess={fetchData}
            id={card.id || ""}
            key={index}
            status={card.status}
            countdownNumber={card.countdownNumber}
            title={card.title}
            description={card.description}
            tags={card.tags}
          />
        ))}
      </div>

      <button
        className="fixed bottom-4 right-4 bg-fat-ideas text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-gray-800"
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
