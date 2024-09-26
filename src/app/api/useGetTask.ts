import { fetcher } from "./fetcher";
import useSWR from "swr";
import { TaskSchema } from "../types/task";

interface ResponseInfo {
  status: string;
  total: number;
  data: TaskSchema[];
}

export function useGetTask(page: number, type: string) {
  const { data, error, isLoading } = useSWR<ResponseInfo>(
    `https://wayi.league-funny.com/api/task?page=${page}&type=${type}`,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );
  return {
    data,
    isLoading,
    error,
  };
}
