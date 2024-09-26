"use client";
import React, { useState } from "react";
import { mutate } from "swr";
import { useApiParmsStore } from "../state/apiParms";

import Modal from "./Modal";

import { DeleteTask } from "../api/DeleteTask";
import { TaskStatus } from "../api/TaskStatus";

const DropDown: React.FC<{ id: number; status: boolean }> = ({
  id,
  status,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const page = useApiParmsStore((state) => state.page);
  const type = useApiParmsStore((state) => state.type);

  const closeModal = () => setIsModalOpen(false);

  const actions = [
    {
      name: "EDIT",
      onClick: () => {
        setIsModalOpen(true);
      },
    },
    {
      name: "DELETE",
      onClick: async (id: number) => {
        await DeleteTask(id);
        mutate(
          `https://wayi.league-funny.com/api/task?page=${page}&type=${type}`
        );
      },
    },
    {
      name: status ? "UNDONE" : "DONE",
      onClick: async (id: number) => {
        await TaskStatus(id);
        mutate(
          `https://wayi.league-funny.com/api/task?page=${page}&type=${type}`
        );
      },
    },
  ];
  return (
    <div className="dropdown relative inline-flex group">
      <button id="dropdown-hover" type="button">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.016 16.9896V17.0396"
            stroke="#6d5050"
            strokeWidth="null"
            strokeLinecap="round"
            className="my-path"
          ></path>
          <path
            d="M12.016 11.976V12.026"
            stroke="#6d5050"
            strokeWidth="null"
            strokeLinecap="round"
            className="my-path"
          ></path>
          <path
            d="M12.016 6.96228V7.01228"
            stroke="#6d5050"
            strokeWidth="null"
            strokeLinecap="round"
            className="my-path"
          ></path>
        </svg>
      </button>
      <div
        className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full right-3 w-50 hidden group-hover:block z-10"
        aria-labelledby="dropdown-hover"
      >
        <Modal isOpen={isModalOpen} closeModal={closeModal} id={id} />
        {actions.map((action) => {
          return (
            <ul
              className="py-2"
              key={action.name}
              onClick={() => action.onClick(id)}
            >
              <li>
                <a className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium">
                  {action.name}
                </a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
