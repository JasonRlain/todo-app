export async function TaskStatus(id: number) {
  try {
    const response = await fetch(
      `https://wayi.league-funny.com/api/task/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
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
