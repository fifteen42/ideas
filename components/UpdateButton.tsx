import React, { useState } from "react";
import axios from "axios";
import { serverUrl } from "@/config/server";
import { on } from "events";

type UpdateButtonProps = {
  ideaId: string;
  onUpdateSuccess: () => void;
};

const UpdateButton: React.FC<UpdateButtonProps> = ({
  ideaId,
  onUpdateSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (newStatus: "ship" | "archive") => {
    setLoading(true);
    try {
      await axios.put(`${serverUrl}/idea/${ideaId}`, {
        status: newStatus,
      });
      onUpdateSuccess();
      console.log("Idea updated successfully");
      onUpdateSuccess();
    } catch (error: any) {
      console.error("Error updating idea:", error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col space-y-2">
      <button
        className={`w-14 h-8 py-1 flex text-sm items-center justify-center border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleUpdate("ship")}
        disabled={loading}
      >
        {loading ? "Loading..." : "🚀"}
      </button>
      <button
        className={`w-14 h-8 py-1 flex text-sm items-center justify-center border-2 border-gray-600 hover:bg-gray-600 rounded-lg ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handleUpdate("archive")}
        disabled={loading}
      >
        {loading ? "Loading..." : "📦"}
      </button>
    </div>
  );
};

export default UpdateButton;
