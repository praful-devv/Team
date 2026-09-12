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
console.log(data);

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateEmployee(empid, data) {
  try {
    let res = await api.patch(`/employee/update/${empid}`, data);

    return res.data.data
  } catch (error) {
    console.log(error);
  }
}
export async function deleteEmployee(empid) {
  try {
    let res = await api.delete(`/employee/delete/${empid}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
}


