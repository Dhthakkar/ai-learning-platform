"use client";

import { useState } from "react";
import course from "../data/course.json";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState(
    course.modules[0].topics[0]
  );

  return (
    <div className="flex h-screen">
      
      <Sidebar
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">
          {selectedTopic.title}
        </h1>

        <p className="whitespace-pre-line text-gray-300 leading-7">
          {selectedTopic.content}
        </p>
      </div>

    </div>
  );
}