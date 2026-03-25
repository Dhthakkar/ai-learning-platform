"use client";

import course from "@/data/course.json";

export default function Home() {
  const firstTopic = course.modules[0].topics[0];

  return (
    <div className="p-10 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">
        {firstTopic.title}
      </h1>

      <p className="whitespace-pre-line text-gray-300 leading-7">
        {firstTopic.content}
      </p>
    </div>
  );
}