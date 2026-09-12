import { api } from "../../../../../config/axios";

export async function getAllTasks(page) {
  try {
    let res = await api.get(`/tasks?page=${page}&limit=10`);
    return res.data.data;
  } catch (error) {
    throw error;
  }
}

export async function createTask(data) {
  try {
    const res = await api.post("/tasks/create", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const res = await api.delete(`/tasks/delete/${id}`);

    return res.data;
  } catch (error) {
    throw error;
  }
}
