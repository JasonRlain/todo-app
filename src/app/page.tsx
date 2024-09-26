"use client";
import { useRouter } from "next/navigation";

import { useGetTask } from "./api/useGetTask";

import { useApiParmsStore } from "./state/apiParms";

import { TaskSchema } from "./types/task";

import TablePagination from "./components/TablePagination";
import Card from "./components/Card";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default function Home() {
  const page = useApiParmsStore((state) => state.page);
  const type = useApiParmsStore((state) => state.type);
  const setType = useApiParmsStore((state) => state.updateType);

  const router = useRouter();
  const { data: task_data, isLoading } = useGetTask(page, type);
  console.log(task_data);
  if (isLoading) {
    return <div>isLoading</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-400">
      <h1 className="text-3xl mb-4">TODO APP</h1>
      <div className="flex gap-3">
        <button
          onClick={() => router.push("/addTask")}
          className="bg-blue-500 text-white rounded px-4"
        >
          ADD TASK
        </button>
        <select
          // defaultValue={"all"}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="uncompleted">SHOW TODO</option>
          <option value="all">SHOW ALL</option>
        </select>
      </div>

      <div className="container mx-auto p-4 h-3/4">
        <div className=" flex flex-col items-center gap-3 overflow-y-auto h-4/5">
          {task_data?.data.map((task: TaskSchema) => {
            return <Card key={task.id} task={task} />;
          })}
        </div>
        <TablePagination total={task_data?.total ?? 0} />
      </div>
    </div>
  );
}
