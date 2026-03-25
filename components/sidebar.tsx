"use client";

import course from "@/data/course.json";

export default function Sidebar({ selectedTopic, setSelectedTopic }) {
  return (
    <div className="w-64 bg-gray-900 p-4 h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Course</h2>

      {course.modules.map((module) => (
        <div key={module.id} className="mb-4">
          <p className="text-gray-400 mb-2">{module.title}</p>

          {module.topics.map((topic) => (
            <div
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className={`p-2 rounded cursor-pointer text-sm ${
                selectedTopic.id === topic.id
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {topic.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}