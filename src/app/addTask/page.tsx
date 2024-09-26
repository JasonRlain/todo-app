"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { AddTask } from "../api/AddTask";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function Page() {
  const [inputName, setInputName] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const addTask = () => {
    // need enter
    if (inputName.trim() === "") {
      setError("任務名稱為必填！");
      return;
    }
    const newTask = {
      name: inputName,
      description: inputDescription,
      created_at: dayjs.utc().format(),
      updated_at: dayjs.utc().format(),
      is_completed: false,
    };
    AddTask(newTask);
    setInputName("");
    setInputDescription("");
    setError("");
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3 min-h-screen bg-white">
      <div className="fixed top-3 left-3 text-4xl">
        <Link href="/">{"BACK"}</Link>
      </div>
      <h1 className="text-5xl mb-4">ADD TASK</h1>
      <input
        type="text"
        maxLength={10}
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        className="border rounded p-2 mr-2 w-[50%]"
        placeholder="任務名稱"
      />
      <textarea
        rows={2}
        maxLength={30}
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
        className="border rounded p-2 mr-2 w-[50%]"
        placeholder="任務描述"
      />
      <button onClick={addTask} className="bg-blue-500 text-white rounded px-4">
        新增
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
