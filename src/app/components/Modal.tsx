"use client";
import React, { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import { UpdateTask } from "../api/UpdateTask";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  id: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, id }) => {
  const [inputName, setInputName] = useState<string>("");
  const [inputDescription, setInputDescription] = useState<string>("");
  const [error, setError] = useState<string>("");
  async function update() {
    if (inputName.trim() === "") {
      setError("任務名稱為必填！");
      return;
    }
    const task = {
      name: inputName,
      description: inputDescription,
      updated_at: dayjs.utc().format(),
    };
    setInputName("");
    setInputDescription("");
    setError("");
    UpdateTask(id, task);
    closeModal();
  }
  return (
    <div className="w-full relative">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="sm:max-w-lg w-full m-5 sm:mx-auto transition-all duration-500 ease-out">
            <div className="flex flex-col bg-white rounded-2xl py-4 px-5">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h4 className="text-sm text-gray-900 font-medium">edit task</h4>
                <button onClick={closeModal} className="cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427"
                      stroke="black"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto py-3 min-h-[100px]">
                <input
                  type="text"
                  maxLength={10}
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="border rounded mb-3 w-[100%]"
                  placeholder="任務名稱"
                />
                <textarea
                  rows={2}
                  maxLength={30}
                  value={inputDescription}
                  onChange={(e) => setInputDescription(e.target.value)}
                  className="border rounded w-[100%]"
                  placeholder="任務描述"
                />
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
                <button
                  className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center transition-all duration-500 hover:bg-indigo-700"
                  onClick={update}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
