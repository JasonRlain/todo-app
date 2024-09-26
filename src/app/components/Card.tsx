"use client";
import React from "react";
import DropDown from "./DropDown";
import dayjs from "dayjs";
import { TaskSchema } from "../types/task";

function timeStampConvert(timestamp: string): string {
  return dayjs(timestamp).format("YYYY-MM-DD");
}
const Card: React.FC<{ task: TaskSchema }> = ({ task }) => {
  return (
    <div className="container flex gap-5 items-center max-w-screen-lg border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500  xl:p-7  bg-slate-50">
      {task.is_completed ? (
        <div className="min-w-[36px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#4F46E5"
          >
            <path d="M422-297.33 704.67-580l-49.34-48.67L422-395.33l-118-118-48.67 48.66L422-297.33ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
          </svg>
        </div>
      ) : (
        <div className="min-w-[36px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#999999"
          >
            <path d="M480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z" />
          </svg>
        </div>
      )}

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
            {task.name}
          </div>
          <p className="text-xs font-normal text-gray-500 transition-all duration-500 leading-5 ">
            {timeStampConvert(task.updated_at)}
          </p>
        </div>

        <p className="sm:text-sm md:text-m lg:text-l xl:text-xl font-normal text-gray-500 transition-all duration-500 leading-5 ">
          {task.description}
        </p>
        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
          create at {timeStampConvert(task.created_at)}
        </p>
      </div>
      <div className="min-w-[36px]">
        <DropDown id={task.id} status={task.is_completed} />
      </div>
    </div>
  );
};

export default Card;
