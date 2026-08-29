import { api } from "../../../../../config/axios";

export async function getAllEmployees({
  PageNumber,
  role,
  search,
  department,
  status,
}) {
  try {
    let res = await api.get(
      `/employee?page=${PageNumber}&limit=10&search=${search}&role=${role}&department=${department}&status=${status}`,
    );

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createEmployee(data) {
  try {
    let res = await api.post("/employee/create", data);
    console.log(res.data.data);

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
