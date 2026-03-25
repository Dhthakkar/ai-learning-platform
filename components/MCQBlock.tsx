"use client";

import { useState } from "react";

export default function MCQBlock({ questionData }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (i: number) => {
    if (selected.includes(i)) {
      setSelected(selected.filter((x) => x !== i));
    } else {
      setSelected([...selected, i]);
    }
  };

  return (
    <div className="mt-8 p-5 bg-gray-900 rounded">
      <p className="mb-3">{questionData.question}</p>

      {questionData.options.map((opt, i) => {
        const isSelected = selected.includes(i);

        let style = "bg-gray-800";
        if (submitted) {
          if (opt.correct) style = "bg-green-700";
          else if (isSelected) style = "bg-red-700";
        }

        return (
          <div
            key={i}
            onClick={() => !submitted && toggle(i)}
            className={`p-2 mt-2 cursor-pointer rounded ${style}`}
          >
            {opt.text}
          </div>
        );
      })}

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          className="mt-4 bg-blue-600 px-3 py-1 rounded"
        >
          Submit
        </button>
      )}

      {submitted && (
        <p className="mt-3 text-sm text-gray-300">
          {questionData.explanation}
        </p>
      )}
    </div>
  );
}
