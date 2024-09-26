import { Fetcher } from "swr";
import { TaskSchema } from "../types/task";

interface ResponseInfo {
  status: string;
  total: number;
  data: TaskSchema[];
}
export const fetcher = async (url: string): Promise<ResponseInfo> =>
  fetch(url).then((res) => res.json());
