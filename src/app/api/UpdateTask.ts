interface Task {
  name: string;
  description: string;
  updated_at: string;
}

export async function UpdateTask(id: number, task: Task) {
  try {
    const response = await fetch(
      `https://wayi.league-funny.com/api/task/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();
    console.log("成功:", data);
  } catch (error) {
    console.error("錯誤:", error);
  }
}
